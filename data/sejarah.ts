import type { TimelineEvent } from "@/types";
import { gambarSejarah } from "@/data/gambar";

export const sejarahData: TimelineEvent[] = [
  {
    slug: "penemuan-batu-bara",
    tahun: "1867",
    judul: {
      id: "Penemuan Batu Bara Ombilin",
      en: "Discovery of Ombilin Coal",
    },
    ringkasan: {
      id: "Insinyur Belanda Willem Hendrik de Greve menemukan endapan batu bara berkualitas tinggi di lembah Ombilin, mengubah desa kecil ini selamanya.",
      en: "Dutch engineer Willem Hendrik de Greve discovered high-quality coal deposits in the Ombilin valley, forever changing this small village.",
    },
    detail: {
      id: "Tahun 1867, geolog Belanda Willem Hendrik de Greve menemukan cadangan batu bara berkualitas tinggi di kawasan Ombilin saat menyurvei pedalaman Sumatera Barat.[1] Sayangnya, ia tidak sempat melihat hasil temuannya berkembang — de Greve meninggal karena kecelakaan saat melanjutkan eksplorasi di Sungai Indragiri pada 1872.[2] Penelitiannya kemudian diteruskan oleh dua insinyur lain, Jacobus Cluysenaer dan Daniel Veth. Dari sinilah seluruh sejarah pertambangan Sawahlunto dimulai.[2]",
      en: "In 1867, Dutch geologist Willem Hendrik de Greve discovered high-quality coal reserves in the Ombilin area while surveying the interior of West Sumatra.[1] Sadly, he never saw his discovery develop — de Greve died in an accident while continuing exploration on the Indragiri River in 1872.[2] His research was then continued by two other engineers, Jacobus Cluysenaer and Daniel Veth. This is where Sawahlunto's entire mining history began.[2]",
    },
    gambar: gambarSejarah["penemuan-batu-bara"],
    referensi: [
      {
        nomor: 1,
        sumber: "Kompas.com — Sejarah Sawahlunto",
        url: "https://medan.kompas.com/read/2022/01/15/154345278/sejarah-sawahlunto-kota-pemilik-tambang-batu-bara-pertama-di-indonesia-dan",
      },
      {
        nomor: 2,
        sumber: "Indonesia.go.id — Jejak Sejarah Tambang Batu Bara Ombilin",
        url: "https://indonesia.go.id/ragam/pariwisata/pariwisata/jejak-sejarah-tambang-batu-bara-ombilin-menjadi-situs-warisan-dunia",
      },
    ],
  },
  {
    slug: "kota-didirikan",
    tahun: "1888",
    judul: {
      id: "Sawahlunto Didirikan sebagai Kota",
      en: "Sawahlunto Founded as a City",
    },
    ringkasan: {
      id: "Pemerintah Hindia Belanda menetapkan kawasan ini sebagai kota pada 1 Desember 1888 — tanggal yang kini diperingati sebagai Hari Jadi Kota Sawahlunto.",
      en: "The Dutch East Indies government designated this area as a city on December 1, 1888 — a date now commemorated as Sawahlunto's City Anniversary.",
    },
    detail: {
      id: "Pada 1 Desember 1888, pemerintah Hindia Belanda menetapkan batas-batas wilayah ibu kota Afdeeling di kawasan ini — tanggal yang sejak itu diperingati sebagai Hari Jadi Kota Sawahlunto.[1] Dari desa kecil yang dikelilingi hutan, kawasan ini berangsur berkembang menjadi permukiman pekerja tambang dengan berbagai fasilitas pendukung.",
      en: "On December 1, 1888, the Dutch East Indies government established the boundaries of the Afdeeling capital in this area — a date that has since been commemorated as Sawahlunto's City Anniversary.[1] From a small village surrounded by forest, the area gradually developed into a mining workers' settlement with various supporting facilities.",
    },
    gambar: gambarSejarah["kota-didirikan"],
    referensi: [
      {
        nomor: 1,
        sumber: "Portal Resmi Kota Sawahlunto",
        url: "https://portal.sawahluntokota.go.id/sejarah-kota-sawahlunto/",
      },
    ],
  },
  {
    slug: "tambang-dibuka",
    tahun: "1891",
    judul: {
      id: "Tambang Resmi Dibuka",
      en: "Mine Officially Opened",
    },
    ringkasan: {
      id: "Setelah disahkan parlemen Belanda, penambangan batu bara dimulai secara resmi di Ombilin dengan investasi besar dari pemerintah kolonial.",
      en: "After approval by the Dutch parliament, coal mining officially began at Ombilin with massive investment from the colonial government.",
    },
    detail: {
      id: "Setelah proses yang panjang, parlemen Belanda akhirnya mengesahkan undang-undang pertambangan batu bara Ombilin pada akhir November 1891.[1] Pemerintah kolonial lalu menanamkan investasi besar — sekitar 5,5 juta gulden — untuk membangun permukiman dan fasilitas penambangan. Lembah yang dulunya sunyi ini berubah jadi kawasan industri yang ramai.[1]",
      en: "After a lengthy process, the Dutch parliament finally passed the Ombilin coal mining law in late November 1891.[1] The colonial government then invested heavily — around 5.5 million guilders — to build settlements and mining facilities. This once-quiet valley transformed into a bustling industrial zone.[1]",
    },
    gambar: gambarSejarah["tambang-dibuka"],
    referensi: [
      {
        nomor: 1,
        sumber: "Indonesia.go.id",
        url: "https://indonesia.go.id/ragam/pariwisata/pariwisata/jejak-sejarah-tambang-batu-bara-ombilin-menjadi-situs-warisan-dunia",
      },
    ],
  },
  {
    slug: "jalur-kereta",
    tahun: "1894",
    judul: {
      id: "Jalur Kereta Sawahlunto–Teluk Bayur",
      en: "Sawahlunto–Teluk Bayur Railway Line",
    },
    ringkasan: {
      id: "Rel kereta dibangun untuk mengangkut batu bara dari Sawahlunto ke pelabuhan Teluk Bayur di Padang.",
      en: "A railway was built to transport coal from Sawahlunto to the port of Teluk Bayur in Padang.",
    },
    detail: {
      id: "Untuk mengangkut hasil tambang, Belanda membangun jalur kereta rel gigi sepanjang 155 kilometer yang menghubungkan Sawahlunto dengan Pelabuhan Emmahaven (kini Teluk Bayur) di Padang.[1] Infrastruktur ini menjadi tulang punggung distribusi batu bara Ombilin untuk memenuhi kebutuhan energi di Hindia Belanda.[2] Stasiun kereta dengan fasilitas lengkap dibangun pada 1918, kini menjadi Museum Kereta Api Sawahlunto.",
      en: "To transport mining output, the Dutch built a 155-kilometer rack railway connecting Sawahlunto to Emmahaven Port (now Teluk Bayur) in Padang.[1] This infrastructure became the backbone of Ombilin coal distribution to meet the Dutch East Indies' energy needs.[2] A fully-equipped train station was built in 1918, now home to the Sawahlunto Railway Museum.",
    },
    gambar: gambarSejarah["jalur-kereta"],
    referensi: [
      {
        nomor: 1,
        sumber: "UNESCO World Heritage Centre",
        url: "https://whc.unesco.org/en/list/1610/",
      },
      {
        nomor: 2,
        sumber: "Indonesia.go.id",
        url: "https://indonesia.go.id/ragam/pariwisata/pariwisata/jejak-sejarah-tambang-batu-bara-ombilin-menjadi-situs-warisan-dunia",
      },
    ],
  },
  {
    slug: "orang-rantai",
    tahun: "Era kolonial",
    judul: {
      id: "Kerja Paksa di Bawah Kolonial",
      en: "Forced Labor Under Colonial Rule",
    },
    ringkasan: {
      id: "Orang Rantai — Ribuan pekerja, banyak di antaranya tahanan, dipaksa bekerja dengan kaki dirantai dalam kondisi yang tidak manusiawi.",
      en: "Orang Rantai — Thousands of workers, many of them prisoners, were forced to work with their feet chained in inhumane conditions.",
    },
    detail: {
      id: "Tenaga kerja tambang Ombilin datang dari latar yang beragam: warga Minangkabau setempat, pekerja kontrak dari Jawa dan Tiongkok, serta tahanan dari berbagai wilayah jajahan Belanda.[1] Kelompok tahanan inilah yang dipekerjakan secara paksa dengan kaki dirantai — mereka yang kemudian dikenal sebagai 'orang rantai'.[1] Jejak mereka masih bisa disaksikan hari ini di terowongan Lubang Mbah Soero, yang namanya diambil dari seorang mandor asal Jawa bernama Soerono. Dari percampuran berbagai latar belakang pekerja inilah lahir bahasa kreol unik bernama Tansi (disebut UNESCO sebagai 'Tangsi'), yang kini terus dijaga oleh generasi muda Sawahlunto.[2]",
      en: "The Ombilin mine workforce came from diverse backgrounds: local Minangkabau residents, contract workers from Java and China, and prisoners from various Dutch colonial territories.[1] It was this group of prisoners who were forced to work with their feet shackled — they became known as 'orang rantai' (chained people).[1] Their traces can still be seen today in the Lubang Mbah Soero tunnel, named after a Javanese foreman named Soerono. From this mixing of backgrounds was born a unique creole language called Tansi (referred to by UNESCO as 'Tangsi'), still preserved by Sawahlunto's younger generations today.[2]",
    },
    gambar: gambarSejarah["orang-rantai"],
    referensi: [
      {
        nomor: 1,
        sumber: "BBC Indonesia",
        url: "https://www.bbc.com/indonesia/articles/cgm704rzjl3o",
      },
      {
        nomor: 2,
        sumber: "UNESCO World Heritage Centre",
        url: "https://whc.unesco.org/en/list/1610/",
      },
    ],
  },
  {
    slug: "puncak-kejayaan",
    tahun: "1920–1921",
    judul: {
      id: "Puncak Kejayaan Tambang",
      en: "The Mine's Golden Age",
    },
    ringkasan: {
      id: "Produksi batu bara Sawahlunto mencapai puncaknya, bahkan pernah memenuhi 90% kebutuhan energi Hindia Belanda.",
      en: "Sawahlunto's coal production reached its peak, at one point supplying 90% of the Dutch East Indies' energy needs.",
    },
    detail: {
      id: "Awal abad ke-20 jadi masa kejayaan tambang Ombilin. Produksinya bahkan memenuhi hingga 90 persen kebutuhan energi di seluruh Hindia Belanda, dikerjakan oleh ribuan pekerja dan hampir seratus staf Belanda.[1] Sawahlunto pun tumbuh jadi kota besar di pantai barat Sumatera — hanya kalah ukuran dari Padang.[1]",
      en: "The early 20th century marked the golden age of the Ombilin mine. Its production supplied up to 90 percent of the energy needs across the Dutch East Indies, managed by thousands of workers and nearly a hundred Dutch staff.[1] Sawahlunto grew into a major city on the west coast of Sumatra — second only to Padang in size.[1]",
    },
    gambar: gambarSejarah["puncak-kejayaan"],
    referensi: [
      {
        nomor: 1,
        sumber: "1001indonesia.net",
        url: "https://1001indonesia.net/tambang-batubara-ombilin-sawahlunto/",
      },
    ],
  },
  {
    slug: "kota-nyaris-mati",
    tahun: "Awal 2000-an",
    judul: {
      id: "Sawahlunto Nyaris Mati",
      en: "Sawahlunto: A Ghost Town?",
    },
    ringkasan: {
      id: "Cadangan batu bara menipis, produksi terhenti, dan penduduk kota menyusut drastis.",
      en: "Coal reserves dwindled, production halted, and the city's population shrank drastically.",
    },
    detail: {
      id: "Setelah kemerdekaan, tambang Ombilin dikelola pemerintah Indonesia. Memasuki awal tahun 2000-an, cadangan batu bara di area tambang terbuka mulai menipis dan operasi skala besar berakhir pada 2002.[1] Banyak penduduk kehilangan pekerjaan dan pindah ke kota lain, membuat Sawahlunto berada di ambang menjadi kota mati.",
      en: "After independence, the Ombilin mine was managed by the Indonesian government. Entering the early 2000s, coal reserves in the open-pit mining area began to thin and large-scale operations ended in 2002.[1] Many residents lost their jobs and moved to other cities, leaving Sawahlunto on the verge of becoming a ghost town.",
    },
    gambar: gambarSejarah["kota-nyaris-mati"],
    referensi: [
      {
        nomor: 1,
        sumber: "Dokumen Nominasi UNESCO",
        url: "https://whc.unesco.org/document/176199",
      },
      {
        nomor: 2,
        sumber: "Indonesiana.id",
        url: "https://www.indonesiana.id/read/184576/sawahlunto-dari-kota-tambang-ke-warisan-dunia",
      },
    ],
  },
  {
    slug: "warisan-dunia-unesco",
    tahun: "2019",
    judul: {
      id: "Pengakuan Warisan Dunia UNESCO",
      en: "UNESCO World Heritage Recognition",
    },
    ringkasan: {
      id: "Setelah bertahun-tahun upaya pelestarian, Tambang Batu Bara Ombilin ditetapkan UNESCO sebagai Warisan Dunia kelima Indonesia.",
      en: "After years of conservation efforts, the Ombilin Coal Mine was designated by UNESCO as Indonesia's fifth World Heritage Site.",
    },
    detail: {
      id: "Alih-alih menyerah, Sawahlunto memilih merawat warisan tambangnya. Usaha itu membuahkan hasil pada 6 Juli 2019, ketika UNESCO menetapkan Tambang Batu Bara Ombilin sebagai Warisan Dunia kelima milik Indonesia — mencakup 12 komponen situs di tiga wilayah: kawasan tambang dan kota tambang Sawahlunto, jalur kereta sepanjang 155 km, serta pelabuhan Emmahaven.[1] Pengakuan ini diberikan atas dua alasan: sebagai bukti pertukaran teknologi pertambangan antara Eropa dan wilayah jajahannya, dan sebagai contoh luar biasa perpaduan teknologi dengan kearifan lokal dalam sejarah manusia.[1]",
      en: "Instead of giving up, Sawahlunto chose to preserve its mining heritage. Those efforts bore fruit on July 6, 2019, when UNESCO designated the Ombilin Coal Mine as Indonesia's fifth World Heritage Site — encompassing 12 site components across three areas: the Sawahlunto mining area and mining town, the 155 km railway, and Emmahaven port.[1] This recognition was granted for two reasons: as evidence of the exchange of mining technology between Europe and its colonies, and as an outstanding example of the integration of technology with local wisdom in human history.[1]",
    },
    gambar: gambarSejarah["warisan-dunia-unesco"],
    referensi: [
      {
        nomor: 1,
        sumber: "UNESCO World Heritage Centre",
        url: "https://whc.unesco.org/en/list/1610/",
      },
    ],
  },
];

export function getSejarahBySlug(slug: string): TimelineEvent | undefined {
  return sejarahData.find((item) => item.slug === slug);
}

export function getAdjacentSejarah(slug: string): {
  prev: TimelineEvent | null;
  next: TimelineEvent | null;
} {
  const index = sejarahData.findIndex((item) => item.slug === slug);
  return {
    prev: index > 0 ? sejarahData[index - 1] : null,
    next: index < sejarahData.length - 1 ? sejarahData[index + 1] : null,
  };
}
