<!-- BEGIN:project-context -->
# Konteks project: sawahlunto.id

Situs promosi wisata kota Sawahlunto, Sumatera Barat untuk kompetisi "Nusantara Digital City" (Media Cloud Indonesia x PANDI). Tema: kota bekas tambang batu bara kolonial, kini Situs Warisan Dunia UNESCO (Ombilin Coal Mining Heritage, 2019). Tagline: "Dari kota tambang, menuju kota wisata digital".

## Tech stack
- Next.js (App Router) + TypeScript, static export (`output: 'export'`) — 100% frontend, tidak ada backend/API
- Tailwind CSS dengan token warna custom: terracotta (utama), krem (latar), charcoal (teks), teal (aksen)
- Font: serif untuk judul, sans-serif untuk isi, via `next/font/google`
- i18n: locale routing `app/[locale]/...` untuk Indonesia (`id`) & English (`en`)
- Deploy: Vercel, domain custom .id

## Struktur halaman
7 halaman, tiap halaman route sendiri (bukan one-page scroll, supaya refresh-safe):
- `/` — Beranda
- `/sejarah` (index timeline) + `/sejarah/[slug]` (detail per peristiwa)
- `/budaya` — Budaya & tradisi
- `/kuliner` — Kuliner khas
- `/wisata` (index) + `/wisata/[slug]` (detail per destinasi, dengan info praktis: jam buka, harga tiket, tips)
- `/inovasi` — Inovasi & teknologi
- `/peta` — peta ilustrasi custom (SVG + hotspot klik, BUKAN embed Google Maps, supaya tetap berfungsi offline)

Alur cerita (urutan baca yang disarankan, tiap halaman punya tombol "lanjut" ke halaman berikutnya):
Beranda → Sejarah → Budaya → Kuliner → Wisata → Inovasi → Peta

## Konvensi penting
- Semua field teks dwibahasa pakai tipe `{ id: string; en: string }`
- Data konten disimpan di `/data/*.ts`, satu file per section
- Semua gambar pakai placeholder dulu (foto asli belum tersedia)
- Responsive wajib: mobile-first, tapi tablet & desktop harus benar-benar disesuaikan (bukan cuma di-scale) — pakai breakpoint Tailwind dulu, baru conditional rendering kalau strukturnya memang harus beda (contoh: navbar hamburger vs horizontal)
- Situs akan punya mode offline (PWA: manifest + service worker custom cache-first) — jangan pakai layanan yang butuh koneksi live (misal embed peta live) untuk konten inti

## Referensi lengkap
- `TODO.md` — linimasa sprint (target fitur selesai: 10 Juli 2026, submit lomba: 20 Juli 2026)
- `DEV-CHECKLIST.md` — rincian teknis tiap halaman/komponen/tipe data
<!-- END:project-context -->