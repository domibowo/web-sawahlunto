# sawahlunto.id

Website kompetisi **Nusantara Digital City** (Media Cloud Indonesia x PANDI) — portal digital kota Sawahlunto, Sumatera Barat, untuk wisatawan lokal & mancanegara.

Sawahlunto adalah kota bekas tambang batu bara kolonial yang kini menjadi Situs Warisan Dunia UNESCO (Ombilin Coal Mining Heritage, 2019). Tagline situs: *"Dari kota tambang, menuju kota wisata digital."*

## Tech stack

- **Next.js** (App Router) + TypeScript, static export (`output: 'export'`) — 100% frontend, tanpa backend/API
- **Tailwind CSS** dengan token warna custom (terracotta, krem, charcoal, aksen teal)
- **i18n**: locale routing `app/[locale]/...` untuk Indonesia (`id`) & English (`en`)
- **PWA**: manifest + service worker custom (mode offline, cache-first)
- **Deploy**: Vercel, domain custom .id

## Menjalankan secara lokal

```bash
pnpm install
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Build untuk production

```bash
pnpm build
```

Output statis akan ada di folder `out/`, siap di-deploy ke Vercel atau hosting statis lain.

## Struktur halaman

| Route | Keterangan |
|---|---|
| `/` | Beranda |
| `/sejarah`, `/sejarah/[slug]` | Sejarah — index timeline + detail per peristiwa |
| `/budaya` | Budaya & tradisi |
| `/kuliner` | Kuliner khas |
| `/wisata`, `/wisata/[slug]` | Destinasi wisata — index + detail per destinasi |
| `/inovasi` | Inovasi & teknologi |
| `/peta` | Peta kota (ilustrasi custom, berfungsi offline) |
| `/sumber` | Sumber & referensi konten |

Alur baca yang disarankan: Beranda → Sejarah → Budaya → Kuliner → Wisata → Inovasi → Peta.

## Struktur folder

```
app/[locale]/      halaman per route (lihat tabel di atas)
data/               konten dwibahasa per section (*.ts)
components/         komponen bersama (Navbar, Footer, Timeline, dll.)
public/             aset statis, manifest PWA
```

## Dokumentasi tambahan

- [`AGENTS.md`](./AGENTS.md) — konteks project untuk AI coding agent (Claude Code)
- [`TODO.md`](./TODO.md) — linimasa sprint pengembangan
- [`DEV-CHECKLIST.md`](./DEV-CHECKLIST.md) — checklist teknis tiap halaman/komponen
- [`REFERENSI.md`](./REFERENSI.md) — sumber & referensi riset konten

## Kompetisi

- Penyelenggara: Media Cloud Indonesia x PANDI
- Tema: Nusantara Digital City
- Deadline pengumpulan: 20 Juli 2026