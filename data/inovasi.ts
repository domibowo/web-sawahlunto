import type { Bilingual, GambarEntry, Reference } from "@/types";
import { gambarInovasi } from "@/data/gambar";

export type InovasiDimensi = {
  slug: string;
  kategori: string; // e.g. "Smart Branding"
  nama: string;     // e.g. "Dada Warsina"
  kepanjangan: Bilingual;
  deskripsi: Bilingual;
  detail: Bilingual;
};

export type InovasiSection = {
  id: string;
  judul: Bilingual;
  isi: Bilingual;
  gambar: GambarEntry;
  dimensi?: InovasiDimensi[];
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
      id: "Pada 2023, Sawahlunto terpilih dalam 'Gerakan Menuju 100 Smart City' — program nasional Kementerian Komunikasi dan Informatika RI yang diluncurkan sejak 2017 dan didukung oleh enam kementerian, termasuk Kemendagri dan Bappenas.[5][6] Program ini membimbing kota-kota menyusun Masterplan Smart City agar teknologi benar-benar meningkatkan pelayanan publik dan mempercepat potensi daerah.[7] Di Sawahlunto, Diskominfo menggelar serangkaian bimbingan teknis sepanjang 2023, didampingi dewan pakar dari Universitas Andalas: Prof. Ikhwana Elfitri (Fakultas Teknik) dan Hasdi Putra (Fakultas Teknologi Informasi).[6] Enam inovasi pun dipresentasikan, satu per dimensi Smart City:",
      en: "In 2023, Sawahlunto was selected for the 'Towards 100 Smart Cities Movement' — a national programme by Indonesia's Ministry of Communication and Information Technology launched in 2017 and backed by six ministries, including the Ministry of Home Affairs and Bappenas.[5][6] The programme guides cities to develop Smart City Master Plans that ensure technology genuinely improves public services and accelerates local potential.[7] In Sawahlunto, the Diskominfo office held a series of technical guidance sessions throughout 2023, supported by expert advisors from Universitas Andalas: Prof. Ikhwana Elfitri (Faculty of Engineering) and Hasdi Putra (Faculty of Information Technology).[6] Six innovations were presented, one per Smart City dimension:",
    },
    gambar: gambarInovasi["gerakan-smart-city"],
    dimensi: [
      {
        slug: "dada-warsina",
        kategori: "Smart Branding",
        nama: "Dada Warsina",
        kepanjangan: {
          id: "Digitalisasi Data Warisan Budaya Dunia",
          en: "Digitalisation of World Cultural Heritage Data",
        },
        deskripsi: {
          id: "Platform web pelestarian dan akses warisan budaya lokal Sawahlunto secara digital.",
          en: "A web platform for digitally preserving and accessing Sawahlunto's local cultural heritage.",
        },
        detail: {
          id: "Dada Warsina adalah platform web yang dikembangkan untuk menyimpan, mengelola, dan menyebarluaskan data warisan budaya Sawahlunto — mulai dari dokumentasi situs bersejarah, arsip foto, tradisi lokal, hingga artefak yang terkait dengan periode tambang kolonial. Dalam konteks Smart Branding, inovasi ini menjadikan kekayaan budaya Sawahlunto sebagai 'wajah digital' kota: siapa pun, dari mana pun, dapat mengakses dan memahami warisan dunia yang tersimpan di kota ini. Platform ini juga berfungsi sebagai arsip jangka panjang agar aset budaya tidak hilang ditelan waktu, sekaligus mendukung promosi wisata budaya yang berbasis data otentik.",
          en: "Dada Warsina is a web platform developed to store, manage, and disseminate data on Sawahlunto's cultural heritage — from documentation of historical sites and photo archives to local traditions and artefacts related to the colonial mining era. In the context of Smart Branding, this innovation turns Sawahlunto's cultural wealth into the city's 'digital face': anyone, from anywhere, can access and understand the world heritage preserved in this city. The platform also serves as a long-term archive to ensure cultural assets are not lost over time, while supporting data-driven cultural tourism promotion.",
        },
      },
      {
        slug: "smartklim",
        kategori: "Smart Environment",
        nama: "Smartklim",
        kepanjangan: {
          id: "Smart Program Kampung Iklim",
          en: "Smart Climate Village Programme",
        },
        deskripsi: {
          id: "Pemantauan lingkungan dan iklim berbasis data untuk mendukung ketahanan ekologis kota.",
          en: "Data-driven environmental and climate monitoring to support the city's ecological resilience.",
        },
        detail: {
          id: "Smartklim merupakan inovasi berbasis data yang memperluas Program Kampung Iklim (Proklim) dari Kementerian Lingkungan Hidup ke dalam ekosistem digital kota. Di Sawahlunto — yang sebagian wilayahnya pernah menjadi kawasan tambang terbuka — pemantauan kondisi lingkungan menjadi sangat krusial. Smartklim mengintegrasikan sensor lingkungan dan pelaporan digital dari tingkat kelurahan untuk memantau kualitas udara, kondisi tutupan lahan, dan potensi bencana ekologis. Data yang terkumpul digunakan sebagai dasar kebijakan pembangunan hijau dan rehabilitasi lahan bekas tambang, selaras dengan komitmen Sawahlunto sebagai kota warisan dunia yang bertanggung jawab terhadap lingkungannya.",
          en: "Smartklim is a data-driven innovation that extends the national Climate Village Programme (Proklim) from the Ministry of Environment into the city's digital ecosystem. In Sawahlunto — parts of which were once open-cast mining areas — monitoring environmental conditions is critically important. Smartklim integrates environmental sensors and digital reporting from the kelurahan level to track air quality, land cover conditions, and ecological hazard risks. The collected data serves as a policy foundation for green development and reclamation of former mining land, in line with Sawahlunto's commitment as a world heritage city to its environmental responsibilities.",
        },
      },
      {
        slug: "simontok",
        kategori: "Smart Living",
        nama: "Simontok",
        kepanjangan: {
          id: "Sistem Informasi Monitoring Kegiatan",
          en: "Activity Monitoring Information System",
        },
        deskripsi: {
          id: "Sistem pemantauan kegiatan infrastruktur dari Dinas PUPR untuk layanan kota yang lebih responsif.",
          en: "An infrastructure activity monitoring system from the Public Works Office for more responsive city services.",
        },
        detail: {
          id: "Simontok dikembangkan oleh Dinas Pekerjaan Umum dan Penataan Ruang (PUPR) Kota Sawahlunto untuk menjawab tantangan klasik: bagaimana memastikan proyek infrastruktur berjalan sesuai jadwal, anggaran, dan spesifikasi teknis tanpa harus mengandalkan laporan manual yang lambat dan rentan kesalahan. Sistem ini memungkinkan petugas lapangan melaporkan progres kegiatan pembangunan secara real-time — dilengkapi foto, koordinat lokasi, dan catatan kendala — langsung dari perangkat seluler. Hasil pemantauan terakumulasi dalam dasbor terpusat yang bisa diakses dinas kapan saja. Dengan Simontok, masyarakat pun dapat mengetahui status pembangunan infrastruktur di sekitar mereka, mendorong akuntabilitas dan kepercayaan publik terhadap layanan kota.",
          en: "Simontok was developed by Sawahlunto's Public Works and Spatial Planning Office (Dinas PUPR) to address a classic challenge: how to ensure that infrastructure projects run on schedule, within budget, and to technical specifications without relying on slow, error-prone manual reporting. The system allows field officers to report construction progress in real time — complete with photos, location coordinates, and problem notes — directly from their mobile devices. Monitoring results accumulate in a central dashboard accessible to the department at any time. With Simontok, residents can also track the status of infrastructure development in their area, promoting accountability and public trust in city services.",
        },
      },
      {
        slug: "sijari-nan-satu",
        kategori: "Smart Living",
        nama: "Sijari Nan Satu",
        kepanjangan: {
          id: "Sistem Jaringan Pelayanan Kesehatan Terpadu",
          en: "Integrated Health Services Network System",
        },
        deskripsi: {
          id: "Inovasi Dinas Kesehatan untuk mengintegrasikan layanan kesehatan masyarakat dalam satu jaringan digital.",
          en: "A Health Office innovation to integrate public health services into a single digital network.",
        },
        detail: {
          id: "Sijari Nan Satu adalah inovasi dari Dinas Kesehatan Kota Sawahlunto yang bertujuan menyatukan berbagai titik layanan kesehatan — puskesmas, posyandu, klinik kelurahan — ke dalam satu jaringan informasi digital yang terhubung. Sebelum sistem ini ada, data pasien, stok obat, dan jadwal imunisasi tersebar di catatan manual masing-masing fasilitas, menyulitkan koordinasi dan pengambilan keputusan. Sijari Nan Satu memungkinkan petugas kesehatan mengakses rekam medis warga secara terpadu, memantau ketersediaan obat di seluruh fasilitas, dan merespons kebutuhan layanan lebih cepat. Nama 'Sijari Nan Satu' sendiri mencerminkan filosofi Minangkabau tentang kekuatan jari yang menyatu — bahwa jaringan layanan yang terkoneksi lebih kuat dari titik-titik yang berdiri sendiri.",
          en: "Sijari Nan Satu is an innovation by Sawahlunto's Health Office aimed at connecting various health service points — community health centres (puskesmas), posyandu clinics, and kelurahan health posts — into a single connected digital information network. Before this system existed, patient data, medicine stocks, and immunisation schedules were scattered across manual records at each facility, making coordination and decision-making difficult. Sijari Nan Satu allows health workers to access residents' medical records in an integrated way, monitor medicine availability across all facilities, and respond to service needs more quickly. The name 'Sijari Nan Satu' itself reflects a Minangkabau philosophy about the strength of united fingers — that a connected service network is stronger than isolated points.",
        },
      },
      {
        slug: "jempol-narsis",
        kategori: "Smart Society",
        nama: "Jempol Narsis",
        kepanjangan: {
          id: "Jemput Bola Nyasarin KTP Siswa",
          en: "Door-to-Door Student ID Card Service",
        },
        deskripsi: {
          id: "Layanan pengurusan KTP jemput bola langsung ke sekolah, memudahkan pelajar mengurus administrasi kependudukan.",
          en: "A door-to-door ID card service that goes directly to schools, making it easier for students to handle civil registration.",
        },
        detail: {
          id: "Jempol Narsis adalah terobosan dalam pelayanan administrasi kependudukan yang menyasar kelompok yang paling sering terlupakan: para pelajar yang baru memasuki usia wajib KTP. Alih-alih mengharuskan siswa dan orang tua antre di Dinas Kependudukan dan Catatan Sipil (Disdukcapil), petugas dari Disdukcapil Sawahlunto yang justru mendatangi sekolah-sekolah secara langsung. Dengan membawa perangkat perekaman biometrik mobile — sidik jari dan foto — seluruh proses pendaftaran KTP dapat diselesaikan di lingkungan sekolah dalam satu sesi. Program ini juga berhasil menjangkau siswa dari daerah terpencil yang selama ini kesulitan mengakses kantor pemerintah. Hasilnya: angka kepemilikan KTP di kalangan pelajar Sawahlunto meningkat signifikan, dan generasi muda kota ini tercatat dalam sistem kependudukan digital lebih awal.",
          en: "Jempol Narsis is a breakthrough in civil registration services targeting a commonly overlooked group: students who have just reached the age requiring a national ID card (KTP). Rather than requiring students and parents to queue at the Civil Registration Office (Disdukcapil), it is the Disdukcapil officers who come directly to the schools. Armed with mobile biometric recording devices — fingerprints and photos — the entire KTP registration process can be completed on school grounds in a single session. The programme also successfully reaches students from remote areas who previously found it difficult to access government offices. The result: KTP ownership rates among Sawahlunto students have risen significantly, and the city's young generation is now recorded in the digital civil registration system at an earlier age.",
        },
      },
      {
        slug: "info-sunto",
        kategori: "Smart Economy",
        nama: "Info Sunto",
        kepanjangan: {
          id: "Informasi Sawahlunto",
          en: "Sawahlunto Information",
        },
        deskripsi: {
          id: "Platform informasi ekonomi dan UMKM kota Sawahlunto untuk mendorong pertumbuhan usaha lokal secara digital.",
          en: "An economic and UMKM information platform for Sawahlunto to digitally boost local business growth.",
        },
        detail: {
          id: "Info Sunto adalah platform digital yang menjadi pusat informasi ekonomi kota Sawahlunto — menghubungkan pelaku UMKM, wisatawan, investor, dan masyarakat umum dalam satu ekosistem informasi yang mudah diakses. Melalui Info Sunto, para pengusaha lokal dapat mendaftarkan produk dan jasa mereka, sementara pengunjung kota bisa menemukan rekomendasi kuliner, kerajinan, dan layanan wisata dari tangan pertama. Platform ini juga memuat data ekonomi lokal yang dapat digunakan oleh pemerintah kota untuk memantau perkembangan UMKM dan merancang intervensi kebijakan yang tepat sasaran. Dalam jangka panjang, Info Sunto dirancang sebagai jembatan antara potensi ekonomi lokal Sawahlunto dan pasar yang lebih luas — baik regional maupun nasional.",
          en: "Info Sunto is a digital platform serving as the economic information hub of Sawahlunto — connecting UMKM operators, tourists, investors, and the general public within a single, easily accessible information ecosystem. Through Info Sunto, local businesses can register their products and services, while city visitors can find first-hand recommendations for culinary experiences, crafts, and tourism services. The platform also contains local economic data that the city government can use to monitor UMKM development and design targeted policy interventions. In the long term, Info Sunto is designed as a bridge between Sawahlunto's local economic potential and broader markets — both regional and national.",
        },
      },
      {
        slug: "sakato-plan",
        kategori: "Smart Governance",
        nama: "Sakato Plan",
        kepanjangan: {
          id: "Sistem Perencanaan Pembangunan Daerah",
          en: "Regional Development Planning System",
        },
        deskripsi: {
          id: "Sistem digital perencanaan pembangunan daerah yang mengintegrasikan data antar dinas untuk tata kelola yang lebih transparan.",
          en: "A digital regional development planning system that integrates data across departments for more transparent governance.",
        },
        detail: {
          id: "Sakato Plan adalah sistem perencanaan pembangunan daerah berbasis digital yang menjadi tulang punggung dimensi Smart Governance Sawahlunto. Nama 'Sakato' diambil dari kata Minangkabau yang berarti 'sepakat' atau 'mufakat' — mencerminkan semangat musyawarah yang dijaga dalam proses perencanaan yang kini lebih transparan dan berbasis data. Sistem ini mengintegrasikan masukan dari seluruh dinas, kelurahan, dan unit kerja pemerintahan ke dalam satu platform perencanaan yang dapat diakses bersama. Dengan Sakato Plan, tumpang-tindih program antar dinas dapat diminimalkan, alokasi anggaran menjadi lebih terukur, dan masyarakat dapat memantau rencana pembangunan yang menyentuh wilayah mereka. Ini adalah bagian dari komitmen Sawahlunto untuk menjadi kota yang tidak hanya modern secara fisik, tetapi juga terbuka dan akuntabel dalam tata kelolanya.",
          en: "Sakato Plan is a digital regional development planning system that forms the backbone of Sawahlunto's Smart Governance dimension. The name 'Sakato' comes from the Minangkabau word meaning 'consensus' or 'agreed' — reflecting the spirit of deliberation preserved in a planning process that is now more transparent and data-driven. The system integrates input from all government departments, kelurahan, and work units into a single shared planning platform. With Sakato Plan, programme overlaps between departments can be minimised, budget allocation becomes more measurable, and residents can track development plans affecting their area. This is part of Sawahlunto's commitment to being a city that is not only physically modern, but also open and accountable in its governance.",
        },
      },
    ],
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
    id: "Di tengah upaya menjadikan Sawahlunto kota wisata, ada babak baru yang patut dicermati: PT Bukit Asam (PTBA) menargetkan operasional tambang Ombilin kembali pada akhir 2026 — dipercepat dari rencana awal 2027, dengan dukungan BPI Danantara.[8] Cadangan batu bara yang tersisa diperkirakan mencapai 102 juta ton, dengan kalori tinggi (6.000–7.000 kkal/kg).[9] PTBA akan memulai dari tambang terbuka (open-pit) sebesar 2 juta ton, sebelum berlanjut ke operasi bawah tanah untuk sisa 100 juta ton. Saat ini prosesnya masih dalam tahap AMDAL, studi kelayakan, dan persiapan infrastruktur — termasuk relokasi jaringan listrik.[8] Pemko Sawahlunto menyambut rencana ini dengan syarat tegas: manfaat ekonomi dan lapangan kerja harus berjalan seiring perlindungan masyarakat sekitar, dan kajian dampak lingkungan, sosial, serta keselamatan wajib tuntas sebelum pelaksanaan lebih lanjut.[10] Bagaimana kota ini menyeimbangkan status Warisan Dunia UNESCO dengan kebangkitan ekonomi tambang, akan menjadi bagian baru dari cerita panjangnya.",
    en: "Amid efforts to make Sawahlunto a tourism city, a new chapter deserves close attention: PT Bukit Asam (PTBA) is targeting a return to Ombilin mine operations by late 2026 — accelerated from an original 2027 plan, backed by BPI Danantara.[8] Remaining coal reserves are estimated at 102 million tonnes, with high calorific value (6,000–7,000 kcal/kg).[9] PTBA will begin with open-pit extraction of 2 million tonnes before progressing to underground operations for the remaining 100 million tonnes. The project is currently in the environmental impact assessment (Amdal) stage, alongside feasibility studies and infrastructure preparation — including power line relocation.[8] The Sawahlunto City Government has welcomed the plan with firm conditions: economic benefits and job creation must go hand in hand with community protection, and comprehensive environmental, social, and safety assessments must be completed before further implementation.[10] How this city balances its UNESCO World Heritage status with the revival of its mining economy will become a new chapter in its long story.",
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
    sumber: "Portal Resmi Kota Sawahlunto — Bimbingan Teknis Smart City Tahap 3",
    url: "https://sawahluntokota.go.id/index.php/baca/bimbingan-teknis-kota-sawahlunto-menuju-smart-city-tahap-3-kembali-dilakukan-di-sawahlunto",
  },
  {
    nomor: 6,
    sumber: "Sumbar Fokus — Diskominfo Sawahlunto Gelar Briefing Bimtek Gerakan Menuju 100 Smart City",
    url: "https://sumbarfokus.com/diskominfo-sawahlunto-gelar-briefing-bimtek-gerakan-menuju-100-smart-city/",
  },
  {
    nomor: 7,
    sumber: "National Geographic Indonesia — Gerakan Menuju 100 Smart City, Meneruskan Momentum Membangun Negeri",
    url: "https://nationalgeographic.grid.id/read/131917212/gerakan-menuju-100-smart-city-meneruskan-momentum-membangun-negeri",
  },
  {
    nomor: 8,
    sumber: "CNBC Indonesia — PTBA Targetkan Bisa Nambang Lagi di Ombilin Akhir 2026",
    url: "https://www.cnbcindonesia.com/news/20260407152857-4-724602/ptba-targetkan-bisa-nambang-lagi-di-ombilin-akhir-2026",
  },
  {
    nomor: 9,
    sumber: "IMA API — PTBA Garap Kembali Tambang Ombilin di Sumbar, Siap Beroperasi Akhir 2026",
    url: "https://ima-api.org/ptba-garap-kembali-tambang-ombilin-di-sumbar-siap-beroperasi-akhir-2026/",
  },
  {
    nomor: 10,
    sumber: "Portal Resmi Kota Sawahlunto — Pemko Sawahlunto Tekankan Keseimbangan Kepentingan Publik dan Investasi Tambang PT Bukit Asam",
    url: "https://sawahluntokota.go.id/baca/pemko-sawahlunto-tekankan-keseimbangan-kepentingan-publik-dan-investasi-tambang-pt-bukit-asam",
  },
];
