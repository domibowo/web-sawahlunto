import type { Bilingual } from "@/types";

export type PetaHotspot = {
  id: string;
  x: number;
  y: number;
  lat: number;
  lng: number;
  label: Bilingual;
  href: string | null;
};

export const petaHotspots: PetaHotspot[] = [
  {
    id: "pusat-kota",
    x: 150, y: 440,
    lat: -0.6777, lng: 100.7739,
    label: { id: "Pusat Kota", en: "City Centre" },
    href: null,
  },
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
    id: "puncak-cemara",
    x: 460, y: 260,
    lat: -0.6641, lng: 100.7835,
    label: { id: "Puncak Cemara", en: "Puncak Cemara" },
    href: "/wisata/puncak-cemara",
  },
  {
    id: "danau-biru",
    x: 560, y: 160,
    lat: -0.6512, lng: 100.7897,
    label: { id: "Danau Biru", en: "Danau Biru" },
    href: "/wisata/danau-biru",
  },
];
