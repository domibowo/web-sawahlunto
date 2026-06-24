# DESIGN.md — sawahlunto.id

Acuan visual tetap untuk seluruh situs. Setiap komponen/halaman baru atau perubahan desain harus merujuk ke sini, bukan menebak-nebak ulang.

## Filosofi

**Struktur modern, tekstur heritage.** Situs ini menceritakan kota tambang kolonial yang kini jadi Situs Warisan Dunia UNESCO sambil membawa tema "Digital City" — jadi tidak boleh terasa retro/jadul sepenuhnya (mengecilkan narasi inovasi), tapi juga tidak boleh terasa generik seperti landing page SaaS (kehilangan bobot emosional cerita sejarah).

Tiga pengaruh yang dipadukan (diadaptasi total ke palet kita, bukan ditiru warnanya):
- **WIRED** → kicker huruf kapital ber-tracking lebar, judul serif besar, rasa "dokumen arsip"
- **Dell 1996** → kartu blok warna datar, sudut tegas, tanpa bayangan/gradasi — rasa katalog lama
- **Mastercard** → kanvas hangat, bentuk pil lembut untuk tombol/badge — penyeimbang supaya tidak terlalu kaku

## Warna

| Token | Hex | Penggunaan |
|---|---|---|
| `cream` | `#F4ECDD` | Latar utama seluruh situs |
| `cream-dark` | `#E8DCC5` | Latar sekunder, border halus, hover state ringan |
| `charcoal` | `#2B2420` | Teks utama, blok kartu gelap |
| `charcoal-muted` | `#6B5D4F` | Teks sekunder/caption |
| `terracotta` | `#C1502E` | Aksen utama, blok kartu, kicker, CTA primer |
| `terracotta-dark` | `#9C3F23` | Hover state elemen terracotta |
| `teal` | `#1D7A6B` | Aksen sekunder, blok kartu alternatif, link |
| `teal-dark` | `#15564A` | Hover state elemen teal |

Tidak ada mode gelap untuk situs ini — satu tema warna tetap di semua halaman.

## Tipografi

| Peran | Font | Ukuran & berat | Catatan |
|---|---|---|---|
| Kicker/label | mono (mis. JetBrains Mono) | 12px, uppercase, letter-spacing 0.08em | Warna terracotta. Dipakai untuk tag tahun, kategori, breadcrumb kecil |
| Judul hero/halaman | serif (Lora/Playfair Display) | 28–36px, weight 500 | Warna charcoal. Maksimal 2 baris |
| Judul section | serif | 20–24px, weight 500 | |
| Isi/body | sans-serif (Inter/Plus Jakarta Sans) | 15–16px, weight 400, line-height 1.6–1.7 | |
| Label tombol/UI | sans-serif | 13–14px, weight 500 | |

## Komponen signature

**1. Kartu blok warna datar** (`NavCard`, kartu destinasi/galeri)
- `border-radius: 0` — TIDAK ADA sudut membulat, ini ciri khasnya
- Tanpa box-shadow, tanpa gradient — warna solid penuh (terracotta/charcoal/teal bergantian, jangan monoton satu warna untuk semua kartu sejenis)
- Ikon di atas, label sans-serif weight 500 di bawah, warna teks cream di atas blok berwarna
- Padding lega (20px), tinggi minimum konsisten antar kartu dalam satu grid

**2. Kicker arsip** (label kecil sebelum judul, tag tahun di timeline, breadcrumb)
- Selalu uppercase, font mono, letter-spacing lebar, ukuran 12px, warna terracotta
- Jangan pernah dipakai untuk teks panjang — maksimal 4-5 kata

**3. Tombol & badge pil**
- `border-radius: 999px` — selalu pil penuh, kontras sengaja dengan kartu blok yang sudutnya tegas
- Latar charcoal atau terracotta, teks cream, sans-serif weight 500
- Ikon panah kecil di kanan untuk CTA yang mengarah ke halaman lain

## Do / Don't

**Do:**
- Pertahankan kontras tegas antara blok bersudut (kartu) dan pil bulat (tombol) — ini bahasa visual utamanya
- Pakai kicker mono untuk setiap penanda tahun/era di halaman Sejarah
- Variasikan warna blok kartu (terracotta/charcoal/teal) dalam satu grid, jangan satu warna semua

**Don't:**
- Jangan tambah box-shadow, gradient, atau efek glow di mana pun — ini akan merusak kesan flat/datar yang jadi ciri khas
- Jangan bulatkan sudut kartu blok warna — itu menghilangkan rasa "katalog" yang justru jadi pembeda
- Jangan pakai kicker huruf kecil/title case — harus selalu UPPERCASE
- Jangan campur lebih dari 3 warna blok dalam satu grid kartu

## Referensi

Dikembangkan dari analisis getdesign.md untuk WIRED, Dell (1996), dan Mastercard — https://getdesign.md/ — namun seluruh token warna & detail sudah disesuaikan total ke identitas Sawahlunto, bukan ditiru mentah dari brand aslinya.