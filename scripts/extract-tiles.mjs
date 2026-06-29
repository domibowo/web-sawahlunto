// Ekstrak tile dari PMTiles ke file individual menggunakan pmtiles CLI
// Output: public/maps/tiles/{z}/{x}/{y}.mvt (tile data mentah/decoded)
import { spawnSync } from "child_process";
import { mkdirSync, writeFileSync } from "fs";
import zlib from "zlib";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pmtilesPath = resolve(__dirname, "../public/maps/sawahlunto.pmtiles");
const outDir = resolve(__dirname, "../public/maps/tiles");

const BOUNDS = { minLon: 100.75, minLat: -0.71, maxLon: 100.81, maxLat: -0.62 };
const MIN_ZOOM = 0, MAX_ZOOM = 14;

function lonLatToTile(lon, lat, z) {
  const n = 2 ** z;
  const x = Math.floor((lon + 180) / 360 * n);
  const latRad = lat * Math.PI / 180;
  const y = Math.floor((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2 * n);
  return { x: Math.max(0, Math.min(n - 1, x)), y: Math.max(0, Math.min(n - 1, y)) };
}

let count = 0, skipped = 0;

for (let z = MIN_ZOOM; z <= MAX_ZOOM; z++) {
  const min = lonLatToTile(BOUNDS.minLon, BOUNDS.maxLat, z);
  const max = lonLatToTile(BOUNDS.maxLon, BOUNDS.minLat, z);

  for (let x = min.x; x <= max.x; x++) {
    for (let y = min.y; y <= max.y; y++) {
      const result = spawnSync("pmtiles", ["tile", pmtilesPath, String(z), String(x), String(y)], {
        encoding: "buffer",
        stdio: ["ignore", "pipe", "pipe"],
      });

      if (result.status !== 0 || !result.stdout || result.stdout.length === 0) {
        skipped++;
        continue;
      }

      // pmtiles CLI prepends a 0x00 byte before the gzip stream;
      // use Z_SYNC_FLUSH to tolerate truncated gzip footer
      let tileData = result.stdout;
      let gzipStart = -1;
      if (tileData[0] === 0x1f && tileData[1] === 0x8b) gzipStart = 0;
      else if (tileData[1] === 0x1f && tileData[2] === 0x8b) gzipStart = 1;
      if (gzipStart >= 0) {
        tileData = zlib.gunzipSync(tileData.subarray(gzipStart), {
          finishFlush: zlib.constants.Z_SYNC_FLUSH,
        });
      }

      const tilePath = `${outDir}/${z}/${x}`;
      mkdirSync(tilePath, { recursive: true });
      writeFileSync(`${tilePath}/${y}.mvt`, tileData);
      count++;
    }
  }
  process.stdout.write(`z${z}: done\n`);
}

console.log(`\nSelesai: ${count} tile ditulis, ${skipped} tile kosong/tidak ada`);
