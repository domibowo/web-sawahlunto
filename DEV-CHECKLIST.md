# DEV-CHECKLIST.md — sawahlunto.id

Checklist teknis level kode: struktur file, komponen, tipe data, dan kebutuhan tiap halaman. Pelengkap TODO.md (yang isinya linimasa sprint) — file ini fokus ke "apa yang harus dibangun", bukan "kapan".

## 1. Konfigurasi proyek
- [ ] `next.config.ts`: `output: 'export'`, `images: { unoptimized: true }` (wajib untuk static export, karena optimasi gambar on-demand Next.js tidak jalan tanpa server)
- [ ] Tailwind: tambahkan token warna custom di `tailwind.config` — terracotta, cream, charcoal, teal (sebagai `theme.extend.colors`)
- [ ] `next/font/google`: daftarkan font serif (judul) & sans-serif (isi), expose sebagai CSS variable + `fontFamily` Tailwind
- [ ] Setup i18n routing `app/[locale]/...` (next-intl atau middleware custom), locale: `id`, `en`
- [ ] Struktur folder data: `/data/*.ts` — satu file per section, isi field dwibahasa langsung di dalamnya (bukan file terpisah per locale)

## 2. Tipe data (TypeScript)
- [ ] `type Bilingual = { id: string; en: string }` — dipakai di semua field teks
- [ ] `type TimelineEvent = { slug: string; tahun: string; judul: Bilingual; ringkasan: Bilingual; detail: Bilingual; gambar: string }`
- [ ] `type WisataItem = { slug: string; nama: Bilingual; ringkasan: Bilingual; detail: Bilingual; infoPraktis?: { jamBuka: Bilingual; hargaTiket: Bilingual; tips: Bilingual }; gambar: string }`
- [ ] `type NavItem = { slug: string; label: Bilingual; icon: string }`
- [ ] `type MapHotspot = { id: string; x: number; y: number; label: Bilingual; href: string }`

## 3. Komponen bersama (`/components`)
- [ ] `<Navbar />` — hamburger + drawer di mobile, menu horizontal penuh di tablet/desktop; tandai link aktif; toggle bahasa ganti locale tanpa ganti path
- [ ] `<LanguageToggle />` — switch `/id/x` ↔ `/en/x`, path tetap sama
- [ ] `<Footer />` — kredit tim, ikon sosial media, link halaman kredit foto
- [ ] `<Breadcrumb items={{label, href}[]} />`
- [ ] `<HeroBanner size="lg" | "sm" image badge? title />` — reusable untuk Beranda (lg) & halaman konten (sm)
- [ ] `<NavCard icon label href />` — dipakai di grid Beranda
- [ ] `<CTAButton label href />`
- [ ] `<ImagePlaceholder />` — pengganti sementara foto asli, supaya tinggal swap nanti
- [ ] `<PrevNextNav prev? next? />` — dipakai di halaman detail Sejarah

## 4. Halaman Beranda — `app/[locale]/page.tsx`
- [ ] Hero (badge "UNESCO World Heritage" + headline tagline)
- [ ] Paragraf intro
- [ ] Grid `<NavCard />`: 2 kolom mobile → 3 kolom tablet/desktop, 6 item (Sejarah, Budaya, Kuliner, Wisata, Inovasi, Peta)
- [ ] CTA ke `/sejarah`

## 5. Halaman Sejarah
- [ ] `data/sejarah.ts` — array 7 `TimelineEvent` (draf konten ID sudah ada, EN perlu ditulis)
- [ ] `app/[locale]/sejarah/page.tsx`
  - [ ] `<Timeline />`: layout vertikal compact di mobile, dua kolom (gambar/teks) di tablet+
  - [ ] Tiap item → link ke `/sejarah/[slug]`
- [ ] `app/[locale]/sejarah/[slug]/page.tsx`
  - [ ] `generateStaticParams()` — looping semua slug × semua locale
  - [ ] Tombol kembali ke `/sejarah` (bukan ke beranda)
  - [ ] `<Breadcrumb />`, hero, isi `detail`, `<PrevNextNav />`

