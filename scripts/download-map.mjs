/**
 * scripts/download-map.mjs
 *
 * Download dan extract subset PMTiles dari Protomaps untuk kota Sawahlunto.
 * Output: public/maps/sawahlunto.pmtiles
 *
 * Jalankan: node scripts/download-map.mjs
 *
 * Tidak butuh binary external — murni Node.js (fetch + zlib built-in).
 * Butuh Node.js ≥ 18 (native fetch) dan pmtiles npm package.
 */

import { PMTiles } from "pmtiles";
import { gzipSync } from "zlib";
import { writeFileSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dir = dirname(fileURLToPath(import.meta.url));

// ─── Konfigurasi ──────────────────────────────────────────────────────────────

// Cek build terbaru di https://docs.protomaps.com/basemaps/downloads
// Format YYYYMMDD — update jika mau refresh data peta
const BUILD_DATE = "20260624";
const SOURCE = `https://build.protomaps.com/${BUILD_DATE}.pmtiles`;
const OUT = resolve(__dir, "../public/maps/sawahlunto.pmtiles");

// Bounding box mencakup semua 6 titik wisata + margin ~2km
// [minLon, minLat, maxLon, maxLat]
const BBOX = [100.75, -0.71, 100.81, -0.62];
const MIN_ZOOM = 0;
const MAX_ZOOM = 14; // z14 cukup untuk tampilan detail kota

// ─── Tile math ────────────────────────────────────────────────────────────────

function lon2tile(lon, z) {
  return Math.floor((lon + 180) / 360 * 2 ** z);
}
function lat2tile(lat, z) {
  return Math.floor(
    (1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI)
    / 2 * 2 ** z
  );
}

// XYZ → Hilbert tile ID (PMTiles v3)
function zxyToTileId(z, x, y) {
  if (z === 0) return 0n;
  let acc = 0n;
  for (let i = 0; i < z; i++) acc += BigInt(4) ** BigInt(i);
  let bx = BigInt(x), by = BigInt(y);
  const n = BigInt(1) << BigInt(z);
  let d = 0n;
  for (let s = n >> 1n; s > 0n; s >>= 1n) {
    const rx = (bx & s) > 0n ? 1n : 0n;
    const ry = (by & s) > 0n ? 1n : 0n;
    d += s * s * ((3n * rx) ^ ry);
    if (ry === 0n) {
      if (rx === 1n) { bx = s - 1n - bx; by = s - 1n - by; }
      [bx, by] = [by, bx];
    }
  }
  return acc + d;
}

// ─── Varint encoding ─────────────────────────────────────────────────────────

function writeVarint(n) {
  const parts = [];
  let val = BigInt(n);
  do {
    let byte = Number(val & 0x7fn);
    val >>= 7n;
    if (val > 0n) byte |= 0x80;
    parts.push(byte);
  } while (val > 0n);
  return Buffer.from(parts);
}

// ─── PMTiles v3 directory builder ────────────────────────────────────────────

function buildDirectory(entries) {
  // entries must be sorted by tileId ascending
  const n = entries.length;
  const parts = [writeVarint(n)];

  // tileId deltas
  let lastId = 0n;
  for (const e of entries) {
    parts.push(writeVarint(e.tileId - lastId));
    lastId = e.tileId;
  }
  // runLengths (1 = single tile)
  for (const e of entries) parts.push(writeVarint(e.runLength));
  // lengths
  for (const e of entries) parts.push(writeVarint(e.length));
  // offsets: first is literal, rest 0 if clustered (each tile immediately follows prev)
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      parts.push(writeVarint(entries[0].offset));
    } else {
      const prev = entries[i - 1];
      const expected = prev.offset + prev.length;
      // 0 = clustered (this tile follows directly after previous)
      parts.push(writeVarint(entries[i].offset === expected ? 0 : entries[i].offset));
    }
  }
  return Buffer.concat(parts);
}

// ─── PMTiles v3 header writer ────────────────────────────────────────────────

