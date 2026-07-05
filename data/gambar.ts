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
  "makam-belanda":              { src: "" },
  "museum-tambang-ombilin":     { src: "" },
  "puncak-polan":               { src: "" },
  "desa-wisata-rantih":         { src: "" },
  "gereja-santa-barbara":       { src: "" },
  "hotel-ombilin-kota-tua":     { src: "" },
  "lubang-kalam":               { src: "" },
  "gedung-pusat-kebudayaan":    { src: "" },
  "masjid-nurul-islam":         { src: "" },
  "batu-runciang":              { src: "" },
  "taman-segitiga":             { src: "" },
  "geosite-fosil-ikan-gurami":  { src: "" },
  "padang-savana-kolok":        { src: "" },
  "waterboom-muaro-kalaban":    { src: "" },
  "kawasan-kandi":              { src: "" },
  "kebun-buah-kandi":           { src: "" },
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
