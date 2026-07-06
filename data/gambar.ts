/**
 * Registry gambar terpusat.
 * Setiap key sesuai dengan `slug` atau `id` item di data file masing-masing.
 * src kosong "" = belum tersedia (placeholder).
 * credit = sumber/kredit foto (opsional, ditampilkan sebagai caption).
 */

import type { GambarEntry } from "@/types";

// ── Sejarah ──────────────────────────────────────────────────────────────────
export const gambarSejarah: Record<string, GambarEntry> = {
  "penemuan-batu-bara":   { src: "https://r2.kotague.id/Sawahlunto/9.webp" },
  "kota-didirikan":       { src: "https://r2.kotague.id/Sawahlunto/19.webp" },
  "tambang-dibuka":       { src: "https://r2.kotague.id/Sawahlunto/19.webp" },
  "jalur-kereta":         { src: "https://r2.kotague.id/Sawahlunto/collectie_tropenmuseum.webp", credit: "Collectie Tropenmuseum / Wikimedia Commons" },
  "orang-rantai":         { src: "https://r2.kotague.id/Sawahlunto/15.webp" },
  "puncak-kejayaan":      { src: "https://r2.kotague.id/Sawahlunto/collectie_tropenmuseum_ombilin_steenkoolmijnen.webp", credit: "Collectie Tropenmuseum / Wikimedia Commons" },
  "kota-nyaris-mati":     { src: "https://r2.kotague.id/Sawahlunto/10.webp" },
  "warisan-dunia-unesco": { src: "https://r2.kotague.id/Sawahlunto/whcunescoorg.webp", credit: "UNESCO World Heritage Centre" },
};

// ── Wisata ───────────────────────────────────────────────────────────────────
export const gambarWisata: Record<string, GambarEntry> = {
  "lubang-mbah-soero":          { src: "/images/tambang-mbah-suro.webp", credit: "Foto: Exposs Sumbar" },
  "museum-goedang-ransoem":     { src: "/images/gudang-ransoem.webp", credit: "https://daerah.sindonews.com/read/126746/29/kisah-goedang-ransoem-saksi-bisu-saat-belanda-mengeksploitasi-sawahlunto-1596834511" },
  "museum-kereta-api":          { src: "/images/museum-kereta-api.webp", credit: "https://jambi.antaranews.com/berita/533998/ka-mak-itam-dari-sawahlunto-beroperasi-kembali" },
  "danau-biru":                 { src: "/images/danau-biru-sawahlunto.webp", credit: "https://archipelagoid.com/danau-biru-sawahlunto-pesona-alam-yang-memikat-hati/" },
  "puncak-cemara":              { src: "/images/puncak-cemara.webp", credit: "https://regional.kompas.com/read/2024/02/05/213253678/puncak-cemara-sawahlunto-daya-tarik-harga-tiket-dan-rute" },
  "silo":                       { src: "/images/silo.webp", credit: "https://itineraryku.blogspot.com/2011/06/sawahlunto-kawasan-saringan-dan-lobang.html" },
  "makam-belanda":              { src: "/images/makam-belanda.webp", credit: "https://posmetropadang.co.id/34-unit-situs-cagar-budaya-makam-belanda-dipugar-di-kota-sawahlunto-155274/" },
  "museum-tambang-ombilin":     { src: "/images/tambang-ombilin.webp", credit: "https://tribratanews.polri.go.id/blog/none-22/sejarah-tambang-ombilin-sawahlunto-sebagai-situs-warisan-budaya-dunia-62229" },
  "puncak-polan":               { src: "/images/puncak-polan.webp", credit: "https://lahatpos.bacakoran.co/read/6139/puncak-polan-kota-sawalunto-tempat-spot-terbaik-melihat-matahari-terbit-dan-terbenam" },
  "desa-wisata-rantih":         { src: "/images/desa-wisata-rantih.webp", credit: "https://jadesta.kemenpar.go.id/desa/rantih" },
  "gereja-santa-barbara":       { src: "/images/gereja-santa-barbara.webp", credit: "http://infosumbar.net/berita/berita-sumbar/hari-raya-natal-di-sumbar-diprediksi-cerah-berawan-namun-hujan-ringan-di-payakumbuh-dan-sarilamak/" },
  "hotel-ombilin-kota-tua":     { src: "/images/hotel-ombilin-kota-tua.webp", credit: "https://www.traveloka.com/id-id/hotel/indonesia/khas-ombilin-hotel-9000000924657" },
  "lubang-kalam":               { src: "/images/lubang-kalam.webp", credit: "https://www.pasbana.com/2025/01/menyusuri-lorong-waktu-di-terowongan-lubang-kalam.html" },
  "gedung-pusat-kebudayaan":    { src: "/images/gedung-pusat-kebudayaan.webp", credit: "https://commons.wikimedia.org/wiki/File:Gedung_Pusat_Kebudayaan_Sawahlunto.jpg" },
  "masjid-nurul-islam":         { src: "/images/masjid-nurul-islam.webp", credit: "" },
  "batu-runciang":              { src: "/images/batu-runciang.webp", credit: "" },
  "taman-segitiga":             { src: "/images/taman-segitiga.webp", credit: "" },
  "geosite-fosil-ikan-gurami":  { src: "/images/geosite-fosil-ikan-gurami.webp", credit: "" },
  "padang-savana-kolok":        { src: "/images/padang-savana-kolok.webp", credit: "" },
  "waterboom-muaro-kalaban":    { src: "/images/waterboom-muaro-kalaban.webp", credit: "" },
  "kawasan-kandi":              { src: "/images/kawasan-kandi.webp", credit: "" },
  "kebun-buah-kandi":           { src: "/images/kebun-buah-kandi.webp", credit: "" },
};

// ── Budaya ───────────────────────────────────────────────────────────────────
export const gambarBudaya: Record<string, GambarEntry> = {
  "bahasa-tansi":               { src: "" },
  "makan-bajamba":              { src: "" },
  "songket-silungkang":         { src: "" },
  "sissca":                     { src: "" },
};

// ── Kuliner ──────────────────────────────────────────────────────────────────
export const gambarKuliner: Record<string, GambarEntry> = {
  "dendeng-batokok":            { src: "" },
  "kopi-datuk-silungkang":      { src: "" },
  "sup-silungkang":             { src: "" },
  "kerupuk-ubi-silungkang":     { src: "" },
  "pical":                      { src: "" },
  "ale-ale-silungkang":         { src: "" },
  "lamang-tungkek":             { src: "" },
  "kue-pinyaram":               { src: "" },
};

// ── Inovasi ──────────────────────────────────────────────────────────────────
export const gambarInovasi: Record<string, GambarEntry> = {
  "unesco-berkelanjutan":       { src: "" },
  "just-not-green":             { src: "" },
  "gerakan-smart-city":         { src: "" },
  "desa-kreatif-sikalang":      { src: "" },
  "situs-ini-sendiri":          { src: "" },
  "dinamika-tambang":           { src: "" },
};
