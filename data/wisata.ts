import type { WisataItem, Reference } from "@/types";
import { gambarWisata } from "@/data/gambar";

export const wisataData: WisataItem[] = [
  {
    slug: "lubang-mbah-soero",
    nama: {
      id: "Lubang Mbah Soero",
      en: "Lubang Mbah Soero",
    },
    ringkasan: {
      id: "Terowongan tambang asli sepanjang ratusan meter yang sudah dipakai sejak 1892, kini bisa dijelajahi langsung dengan pemandu lokal.",
      en: "An original mining tunnel stretching hundreds of metres, in use since 1892 — now open for exploration with a local guide.",
    },
    detail: {
      id: "Lubang Mbah Soero adalah terowongan tambang batu bara yang sudah digunakan sejak 1892, dengan kedalaman mencapai 15 meter dari permukaan tanah.[1] Di kompleks yang sama, Galeri Infobox — bekas tempat penumpukan batu bara — kini menampilkan koleksi pakaian, peralatan, dan dokumen para pekerja tambang.[2] Pengunjung akan dipandu menyusuri terowongan asli yang dindingnya masih berbalut batu bara, lengkap dengan helm dan sepatu pengaman.",
      en: "Lubang Mbah Soero is a coal mining tunnel that has been in use since 1892, reaching a depth of 15 metres below the surface.[1] In the same complex, the Infobox Gallery — a former coal storage area — now displays clothing, tools, and documents belonging to mine workers.[2] Visitors are guided through the original tunnel, whose walls are still lined with coal, equipped with helmets and safety footwear.",
    },
    infoPraktis: {
      jamBuka: {
        id: "Senin–Jumat 08.00–16.00, Sabtu–Minggu 09.00–17.00 WIB",
        en: "Monday–Friday 08:00–16:00, Saturday–Sunday 09:00–17:00 WIB",
      },
      hargaTiket: {
        id: "Wisatawan domestik Rp15.000, mancanegara Rp50.000 (dapat berubah)",
        en: "Domestic visitors Rp15,000, international Rp50,000 (subject to change)",
      },
      tips: {
        id: "Pakai sepatu tertutup dan ikuti arahan pemandu di sepanjang terowongan.",
        en: "Wear closed-toe shoes and follow the guide's instructions throughout the tunnel.",
      },
    },
    gambar: gambarWisata["lubang-mbah-soero"],
  },
  {
    slug: "museum-goedang-ransoem",
    nama: {
      id: "Museum Goedang Ransoem",
      en: "Museum Goedang Ransoem",
    },
    ringkasan: {
      id: "Bekas dapur umum tambang yang dulu memasak ribuan porsi makanan setiap hari, kini jadi museum dengan koleksi alat masak raksasa.",
      en: "A former mine canteen that once cooked thousands of portions daily, now a museum housing its giant cooking equipment.",
    },
    detail: {
      id: "Dibangun pemerintah kolonial Belanda pada 1918, dapur ini dulu memasak lebih dari 3.900 kilogram nasi setiap hari untuk pekerja tambang, keluarga pekerja, dan pasien rumah sakit — menggunakan sistem uap dari tungku buatan Jerman tahun 1894 yang masih bisa disaksikan hingga kini.[3] Gedung ini resmi dibuka sebagai museum pada 2005.",
      en: "Built by the Dutch colonial government in 1918, this kitchen once cooked more than 3,900 kilograms of rice every day for mine workers, their families, and hospital patients — using a steam system powered by a German-made furnace from 1894, still on display today.[3] The building officially opened as a museum in 2005.",
    },
    infoPraktis: {
      jamBuka: {
        id: "Setiap hari 08.00–17.00 WIB",
        en: "Daily 08:00–17:00 WIB",
      },
      hargaTiket: {
        id: "Dewasa Rp10.000, anak Rp7.000, mancanegara Rp50.000 (dapat berubah)",
        en: "Adult Rp10,000, child Rp7,000, international Rp50,000 (subject to change)",
      },
      tips: {
        id: "Lokasinya hanya sekitar 200 meter dari Lubang Mbah Soero — bisa dikunjungi sekaligus dalam satu jalan kaki.",
        en: "Located only about 200 metres from Lubang Mbah Soero — both sites can be visited together on foot.",
      },
    },
    gambar: gambarWisata["museum-goedang-ransoem"],
  },
  {
    slug: "museum-kereta-api",
    nama: {
      id: "Museum Kereta Api & Mak Itam",
      en: "Railway Museum & Mak Itam",
    },
    ringkasan: {
      id: "Rumah bagi lokomotif legendaris Mak Itam, ikon kota yang dulu menarik gerbong batu bara menuju Teluk Bayur.",
      en: "Home to the legendary Mak Itam locomotive, the city's icon that once hauled coal wagons to Teluk Bayur.",
    },
    detail: {
      id: "Stasiun ini dibangun pada 1918 sebagai bagian dari jalur kereta rel gigi sepanjang 155 kilometer yang menghubungkan Sawahlunto dengan Pelabuhan Emmahaven (kini Teluk Bayur).[4] Lokomotif Mak Itam yang dipajang di sini menjadi salah satu ikon paling dikenal dari Sawahlunto, dan sesekali kembali beroperasi saat acara-acara khusus kota.",
      en: "This station was built in 1918 as part of a 155-kilometre rack railway line connecting Sawahlunto to Emmahaven Port (now Teluk Bayur).[4] The Mak Itam locomotive on display here is one of Sawahlunto's most recognisable icons, and occasionally runs again during special city events.",
    },
    infoPraktis: {
      jamBuka: {
        id: "Mengikuti jam operasional museum setempat, sebaiknya dikonfirmasi sebelum datang",
        en: "Subject to local museum operating hours — confirm before visiting",
      },
      hargaTiket: {
        id: "Dewasa Rp8.000, anak Rp4.000 (dapat berubah)",
        en: "Adult Rp8,000, child Rp4,000 (subject to change)",
      },
      tips: {
        id: "Cek kalender event kota kalau ingin melihat Mak Itam beroperasi langsung — biasanya hanya saat acara khusus.",
        en: "Check the city events calendar if you want to see Mak Itam in operation — usually only during special occasions.",
      },
    },
    gambar: gambarWisata["museum-kereta-api"],
  },
  {
    slug: "danau-biru",
    nama: {
      id: "Danau Biru",
      en: "Danau Biru",
    },
    ringkasan: {
      id: "Bekas lubang tambang yang kini menjelma danau biru-toska yang memesona, dikelilingi perbukitan hijau.",
      en: "A former mine pit transformed into a stunning turquoise lake, surrounded by green hills.",
    },
    detail: {
      id: "Danau ini awalnya adalah area pertambangan batu bara di Kecamatan Talawi sejak 1981. Setelah cadangan batu bara menipis dan aktivitas tambang berhenti, cekungan besar yang ditinggalkan perlahan terisi air hujan dan air tanah, membentuk danau berwarna biru kehijauan yang jernih.[5] Kini jadi salah satu spot healing favorit di Sawahlunto.",
      en: "This lake was originally a coal mining area in Talawi District from 1981. After coal reserves were depleted and mining ceased, the large depression left behind slowly filled with rainwater and groundwater, forming a clear blue-green lake.[5] It is now one of Sawahlunto's favourite relaxation spots.",
    },
    infoPraktis: {
      jamBuka: {
        id: "Senin–Minggu 08.00–18.00",
        en: "Monday–Sunday 08:00–18:00",
      },
      hargaTiket: {
        id: "Sekitar Rp10.000–15.000 (dapat berubah)",
        en: "Around Rp10,000–15,000 (subject to change)",
      },
      tips: {
        id: "Medan jalan berbatu dan cukup sulit — lebih aman naik kendaraan pribadi atau ojek warga lokal. Bawa bekal sendiri karena fasilitas di sekitar danau masih terbatas.",
        en: "The road is rocky and challenging — a private vehicle or local ojek is safer. Bring your own supplies as facilities around the lake are still limited.",
      },
    },
    gambar: gambarWisata["danau-biru"],
  },
  {
    slug: "puncak-cemara",
    nama: {
      id: "Puncak Cemara",
      en: "Puncak Cemara",
    },
    ringkasan: {
      id: "Titik tertinggi untuk memandang seluruh Kota Sawahlunto, paling memesona saat lampu kota menyala di malam hari.",
      en: "The highest vantage point overlooking all of Sawahlunto — most enchanting when the city lights come on at night.",
    },
    detail: {
      id: "Dari ketinggian Puncak Cemara, seluruh lanskap Kota Sawahlunto terlihat berpadu antara bangunan, lahan hijau, dan langit biru — pemandangan yang berubah jadi gemerlap lampu kota saat malam tiba.[6] Selain berfoto di monumen yang tersedia, pengunjung juga bisa bersantai di ayunan dan hammock yang disediakan.",
      en: "From the heights of Puncak Cemara, Sawahlunto's entire cityscape unfolds — buildings, green land, and blue sky blending together, transforming into a glittering city lights display after dark.[6] Besides posing at the available monuments, visitors can also relax on the swings and hammocks provided.",
    },
    infoPraktis: {
      jamBuka: {
        id: "Mengikuti jam operasional setempat",
        en: "Subject to local operating hours",
      },
      hargaTiket: {
        id: "Dewasa Rp4.000, anak Rp2.000 (dapat berubah)",
        en: "Adult Rp4,000, child Rp2,000 (subject to change)",
      },
      tips: {
        id: "Datang menjelang sore untuk dapat pemandangan terbaik saat matahari terbenam dan lampu kota mulai menyala. Bawa jaket karena udaranya cukup sejuk.",
        en: "Arrive in the late afternoon for the best views at sunset as the city lights begin to glow. Bring a jacket as the air is quite cool.",
      },
    },
    gambar: gambarWisata["puncak-cemara"],
  },
  {
    slug: "silo",
    nama: {
      id: "Silo Sawahlunto",
      en: "Silo Sawahlunto",
    },
    ringkasan: {
      id: "Tiga tabung raksasa bekas penampungan batu bara, dengan sirene tua yang masih berbunyi tiga kali sehari hingga kini.",
      en: "Three giant former coal storage tanks, with an old siren that still sounds three times a day to this day.",
    },
    detail: {
      id: "Tiga tabung raksasa yang menjulang ini dulunya adalah tempat penampungan batu bara sebelum diangkut ke Pelabuhan Teluk Bayur lewat jalur kereta yang terhubung langsung ke dalamnya.[8] Bangunan ini sengaja dibiarkan tanpa pemugaran berlebihan untuk menjaga nilai keasliannya — tiang-tiang besi tua dan struktur aslinya masih berdiri kokoh hingga kini.[9] Hal yang paling menggugah dari Silo bukan sekadar bentuknya, tapi suaranya: sirene yang dulu menjadi penanda jam kerja 'orang rantai' masih berbunyi tiga kali sehari, pukul 07.00, 13.00, dan 16.00 — jejak hidup dari masa kelam yang tak pernah benar-benar dibungkam waktu.[10] Kawasan ini kini menjadi bagian dari kompleks Taman Segitiga, alun-alun kota yang ramai dikunjungi warga setempat.",
      en: "These three towering giant tanks were once used to store coal before it was transported to Teluk Bayur Port via a railway line connected directly to them.[8] The structure has been deliberately left without excessive restoration to preserve its authenticity — old iron pillars and the original structure still stand firm today.[9] What is most stirring about the Silo is not merely its form, but its sound: the siren that once marked the working hours of the 'orang rantai' still sounds three times a day, at 07:00, 13:00, and 16:00 — a living trace of a dark era that time has never truly silenced.[10] The area is now part of the Taman Segitiga complex, a city square frequently visited by locals.",
    },
    infoPraktis: {
      jamBuka: {
        id: "Area terbuka, dapat dilihat kapan saja dari Taman Segitiga",
        en: "Open area, visible at any time from Taman Segitiga",
      },
      hargaTiket: {
        id: "Gratis (area publik)",
        en: "Free (public area)",
      },
      tips: {
        id: "Datang sekitar jam 07.00, 13.00, atau 16.00 untuk mendengar sirene bersejarahnya berbunyi.",
        en: "Arrive around 07:00, 13:00, or 16:00 to hear the historic siren sound.",
      },
    },
    gambar: gambarWisata["silo"],
  },
  {
    slug: "makam-belanda",
    nama: {
      id: "Makam Belanda (Kerkhof)",
      en: "Dutch Cemetery (Kerkhof)",
    },
    ringkasan: {
      id: "Kompleks pemakaman kolonial sejak 1917 di perbukitan Lubang Panjang, menyimpan jejak keberagaman penghuni kota tambang.",
      en: "A colonial cemetery complex dating from 1917 on the Lubang Panjang hills, preserving traces of the mining city's diverse inhabitants.",
    },
    detail: {
      id: "Di perbukitan Lubang Panjang, tak jauh dari pusat kota, terhampar kompleks pemakaman yang telah ada sejak 1917.[11] Disebut Kerkhof — dari bahasa Belanda 'kerk' (gereja) dan 'hoff' (halaman) — kompleks ini menyimpan puluhan makam umat Kristen Belanda, beserta beberapa makam Jepang dan Tionghoa, mencerminkan keberagaman penghuni kota tambang pada masanya.[12] Suasananya tenang dan rapi, jauh dari kesan menyeramkan — justru terasa artistik dengan nisan-nisan bergaya Eropa yang masih berdiri di antara perbukitan hijau. Tak jarang keturunan Belanda datang jauh-jauh untuk menapak tilas jejak leluhur mereka yang dulu bekerja di tambang Ombilin.[13]",
      en: "On the Lubang Panjang hills, not far from the city centre, lies a cemetery complex that has existed since 1917.[11] Known as Kerkhof — from the Dutch 'kerk' (church) and 'hoff' (courtyard) — this complex holds dozens of Dutch Christian graves, along with several Japanese and Chinese graves, reflecting the diverse inhabitants of the mining city in its era.[12] The atmosphere is calm and neat, far from eerie — instead feeling artistic with European-style headstones still standing among green hills. Dutch descendants occasionally travel far to retrace the footsteps of their ancestors who once worked at the Ombilin mine.[13]",
    },
    infoPraktis: {
      jamBuka: {
        id: "Area terbuka, akses bebas pada jam wajar",
        en: "Open area, freely accessible during reasonable hours",
      },
      hargaTiket: {
        id: "Gratis",
        en: "Free",
      },
      tips: {
        id: "Lokasi di kawasan perbukitan dengan kontur tidak rata — gunakan alas kaki yang nyaman.",
        en: "Located in a hilly area with uneven terrain — wear comfortable footwear.",
      },
    },
    gambar: gambarWisata["makam-belanda"],
  },
  {
    slug: "museum-tambang-ombilin",
    nama: {
      id: "Museum Tambang Ombilin",
      en: "Ombilin Mining Museum",
    },
    ringkasan: {
      id: "Diresmikan 2014, museum ini menyimpan koleksi lengkap peralatan tambang dalam bangunan bersejarah sejak 1891.",
      en: "Inaugurated in 2014, this museum holds a complete collection of mining equipment in a historic building dating from 1891.",
    },
    detail: {
      id: "Diresmikan pada Juni 2014, museum ini melengkapi rentetan situs warisan tambang di Sawahlunto.[14] Bangunannya sendiri sudah berdiri sejak 1891, dan pernah menjadi rumah peristirahatan Presiden Soeharto — jejak ganda sejarah kolonial dan pasca-kemerdekaan dalam satu atap.[14] Di dalamnya tersimpan koleksi yang merekam perjalanan panjang industri tambang: peralatan kerja, arsip kolonial, kostum penambang, kendaraan pengangkut batu bara, foto-foto lama, hingga mesin pemilah batu bara.[14] Sejak 1940-an produksi tambang memang mulai menurun secara bertahap, namun alih-alih dilupakan, sisa kejayaan itu kini dirawat dan diceritakan ulang lewat museum ini.[14]",
      en: "Inaugurated in June 2014, this museum completes the series of mining heritage sites in Sawahlunto.[14] The building itself has stood since 1891, and once served as a rest house for President Soeharto — a dual trace of colonial and post-independence history under one roof.[14] Inside, a collection records the long journey of the mining industry: work tools, colonial archives, miners' costumes, coal transport vehicles, old photographs, and coal sorting machines.[14] Since the 1940s, mine production had gradually declined, but rather than being forgotten, the remnants of that golden age are now preserved and retold through this museum.[14]",
    },
    infoPraktis: {
      jamBuka: {
        id: "Mengikuti jam operasional museum setempat, sebaiknya dikonfirmasi sebelum datang",
        en: "Subject to local museum operating hours — confirm before visiting",
      },
      hargaTiket: {
        id: "Belum ada data resmi terbaru, mohon konfirmasi langsung",
        en: "No recent official data available — please confirm directly",
      },
      tips: {
        id: "Minta pemandu untuk penjelasan detail dan tanyakan jadwal pemutaran film singkat di ruang khusus.",
        en: "Ask for a guide for detailed explanations and enquire about the short film screening schedule in the dedicated room.",
      },
    },
    gambar: gambarWisata["museum-tambang-ombilin"],
  },
  {
    slug: "puncak-polan",
    nama: {
      id: "Puncak Polan",
      en: "Puncak Polan",
    },
    ringkasan: {
      id: "Titik pandang dengan papan ikonik 'SAWAHLUNTO', rusa peliharaan, dan spot paralayang terbaik di kota.",
      en: "A viewpoint with the iconic 'SAWAHLUNTO' sign, resident deer, and the city's best paragliding spot.",
    },
    detail: {
      id: "Selain Puncak Cemara, Puncak Polan (juga disebut Puncak Sungai) menjadi titik pandang favorit lain untuk melihat Sawahlunto dari ketinggian — ditandai dengan papan besar bertuliskan 'SAWAHLUNTO' di puncak bukit, mengingatkan pada Hollywood Sign versi kota tambang.[15] Di sini, sejumlah rusa peliharaan warga setempat menambah suasana santai, dan bagi yang ingin sensasi lebih, paralayang tandem bersama instruktur berpengalaman bisa dicoba untuk mengitari kota dari udara.[15] Waktu terbaik berkunjung adalah subuh, saat kabut perlahan tersingkap cahaya matahari — meski senja menjelang matahari terbenam juga tak kalah memikat.[15]",
      en: "Besides Puncak Cemara, Puncak Polan (also called Puncak Sungai) is another favourite vantage point for viewing Sawahlunto from above — marked by a large board reading 'SAWAHLUNTO' at the hilltop, reminiscent of a mining city version of the Hollywood Sign.[15] Here, several pet deer kept by locals add to the relaxed atmosphere, and for those seeking more excitement, tandem paragliding with an experienced instructor can be tried for a bird's-eye tour of the city.[15] The best time to visit is at dawn, as the mist slowly gives way to sunlight — though the scenery at dusk approaching sunset is equally captivating.[15]",
    },
    infoPraktis: {
      jamBuka: {
        id: "Area terbuka, terbaik dikunjungi subuh atau menjelang senja",
        en: "Open area, best visited at dawn or approaching dusk",
      },
      hargaTiket: {
        id: "Gratis, biaya terpisah untuk paralayang tandem (hubungi penyedia jasa setempat)",
        en: "Free, separate fee for tandem paragliding (contact local providers)",
      },
      tips: {
        id: "Untuk paralayang, buat janji terlebih dahulu dengan penyedia jasa di lokasi.",
        en: "For paragliding, arrange in advance with providers at the location.",
      },
    },
    gambar: gambarWisata["puncak-polan"],
  },
  {
    slug: "desa-wisata-rantih",
    nama: {
      id: "Desa Wisata Rantih",
      en: "Rantih Village Tourism",
    },
    ringkasan: {
      id: "Desa pedesaan asri 12 km dari kota, dengan air terjun, sungai untuk tubing, dan jalur trekking hutan.",
      en: "A lush rural village 12 km from the city centre, with a waterfall, river tubing, and forest trekking trails.",
    },
    detail: {
      id: "Sekitar 12 kilometer atau 17 menit dari pusat kota, Desa Wisata Rantih menawarkan sisi lain Sawahlunto yang jarang terekspos: alam pedesaan yang masih asri.[16] Dalam perjalanan menuju desa ini, pengunjung disuguhi pemandangan bekas tambang batu bara berdampingan dengan hamparan sawah menguning.[16] Di desa ini ada Air Terjun Bikan Rantih yang menyegarkan, area bumi perkemahan, susur sungai dengan tubing di Sungai Ombilin, serta jalur trekking menembus hutan produksi yang dijaga kelestariannya oleh warga setempat.[17] Wisata ini masih dikelola sederhana oleh kelompok Sadar Wisata Rantih bersama warga desa — kesempatan langka untuk menikmati Sawahlunto yang belum banyak tersentuh wisata massal.[16]",
      en: "About 12 kilometres or 17 minutes from the city centre, Rantih Village Tourism offers a rarely-seen side of Sawahlunto: unspoilt rural countryside.[16] On the way to the village, visitors are treated to views of old coal mines alongside fields of golden rice.[16] The village is home to the refreshing Bikan Rantih Waterfall, a camping ground, river tubing on the Ombilin River, and trekking trails through a production forest maintained by local residents.[17] Tourism here is still managed simply by the Rantih tourism-awareness group together with the villagers — a rare chance to experience a Sawahlunto untouched by mass tourism.[16]",
    },
    infoPraktis: {
      jamBuka: {
        id: "Area terbuka, terbaik dikunjungi pagi-siang hari",
        en: "Open area, best visited in the morning to midday",
      },
      hargaTiket: {
        id: "Bervariasi tergantung aktivitas (tubing, camping), hubungi pengelola desa wisata setempat",
        en: "Varies by activity (tubing, camping) — contact the local village tourism manager",
      },
      tips: {
        id: "Siapkan kendaraan pribadi karena akses transportasi umum terbatas. Bawa pakaian ganti jika ingin basah-basahan di air terjun atau sungai.",
        en: "Bring your own vehicle as public transport is limited. Pack a change of clothes if you plan to get wet at the waterfall or river.",
      },
    },
    gambar: gambarWisata["desa-wisata-rantih"],
  },
  {
    slug: "gereja-santa-barbara",
    nama: {
      id: "Gereja Katolik Santa Barbara",
      en: "Santa Barbara Catholic Church",
    },
    ringkasan: {
      id: "Gereja bergaya Eropa dari 1920, dibangun perusahaan tambang untuk pegawai Katolik Belanda, masih aktif hingga kini.",
      en: "A 1920 European-style church built by the mining company for its Dutch Catholic employees, still active today.",
    },
    detail: {
      id: "Dibangun antara 1919-1920 oleh perusahaan tambang batu bara Ombilin untuk memenuhi kebutuhan ibadah pegawai Eropa yang mayoritas Katolik, gereja ini ditasbihkan resmi pada 27 November 1920.[18] Arsitekturnya kental bergaya Eropa, dengan menara kecil tempat lonceng gereja digantung dan jendela-jendela melengkung berornamen klasik.[19] Selama pendudukan Jepang, bangunan ini sempat beralih fungsi menjadi asrama tentara, sebelum kembali digunakan sebagai tempat ibadah setelah kemerdekaan.[19] Letaknya berdampingan dengan Sekolah Santa Lucia yang dibangun di masa yang sama — dua bangunan yang menjadi saksi keberagaman pemeluk agama di kota tambang yang multietnis ini.",
      en: "Built between 1919 and 1920 by the Ombilin coal mining company to serve the worship needs of its mostly-Catholic European employees, the church was officially consecrated on 27 November 1920.[18] Its architecture is heavily European in style, with a small bell tower and classically ornamented arched windows.[19] During the Japanese occupation, the building was temporarily converted into a barracks, before returning to use as a place of worship after independence.[19] It stands alongside the Santa Lucia School built at the same time — two buildings that bear witness to the religious diversity of this multi-ethnic mining city.",
    },
    infoPraktis: {
      jamBuka: {
        id: "Pintu masuk utama hanya dibuka saat ada acara kebaktian atau perayaan hari besar Katolik",
        en: "Main entrance only open during services or Catholic feast days",
      },
      hargaTiket: {
        id: "Gratis (untuk foto dari luar), minta izin penjaga untuk masuk ke dalam",
        en: "Free (for photos from outside) — ask the caretaker for permission to enter",
      },
      tips: {
        id: "Hormati fungsi gereja sebagai tempat ibadah aktif — datang dengan sopan dan tidak mengganggu jika ada kegiatan ibadah.",
        en: "Respect the church as an active place of worship — dress modestly and do not disturb any ongoing services.",
      },
    },
    gambar: gambarWisata["gereja-santa-barbara"],
  },
  {
    slug: "hotel-ombilin-kota-tua",
    nama: {
      id: "Hotel Ombilin & Kawasan Kota Tua",
      en: "Hotel Ombilin & Old Town District",
    },
    ringkasan: {
      id: "Hotel bersejarah sejak 1918 di jantung kawasan kota tua, kini bernama Khas Ombilin Hotel.",
      en: "A historic hotel from 1918 at the heart of the old town district, now operating as Khas Ombilin Hotel.",
    },
    detail: {
      id: "Berdiri sejak 1918, Hotel Ombilin awalnya menjadi tempat singgah para petinggi perusahaan tambang dan pejabat Hindia Belanda.[20] Bangunan ini mengalami banyak babak: sempat menjadi asrama tentara saat agresi militer Belanda, lalu pos polisi militer, poliklinik kesehatan, hingga akhirnya kembali berfungsi sebagai hotel.[21] Kini menyandang nama Khas Ombilin Hotel, kamarnya tetap mempertahankan jejak arsitektur kolonial sambil menawarkan kenyamanan modern.[20] Tak jauh dari hotel ini, kawasan kota tua Sawahlunto menyimpan deretan bangunan cagar budaya yang bisa dijelajahi dengan berjalan kaki — potret nyata Sumatera Barat dari sisi yang berbeda dari alam dan budaya Minang pada umumnya.[22]",
      en: "Standing since 1918, Hotel Ombilin was originally a stopover for senior mining company officials and Dutch East Indies government officers.[20] The building has gone through many chapters: it served as a military barracks during the Dutch military aggression, then a military police post, a health clinic, before finally returning to use as a hotel.[21] Now operating as Khas Ombilin Hotel, its rooms retain traces of colonial architecture while offering modern comforts.[20] Close by, Sawahlunto's old town district holds a row of heritage buildings that can be explored on foot — a vivid portrait of West Sumatra from an angle quite unlike its usual nature and Minangkabau cultural scenes.[22]",
    },
    infoPraktis: {
      jamBuka: {
        id: "Area kota tua terbuka kapan saja, hotel beroperasi 24 jam untuk tamu menginap",
        en: "Old town area open at any time; hotel operates 24 hours for staying guests",
      },
      hargaTiket: {
        id: "Gratis menjelajahi kota tua, tarif kamar bervariasi",
        en: "Free to explore the old town; room rates vary",
      },
      tips: {
        id: "Jelajahi kawasan sekitar hotel dengan berjalan kaki untuk melihat bangunan cagar budaya lain yang berdekatan.",
        en: "Explore the area around the hotel on foot to see other nearby heritage buildings.",
      },
    },
    gambar: gambarWisata["hotel-ombilin-kota-tua"],
  },
  {
    slug: "lubang-kalam",
    nama: {
      id: "Lubang Kalam",
      en: "Lubang Kalam Tunnel",
    },
    ringkasan: {
      id: "Terowongan kereta sepanjang 1 km menuju Muara Kalaban, kini hanya dilewati Mak Itam.",
      en: "A 1 km railway tunnel to Muara Kalaban, now only traversed by the legendary Mak Itam steam locomotive.",
    },
    detail: {
      id: "Terowongan kereta api sepanjang 1 kilometer ini menghubungkan Stasiun Sawahlunto dengan Stasiun Muara Kalaban, dibangun untuk memuluskan jalur distribusi batu bara di masa kolonial.[23] Kini lorong gelap ini hanya dilewati oleh Mak Itam, lokomotif uap legendaris yang sesekali masih beroperasi sebagai kereta wisata.[23] Meski sudah tak banyak dipakai untuk fungsi aslinya, Lubang Kalam tetap berdiri kokoh dan menawarkan latar belakang foto yang dramatis — saksi bisu kejayaan jalur kereta yang dulu jadi urat nadi ekonomi tambang Sawahlunto.",
      en: "This one-kilometre railway tunnel connects Sawahlunto Station with Muara Kalaban Station, built to smooth the coal distribution route in the colonial era.[23] Today the dark passage is only traversed by Mak Itam, the legendary steam locomotive that still occasionally operates as a heritage tourist train.[23] Although it is no longer heavily used for its original purpose, Lubang Kalam remains standing firm and offers a dramatic photographic backdrop — a silent witness to the heyday of the railway line that was once the economic lifeline of Sawahlunto's mining industry.",
    },
    infoPraktis: {
      jamBuka: {
        id: "Area terbuka, akses terbaik siang hari",
        en: "Open area, best accessed during daylight hours",
      },
      hargaTiket: {
        id: "Gratis untuk dilihat dari luar",
        en: "Free to view from outside",
      },
      tips: {
        id: "Terowongan ini aktif dilewati kereta wisata Mak Itam pada jadwal tertentu — cek jadwal operasional Mak Itam sebelum datang untuk kesempatan melihatnya beroperasi.",
        en: "This tunnel is traversed by the Mak Itam heritage train on specific schedules — check Mak Itam's operating schedule before visiting for a chance to see it in action.",
      },
    },
    gambar: gambarWisata["lubang-kalam"],
  },
  {
    slug: "gedung-pusat-kebudayaan",
    nama: {
      id: "Gedung Pusat Kebudayaan (Gluck Auf)",
      en: "Cultural Centre Building (Gluck Auf)",
    },
    ringkasan: {
      id: "Bekas tempat hiburan pejabat tambang kolonial dari 1910, kini sedang direvitalisasi pasca kebakaran 2022.",
      en: "A former colonial mining officials' entertainment venue from 1910, currently being restored following a 2022 fire.",
    },
    detail: {
      id: "Dibangun 1910 dengan nama 'Gluck Auf' — salam tradisional penambang dalam bahasa Jerman yang berarti doa keselamatan saat menggali tambang baru — gedung ini dulunya jadi tempat berkumpul dan menghibur diri para pejabat tambang kolonial, lengkap dengan arena boling dan biliar yang membuatnya dijuluki 'Gedung Bola'.[24] Setelah kemerdekaan, bangunan ini berganti fungsi beberapa kali: gedung pertemuan masyarakat, lalu kantor bank, sebelum akhirnya diresmikan sebagai Gedung Pusat Kebudayaan pada 1 Desember 2006.[25] Pada November 2022, gedung ini mengalami kebakaran yang menghanguskan sebagian atapnya.[26] Kabar baiknya, proses revitalisasi resmi dimulai Februari 2026 dan ditargetkan rampung dalam beberapa bulan ke depan — jadi nantikan gedung bersejarah ini kembali berdiri megah sebagai pusat kegiatan seni dan budaya kota.[27]",
      en: "Built in 1910 under the name 'Gluck Auf' — a traditional German miner's greeting meaning a prayer for safety when opening a new mine — this building was once the gathering and entertainment hub for colonial mining officials, complete with a bowling alley and billiard tables that earned it the nickname 'Gedung Bola' (Ball Building).[24] After independence, it changed purpose several times: a community meeting hall, then a bank office, before finally being inaugurated as the Cultural Centre Building on 1 December 2006.[25] In November 2022, the building suffered a fire that destroyed part of its roof.[26] The good news is that the restoration process officially began in February 2026 and is targeted for completion within a few months — look forward to this historic building once again standing proudly as the city's arts and culture hub.[27]",
    },
    infoPraktis: {
      jamBuka: {
        id: "SEDANG DALAM REVITALISASI sejak 13 Februari 2026, target selesai 12 Agustus 2026 — belum dapat dikunjungi seperti biasa",
        en: "CURRENTLY UNDER RESTORATION since 13 February 2026, target completion 12 August 2026 — not open for normal visits",
      },
      hargaTiket: {
        id: "Belum tersedia, akan diperbarui setelah revitalisasi selesai",
        en: "Not yet available — will be updated once restoration is complete",
      },
      tips: {
        id: "Cek media sosial resmi Pemko Sawahlunto untuk update terbaru status pembukaan kembali sebelum berkunjung.",
        en: "Check the official social media of Sawahlunto City Government for the latest updates on reopening before visiting.",
      },
    },
    gambar: gambarWisata["gedung-pusat-kebudayaan"],
    statusBadge: {
      id: "Sedang Direvitalisasi",
      en: "Under Restoration",
    },
  },
  {
    slug: "masjid-nurul-islam",
    nama: {
      id: "Masjid Agung Nurul Islam",
      en: "Nurul Islam Grand Mosque",
    },
    ringkasan: {
      id: "Salah satu masjid tertua di Indonesia, dulunya pembangkit listrik tambang dari 1894, kini menaranya berdiri dari bekas cerobong asap.",
      en: "One of Indonesia's oldest mosques — originally an 1894 mining power plant, its minaret now rises from the original smokestack.",
    },
    detail: {
      id: "Salah satu masjid tertua di Indonesia ini punya asal-usul yang tak terduga: bangunannya semula adalah pusat pembangkit listrik tenaga uap yang dibangun pada 1894 untuk menggerakkan mesin-mesin tambang.[28] Setelah kemerdekaan, gedung pembangkit ini sempat menjadi tempat perakitan senjata para pejuang, sebelum akhirnya diresmikan sebagai masjid pada 1952.[28] Cerobong asap pembangkit listriknya kini menjelma jadi menara masjid setinggi lebih dari 75 meter, lengkap dengan kubah tambahan di puncaknya.[28] Di bawah bangunan, ruang basement berlorong yang dulu menjadi tempat perakitan senjata masih bisa ditelusuri — perpaduan unik antara warisan industri, perjuangan kemerdekaan, dan tempat ibadah yang masih aktif hingga kini.[29]",
      en: "One of Indonesia's oldest mosques, this building has a surprising origin: it was originally a steam power plant built in 1894 to drive the mining machinery.[28] After independence, the power plant briefly served as a weapons assembly point for freedom fighters, before finally being inaugurated as a mosque in 1952.[28] The power plant's smokestack has since become a mosque minaret standing over 75 metres tall, topped with an added dome.[28] Beneath the building, the corridored basement that once served as a weapons assembly area can still be explored — a unique blend of industrial heritage, the independence struggle, and an active place of worship to this day.[29]",
    },
    infoPraktis: {
      jamBuka: {
        id: "Buka untuk umum di luar jam sholat, hormati waktu ibadah",
        en: "Open to the public outside of prayer times — please respect prayer schedules",
      },
      hargaTiket: {
        id: "Gratis",
        en: "Free",
      },
      tips: {
        id: "Berpakaian sopan dan minta izin pengurus masjid jika ingin melihat ruang basement bersejarah.",
        en: "Dress modestly and ask the mosque management for permission if you wish to see the historic basement.",
      },
    },
    gambar: gambarWisata["masjid-nurul-islam"],
  },
  {
    slug: "batu-runciang",
    nama: {
      id: "Batu Runciang",
      en: "Batu Runciang",
    },
    ringkasan: {
      id: "Formasi batu karst raksasa dengan ujung runcing alami, spot terbaik untuk matahari terbit dan terbenam.",
      en: "A giant karst rock formation with naturally pointed peaks — the best spot for sunrise and sunset views over Sawahlunto.",
    },
    detail: {
      id: "Bagi pencari sensasi ketinggian, Batu Runciang menawarkan formasi batu karst raksasa dengan ujung-ujung yang runcing alami, terbentuk dari pelapukan air hujan selama ratusan hingga ribuan tahun.[30] Dari puncaknya, terhampar panorama terbaik Kota Sawahlunto — baik saat matahari terbit maupun ketika langit memerah jelang senja.[30] Nuansa purbakala dari batuan kapur ini menjadikannya spot foto yang dramatis, sekaligus pengingat akan kekuatan alam yang membentuk lanskap Sawahlunto jauh sebelum era pertambangan dimulai.",
      en: "For those seeking the thrill of heights, Batu Runciang offers a giant karst rock formation with naturally pointed peaks, shaped by centuries to millennia of rainfall weathering.[30] From its summit, the best panorama of Sawahlunto spreads out — whether at sunrise or when the sky turns red approaching dusk.[30] The primordial feel of the limestone makes it a dramatic photography spot, and a reminder of the natural forces that shaped Sawahlunto's landscape long before the mining era began.",
    },
    infoPraktis: {
      jamBuka: {
        id: "Area terbuka, terbaik dikunjungi subuh atau menjelang senja",
        en: "Open area, best visited at dawn or approaching dusk",
      },
      hargaTiket: {
        id: "Gratis",
        en: "Free",
      },
      tips: {
        id: "Medan menanjak dan berbatu — gunakan alas kaki yang sesuai dan berhati-hati terutama saat kondisi licin.",
        en: "The terrain is steep and rocky — wear appropriate footwear and take care especially in wet conditions.",
      },
    },
    gambar: gambarWisata["batu-runciang"],
  },
  {
    slug: "taman-segitiga",
    nama: {
      id: "Taman Segitiga",
      en: "Taman Segitiga",
    },
    ringkasan: {
      id: "Alun-alun kota berbentuk segitiga di depan Kantor Bukit Asam, dengan latar tiga silo ikonik.",
      en: "A triangular city square in front of the Bukit Asam office building, with the three iconic silos as backdrop.",
    },
    detail: {
      id: "Alun-alun kota berbentuk segitiga ini terletak persis di depan Kantor PT Bukit Asam, dengan latar tiga silo raksasa yang jadi ikon visual kota.[31] Di sini berdiri tugu yang menggambarkan dua pekerja tambang mengenakan helm — satu memegang sekop, satu mengangkat belencong — sebagai penghormatan untuk jasa para penambang masa lalu.[31] Taman ini ramai dikunjungi warga baik siang maupun malam, dengan deretan pedagang kaki lima yang tertata rapi.[32] Cocok jadi titik awal menjelajahi kawasan kota tua Sawahlunto sambil merasakan denyut kehidupan sehari-hari warganya.",
      en: "This triangular city square sits directly in front of the PT Bukit Asam office building, with the three giant silos that are the city's visual icon as its backdrop.[31] A monument stands here depicting two helmeted mine workers — one holding a shovel, one raising a belencong pickaxe — in tribute to the miners of the past.[31] The square is a popular gathering spot for locals day and night, with rows of neatly arranged street food vendors.[32] It makes a great starting point for exploring Sawahlunto's old town while soaking up the pulse of everyday local life.",
    },
    infoPraktis: {
      jamBuka: {
        id: "Area terbuka, buka 24 jam",
        en: "Open area, 24 hours",
      },
      hargaTiket: {
        id: "Gratis",
        en: "Free",
      },
      tips: {
        id: "Datang sore-malam untuk merasakan suasana ramai warga lokal dan kuliner kaki lima.",
        en: "Come in the late afternoon or evening to enjoy the lively atmosphere of locals gathering and street food vendors.",
      },
    },
    gambar: gambarWisata["taman-segitiga"],
  },
  {
    slug: "geosite-fosil-ikan-gurami",
    nama: {
      id: "Geosite Fosil Ikan Gurami Yamini",
      en: "Yamini Fossil Fish Geosite",
    },
    ringkasan: {
      id: "Situs fosil ikan purba unik berusia puluhan juta tahun, hanya ditemukan di Sawahlunto, daya tarik ilmiah dunia geologi.",
      en: "A unique prehistoric fish fossil site tens of millions of years old — found only in Sawahlunto and a draw for geologists worldwide.",
    },
    detail: {
      id: "Di Desa Tumpuk Tangah, Kecamatan Talawi, tersimpan salah satu temuan paling istimewa dari Geopark Nasional Sawahlunto: fosil ikan purba Ombilinichthys yamini.[33] Ikan kecil berukuran 4-5 cm ini hidup di pertengahan zaman Eosen, puluhan juta tahun lalu, dan namanya diambil dari tokoh pejuang kemerdekaan Mohammad Yamin yang lahir di desa yang sama.[33] Spesies ini hanya ditemukan di formasi Sangkarewang, menjadikannya satu-satunya di dunia — daya tarik yang mengundang minat peneliti geologi dari berbagai universitas, termasuk dari Malaysia.[33] Bagi wisatawan yang penasaran dengan sisi ilmiah Sawahlunto, situs ini menawarkan jendela ke masa jutaan tahun sebelum era pertambangan dimulai.",
      en: "In the village of Tumpuk Tangah, Talawi sub-district, lies one of Sawahlunto's National Geopark's most remarkable finds: the prehistoric fish fossil Ombilinichthys yamini.[33] This small fish, measuring 4–5 cm, lived during the mid-Eocene epoch, tens of millions of years ago, and is named after independence hero Mohammad Yamin who was born in the same village.[33] The species is found only in the Sangkarewang formation, making it unique in the world — a draw that has attracted geological researchers from various universities, including those from Malaysia.[33] For travellers curious about Sawahlunto's scientific side, this site offers a window into the millions of years before the mining era began.",
    },
    infoPraktis: {
      jamBuka: {
        id: "Sebaiknya didampingi pemandu geowisata setempat, hubungi Dinas Pariwisata untuk jadwal kunjungan",
        en: "Best visited with a local geotourism guide — contact the Tourism Office for visit schedules",
      },
      hargaTiket: {
        id: "Belum ada data resmi, kemungkinan perlu izin/pemandu khusus",
        en: "No official data yet — likely requires a permit or specialist guide",
      },
      tips: {
        id: "Cocok untuk pelajar dan peminat geologi — hubungi Disparpora Sawahlunto untuk kunjungan edukatif terorganisir.",
        en: "Ideal for students and geology enthusiasts — contact Sawahlunto's Disparpora office to arrange an organised educational visit.",
      },
    },
    gambar: gambarWisata["geosite-fosil-ikan-gurami"],
  },
  {
    slug: "padang-savana-kolok",
    nama: {
      id: "Padang Savana Kolok",
      en: "Kolok Savanna",
    },
    ringkasan: {
      id: "Padang rumput hijau luas di Kolok Nan Tuo, spot piknik dan foto yang tenang dan jauh dari keramaian.",
      en: "A wide green meadow in Kolok Nan Tuo — a peaceful picnic and photography spot far from the crowds.",
    },
    detail: {
      id: "Terhampar di Kolok Nan Tuo, padang rumput hijau yang luas ini menjadi spot piknik favorit warga setempat.[34] Beberapa pohon rindang menyediakan keteduhan di tengah hamparan savana, sementara udaranya yang segar dan bebas polusi membuat suasana terasa lapang.[34] Sederhana namun menenangkan — cocok bagi yang ingin healing singkat di tengah perjalanan menjelajahi sisi heritage Sawahlunto yang lebih padat.",
      en: "Stretching across Kolok Nan Tuo, this wide green meadow is a favourite picnic spot for locals.[34] Several shady trees provide shelter in the middle of the savanna, while the fresh, pollution-free air gives the setting a spacious, open feel.[34] Simple but soothing — perfect for a quick escape from the denser heritage trail of Sawahlunto.",
    },
    infoPraktis: {
      jamBuka: {
        id: "Area terbuka, terbaik siang hari",
        en: "Open area, best during daytime",
      },
      hargaTiket: {
        id: "Gratis",
        en: "Free",
      },
      tips: {
        id: "Tempatnya masih sepi dan minim warung — bawa bekal dan air minum sendiri.",
        en: "The site is still quiet with very few food stalls nearby — bring your own food and drinks.",
      },
    },
    gambar: gambarWisata["padang-savana-kolok"],
  },
  {
    slug: "waterboom-muaro-kalaban",
    nama: {
      id: "Waterboom Muaro Kalaban",
      en: "Waterboom Muaro Kalaban",
    },
    ringkasan: {
      id: "Waterpark pertama di Sumatera Barat sejak 2004, kini dalam pembenahan aktif untuk kembali optimal.",
      en: "West Sumatra's first waterpark since 2004, currently undergoing active improvements to return to full operation.",
    },
    detail: {
      id: "Dibangun di atas lahan bekas pemandian pejabat tinggi Belanda, kawasan ini kini menjadi waterpark pertama di Sumatera Barat sejak dibuka 2004, lengkap dengan seluncuran sepanjang 118 meter dan bioskop 4 dimensi.[35] Beberapa tahun terakhir, pengelola PT Wahana Wisata Sawahlunto sempat menghadapi tantangan finansial dan operasional, namun sejak akhir 2025 menerapkan strategi pembenahan aktif demi menjaga keberlanjutan layanan bagi pengunjung.[36] Sebelum berkunjung, ada baiknya menghubungi pengelola untuk memastikan wahana mana saja yang beroperasi penuh.",
      en: "Built on land that was formerly a bathing area for senior Dutch officials, this site became West Sumatra's first waterpark when it opened in 2004, complete with a 118-metre water slide and a 4D cinema.[35] In recent years, the operator PT Wahana Wisata Sawahlunto faced financial and operational challenges, but since late 2025 has implemented an active turnaround strategy to maintain service levels for visitors.[36] Before visiting, it is advisable to contact the management to confirm which attractions are fully operational.",
    },
    infoPraktis: {
      jamBuka: {
        id: "08.30–16.00 WIB (dapat berubah, disarankan konfirmasi dulu)",
        en: "08:30–16:00 WIB (subject to change — confirm before visiting)",
      },
      hargaTiket: {
        id: "Sekitar Rp10.000 (weekday) – Rp15.000 (weekend), dapat berubah",
        en: "Approx. Rp10,000 (weekday) – Rp15,000 (weekend), subject to change",
      },
      tips: {
        id: "Hubungi pengelola sebelum datang untuk memastikan status operasional wahana terkini.",
        en: "Contact management before visiting to confirm the current operational status of attractions.",
      },
    },
    gambar: gambarWisata["waterboom-muaro-kalaban"],
  },
  {
    slug: "kawasan-kandi",
    nama: {
      id: "Kawasan Kandi",
      en: "Kandi Area",
    },
    ringkasan: {
      id: "Bekas tambang terbuka yang kini jadi area camping, danau pancing, dan gazebo santai di tepi air.",
      en: "A former open-pit mine transformed into a camping area, fishing lake, and relaxing waterside gazebos.",
    },
    detail: {
      id: "Bekas area tambang terbuka di Kolok Nan Tuo ini kini bertransformasi jadi kawasan rekreasi alam, mencakup area perkemahan dengan cottage sederhana, danau yang menyimpan ikan untuk dipancing, dan gazebo tepi air untuk bersantai.[37] Suasananya hijau dan tenang, cocok untuk healing singkat sambil menyaksikan matahari terbit atau terbenam dari bekas lubang tambang yang kini berubah wajah.[38]",
      en: "This former open-pit mining area in Kolok Nan Tuo has been transformed into a nature recreation zone, featuring a camping area with simple cottages, a lake stocked with fish for angling, and waterside gazebos for relaxing.[37] The setting is lush and tranquil — ideal for a short escape while watching the sunrise or sunset from a former mine pit that has completely changed its character.[38]",
    },
    infoPraktis: {
      jamBuka: {
        id: "Area terbuka, camping perlu reservasi",
        en: "Open area; camping requires a reservation",
      },
      hargaTiket: {
        id: "Tiket masuk sekitar Rp5.000/orang/hari, sewa cottage & fasilitas bervariasi",
        en: "Entry approx. Rp5,000/person/day; cottage and facility rental rates vary",
      },
      tips: {
        id: "Untuk camping, sebaiknya hubungi Dinas Pariwisata setempat untuk reservasi dan info fasilitas terkini.",
        en: "For camping, contact the local Tourism Office for reservations and the latest information on available facilities.",
      },
    },
    gambar: gambarWisata["kawasan-kandi"],
  },
  {
    slug: "kebun-buah-kandi",
    nama: {
      id: "Kebun Buah Kandi",
      en: "Kandi Fruit Garden",
    },
    ringkasan: {
      id: "Kebun buah edukatif sejak 2012, pengunjung bisa memetik durian, rambutan, dan buah lain langsung dari pohonnya.",
      en: "An educational fruit garden since 2012, where visitors can pick durian, rambutan, and other fruits straight from the trees.",
    },
    detail: {
      id: "Berlokasi tak jauh dari Kawasan Kandi, kebun ini dulunya lahan tidak produktif yang sejak 2012 dikembangkan jadi area budidaya buah-buahan: durian, jeruk, buah naga, jambu, lengkeng, rambutan, hingga mangga.[39] Saat musim panen, pengunjung bisa memetik langsung buahnya untuk dinikmati di tempat tanpa biaya tambahan — atau membawa pulang dengan harga jauh lebih murah dari pasaran.[39] Dilengkapi area bermain anak dan kolam pancing, tempat ini jadi pilihan tepat untuk wisata keluarga sambil belajar soal pertanian.[40]",
      en: "Located close to the Kandi Area, this garden was previously unproductive land that since 2012 has been developed into a fruit cultivation zone: durian, citrus, dragon fruit, guava, longan, rambutan, and mango.[39] During harvest season, visitors can pick fruit directly from the trees to eat on the spot at no extra charge — or take it home at prices well below the market rate.[39] With a children's playground and a fishing pond, this is an ideal choice for a family outing that doubles as an introduction to agriculture.[40]",
    },
    infoPraktis: {
      jamBuka: {
        id: "Mengikuti jam operasional setempat",
        en: "Subject to local operating hours",
      },
      hargaTiket: {
        id: "Anak-anak Rp3.000–4.000, Dewasa Rp5.000–6.000 (dapat berubah)",
        en: "Children Rp3,000–4,000; Adults Rp5,000–6,000 (subject to change)",
      },
      tips: {
        id: "Datang saat musim panen buah untuk pengalaman memetik langsung paling optimal.",
        en: "Visit during the fruit harvest season for the best pick-your-own experience.",
      },
    },
    gambar: gambarWisata["kebun-buah-kandi"],
  },
];

