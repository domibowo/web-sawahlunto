import type { Bilingual } from "@/types";

export type PetaHotspot = {
  id: string;
  x: number; // SVG koordinat untuk peta ilustrasi (viewBox 680×540)
  y: number;
  lat: number;
  lng: number;
  label: Bilingual;
  href: string | null;
  gmapsUrl?: string;
};

export const petaHotspots: PetaHotspot[] = [
  // ── PUSAT KOTA ──────────────────────────────────────────────────────────
  {
    id: "pusat-kota",
    x: 150, y: 440,
    lat: -0.6777, lng: 100.7739,
    label: { id: "Pusat Kota", en: "City Centre" },
    href: null,
  },

  // ── KLASTER KOTA LAMA (bottom-left) ─────────────────────────────────────
  {
    id: "lubang-mbah-soero",
    x: 220, y: 380,
    lat: -0.6764, lng: 100.7731,
    label: { id: "Lubang Mbah Soero", en: "Lubang Mbah Soero" },
    href: "/wisata/lubang-mbah-soero",
    gmapsUrl: "https://maps.app.goo.gl/ADYLypeM6rbEcooR9",
  },
  {
    id: "museum-goedang-ransoem",
    x: 280, y: 360,
    lat: -0.6751, lng: 100.7745,
    label: { id: "Museum Goedang Ransoem", en: "Museum Goedang Ransoem" },
    href: "/wisata/museum-goedang-ransoem",
    gmapsUrl: "https://maps.app.goo.gl/nguWoBggh3Vf8Zx9A",
  },
  {
    id: "museum-kereta-api",
    x: 340, y: 400,
    lat: -0.6759, lng: 100.7762,
    label: { id: "Museum Kereta Api & Mak Itam", en: "Railway Museum & Mak Itam" },
    href: "/wisata/museum-kereta-api",
    gmapsUrl: "https://maps.app.goo.gl/UwQTbVi7xxTBeUV67",
  },
  {
    id: "museum-tambang-ombilin",
    x: 218, y: 328,
    lat: -0.6770, lng: 100.7750,
    label: { id: "Museum Tambang Ombilin", en: "Ombilin Mining Museum" },
    href: "/wisata/museum-tambang-ombilin",
    gmapsUrl: "https://maps.app.goo.gl/QEyAiFfzF2krTi227",
  },
  {
    id: "silo",
    x: 318, y: 445,
    lat: -0.6761, lng: 100.7748,
    label: { id: "Silo Sawahlunto", en: "Silo Sawahlunto" },
    href: "/wisata/silo",
    gmapsUrl: "https://maps.app.goo.gl/A9KQgk5PxCMibd2k8",
  },
  {
    id: "taman-segitiga",
    x: 262, y: 432,
    lat: -0.6762, lng: 100.7743,
    label: { id: "Taman Segitiga", en: "Taman Segitiga" },
    href: "/wisata/taman-segitiga",
    gmapsUrl: "https://maps.app.goo.gl/8uwci62AWaJro6Bb6",
  },
  {
    id: "hotel-ombilin-kota-tua",
    x: 186, y: 418,
    lat: -0.6763, lng: 100.7738,
    label: { id: "Hotel Ombilin & Kota Tua", en: "Hotel Ombilin & Old Town" },
    href: "/wisata/hotel-ombilin-kota-tua",
    gmapsUrl: "https://maps.app.goo.gl/mewz1Y6MXz4axd559",
  },
  {
    id: "gereja-santa-barbara",
    x: 302, y: 392,
    lat: -0.6768, lng: 100.7752,
    label: { id: "Gereja Santa Barbara", en: "Santa Barbara Church" },
    href: "/wisata/gereja-santa-barbara",
    gmapsUrl: "https://maps.app.goo.gl/HPwVbLEqUsGicLJk8",
  },
  {
    id: "masjid-nurul-islam",
    x: 368, y: 420,
    lat: -0.6757, lng: 100.7756,
    label: { id: "Masjid Nurul Islam", en: "Nurul Islam Mosque" },
    href: "/wisata/masjid-nurul-islam",
    gmapsUrl: "https://maps.app.goo.gl/BCcFKAArqdekNCWs5",
  },
  {
    id: "gedung-pusat-kebudayaan",
    x: 258, y: 458,
    lat: -0.6765, lng: 100.7747,
    label: { id: "Gedung Pusat Kebudayaan", en: "Cultural Centre" },
    href: "/wisata/gedung-pusat-kebudayaan",
    gmapsUrl: "https://maps.app.goo.gl/ZMgxCkMytd9nyALM6",
  },

  // ── PINGGIRAN BARAT / SELATAN ────────────────────────────────────────────
  {
    id: "makam-belanda",
    x: 88, y: 398,
    lat: -0.6800, lng: 100.7720,
    label: { id: "Makam Belanda (Kerkhof)", en: "Dutch Cemetery (Kerkhof)" },
    href: "/wisata/makam-belanda",
    gmapsUrl: "https://maps.app.goo.gl/nSsweCZayapPbdb69",
  },
  {
    id: "batu-runciang",
    x: 80, y: 468,
    lat: -0.6840, lng: 100.7680,
    label: { id: "Batu Runciang", en: "Batu Runciang" },
    href: "/wisata/batu-runciang",
    gmapsUrl: "https://maps.app.goo.gl/QijtBjcDUEHk9JEP6",
  },
  {
    id: "desa-wisata-rantih",
    x: 62, y: 510,
    lat: -0.7150, lng: 100.7590,
    label: { id: "Desa Wisata Rantih", en: "Rantih Village" },
    href: "/wisata/desa-wisata-rantih",
    gmapsUrl: "https://maps.app.goo.gl/Z5NjMw8Na2PSocJAA",
  },

  // ── JALUR TENGAH (menuju kawasan timur) ─────────────────────────────────
  {
    id: "lubang-kalam",
    x: 392, y: 358,
    lat: -0.6720, lng: 100.7800,
    label: { id: "Lubang Kalam", en: "Lubang Kalam" },
    href: "/wisata/lubang-kalam",
    gmapsUrl: "https://maps.app.goo.gl/hFy3FgvMfFYtmzMg9",
  },
  {
    id: "waterboom-muaro-kalaban",
    x: 430, y: 312,
    lat: -0.6705, lng: 100.7795,
    label: { id: "Waterboom Muaro Kalaban", en: "Waterboom Muaro Kalaban" },
    href: "/wisata/waterboom-muaro-kalaban",
    gmapsUrl: "https://maps.app.goo.gl/D2FMFGVjQYjXFSfR7",
  },

  // ── DATARAN TINGGI (puncak-puncak) ──────────────────────────────────────
  {
    id: "puncak-cemara",
    x: 460, y: 260,
    lat: -0.6641, lng: 100.7835,
    label: { id: "Puncak Cemara", en: "Puncak Cemara" },
    href: "/wisata/puncak-cemara",
    gmapsUrl: "https://maps.app.goo.gl/8aJvcSk6jtoiKDV49",
  },
  {
    id: "puncak-polan",
    x: 510, y: 308,
    lat: -0.6675, lng: 100.7828,
    label: { id: "Puncak Polan", en: "Puncak Polan" },
    href: "/wisata/puncak-polan",
    gmapsUrl: "https://maps.app.goo.gl/9xwJKq7MNHGmY14s8",
  },

  // ── KAWASAN TALAWI / KANDI (timur laut) ─────────────────────────────────
  {
    id: "danau-biru",
    x: 560, y: 160,
    lat: -0.6512, lng: 100.7897,
    label: { id: "Danau Biru", en: "Danau Biru" },
    href: "/wisata/danau-biru",
    gmapsUrl: "https://maps.app.goo.gl/XaH5aRttfHBdKGwD6",
  },
  {
    id: "geosite-fosil-ikan-gurami",
    x: 548, y: 182,
    lat: -0.6535, lng: 100.7888,
    label: { id: "Geosite Yamini", en: "Yamini Geosite" },
    href: "/wisata/geosite-fosil-ikan-gurami",
    gmapsUrl: "https://maps.app.goo.gl/2VzdELj4A73iiXkw6",
  },
  {
    id: "kawasan-kandi",
    x: 535, y: 240,
    lat: -0.6632, lng: 100.7882,
    label: { id: "Kawasan Kandi", en: "Kandi Area" },
    href: "/wisata/kawasan-kandi",
    gmapsUrl: "https://maps.app.goo.gl/ePncdhoSJNyTRhFu8",
  },
  {
    id: "kebun-buah-kandi",
    x: 600, y: 218,
    lat: -0.6618, lng: 100.7898,
    label: { id: "Kebun Buah Kandi", en: "Kandi Fruit Garden" },
    href: "/wisata/kebun-buah-kandi",
    gmapsUrl: "https://maps.app.goo.gl/6pUYs45KSuPt4Eu28",
  },
  {
    id: "padang-savana-kolok",
    x: 580, y: 305,
    lat: -0.6590, lng: 100.7900,
    label: { id: "Savana Kolok", en: "Kolok Savanna" },
    href: "/wisata/padang-savana-kolok",
    gmapsUrl: "https://maps.app.goo.gl/FSNUPw2ttQA8vwET7",
  },
];

