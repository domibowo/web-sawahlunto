// Konversi gambar sumber ke WebP untuk di-upload ke R2.
// Output: dist/r2-upload/ (jangan commit — tidak ikut ke Vercel)
// Setelah selesai, upload manual ke R2 bucket folder Sawahlunto/
//
// Prasyarat: npm install --save-dev sharp
// Jalankan:  node scripts/optimize-images.js
//
// Sumber gambar: letakkan di scripts/images-src/ (JPG/PNG/JPEG)

import { existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, basename, extname } from "node:path";

let sharp;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.error(
    "\n❌  sharp belum terinstall.\n" +
    "    Jalankan dulu:  npm install --save-dev sharp\n"
  );
  process.exit(1);
}

const SRC_DIR  = join(import.meta.dirname, "images-src");
const OUT_DIR  = join(import.meta.dirname, "..", "dist", "r2-upload");
const EXTS     = new Set([".webp", ".jpeg", ".png", ".webp"]);

// Batas ukuran panjang sisi terbesar per kategori
const HERO_MAX = 1600;
const STD_MAX  = 1000;

// File yang mengandung kata "hero" atau sesuai konvensi penamaan kamu
// dianggap hero (resize ke 1600px), sisanya ke 1000px.
function isHero(filename) {
  return /hero/i.test(filename);
}

if (!existsSync(SRC_DIR)) {
  mkdirSync(SRC_DIR, { recursive: true });
  console.log(`📁  Folder sumber dibuat: ${SRC_DIR}`);
  console.log("    Letakkan file gambar JPG/PNG di folder itu, lalu jalankan ulang.\n");
  process.exit(0);
}

mkdirSync(OUT_DIR, { recursive: true });

const files = readdirSync(SRC_DIR).filter((f) => {
  const ext = extname(f).toLowerCase();
  return EXTS.has(ext) && statSync(join(SRC_DIR, f)).isFile();
});

if (files.length === 0) {
  console.log(`ℹ️  Tidak ada gambar di ${SRC_DIR}`);
  process.exit(0);
}

console.log(`\n🖼️  Memproses ${files.length} file...\n`);

for (const file of files) {
  const src  = join(SRC_DIR, file);
  const name = basename(file, extname(file));
  const dest = join(OUT_DIR, `${name}.webp`);
  const maxPx = isHero(file) ? HERO_MAX : STD_MAX;

  await sharp(src)
    .resize({ width: maxPx, height: maxPx, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(dest);

  console.log(`  ✓  ${file}  →  dist/r2-upload/${name}.webp  (max ${maxPx}px)`);
}

console.log(`
✅  Selesai. ${files.length} file tersimpan di dist/r2-upload/

Langkah selanjutnya:
  1. Upload semua file dari dist/r2-upload/ ke R2 bucket, folder Sawahlunto/
  2. Referensi gambar di kode sudah pakai ekstensi .webp (tidak perlu ganti lagi)
  3. dist/r2-upload/ ada di .gitignore — tidak ikut ke Vercel

URL contoh: https://r2.kotague.id/Sawahlunto/9.webp
`);
