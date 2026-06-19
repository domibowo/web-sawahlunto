import type { Bilingual } from "@/types";

export type BudayaSection = {
  id: string;
  judul: Bilingual;
  isi: Bilingual;
  gambar: string;
};

export const budayaData: BudayaSection[] = [
  {
    id: "bahasa-tansi",
    judul: {
      id: "Bahasa Tansi, Jejak Persatuan",
      en: "Bahasa Tansi, A Trace of Unity",
    },
    isi: {
      id: "Dari penderitaan panjang para pekerja tambang yang didatangkan dari Jawa, Minangkabau, Tionghoa, Batak, hingga Bugis, lahir sesuatu yang tak terduga: sebuah Indonesia mini di lembah kecil Sumatera Barat. Keturunan para 'orang rantai' bahkan menciptakan bahasa kreol mereka sendiri, Bahasa Tansi — perpaduan unsur Minangkabau, Jawa, Tionghoa, dan Melayu yang hanya bisa ditemukan di Sawahlunto.",
      en: "From the long suffering of mine workers brought from Java, Minangkabau, China, Batak, and Bugis, something unexpected was born: a mini Indonesia in a small valley in West Sumatra. The descendants of the 'chained people' even created their own creole language, Bahasa Tansi — a blend of Minangkabau, Javanese, Chinese, and Malay elements found only in Sawahlunto.",
    },
    gambar: "",
  },
  {
    id: "makan-bajamba",
    judul: {
      id: "Makan Bajamba, Perayaan Harmoni",
      en: "Makan Bajamba, A Celebration of Harmony",
    },
    isi: {
      id: "Keberagaman itu dirayakan setiap 1 Desember, saat warga merayakan hari jadi kota lewat tradisi Makan Bajamba. Ribuan orang duduk berderet panjang mengenakan pakaian adat warna-warni, menyantap hidangan bersama dalam satu meja panjang — pesta rakyat sederhana yang menegaskan: dari rantai penderitaan, lahir harmoni.",
      en: "This diversity is celebrated every December 1st, when residents mark the city's anniversary through the Makan Bajamba tradition. Thousands of people sit in long rows wearing colorful traditional attire, sharing a meal at one long table — a simple people's feast that affirms: from the chains of suffering, harmony is born.",
    },
    gambar: "",
  },
  {
    id: "songket-silungkang",
    judul: {
      id: "Songket Silungkang",
      en: "Songket Silungkang",
    },
    isi: {
      id: "Di Nagari Silungkang, salah satu kawasan di Sawahlunto, hidup salah satu songket tertua di Indonesia. Songket Silungkang ditenun dengan alat tenun bukan mesin yang disebut palanta, memadukan benang katun dengan kilau benang emas, perak, atau tembaga lewat proses panjang yang dikenal sebagai 5M: mancolok, manuriang, mahani, maharok, dan mananun. Pada 2019, kerajinan ini resmi diakui sebagai Warisan Budaya Tak Benda Indonesia.",
      en: "In Nagari Silungkang, one of Sawahlunto's districts, lives one of Indonesia's oldest songket traditions. Songket Silungkang is woven on a traditional loom called palanta, blending cotton threads with the shimmer of gold, silver, or copper through a lengthy process known as 5M: mancolok, manuriang, mahani, maharok, and mananun. In 2019, this craft was officially recognized as Indonesia's Intangible Cultural Heritage.",
    },
    gambar: "",
  },
  {
    id: "sissca",
    judul: {
      id: "SISSCa, Warisan yang Terus Hidup",
      en: "SISSCa, A Living Heritage",
    },
    isi: {
      id: "Warisan tenun ini kini dirayakan lewat Sawahlunto International Songket Silungkang Carnival (SISSCa), karnaval tahunan bertepatan dengan Hari Tenun Nasional setiap 7 September. Pawai kostum yang melintasi koridor kota tua ini didominasi songket asli — memadukan keaslian tenun tradisional dengan sentuhan modern.",
      en: "This weaving heritage is now celebrated through the Sawahlunto International Songket Silungkang Carnival (SISSCa), an annual carnival coinciding with National Weaving Day on September 7th. The costume parade that winds through the old city corridor is dominated by authentic songket — blending the authenticity of traditional weaving with modern touches.",
    },
    gambar: "",
  },
];
