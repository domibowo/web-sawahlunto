export type Bilingual = { id: string; en: string };

export type TimelineEvent = {
  slug: string;
  tahun: string;
  judul: Bilingual;
  ringkasan: Bilingual;
  detail: Bilingual;
  gambar: string; // path ke public/, kosong = placeholder
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
  gambar: string;
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
