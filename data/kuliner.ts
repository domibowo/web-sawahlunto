import type { Bilingual, Reference } from "@/types";

export type KulinerSection = {
  id: string;
  judul: Bilingual;
  isi: Bilingual;
  gambar: string;
};

export const kulinerData: KulinerSection[] = [
  {
    id: "dendeng-batokok",
    judul: {
      id: "Dendeng Batokok",
      en: "Dendeng Batokok",
    },
    isi: {
      id: "Tidak ada yang lebih identik dengan Sawahlunto selain Dendeng Batokok. Daging sapi diiris tipis, dilumuri minyak kelapa agar aromanya lebih gurih, lalu dibumbui ketumbar, bawang, jahe, kunyit, dan lengkuas.[1] Nama 'batokok' sendiri berasal dari proses memukul-mukul daging dengan batu cobek atau palu kayu sebelum dipanggang — bukan sekadar tradisi, tapi cara membuka serat daging agar bumbu meresap sempurna.[2] Daging lalu dipanggang di atas bara tempurung kelapa, disajikan dengan sambal lado yang pedas menggigit.",
      en: "Nothing is more synonymous with Sawahlunto than Dendeng Batokok. Beef is thinly sliced, coated in coconut oil for a richer aroma, then seasoned with coriander, shallots, ginger, turmeric, and galangal.[1] The name 'batokok' comes from the process of pounding the meat with a stone mortar or wooden mallet before grilling — not merely tradition, but a way to open the meat's fibers so the spices fully penetrate.[2] The meat is then grilled over coconut shell embers and served with fiery sambal lado.",
    },
    gambar: "",
  },
  {
    id: "kopi-datuk-silungkang",
    judul: {
      id: "Kopi Datuk Silungkang",
      en: "Kopi Datuk Silungkang",
    },
    isi: {
      id: "Sambil menikmati dendeng, jangan lewatkan secangkir Kopi Datuk Silungkang di kedai-kedai tua sekitar pasar.[3] Biji kopi robusta lokal disangrai secara tradisional di atas tungku kayu bakar, lalu ditumbuk manual sebelum diseduh — proses yang lebih lambat, tapi menghasilkan rasa yang lebih legit dibanding kopi instan kebanyakan.",
      en: "While enjoying dendeng, don't miss a cup of Kopi Datuk Silungkang at the old stalls around the market.[3] Local robusta beans are traditionally roasted over a wood-fired stove, then manually ground before brewing — a slower process, but one that yields a richer, more genuine flavor than most instant coffee.",
    },
    gambar: "",
  },
  {
    id: "sup-silungkang",
    judul: {
      id: "Sup Silungkang",
      en: "Sup Silungkang",
    },
    isi: {
      id: "Untuk yang mencari kehangatan, Sup Silungkang jadi pilihan tepat — kuah bening kaya rempah berisi daging sapi, kadang dengan tulang yang menambah rasa gurih, ditaburi bawang goreng renyah.[4] Sederhana, tapi pas dinikmati di udara sejuk dataran tinggi Sawahlunto.",
      en: "For those seeking warmth, Sup Silungkang is the perfect choice — a clear, spice-rich broth containing beef, sometimes with bones that deepen the savory taste, topped with crispy fried shallots.[4] Simple, but perfectly suited to the cool highland air of Sawahlunto.",
    },
    gambar: "",
  },
  {
    id: "kerupuk-ubi-silungkang",
    judul: {
      id: "Kerupuk Ubi Silungkang",
      en: "Kerupuk Ubi Silungkang",
    },
    isi: {
      id: "Sebelum pulang, sempatkan membawa Kerupuk Ubi Silungkang sebagai oleh-oleh — camilan singkong tipis yang digoreng renyah dengan bumbu rempah khas, jadi favorit wisatawan untuk dibawa pulang.[5] Setelah lidah dimanjakan, saatnya menjelajahi langsung tempat-tempat yang menyimpan cerita di balik setiap hidangan ini.",
      en: "Before leaving, take home some Kerupuk Ubi Silungkang as a souvenir — thin cassava crackers fried crispy with signature spices, a tourist favourite to bring back.[5] With your palate satisfied, it's time to explore the places that hold the stories behind each of these dishes.",
    },
    gambar: "",
  },
];

export const kulinerReferensi: Reference[] = [
  {
    nomor: 1,
    sumber: "Sering Jalan",
    url: "https://seringjalan.com/6-makanan-dan-kuliner-khas-kota-sawahlunto/",
  },
  {
    nomor: 2,
    sumber: "Budaya Indonesia",
    url: "https://budaya-indonesia.org/Dendeng-Batokok-khas-Sawahlunto",
  },
  {
    nomor: 3,
    sumber: "AlongWalker",
    url: "https://id.alongwalker.co/top-10-oleh-oleh-khas-sawahlunto-yang-paling-populer-s3747.html",
  },
  {
    nomor: 4,
    sumber: "Sering Jalan",
    url: "https://seringjalan.com/6-makanan-dan-kuliner-khas-kota-sawahlunto/",
  },
  {
    nomor: 5,
    sumber: "PAFI Sawahlunto Kota",
    url: "https://pafisawahluntokota.info/kuliner-tradisionalnya-yang-unik-dan-lezat-di-sawahlunto-kotasumatera-barat/",
  },
];