## 6. Halaman Budaya & tradisi
- [ ] `data/budaya.ts` — item: Songket Silungkang, festival SISSCa, multietnis pekerja tambang
- [ ] `app/[locale]/budaya/page.tsx` — layout "halaman konten" standar (hero kecil + blok gambar/teks bergantian)

## 7. Halaman Kuliner khas
- [ ] `data/kuliner.ts` — tiap item: nama, deskripsi, gambar (Dendeng Batokok, kopi lokal, dst.)
- [ ] `app/[locale]/kuliner/page.tsx`

## 8. Halaman Destinasi wisata
- [ ] `data/wisata.ts` — 5 `WisataItem` (Lubang Mbah Soero, Museum Goedang Ransoem, Museum Kereta Api & Mak Itam, Danau Biru, Puncak Cemara), tiap item punya `ringkasan` (untuk index) & `detail` (untuk halaman tersendiri)
- [ ] `app/[locale]/wisata/page.tsx` — index: grid kartu (gambar + nama + ringkasan singkat), tiap kartu link ke `/wisata/[slug]`
- [ ] `app/[locale]/wisata/[slug]/page.tsx` — halaman detail per destinasi
  - [ ] `generateStaticParams()` dari `data/wisata.ts` × semua locale
  - [ ] Tombol kembali ke `/wisata` (bukan ke beranda)
  - [ ] Isi: narasi `detail` lengkap + blok info praktis (jam buka, harga tiket, tips berkunjung) — pembeda dari halaman Sejarah yang isinya murni naratif, karena pengunjung di sini biasanya sudah niat datang
  - [ ] `<PrevNextNav />` antar destinasi, konsisten dengan pola Sejarah

## 9. Halaman Inovasi & teknologi
- [ ] `data/inovasi.ts` — status UNESCO, narasi transformasi kota; opsional: catatan rencana reaktivasi tambang 2026 (keputusan editorial belum final)
- [ ] `app/[locale]/inovasi/page.tsx`

## 10. Halaman Peta kota
- [ ] Buat 1 ilustrasi peta statis (SVG, bukan foto satelit) dengan posisi titik lokasi
- [ ] `data/peta.ts` — array `MapHotspot` (koordinat x/y relatif terhadap SVG, label, link ke halaman/destinasi terkait)
- [ ] `app/[locale]/peta/page.tsx`
- [ ] `<PetaInteraktif />` — render SVG + titik yang bisa diklik/tap, munculkan tooltip/info singkat

## 11. PWA & offline
- [ ] `app/manifest.ts` — nama, ikon (beberapa ukuran), `theme_color`, `display: "standalone"`
- [ ] `public/sw.js` — service worker custom, strategi cache-first untuk semua aset & halaman yang sudah dikunjungi
- [ ] Registrasi service worker di root layout (`useEffect` sekali saat mount)
- [ ] `<InstallButton />` — tangkap `beforeinstallprompt`, simpan event, tampilkan tombol custom di Android/Chrome; deteksi iOS Safari → tampilkan instruksi manual "Tap Share → Add to Home Screen"

## 12. Responsif & aksesibilitas
- [ ] Audit semua komponen pakai breakpoint Tailwind konsisten (`sm:`, `md:`, `lg:`)
- [ ] Tap target tombol/link minimal 44px di mobile
- [ ] Semua `<img>`/placeholder punya `alt` dwibahasa
- [ ] Kontras teks-background minimal WCAG AA

## 13. SEO & metadata
- [ ] `generateMetadata()` per halaman (title + description per locale)
- [ ] `app/sitemap.ts` (otomatis dari daftar route + locale)
- [ ] `public/robots.txt`

## 14. Sebelum deploy final
- [ ] `next build` lokal tanpa error
- [ ] Cek folder `out/` — semua route (termasuk `/sejarah/[slug]` per locale) benar-benar tergenerate sebagai HTML statis
- [ ] Pastikan tidak ada API route/server action yang menyelip (harus 100% frontend, sesuai syarat lomba)