# TODO — sawahlunto.id (Kompetisi Nusantara Digital City)

Target fitur selesai: **10 Juli 2026**. Sisa waktu 11–20 Juli khusus untuk review & perbaikan, bukan fitur baru.

## Linimasa resmi panitia (jangan dilewatkan)
- **30 Juni 2026** — periode pendaftaran & pengerjaan website resmi ditutup
- **10 Juli 2026** — technical meeting via WhatsApp
- **20 Juli 2026** — deadline pengumpulan website final

---

## Sprint 0 — Setup & Fondasi (19–21 Juni)
- [x] Finalisasi nama domain (`kotague.id`)
- [x] Daftar kompetisi & domain di mediacloud.id (dapatkan domain .id + akses Sitejet)
- [ ] Follow 4 akun IG panitia (@mediacloudindonesia, @pandi_id, @domaindotid, @dotidacademy) — syarat administrasi wajib
- [x] Setup project Vercel, hubungkan ke repo GitHub
- [x] Arahkan DNS domain .id ke Vercel
- [ ] Setup struktur folder i18n (`app/[locale]/...`)
- [ ] Setup Tailwind: token warna (terracotta, krem, charcoal, aksen teal)
- [ ] Setup font lewat `next/font/google` (serif untuk judul, sans-serif untuk isi)
- [x] Mulai riset foto: cek kategori "Sawahlunto" di Wikimedia Commons
- [ ] Kirim pesan ke Dinas Pariwisata Sawahlunto minta izin pakai foto resmi (paralel, berjalan terus sampai Sprint 3)

## Sprint 1 — Komponen Inti + Beranda + Sejarah (22–26 Juni)
- [ ] Layout bersama: navbar responsive (hamburger di mobile, menu horizontal di tablet/desktop), toggle bahasa ID/EN, footer
- [ ] Halaman Beranda: hero, intro, grid 6 kartu navigasi, CTA, footer
- [ ] Halaman Sejarah (index): timeline 7 peristiwa
- [ ] Halaman Sejarah (detail): template + 7 sub-halaman peristiwa, navigasi peristiwa sebelumnya/selanjutnya
- [ ] Lengkapi data dwibahasa Beranda & Sejarah (ID sudah ada draf, EN perlu diterjemahkan)
- [ ] Deploy awal ke Vercel, pastikan domain sudah live (checkpoint sebelum 30 Juni)

## Sprint 2 — Budaya, Kuliner, Wisata (27 Juni – 1 Juli)
- [ ] Riset & tulis ulang konten Budaya & tradisi (Songket Silungkang, SISSCa, multietnis pekerja tambang)
- [ ] Riset & tulis ulang konten Kuliner khas (Dendeng Batokok, kopi lokal)
- [ ] Riset & tulis ulang konten Destinasi wisata (Lubang Mbah Soero, Museum Goedang Ransoem, Museum Kereta Api & Mak Itam, Danau Biru, Puncak Cemara)
- [ ] Bangun halaman Budaya & tradisi
- [ ] Bangun halaman Kuliner khas
- [ ] Bangun halaman Destinasi wisata + komponen galeri foto
- [ ] **⚠️ 30 Juni — pastikan pendaftaran & website sudah live, ini deadline resmi**
- [ ] Lanjutkan kumpulkan & seleksi foto (target 16–23 foto total)

## Sprint 3 — Inovasi, Peta, PWA/Offline (2–6 Juli)
- [ ] Riset & tulis konten Inovasi & teknologi (status UNESCO, upaya smart city; opsional: catatan rencana reaktivasi tambang 2026)
- [ ] Bangun halaman Inovasi & teknologi
- [ ] Buat ilustrasi peta kota custom (SVG/gambar statis dengan hotspot klik — bukan embed Google Maps)
- [ ] Bangun halaman Peta kota
- [ ] Setup PWA: `app/manifest.ts` + ikon aplikasi
- [ ] Tulis service worker custom (cache-first untuk semua aset statis)
- [ ] Implementasi tombol "Download/Pasang ke layar utama" (custom `beforeinstallprompt` untuk Android, instruksi manual untuk iOS)
- [ ] Tes offline: buka situs, matikan koneksi, pastikan halaman yang sudah dikunjungi tetap bisa diakses

## Sprint 4 — Konten EN, Polish, Testing (7–10 Juli)
- [ ] Lengkapi & cek ulang semua terjemahan EN (Beranda + 6 halaman)
- [ ] Compress & convert semua foto ke WebP, jaga total ukuran situs tetap ringan
- [ ] Tambahkan alt text untuk semua gambar (aksesibilitas + SEO)
- [ ] Tambahkan kredit sumber foto sesuai catatan lisensi
- [ ] Tes responsive di 3 ukuran: mobile, tablet, desktop (navbar, grid, timeline)
- [ ] Jalankan Lighthouse audit (performance, accessibility, PWA score)
- [ ] Proofread seluruh teks (typo, konsistensi gaya bahasa, tanda baca)
- [ ] Cek semua link internal & eksternal tidak rusak

## 11–20 Juli — Periode review (tanpa fitur baru)
- [ ] Ikuti technical meeting panitia via WhatsApp (10 Juli)
- [ ] Review situs dari sudut pandang turis: alur cerita & kemudahan navigasi
- [ ] Minta 2–3 orang lain mencoba situs & beri masukan
- [ ] Perbaiki bug/kekurangan kecil dari hasil review
- [ ] Submit form pendaftaran resmi panitia sebelum 20 Juli
- [ ] Simpan cadangan (backup) seluruh kode & konten