export const wisataReferensi: Reference[] = [
  {
    nomor: 1,
    sumber: "detikSumut",
    url: "https://www.detik.com/sumut/wisata/d-7050800/9-rekomendasi-museum-di-sumatera-barat-lokasi-jam-buka-dan-biaya-masuk",
  },
  {
    nomor: 2,
    sumber: "West Sumatra 360",
    url: "https://westsumatra360.com/9-museum-yang-wajib-kamu-kunjungi-di-sumatera-barat/",
  },
  {
    nomor: 3,
    sumber: "Wikipedia — Museum Goedang Ransoem",
    url: "https://id.wikipedia.org/wiki/Museum_Goedang_Ransoem",
  },
  {
    nomor: 4,
    sumber: "UNESCO World Heritage Centre",
    url: "https://whc.unesco.org/en/list/1610/",
  },
  {
    nomor: 5,
    sumber: "Traveloka Explore",
    url: "https://www.traveloka.com/id-id/explore/destination/wisata-danau-biru-sawahlunto-acc/420907",
  },
  {
    nomor: 6,
    sumber: "Kompas.com",
    url: "https://regional.kompas.com/read/2024/02/05/213253678/puncak-cemara-sawahlunto-daya-tarik-harga-tiket-dan-rute",
  },
  {
    nomor: 7,
    sumber: "Kompas.com — 14 Tempat Wisata Andalan Sawahlunto",
    url: "https://travel.kompas.com/read/2019/06/27/140800927/14-tempat-wisata-andalan-sawahlunto?page=all",
  },
  {
    nomor: 8,
    sumber: "Wikipedia — Silo Sawahlunto",
    url: "https://id.wikipedia.org/wiki/Silo_Sawahlunto",
  },
  {
    nomor: 9,
    sumber: "RRI.co.id",
    url: "https://rri.co.id/features/544380/megahnya-taman-bersejarah-di-sawahlunto",
  },
  {
    nomor: 10,
    sumber: "Lkmmnas2012 (arsip akademik)",
    url: "https://lkmmnas2012.wordpress.com/sosial-project/deskripsi-tempat/sawahlunto/",
  },
  {
    nomor: 11,
    sumber: "Wikipedia — Kompleks Makam Belanda Sawahlunto",
    url: "https://id.wikipedia.org/wiki/Kompleks_Makam_Belanda_Sawahlunto",
  },
  {
    nomor: 12,
    sumber: "eXpos Sumbar",
    url: "https://www.expossumbar.com/berita/46454/komplek-makam-belanda-di-sawahlunto",
  },
  {
    nomor: 13,
    sumber: "Jelajah Nagari Awak",
    url: "https://www.kidalnarsis.com/2018/09/kerkhoff-sawahlunto.html",
  },
  {
    nomor: 14,
    sumber: "National Geographic Indonesia",
    url: "https://nationalgeographic.grid.id/read/13291952/museum-ombilin-rekam-jejak-tambang-sawahlunto",
  },
  {
    nomor: 15,
    sumber: "Kompas.com — 14 Tempat Wisata Andalan Sawahlunto",
    url: "https://travel.kompas.com/read/2019/06/27/140800927/14-tempat-wisata-andalan-sawahlunto?page=all",
  },
  {
    nomor: 16,
    sumber: "Berita Minang",
    url: "https://www.beritaminang.com/berita/12/sisi-lain-pesona-air-terjun-desa-wisata-rantih",
  },
  {
    nomor: 17,
    sumber: "Jadesta Kemenparekraf",
    url: "https://jadesta.kemenparekraf.go.id/desa/rantih",
  },
  {
    nomor: 18,
    sumber: "Kelana Nusantara",
    url: "https://kelananusantara.com/sawahlunto-situs-warisan-budaya-dunia/",
  },
  {
    nomor: 19,
    sumber: "Wikipedia — Gereja Santa Barbara Sawahlunto",
    url: "https://id.wikipedia.org/wiki/Gereja_Santa_Barbara,_Sawahlunto",
  },
  {
    nomor: 20,
    sumber: "Wikipedia — Khas Ombilin Sawahlunto",
    url: "https://id.wikipedia.org/wiki/Khas_Ombilin_Sawahlunto",
  },
  {
    nomor: 21,
    sumber: "Portal Resmi Kota Sawahlunto",
    url: "https://sawahluntokota.go.id/baca/mencari-hotel-recomended-saat-berlibur-di-kota-warisan-tambang-ombilin-sawahlunto-sumbar",
  },
  {
    nomor: 22,
    sumber: "Traveloka",
    url: "https://www.traveloka.com/id-id/explore/destination/destinasi-wisata-di-sawahlunto-acc/25486",
  },
  {
    nomor: 23,
    sumber: "Asitasumbar.com",
    url: "https://www.asitasumbar.com/19-destinasi-wisata-di-sawahlunto-yang-unik-dan-instagenik/",
  },
  {
    nomor: 24,
    sumber: "Wikipedia — Gedung Pusat Kebudayaan Sawahlunto",
    url: "https://id.wikipedia.org/wiki/Gedung_Pusat_Kebudayaan_Sawahlunto",
  },
  {
    nomor: 25,
    sumber: "Kata Sumbar",
    url: "https://katasumbar.com/menilik-sejarah-gedung-pusat-kebudayaan-sawahlunto/",
  },
  {
    nomor: 26,
    sumber: "Kata Sumbar — Kebakaran GPK",
    url: "https://katasumbar.com/ludes-terbakar-begini-sejarah-gpk-sawahlunto-jadi-gedung-pertemuan-pejabat-tambang-zaman-kolonial/",
  },
  {
    nomor: 27,
    sumber: "Portal Resmi Kota Sawahlunto — Revitalisasi GPK",
    url: "https://sawahluntokota.go.id/baca/gedung-pusat-kebudayaan-gpk-direvitalisasi",
  },
  {
    nomor: 28,
    sumber: "Wikipedia — Masjid Agung Nurul Islam",
    url: "https://id.wikipedia.org/wiki/Masjid_Agung_Nurul_Islam",
  },
  {
    nomor: 29,
    sumber: "Halal Tourism Sumbar",
    url: "https://halaltourism.visitbeautifulwestsumatra.id/masjid-agung-nurul-islam-sawahlunto/",
  },
  {
    nomor: 30,
    sumber: "Traveloka",
    url: "https://www.traveloka.com/id-id/explore/destination/destinasi-wisata-di-sawahlunto-acc/25486",
  },
  {
    nomor: 31,
    sumber: "Kompas.com — 14 Tempat Wisata Andalan Sawahlunto",
    url: "https://travel.kompas.com/read/2019/06/27/140800927/14-tempat-wisata-andalan-sawahlunto?page=all",
  },
  {
    nomor: 32,
    sumber: "ANTARA News Jambi",
    url: "https://jambi.antaranews.com/berita/331633/napak-tilas-kejayaan-tambang-batu-bara-sawahlunto",
  },
  {
    nomor: 33,
    sumber: "Portal Resmi Kota Sawahlunto",
    url: "https://sawahluntokota.go.id/baca/geosite-fossil-ikan-gurami-yamini-sawahlunto-menarik-sebagai-destinasi-wisata-edukasi",
  },
  {
    nomor: 34,
    sumber: "iTrip.id",
    url: "https://www.itrip.id/tempat-wisata-sawahlunto",
  },
  {
    nomor: 35,
    sumber: "Pariwisata Sumut",
    url: "https://www.pariwisatasumut.net/2020/10/waterboom-sawahlunto.html",
  },
  {
    nomor: 36,
    sumber: "ANTARA Sumatera Barat",
    url: "https://sumbar.antaranews.com/berita/734707/wws-terapkan-strategi-turnaround-perkuat-layanan-waterboom-sawahlunto",
  },
  {
    nomor: 37,
    sumber: "Berita Minang",
    url: "https://www.beritaminang.com/berita/21070/camping-ground-kandi-destinasi-alam-yang-cocok-untuk-healing-di-sawahlunto",
  },
  {
    nomor: 38,
    sumber: "Batamnews",
    url: "https://www.batamnews.co.id/berita-98734-meer-von-kandi-heritage-objek-wisata-baru-yang-menarik-di-sawahlunto-sumatera-barat.html",
  },
  {
    nomor: 39,
    sumber: "RRI.co.id",
    url: "https://rri.co.id/bukittinggi/wisata/1139001/kebun-buah-kandi-destinasi-wisata-keluarga-di-sawahlunto",
  },
  {
    nomor: 40,
    sumber: "Sawahlunto Tourism",
    url: "https://sawahluntotourism.com/en/product/tiket-masuk-kebun-buah-kandi/",
  },
];

export function getWisataBySlug(slug: string): WisataItem | undefined {
  return wisataData.find((item) => item.slug === slug);
}

export function getAdjacentWisata(slug: string): {
  prev: WisataItem | null;
  next: WisataItem | null;
} {
  const index = wisataData.findIndex((item) => item.slug === slug);
  return {
    prev: index > 0 ? wisataData[index - 1] : null,
    next: index < wisataData.length - 1 ? wisataData[index + 1] : null,
  };
}
