import type { Bilingual } from "@/types";

export type PetaHotspot = {
  id: string;
  x: number;
  y: number;
  label: Bilingual;
  href: string | null;
};

export const petaHotspots: PetaHotspot[] = [
  {
    id: "pusat-kota",
    x: 150,
    y: 440,
    label: { id: "Pusat Kota", en: "City Centre" },
    href: null,
  },
  {
    id: "lubang-mbah-soero",
    x: 220,
    y: 380,
    label: { id: "Lubang Mbah Soero", en: "Lubang Mbah Soero" },
    href: "/wisata/lubang-mbah-soero",
  },
  {
    id: "museum-goedang-ransoem",
    x: 280,
    y: 360,
    label: { id: "Museum Goedang Ransoem", en: "Museum Goedang Ransoem" },
    href: "/wisata/museum-goedang-ransoem",
  },
  {
    id: "museum-kereta-api",
    x: 340,
    y: 400,
    label: { id: "Museum Kereta Api & Mak Itam", en: "Railway Museum & Mak Itam" },
    href: "/wisata/museum-kereta-api",
  },
  {
    id: "puncak-cemara",
    x: 460,
    y: 260,
    label: { id: "Puncak Cemara", en: "Puncak Cemara" },
    href: "/wisata/puncak-cemara",
  },
  {
    id: "danau-biru",
    x: 560,
    y: 160,
    label: { id: "Danau Biru", en: "Danau Biru" },
    href: "/wisata/danau-biru",
  },
];
