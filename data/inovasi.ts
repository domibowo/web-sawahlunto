import type { Bilingual, Reference } from "@/types";

export type InovasiSection = {
  id: string;
  judul: Bilingual;
  isi: Bilingual;
  gambar: string;
};

export const inovasiData: InovasiSection[] = [
  {
    id: "unesco-berkelanjutan",
    judul: {
      id: "Pengakuan UNESCO, Bukan Akhir Cerita",
      en: "UNESCO Recognition, Not the End of the Story",
    },
    isi: {
      id: "Status Warisan Dunia UNESCO yang diraih pada 2019 bukan sekadar gelar yang ditempel lalu dilupakan. UNESCO Jakarta bahkan aktif berkolaborasi mendokumentasikan dan melestarikan Bahasa Tansi yang hampir punah — bahasa kreol unik warisan para pekerja tambang dari berbagai penjuru Nusantara.[1]",
      en: "The UNESCO World Heritage status achieved in 2019 is not merely a title to be applied and forgotten. UNESCO Jakarta has even been actively collaborating to document and preserve the nearly extinct Bahasa Tansi — a unique creole language inherited from mine workers who came from across the Indonesian archipelago.[1]",
    },
    gambar: "",
  },
  {
    id: "desa-kreatif-sikalang",
    judul: {
      id: "Desa Kreatif Sikalang: Budaya Tangsi Jadi Identitas Digital",
      en: "Sikalang Creative Village: Tangsi Culture as a Digital Identity",
    },
    isi: {
      id: "Inovasi juga tumbuh di luar pusat kota. Desa Sikalang di Kecamatan Talawi — rumah bagi Danau Biru — resmi dibranding sebagai Desa Kreatif Sumatera Barat sejak 2025.[2] Pemerintah desa merangkai program perluasan pasar UMKM secara daring dan luring lewat jejaring media sosial, sekaligus menjadikan budaya Tangsi sebagai ikon khas yang membedakan desa ini — dikembangkan lewat empat klaster: seni budaya, kuliner, fashion, dan pariwisata.",
      en: "Innovation is also growing beyond the city centre. Sikalang Village in Talawi District — home to Danau Biru — has been officially branded as a West Sumatra Creative Village since 2025.[2] The village government has woven together a programme to expand UMKM markets both online and offline through social media networks, while also making Tangsi culture its distinctive icon — developed through four clusters: arts and culture, culinary, fashion, and tourism.",
    },
    gambar: "",
  },
  {
    id: "situs-ini-sendiri",
    judul: {
      id: "Situs Ini Sendiri Adalah Bagian dari Inovasinya",
      en: "This Site Itself Is Part of the Innovation",
    },
    isi: {
      id: "Situs yang sedang kamu baca ini pun adalah bagian kecil dari upaya itu — dirancang dwibahasa untuk turis lokal dan mancanegara, dan tetap bisa diakses bahkan saat sinyal lemah di kawasan tambang yang jauh dari kota, lewat mode offline yang tersimpan otomatis di perangkatmu.",
      en: "The site you are reading right now is itself a small part of that effort — designed bilingually for both local and international tourists, and still accessible even when the signal is weak in mining areas far from the city, through an offline mode that saves automatically to your device.",
    },
    gambar: "",
  },
];

// OPSIONAL — blok ke-4 tentang dinamika tambang yang mungkin bangkit kembali.
// Hapus atau komentar blok ini jika diputuskan tidak dipakai.
export const inovasiDinamikaTambang: InovasiSection = {
  id: "dinamika-tambang",
  judul: {
    id: "Dinamika Baru: Tambang yang Mungkin Bangkit Kembali",
    en: "A New Dynamic: The Mine That May Rise Again",
  },
  isi: {
    id: "Di tengah upaya menjadikan Sawahlunto kota wisata, ada dinamika baru yang juga patut dicatat: PT Bukit Asam dikabarkan mempercepat rencana mengaktifkan kembali tambang Ombilin pada 2026 untuk mendorong ekonomi daerah. Bagaimana kota ini menyeimbangkan warisan wisata dengan kebangkitan ekonomi tambang, akan menjadi bagian baru dari cerita panjangnya.",
    en: "Amid efforts to make Sawahlunto a tourism city, there is a new dynamic also worth noting: PT Bukit Asam has reportedly accelerated plans to reactivate the Ombilin mine in 2026 to boost the regional economy. How the city balances its tourism heritage with the revival of its mining economy will become a new chapter in its long story.",
  },
  gambar: "",
};

export const inovasiReferensi: Reference[] = [
  {
    nomor: 1,
    sumber: "UNESCO Jakarta",
    url: "https://whc.unesco.org/en/news/2662",
  },
  {
    nomor: 2,
    sumber: "Portal Resmi Kominfo Kota Sawahlunto",
    url: "https://sawahluntokota.go.id/baca/pemdes-sikalang-rangkai-beragam-program-inovasi-sepanjang-2026",
  },
];
