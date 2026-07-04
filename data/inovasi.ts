import type { Bilingual, Reference } from "@/types";
import { gambarInovasi } from "@/data/gambar";

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
    gambar: gambarInovasi["unesco-berkelanjutan"],
  },
  {
    id: "just-not-green",
    judul: {
      id: "Inovasi 'Just Not Green': Dari Lubang Tambang ke Destinasi Wisata",
      en: "The 'Just Not Green' Innovation: From Mine Shafts to Tourism Destinations",
    },
    isi: {
      id: "Pada 2014, PT Bukit Asam menyerahkan 363,4 hektare bekas lahan tambang terbuka di kawasan Kandi dan Tanah Hitam kepada Pemerintah Kota Sawahlunto.[3] Alih-alih membiarkannya terbengkalai, Pemko Sawahlunto mengubah seluruh kawasan itu menjadi destinasi wisata dan ruang terbuka hijau lewat program yang dinamai 'Just Not Green' — sebuah pernyataan bahwa kawasan bekas tambang bisa menjadi lebih dari sekadar lahan hijau.[4] Dari program inilah lahir Taman Wisata Kandi, Kebun Buah Kandi, Camping Ground, Arena Road Race, dan berbagai ruang terbuka publik yang kini menjadi tujuan wisata keluarga.[3] Pada 2017, Kemendagri menilai inovasi ini layak masuk nominasi penghargaan nasional atas terobosannya mengubah bekas tambang jadi destinasi wisata yang produktif secara ekonomi bagi masyarakat.[4]",
      en: "In 2014, PT Bukit Asam transferred 363.4 hectares of former open-cast mine land in the Kandi and Tanah Hitam areas to the Sawahlunto City Government.[3] Rather than leaving it abandoned, Sawahlunto transformed the entire area into tourism destinations and green open spaces through a programme named 'Just Not Green' — a statement that former mining land can become more than just green space.[4] From this programme came Taman Wisata Kandi, Kebun Buah Kandi, a camping ground, a race track, and various public open spaces now popular with families.[3] In 2017, the Ministry of Home Affairs nominated this innovation for a national award for its breakthrough in transforming mine sites into economically productive tourist destinations.[4]",
    },
    gambar: gambarInovasi["just-not-green"],
  },
  {
    id: "gerakan-smart-city",
    judul: {
      id: "Sawahlunto dalam Gerakan Menuju 100 Smart City",
      en: "Sawahlunto in the 100 Smart Cities Movement",
    },
    isi: {
      id: "Pada 2023, Sawahlunto terpilih dalam 'Gerakan Menuju 100 Smart City' dari Kementerian Komunikasi dan Informatika RI — program nasional yang mendampingi kota-kota di Indonesia menyusun Masterplan Smart City masing-masing.[5] Di Sawahlunto, program ini didukung oleh dewan pakar dari Universitas Andalas (UNAND) Padang: Prof. Ikhwana Elfitri dari Fakultas Teknik dan Hasdi Putra dari Fakultas Teknologi Informasi.[5] Visi yang diusung: mewujudkan Sawahlunto berbasis Smart City untuk meningkatkan kualitas pelayanan publik dan daya tarik investasi, dengan pendekatan yang tidak hanya government tapi governance — berbasis kearifan lokal, bukan sekadar adopsi teknologi dari kota besar.[5]",
      en: "In 2023, Sawahlunto was selected for the 'Towards 100 Smart Cities Movement' by Indonesia's Ministry of Communication and Information Technology — a national programme guiding cities in developing their own Smart City Master Plans.[5] In Sawahlunto, the programme is supported by expert advisors from Universitas Andalas (UNAND) Padang: Prof. Ikhwana Elfitri from the Faculty of Engineering and Hasdi Putra from the Faculty of Information Technology.[5] The vision: to develop Sawahlunto as a Smart City to improve public service quality and investment attractiveness, with an approach that is not just government but governance — grounded in local wisdom, not merely adopting technology from larger cities.[5]",
    },
    gambar: gambarInovasi["gerakan-smart-city"],
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
    gambar: gambarInovasi["desa-kreatif-sikalang"],
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
    gambar: gambarInovasi["situs-ini-sendiri"],
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
  gambar: gambarInovasi["dinamika-tambang"],
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
  {
    nomor: 3,
    sumber: "Localise SDGs Indonesia — Inovasi Just Not Green Kota Sawahlunto",
    url: "https://localisesdgs-indonesia.org/beranda/cs/inovasi-just-not-green-kota-sawahlunto-sebagai-upaya-peningkatan-sektor-pariwisata",
  },
  {
    nomor: 4,
    sumber: "Tuxedovation Kemendagri — Just Not Green",
    url: "https://tuxedovation.inovasi.litbang.kemendagri.go.id/detail_inovasi/26579",
  },
  {
    nomor: 5,
    sumber: "Catatan Hasdi Putra UNAND — Gerakan Menuju 100 Smart City Sawahlunto",
    url: "https://staff.unand.ac.id/hasdiputra/2023/09/02/gerakan-menuju-100-smart-city-diskominfo-sawahlunto-gelar-briefing-bimbingan-teknis/",
  },
];