// Graf koneksi antar destinasi untuk rute wisata decision-tree
export const ruteGraph: Record<string, string[]> = {
  "pusat-kota":                ["lubang-mbah-soero", "hotel-ombilin-kota-tua", "taman-segitiga", "gereja-santa-barbara"],
  "lubang-mbah-soero":         ["museum-tambang-ombilin", "museum-goedang-ransoem", "hotel-ombilin-kota-tua"],
  "museum-tambang-ombilin":    ["lubang-mbah-soero", "makam-belanda", "museum-goedang-ransoem"],
  "museum-goedang-ransoem":    ["gereja-santa-barbara", "museum-kereta-api", "lubang-kalam"],
  "gereja-santa-barbara":      ["museum-goedang-ransoem", "museum-kereta-api", "silo", "taman-segitiga"],
  "museum-kereta-api":         ["silo", "masjid-nurul-islam", "lubang-kalam"],
  "silo":                      ["museum-kereta-api", "taman-segitiga", "gedung-pusat-kebudayaan", "masjid-nurul-islam"],
  "taman-segitiga":            ["silo", "gedung-pusat-kebudayaan", "lubang-mbah-soero"],
  "gedung-pusat-kebudayaan":   ["silo", "taman-segitiga", "masjid-nurul-islam"],
  "masjid-nurul-islam":        ["museum-kereta-api", "silo", "lubang-kalam"],
  "hotel-ombilin-kota-tua":    ["lubang-mbah-soero", "makam-belanda"],
  "makam-belanda":             ["museum-tambang-ombilin", "hotel-ombilin-kota-tua", "batu-runciang"],
  "batu-runciang":             ["makam-belanda", "desa-wisata-rantih"],
  "desa-wisata-rantih":        ["batu-runciang"],
  "lubang-kalam":              ["museum-goedang-ransoem", "waterboom-muaro-kalaban", "puncak-cemara"],
  "waterboom-muaro-kalaban":   ["lubang-kalam", "puncak-cemara", "puncak-polan"],
  "puncak-cemara":             ["kawasan-kandi", "puncak-polan", "waterboom-muaro-kalaban"],
  "puncak-polan":              ["puncak-cemara", "padang-savana-kolok", "kawasan-kandi"],
  "danau-biru":                ["geosite-fosil-ikan-gurami", "kebun-buah-kandi"],
  "geosite-fosil-ikan-gurami": ["danau-biru", "kawasan-kandi", "kebun-buah-kandi"],
  "kawasan-kandi":             ["geosite-fosil-ikan-gurami", "kebun-buah-kandi", "puncak-cemara"],
  "kebun-buah-kandi":          ["kawasan-kandi", "danau-biru", "geosite-fosil-ikan-gurami"],
  "padang-savana-kolok":       ["puncak-polan", "kawasan-kandi"],
};

// Titik awal populer
export const STARTING_POINTS = [
  "lubang-mbah-soero",
  "museum-goedang-ransoem",
  "danau-biru",
  "pusat-kota",
];
