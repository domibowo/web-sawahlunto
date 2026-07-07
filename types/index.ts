export type Bilingual = { id: string; en: string };

export type GambarEntry = { src: string; credit?: string };

export type Reference = {
  nomor: number;
  sumber: string;
  url?: string;
};

export type TimelineEvent = {
  slug: string;
  tahun: string;
  judul: Bilingual;
  ringkasan: Bilingual;
  detail: Bilingual;
  gambar: GambarEntry;
  referensi: Reference[];
};

export type WisataItem = {
  slug: string;
  nama: Bilingual;
  ringkasan: Bilingual;
  detail: Bilingual;
  infoPraktis?: {
    jamBuka: Bilingual;
    hargaTiket: Bilingual;
    tips: Bilingual;
  };
  gambar: GambarEntry;
  statusBadge?: Bilingual;
};

export type NavItem = {
  slug: string;
  label: Bilingual;
  icon: string; // SVG path data
};

export type MapHotspot = {
  id: string;
  x: number; // persentase relatif terhadap SVG
  y: number;
  label: Bilingual;
  href: string;
};
