import type { Bilingual, GambarEntry, Reference } from "@/types";
import { gambarBudaya } from "@/data/gambar";

export type BudayaSection = {
  id: string;
  judul: Bilingual;
  isi: Bilingual;
  gambar: GambarEntry;
};

export const budayaData: BudayaSection[] = [
  {
    id: "bahasa-tansi",
    judul: {
      id: "Bahasa Tansi, Jejak Persatuan",
      en: "Bahasa Tansi, A Trace of Unity",
    },
    isi: {
      id: "Pekerja tambang dulu didatangkan dari berbagai daerah: Jawa, Minangkabau, Tionghoa, Batak, hingga Bugis.[1] Tanpa disangka, percampuran ini melahirkan semacam Indonesia mini di lembah kecil Sumatera Barat. Keturunan para pekerja ini bahkan punya bahasa sendiri, Bahasa Tansi — gabungan unsur Minangkabau, Jawa, Tionghoa, dan Melayu yang hanya bisa ditemukan di Sawahlunto.[2]",
      en: "Mine workers were brought from various regions: Java, Minangkabau, Chinese, Batak, and Bugis.[1] Unexpectedly, this mixing gave rise to a kind of mini-Indonesia in a small valley in West Sumatra. The descendants of these workers even have their own language, Bahasa Tansi — a blend of Minangkabau, Javanese, Chinese, and Malay elements found only in Sawahlunto.[2]",
    },
    gambar: gambarBudaya["bahasa-tansi"],
  },
  {
    id: "makan-bajamba",
    judul: {
      id: "Makan Bajamba, Perayaan Harmoni",
      en: "Makan Bajamba, A Celebration of Harmony",
    },
    isi: {
      id: "Keberagaman ini dirayakan setiap 1 Desember lewat tradisi Makan Bajamba, bertepatan dengan hari jadi kota.[3] Ribuan warga duduk berderet panjang mengenakan pakaian adat warna-warni, makan bersama dalam satu meja panjang. Sebuah perayaan sederhana, tapi maknanya dalam: dari masa lalu yang berat, kini tumbuh kebersamaan.",
      en: "This diversity is celebrated every December 1st through the Makan Bajamba tradition, coinciding with the city's anniversary.[3] Thousands of residents sit in long rows wearing colorful traditional attire, sharing a meal at one long table. A simple celebration, but deeply meaningful: from a difficult past, togetherness now flourishes.",
    },
    gambar: gambarBudaya["makan-bajamba"],
  },
  {
    id: "songket-silungkang",
    judul: {
      id: "Songket Silungkang",
      en: "Songket Silungkang",
    },
    isi: {
      id: "Di Nagari Silungkang, salah satu kawasan di Sawahlunto, songket telah ditenun turun-temurun — salah satu yang tertua di Indonesia.[4] Pengrajin menggunakan alat tenun bukan mesin yang disebut palanta, memadukan benang katun dengan kilau emas, perak, atau tembaga. Prosesnya panjang, dikenal sebagai 5M: mancolok, manuriang, mahani, maharok, dan mananun. Pada 2019, kerajinan ini resmi diakui sebagai Warisan Budaya Tak Benda Indonesia.[4]",
      en: "In Nagari Silungkang, one of Sawahlunto's districts, songket has been woven for generations — one of the oldest in Indonesia.[4] Craftspeople use a traditional handloom called palanta, blending cotton threads with the shimmer of gold, silver, or copper. The process is lengthy, known as 5M: mancolok, manuriang, mahani, maharok, and mananun. In 2019, this craft was officially recognized as Indonesia's Intangible Cultural Heritage.[4]",
    },
    gambar: gambarBudaya["songket-silungkang"],
  },
  {
    id: "sissca",
    judul: {
      id: "SISSCa, Warisan yang Terus Hidup",
      en: "SISSCa, A Living Heritage",
    },
    isi: {
      id: "Warisan tenun ini terus dirayakan lewat Sawahlunto International Songket Silungkang Carnival (SISSCa), karnaval tahunan yang digelar setiap 7 September bertepatan dengan Hari Tenun Nasional.[5] Sekitar 60 persen kostum yang dipakai dalam pawai ini terbuat dari songket asli, memadukan tenun tradisional dengan sentuhan desain modern.[5]",
      en: "This weaving heritage is continually celebrated through the Sawahlunto International Songket Silungkang Carnival (SISSCa), an annual carnival held every September 7th coinciding with National Weaving Day.[5] Around 60 percent of the costumes worn in the parade are made from authentic songket, blending traditional weaving with modern design touches.[5]",
    },
    gambar: gambarBudaya["sissca"],
  },
];

export const budayaReferensi: Reference[] = [
  {
    nomor: 1,
    sumber: "Liputan6.com",
    url: "https://www.liputan6.com/lifestyle/read/4547667/6-fakta-menarik-tentang-sawahlunto-tambang-batu-bara-tertua-di-asia-tenggara-berada",
  },
  {
    nomor: 2,
    sumber: "detikSumut",
    url: "https://www.detik.com/sumut/budaya/d-7616784/asal-usul-bahasa-tansi-di-kota-sawahlunto",
  },
  {
    nomor: 3,
    sumber: "Topsatu.com",
    url: "https://www.topsatu.com/sawahlunto-kota-tua-seribu-cerita-warisan-dunia/",
  },
  {
    nomor: 4,
    sumber: "Digilaw.id",
    url: "https://digilaw.id/sissca-sawahlunto-indikasi-geografis-dan-nilai-historis-songket-silungkang/",
  },
  {
    nomor: 5,
    sumber: "ANTARA News",
    url: "https://www.antaranews.com/video/5091661/merawat-ingatan-dan-kejayaan-songket-silungkang-lewat-sissca",
  },
];
