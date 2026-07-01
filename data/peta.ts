import type { Bilingual } from "@/types";

export type PetaHotspot = {
  id: string;
  x: number; // SVG koordinat untuk peta ilustrasi (viewBox 680×540)
  y: number;
  lat: number;
  lng: number;
  label: Bilingual;
  href: string | null;
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
  },
  {
    id: "museum-goedang-ransoem",
    x: 280, y: 360,
    lat: -0.6751, lng: 100.7745,
    label: { id: "Museum Goedang Ransoem", en: "Museum Goedang Ransoem" },
    href: "/wisata/museum-goedang-ransoem",
  },
  {
    id: "museum-kereta-api",
    x: 340, y: 400,
    lat: -0.6759, lng: 100.7762,
    label: { id: "Museum Kereta Api & Mak Itam", en: "Railway Museum & Mak Itam" },
    href: "/wisata/museum-kereta-api",
  },
  {
    id: "museum-tambang-ombilin",
    x: 218, y: 328,
    lat: -0.6770, lng: 100.7750,
    label: { id: "Museum Tambang Ombilin", en: "Ombilin Mining Museum" },
    href: "/wisata/museum-tambang-ombilin",
  },
  {
    id: "silo",
    x: 318, y: 445,
    lat: -0.6761, lng: 100.7748,
    label: { id: "Silo Sawahlunto", en: "Silo Sawahlunto" },
    href: "/wisata/silo",
  },
  {
    id: "taman-segitiga",
    x: 262, y: 432,
    lat: -0.6762, lng: 100.7743,
    label: { id: "Taman Segitiga", en: "Taman Segitiga" },
    href: "/wisata/taman-segitiga",
  },
  {
    id: "hotel-ombilin-kota-tua",
    x: 186, y: 418,
    lat: -0.6763, lng: 100.7738,
    label: { id: "Hotel Ombilin & Kota Tua", en: "Hotel Ombilin & Old Town" },
    href: "/wisata/hotel-ombilin-kota-tua",
  },
  {
    id: "gereja-santa-barbara",
    x: 302, y: 392,
    lat: -0.6768, lng: 100.7752,
    label: { id: "Gereja Santa Barbara", en: "Santa Barbara Church" },
    href: "/wisata/gereja-santa-barbara",
  },
  {
    id: "masjid-nurul-islam",
    x: 368, y: 420,
    lat: -0.6757, lng: 100.7756,
    label: { id: "Masjid Nurul Islam", en: "Nurul Islam Mosque" },
    href: "/wisata/masjid-nurul-islam",
  },
  {
    id: "gedung-pusat-kebudayaan",
    x: 258, y: 458,
    lat: -0.6765, lng: 100.7747,
    label: { id: "Gedung Pusat Kebudayaan", en: "Cultural Centre" },
    href: "/wisata/gedung-pusat-kebudayaan",
  },

  // ── PINGGIRAN BARAT / SELATAN ────────────────────────────────────────────
  {
    id: "makam-belanda",
    x: 88, y: 398,
    lat: -0.6800, lng: 100.7720,
    label: { id: "Makam Belanda (Kerkhof)", en: "Dutch Cemetery (Kerkhof)" },
    href: "/wisata/makam-belanda",
  },
  {
    id: "batu-runciang",
    x: 80, y: 468,
    lat: -0.6840, lng: 100.7680,
    label: { id: "Batu Runciang", en: "Batu Runciang" },
    href: "/wisata/batu-runciang",
  },
  {
    id: "desa-wisata-rantih",
    x: 62, y: 510,
    lat: -0.7150, lng: 100.7590,
    label: { id: "Desa Wisata Rantih", en: "Rantih Village" },
    href: "/wisata/desa-wisata-rantih",
  },

  // ── JALUR TENGAH (menuju kawasan timur) ─────────────────────────────────
  {
    id: "lubang-kalam",
    x: 392, y: 358,
    lat: -0.6720, lng: 100.7800,
    label: { id: "Lubang Kalam", en: "Lubang Kalam" },
    href: "/wisata/lubang-kalam",
  },
  {
    id: "waterboom-muaro-kalaban",
    x: 430, y: 312,
    lat: -0.6705, lng: 100.7795,
    label: { id: "Waterboom Muaro Kalaban", en: "Waterboom Muaro Kalaban" },
    href: "/wisata/waterboom-muaro-kalaban",
  },

  // ── DATARAN TINGGI (puncak-puncak) ──────────────────────────────────────
  {
    id: "puncak-cemara",
    x: 460, y: 260,
    lat: -0.6641, lng: 100.7835,
    label: { id: "Puncak Cemara", en: "Puncak Cemara" },
    href: "/wisata/puncak-cemara",
  },
  {
    id: "puncak-polan",
    x: 510, y: 308,
    lat: -0.6675, lng: 100.7828,
    label: { id: "Puncak Polan", en: "Puncak Polan" },
    href: "/wisata/puncak-polan",
  },

  // ── KAWASAN TALAWI / KANDI (timur laut) ─────────────────────────────────
  {
    id: "danau-biru",
    x: 560, y: 160,
    lat: -0.6512, lng: 100.7897,
    label: { id: "Danau Biru", en: "Danau Biru" },
    href: "/wisata/danau-biru",
  },
  {
    id: "geosite-fosil-ikan-gurami",
    x: 548, y: 182,
    lat: -0.6535, lng: 100.7888,
    label: { id: "Geosite Yamini", en: "Yamini Geosite" },
    href: "/wisata/geosite-fosil-ikan-gurami",
  },
  {
    id: "kawasan-kandi",
    x: 535, y: 240,
    lat: -0.6632, lng: 100.7882,
    label: { id: "Kawasan Kandi", en: "Kandi Area" },
    href: "/wisata/kawasan-kandi",
  },
  {
    id: "kebun-buah-kandi",
    x: 600, y: 218,
    lat: -0.6618, lng: 100.7898,
    label: { id: "Kebun Buah Kandi", en: "Kandi Fruit Garden" },
    href: "/wisata/kebun-buah-kandi",
  },
  {
    id: "padang-savana-kolok",
    x: 580, y: 305,
    lat: -0.6590, lng: 100.7900,
    label: { id: "Savana Kolok", en: "Kolok Savanna" },
    href: "/wisata/padang-savana-kolok",
  },
];
