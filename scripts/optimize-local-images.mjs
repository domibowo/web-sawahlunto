// Rekompresi gambar lokal di public/images/ yang ukurannya >150 KiB.
// Menyimpan output ke tempat yang sama (overwrite).
// Prasyarat: sharp sudah terinstal (npm install --save-dev sharp)

import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname } from "path";

const IMAGE_DIR = new URL("../public/images", import.meta.url).pathname;
const TARGET_QUALITY = 75;
const SIZE_THRESHOLD = 150 * 1024; // 150 KiB

const files = await readdir(IMAGE_DIR);

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (![".webp", ".jpg", ".jpeg", ".png"].includes(ext)) continue;

  const filePath = join(IMAGE_DIR, file);
  const { size } = await stat(filePath);

  if (size < SIZE_THRESHOLD) {
    console.log(`skip  ${file} (${(size / 1024).toFixed(0)} KiB)`);
    continue;
  }

  const outputPath = filePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");

  try {
    const result = await sharp(filePath)
      .webp({ quality: TARGET_QUALITY, effort: 6 })
      .toBuffer();

    const { writeFile } = await import("fs/promises");
    await writeFile(outputPath, result);

    const saved = size - result.byteLength;
    console.log(
      `done  ${file} → ${(result.byteLength / 1024).toFixed(0)} KiB` +
        ` (saved ${(saved / 1024).toFixed(0)} KiB, -${((saved / size) * 100).toFixed(0)}%)`
    );
  } catch (err) {
    console.error(`ERR   ${file}: ${err.message}`);
  }
}

console.log("\nDone.");
