/**
 * Registry gambar terpusat.
 * Setiap key sesuai dengan `slug` atau `id` item di data file masing-masing.
 * String kosong "" = belum tersedia (placeholder).
 * Isi dengan path lokal (/images/...) atau URL eksternal.
 */

// ── Sejarah ──────────────────────────────────────────────────────────────────
export const gambarSejarah: Record<string, string> = {
  "penemuan-batu-bara":         "https://r2.kotague.id/Sawahlunto/9.webp",
  "kota-didirikan":             "https://r2.kotague.id/Sawahlunto/19.webp",
  "tambang-dibuka":             "https://r2.kotague.id/Sawahlunto/19.webp",
  "jalur-kereta":               "https://r2.kotague.id/Sawahlunto/collectie_tropenmuseum.webp",
  "orang-rantai":               "https://r2.kotague.id/Sawahlunto/15.webp",
  "puncak-kejayaan":            "https://r2.kotague.id/Sawahlunto/collectie_tropenmuseum_ombilin_steenkoolmijnen.webp",
  "kota-nyaris-mati":           "https://r2.kotague.id/Sawahlunto/10.webp",
  "warisan-dunia-unesco":       "https://r2.kotague.id/Sawahlunto/whcunescoorg.webp",
};

// ── Wisata ───────────────────────────────────────────────────────────────────
export const gambarWisata: Record<string, string> = {
  "lubang-mbah-soero":          "",
  "museum-goedang-ransoem":     "",
  "museum-kereta-api":          "",
  "danau-biru":                 "",
  "puncak-cemara":              "",
  "silo":                       "",
  "makam-belanda":              "",
  "museum-tambang-ombilin":     "",
  "puncak-polan":               "",
  "desa-wisata-rantih":         "",
  "gereja-santa-barbara":       "",
  "hotel-ombilin-kota-tua":     "",
  "lubang-kalam":               "",
  "gedung-pusat-kebudayaan":    "",
  "masjid-nurul-islam":         "",
  "batu-runciang":              "",
  "taman-segitiga":             "",
  "geosite-fosil-ikan-gurami":  "",
  "padang-savana-kolok":        "",
  "waterboom-muaro-kalaban":    "",
  "kawasan-kandi":              "",
  "kebun-buah-kandi":           "",
};

// ── Budaya ───────────────────────────────────────────────────────────────────
export const gambarBudaya: Record<string, string> = {
  "bahasa-tansi":               "",
  "makan-bajamba":              "",
  "songket-silungkang":         "",
  "sissca":                     "",
};

// ── Kuliner ──────────────────────────────────────────────────────────────────
export const gambarKuliner: Record<string, string> = {
  "dendeng-batokok":            "",
  "kopi-datuk-silungkang":      "",
  "sup-silungkang":             "",
  "kerupuk-ubi-silungkang":     "",
  "pical":                      "",
  "ale-ale-silungkang":         "",
  "lamang-tungkek":             "",
  "kue-pinyaram":               "",
};

// ── Inovasi ──────────────────────────────────────────────────────────────────
export const gambarInovasi: Record<string, string> = {
  "unesco-berkelanjutan":       "",
  "just-not-green":             "",
  "gerakan-smart-city":         "",
  "desa-kreatif-sikalang":      "",
  "situs-ini-sendiri":          "",
  "dinamika-tambang":           "",
};
