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
  "museum-goedang-ransoem":     { src: "/images/gudang-ransoem.webp", credit: "Foto: SINDOnews Daerah" },
  "museum-kereta-api":          { src: "/images/museum-kereta-api.webp", credit: "Foto: ANTARA News Jambi" },
  "danau-biru":                 { src: "/images/danau-biru-sawahlunto.webp", credit: "Foto: Archipelago Indonesia" },
  "puncak-cemara":              { src: "/images/puncak-cemara.webp", credit: "Foto: Kompas.com" },
  "silo":                       { src: "/images/silo.webp", credit: "Foto: Itineraryku" },
  "makam-belanda":              { src: "/images/makam-belanda.webp", credit: "Foto: Pos Metro Padang" },
  "museum-tambang-ombilin":     { src: "/images/tambang-ombilin.webp", credit: "Foto: Tribrata News Polri" },
  "puncak-polan":               { src: "/images/puncak-polan.webp", credit: "Foto: Lahat Pos" },
  "desa-wisata-rantih":         { src: "/images/desa-wisata-rantih.webp", credit: "Foto: Jadesta Kemenparekraf" },
  "gereja-santa-barbara":       { src: "/images/gereja-santa-barbara.webp", credit: "Foto: Info Sumbar" },
  "hotel-ombilin-kota-tua":     { src: "/images/hotel-ombilin-kota-tua.webp", credit: "Foto: Traveloka" },
  "lubang-kalam":               { src: "/images/lubang-kalam.webp", credit: "Foto: Pasbana" },
  "gedung-pusat-kebudayaan":    { src: "/images/gedung-pusat-kebudayaan.webp", credit: "Foto: Wikimedia Commons" },
  "masjid-nurul-islam":         { src: "/images/masjid-nurul-islam.webp", credit: "Foto: Kompasiana" },
  "batu-runciang":              { src: "/images/batu-runciang.webp", credit: "Foto: tvOneNews" },
  "taman-segitiga":             { src: "/images/taman-segitiga.webp", credit: "Foto: Palanta Budaya" },
  "geosite-fosil-ikan-gurami":  { src: "/images/geosite-fosil-ikan-gurami.webp", credit: "Foto: Wikimedia Commons" },
  "padang-savana-kolok":        { src: "/images/padang-savana-kolok.webp", credit: "Foto: IDN Times" },
  "waterboom-muaro-kalaban":    { src: "/images/waterboom-muaro-kalaban.webp", credit: "Foto: Metro Talenta" },
  "kawasan-kandi":              { src: "/images/kawasan-kandi.webp", credit: "Foto: Tempat Wisata Seru" },
  "kebun-buah-kandi":           { src: "/images/kebun-buah-kandi.webp", credit: "Foto: Sumbar Fokus" },
};

// ── Budaya ───────────────────────────────────────────────────────────────────
export const gambarBudaya: Record<string, GambarEntry> = {
  "bahasa-tansi":               { src: "/images/bahasa-tansi.webp", credit: "https://www.researchgate.net/publication/344731808_Menggali_Bara_Menemu_Bahasa_Bahasa_Tansi_-_Bahasa_Kreol_Buruh_dari_Sawahlunto by Elsa Putri Ermisah Syafril" },
  "makan-bajamba":              { src: "/images/makan-bajamba.webp", credit: "https://sawahluntokota.go.id/baca/sajian-makan-bajamba-jadi-puncak-hari-jadi-kota-sawahlunto-ke-135" },
  "songket-silungkang":         { src: "/images/songket-silungkang.webp", credit: "https://www.expossumbar.com/berita/48669/songket-silungkang-tenun-minangkabau-di-pasar-global" },
  "sissca":                     { src: "/images/sissca.webp", credit: "https://www.indonesia.travel/id/id/events/event-detail/sawahlunto-international-songket-silungkang-carnival" },
};

// ── Kuliner ──────────────────────────────────────────────────────────────────
export const gambarKuliner: Record<string, GambarEntry> = {
  "dendeng-batokok":            { src: "/images/dendeng-batokok.webp", credit: "https://rri.co.id/bukittinggi/kuliner/579608/dendeng-batokok-makanan-populer-dari-ranah-minang" },
  "kopi-datuk-silungkang":      { src: "/images/kopi-datuk-silungkang.webp", credit: "https://ameera.republika.co.id/berita/o1au7g328/menikmati-kopi-khas-sawahlunto-datuk-siloengkang-coffee" },
  "sup-silungkang":             { src: "/images/sup-silungkang.webp", credit: "https://www.tempo.co/gaya-hidup/sensasi-sop-silungkang-nan-alami-1697582" },
  "kerupuk-ubi-silungkang":     { src: "/images/kerupuk-ubi-silungkang.webp", credit: "https://www.idntimes.com/food/diet/camilan-khas-paling-populer-di-sawahlunto-c1c2-01-3ln1w-q7kzgd" },
  "pical":                      { src: "/images/pical.webp", credit: "https://blog.pigijo.com/5-makanan-khas-sawahlunto-yang-wajib-kawanjo-cicipi-dijamin-bikin-nagih/" },
  "ale-ale-silungkang":         { src: "/images/ale-ale-silungkang.webp", credit: "" },
  "lamang-tungkek":             { src: "/images/lamang-tungkek.webp", credit: "" },
  "kue-pinyaram":               { src: "/images/kue-pinyaram.webp", credit: "" },
};

// ── Inovasi ──────────────────────────────────────────────────────────────────
export const gambarInovasi: Record<string, GambarEntry> = {
  "unesco-berkelanjutan":       { src: "/images/unesco-berkelanjutan.webp", credit: "" },
  "just-not-green":             { src: "/images/just-not-green.webp", credit: "" },
  "gerakan-smart-city":         { src: "/images/gerakan-smart-city.webp", credit: "" },
  "desa-kreatif-sikalang":      { src: "/images/desa-kreatif-sikalang.webp", credit: "" },
  "situs-ini-sendiri":          { src: "/images/situs-ini-sendiri.webp", credit: "" },
  "dinamika-tambang":           { src: "/images/dinamika-tambang.webp", credit: "" },
};