function writeHeader({
  rootDirOffset, rootDirLength,
  metaOffset, metaLength,
  leafDirsOffset, leafDirsLength,
  tileDataOffset, tileDataLength,
  numAddressedTiles, numTileEntries, numTileContents,
  tileCompression, tileType,
  minZoom, maxZoom,
}) {
  const buf = Buffer.alloc(127);
  buf.write("PMTiles", 0, "ascii");
  buf[7] = 3; // version
  const view = new DataView(buf.buffer);
  const w64 = (off, val) => view.setBigUint64(off, BigInt(val), true);
  w64(8,  rootDirOffset);    w64(16, rootDirLength);
  w64(24, metaOffset);       w64(32, metaLength);
  w64(40, leafDirsOffset);   w64(48, leafDirsLength);
  w64(56, tileDataOffset);   w64(64, tileDataLength);
  w64(72, numAddressedTiles); w64(80, numTileEntries); w64(88, numTileContents);
  buf[96] = 1; // clustered = true
  buf[97] = 1; // internal_compression = none (dir stored uncompressed)
  buf[98] = tileCompression;
  buf[99] = tileType;
  buf[100] = minZoom;
  buf[101] = maxZoom;
  // bbox
  view.setInt32(102, Math.round(BBOX[0] * 1e7), true);
  view.setInt32(106, Math.round(BBOX[1] * 1e7), true);
  view.setInt32(110, Math.round(BBOX[2] * 1e7), true);
  view.setInt32(114, Math.round(BBOX[3] * 1e7), true);
  // center
  buf[118] = 13; // center zoom
  view.setInt32(119, Math.round(100.7739 * 1e7), true);
  view.setInt32(123, Math.round(-0.6777 * 1e7), true);
  return buf;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`📥 Source : ${SOURCE}`);
  console.log(`📦 Output : ${OUT}`);
  console.log(`🗺  BBox  : [${BBOX.join(", ")}] z${MIN_ZOOM}–${MAX_ZOOM}\n`);

  const p = new PMTiles(SOURCE);
  const header = await p.getHeader();
  console.log(`✓ Header: tileType=${header.tileType} tileComp=${header.tileCompression} zoom=${header.minZoom}-${header.maxZoom}`);

  // Fetch all tiles in bbox
  const tiles = []; // {tileId, z, x, y, data: Buffer}
  for (let z = MIN_ZOOM; z <= MAX_ZOOM; z++) {
    const x0 = lon2tile(BBOX[0], z), x1 = lon2tile(BBOX[2], z);
    const y0 = lat2tile(BBOX[3], z), y1 = lat2tile(BBOX[1], z);
    for (let x = x0; x <= x1; x++) {
      for (let y = y0; y <= y1; y++) {
        const tile = await p.getZxy(z, x, y);
        if (tile) {
          // getZxy() returns decompressed tile data — re-compress with gzip for storage
          tiles.push({ tileId: zxyToTileId(z, x, y), z, x, y, data: gzipSync(Buffer.from(tile.data)) });
        }
      }
    }
    process.stdout.write(`  z${z.toString().padStart(2)}: ${tiles.length} tiles so far\n`);
  }
  console.log(`\n✓ Total tiles: ${tiles.length} | ${(tiles.reduce((s,t)=>s+t.data.length,0)/1024).toFixed(1)} KB data\n`);

  // Sort by tileId (Hilbert order = clustered)
  tiles.sort((a, b) => (a.tileId < b.tileId ? -1 : a.tileId > b.tileId ? 1 : 0));

  // Build tile data section + directory
  let cumOffset = 0;
  const dirEntries = tiles.map(({ tileId, data }) => {
    const e = { tileId, runLength: 1, length: data.length, offset: cumOffset };
    cumOffset += data.length;
    return e;
  });
  const tileDataBuf = Buffer.concat(tiles.map(t => t.data));
  const dirBuf = buildDirectory(dirEntries);

  // Metadata: copy from source (already gzip-compressed in the source, re-fetch raw)
  // We store a minimal JSON metadata instead to keep it simple
  const metaBuf = Buffer.from(JSON.stringify({
    name: "Sawahlunto",
    description: "Peta kota Sawahlunto — subset dari Protomaps build " + BUILD_DATE,
    attribution: '<a href="https://protomaps.com">Protomaps</a> © <a href="https://openstreetmap.org">OpenStreetMap</a>',
    type: "overlay",
    vector_layers: (await p.getMetadata()).vector_layers ?? [],
  }));

  // Layout: header(127) | rootDir | metadata | tileData
  const HEADER_LEN = 127;
  const rootDirOffset = HEADER_LEN;
  const metaOffset = rootDirOffset + dirBuf.length;
  const leafDirsOffset = metaOffset + metaBuf.length; // no leaf dirs
  const tileDataOffset = leafDirsOffset;

  const headerBuf = writeHeader({
    rootDirOffset, rootDirLength: dirBuf.length,
    metaOffset, metaLength: metaBuf.length,
    leafDirsOffset, leafDirsLength: 0,
    tileDataOffset, tileDataLength: tileDataBuf.length,
    numAddressedTiles: tiles.length,
    numTileEntries: tiles.length,
    numTileContents: tiles.length,
    tileCompression: 2, // gzip — getZxy() decompresses, we re-compress with gzipSync above
    tileType: header.tileType,
    minZoom: MIN_ZOOM, maxZoom: MAX_ZOOM,
  });

  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, Buffer.concat([headerBuf, dirBuf, metaBuf, tileDataBuf]));

  const totalSize = headerBuf.length + dirBuf.length + metaBuf.length + tileDataBuf.length;
  console.log(`✅ Selesai!`);
  console.log(`   Ukuran file : ${(totalSize / 1024).toFixed(1)} KB`);
  console.log(`   Header      : ${headerBuf.length} B`);
  console.log(`   Directory   : ${dirBuf.length} B`);
  console.log(`   Tile data   : ${(tileDataBuf.length/1024).toFixed(1)} KB`);
  console.log(`\n   Path: ${OUT}`);
}

main().catch(err => { console.error("❌", err.message); process.exit(1); });
