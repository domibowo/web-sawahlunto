import type { Bilingual } from "@/types";

export type QnAItem = {
  id: string;
  pertanyaan: Bilingual;
  keywords: string[];
  jawaban: Bilingual;
  section: "sejarah" | "budaya" | "kuliner" | "wisata" | "inovasi" | "umum";
  followUp?: string[];
};

export const qnaData: QnAItem[] = [
  // ── SEJARAH ──────────────────────────────────────────────────────────────
  {
    id: "s1",
    pertanyaan: {
      id: "Kapan Sawahlunto berdiri?",
      en: "When was Sawahlunto founded?",
    },
    keywords: ["berdiri","didirikan","lahir","tahun","kapan","founded","established","anniversary","birthday"],
    jawaban: {
      id: "1 Desember 1888, ditetapkan pemerintah Hindia Belanda sebagai ibu kota Afdeeling di lembah Ombilin. Tanggal ini kini diperingati sebagai Hari Jadi Kota Sawahlunto.",
      en: "On 1 December 1888, the Dutch colonial government established the administrative boundaries of the Afdeeling capital in the Ombilin valley. This date is now commemorated as Sawahlunto's City Anniversary.",
    },
    section: "sejarah",
    followUp: ["s2", "s3"],
  },
  {
    id: "s2",
    pertanyaan: {
      id: "Siapa yang menemukan batu bara Ombilin?",
      en: "Who discovered the Ombilin coalfields?",
    },
    keywords: ["penemu","menemukan","de greve","batu bara","ombilin","discovered","geologist","coal"],
    jawaban: {
      id: "Geolog Belanda Willem Hendrik de Greve menemukan cadangan batu bara berkualitas tinggi di kawasan Ombilin sekitar 1867-1868. Setelah ia meninggal dalam kecelakaan, penelitiannya dilanjutkan Jacobus Cluysenaer dan Daniel Veth.",
      en: "Dutch geologist Willem Hendrik de Greve discovered high-quality coal deposits in the Ombilin area around 1867-1868. After he died in an accident, his research was continued by Jacobus Cluysenaer and Daniel Veth.",
    },
    section: "sejarah",
    followUp: ["s1", "s3"],
  },
  {
    id: "s3",
    pertanyaan: {
      id: "Apa itu orang rantai?",
      en: "What were the orang rantai?",
    },
    keywords: ["orang rantai","kerja paksa","tahanan","rantai","forced","chained","prisoners","colonial"],
    jawaban: {
      id: "Orang rantai (tahanan yang dirantai kakinya agar tidak melarikan diri) adalah pekerja paksa yang dipekerjakan di tambang Ombilin pada era kolonial. Mereka berasal dari berbagai penjuru Hindia Belanda dan menjadi bagian kelam sejarah kota ini.",
      en: "Orang rantai (literally \"chained people\" — prisoners shackled at the feet to prevent escape) were forced labourers who worked in the Ombilin mine during the colonial era. They came from across the Dutch East Indies and represent the darkest chapter of this city's history.",
    },
    section: "sejarah",
    followUp: ["s4", "w5"],
  },
  {
    id: "s4",
    pertanyaan: {
      id: "Kapan Sawahlunto jadi Warisan Dunia UNESCO?",
      en: "When did Sawahlunto become a UNESCO World Heritage Site?",
    },
    keywords: ["unesco","warisan dunia","world heritage","2019","ombilin","heritage"],
    jawaban: {
      id: "Pada 6 Juli 2019, UNESCO menetapkan Tambang Batu Bara Ombilin sebagai Warisan Dunia kelima Indonesia dalam sidang di Baku, Azerbaijan. Pengakuan ini mencakup 12 komponen situs di tiga wilayah.",
      en: "On 6 July 2019, UNESCO inscribed the Ombilin Coal Mining Heritage as Indonesia's fifth World Heritage Site at the 43rd session in Baku, Azerbaijan. The inscription covers 12 component sites across three areas.",
    },
    section: "sejarah",
    followUp: ["s5", "i1"],
  },
  {
    id: "s5",
    pertanyaan: {
      id: "Apa saja komponen situs UNESCO-nya?",
      en: "What are the components of the UNESCO site?",
    },
    keywords: ["komponen","12","jalur kereta","pelabuhan","emmahaven","155km","components","railway","port"],
    jawaban: {
      id: "12 komponen mencakup tiga area: kawasan tambang dan kota tambang Sawahlunto, jalur kereta rel gigi sepanjang 155km, serta Pelabuhan Emmahaven (kini Teluk Bayur) di Padang.",
      en: "The 12 components span three areas: the mining area and mining town of Sawahlunto, the 155km rack railway, and Emmahaven Port (now Teluk Bayur) in Padang.",
    },
    section: "sejarah",
    followUp: ["s4"],
  },
  {
    id: "s6",
    pertanyaan: {
      id: "Kapan tambang Ombilin berhenti beroperasi?",
      en: "When did the Ombilin mine stop operating?",
    },
    keywords: ["tutup","berhenti","selesai","closed","stopped","2002","cadangan"],
    jawaban: {
      id: "Operasi pertambangan skala besar resmi berakhir pada 2002 seiring menipisnya cadangan dan meningkatnya biaya operasional, mengakibatkan banyak warga pindah ke kota lain.",
      en: "Large-scale mining operations officially ceased in 2002 as reserves dwindled and operational costs rose, leading many residents to move to other cities.",
    },
    section: "sejarah",
    followUp: ["s7"],
  },
  {
    id: "s7",
    pertanyaan: {
      id: "Kapan puncak kejayaan tambang Sawahlunto?",
      en: "When was Sawahlunto's mining golden age?",
    },
    keywords: ["puncak","kejayaan","golden","90%","1920","produksi","terbesar"],
    jawaban: {
      id: "Puncaknya pada 1920-1921, saat produksi batu bara Ombilin memenuhi hingga 90% kebutuhan energi di seluruh Hindia Belanda.",
      en: "The peak was in 1920-1921, when Ombilin coal production supplied up to 90% of all energy needs across the Dutch East Indies.",
    },
    section: "sejarah",
    followUp: ["s6"],
  },
  {
    id: "s8",
    pertanyaan: {
      id: "Bagaimana jalur kereta Sawahlunto dibangun?",
      en: "How was the Sawahlunto railway built?",
    },
    keywords: ["kereta","rel","railway","155km","1894","mak itam","museum kereta"],
    jawaban: {
      id: "Belanda membangun jalur kereta rel gigi (rack railway) sepanjang 155km menghubungkan Sawahlunto dengan Pelabuhan Emmahaven di Padang, selesai 1894. Kini sebagian menjadi Museum Kereta Api.",
      en: "The Dutch built a 155km rack railway connecting Sawahlunto to Emmahaven Port in Padang, completed in 1894. Part of it now houses the Railway Museum.",
    },
    section: "sejarah",
    followUp: ["w8", "w7"],
  },

  // ── BUDAYA ───────────────────────────────────────────────────────────────
  {
    id: "b1",
    pertanyaan: {
      id: "Apa itu Bahasa Tansi?",
      en: "What is Bahasa Tansi?",
    },
    keywords: ["bahasa tansi","tansi","kreol","creole","bahasa","language","unik"],
    jawaban: {
      id: "Bahasa Tansi adalah bahasa kreol unik yang lahir dari percampuran para pekerja tambang dari berbagai daerah — perpaduan Minangkabau, Jawa, Tionghoa, dan Melayu yang hanya bisa ditemukan di Sawahlunto.",
      en: "Bahasa Tansi is a unique creole language born from the mixing of mine workers from different regions — a blend of Minangkabau, Javanese, Chinese, and Malay that can only be found in Sawahlunto.",
    },
    section: "budaya",
    followUp: ["b2", "s3"],
  },
  {
    id: "b2",
    pertanyaan: {
      id: "Apa itu Makan Bajamba?",
      en: "What is Makan Bajamba?",
    },
    keywords: ["makan bajamba","bajamba","makan bersama","1 desember","feast","tradition"],
    jawaban: {
      id: "Makan Bajamba adalah tradisi makan bersama massal yang dirayakan setiap 1 Desember (Hari Jadi Kota Sawahlunto). Ribuan warga duduk berderet panjang mengenakan pakaian adat untuk makan bersama.",
      en: "Makan Bajamba is a communal feast tradition celebrated every 1 December (Sawahlunto City Anniversary). Thousands of residents sit in long rows wearing traditional attire to eat together.",
    },
    section: "budaya",
    followUp: ["b1"],
  },
  {
    id: "b3",
    pertanyaan: {
      id: "Apa itu Songket Silungkang?",
      en: "What is Songket Silungkang?",
    },
    keywords: ["songket","silungkang","tenun","weaving","kain","textile","2019"],
    jawaban: {
      id: "Songket Silungkang adalah kain tenun tradisional dari Nagari Silungkang yang memadukan benang katun dengan kilau emas, perak, atau tembaga. Resmi diakui sebagai Warisan Budaya Tak Benda Indonesia pada 2019.",
      en: "Songket Silungkang is a traditional hand-woven textile from Nagari Silungkang, combining cotton threads with the shimmer of gold, silver, or copper. Officially recognised as Indonesian Intangible Cultural Heritage in 2019.",
    },
    section: "budaya",
    followUp: ["b4", "k4"],
  },
  {
    id: "b4",
    pertanyaan: {
      id: "Apa itu SISSCa?",
      en: "What is SISSCa?",
    },
    keywords: ["sissca","carnival","karnaval","songket","7 september","event"],
    jawaban: {
      id: "SISSCa (Sawahlunto International Songket Silungkang Carnival) adalah karnaval tahunan setiap 7 September bertepatan Hari Tenun Nasional. Masuk TOP 110 Event Karisma Event Nusantara Kemenparekraf. Tema 2026: \"Songket Innovation in Luxury\".",
      en: "SISSCa (Sawahlunto International Songket Silungkang Carnival) is an annual carnival held every 7 September on National Weaving Day. Ranked in the TOP 110 of the Ministry of Tourism's Karisma Event Nusantara. 2026 theme: \"Songket Innovation in Luxury\".",
    },
    section: "budaya",
    followUp: ["b3"],
  },
  {
    id: "b5",
    pertanyaan: {
      id: "Dari mana asal pekerja tambang dulu?",
      en: "Where did the mine workers originally come from?",
    },
    keywords: ["pekerja","asal","jawa","tionghoa","minangkabau","workers","origin","ethnic"],
    jawaban: {
      id: "Pekerja tambang Ombilin berasal dari berbagai latar: warga Minangkabau lokal, pekerja kontrak dari Jawa dan Tiongkok, serta tahanan dari berbagai wilayah Hindia Belanda — percampuran inilah yang melahirkan identitas multietnis Sawahlunto.",
      en: "The Ombilin mine workers came from diverse backgrounds: local Minangkabau people, contract workers from Java and China, and prisoners from across the Dutch East Indies — this mixing gave birth to Sawahlunto's multiethnic identity.",
    },
    section: "budaya",
    followUp: ["s3", "b1"],
  },
  {
    id: "b6",
    pertanyaan: {
      id: "Di mana bisa lihat atau beli Songket Silungkang?",
      en: "Where can I see or buy Songket Silungkang?",
    },
    keywords: ["beli","where","buy","lihat","nagari silungkang","pengrajin","weaver"],
    jawaban: {
      id: "Kunjungi langsung Nagari Silungkang (sekitar 15 menit dari pusat kota) — banyak pengrajin rumahan yang terbuka untuk dikunjungi dan menjual produk langsung.",
      en: "Visit Nagari Silungkang directly (about 15 minutes from the city centre) — many home weavers welcome visitors and sell their products directly.",
    },
    section: "budaya",
    followUp: ["b3"],
  },

  // ── KULINER ──────────────────────────────────────────────────────────────
  {
    id: "k1",
    pertanyaan: {
      id: "Makanan khas Sawahlunto apa saja?",
      en: "What are Sawahlunto's signature dishes?",
    },
    keywords: ["makanan","kuliner","khas","food","dishes","specialty","makan"],
    jawaban: {
      id: "Kuliner khas yang wajib dicoba: Dendeng Batokok, Kopi Datuk Silungkang, Sup Silungkang, dan Kerupuk Ubi Silungkang sebagai oleh-oleh.",
      en: "Must-try local specialties: Dendeng Batokok, Kopi Datuk Silungkang, Sup Silungkang, and Kerupuk Ubi Silungkang to take home.",
    },
    section: "kuliner",
    followUp: ["k2", "k3", "k4"],
  },
  {
    id: "k2",
    pertanyaan: {
      id: "Apa itu Dendeng Batokok?",
      en: "What is Dendeng Batokok?",
    },
    keywords: ["dendeng","batokok","daging","beef","grilled","panggang"],
    jawaban: {
      id: "Daging sapi yang dipukul-pukul (batokok) untuk membuka seratnya, dibumbui ketumbar dan rempah, lalu dipanggang di atas bara tempurung kelapa. Hidangan paling identik dengan Sawahlunto.",
      en: "Beef that is pounded (batokok) to open its fibres, seasoned with coriander and spices, then grilled over coconut shell charcoal. The dish most closely identified with Sawahlunto.",
    },
    section: "kuliner",
    followUp: ["k1", "k5"],
  },
  {
    id: "k3",
    pertanyaan: {
      id: "Apa itu Kopi Datuk Silungkang?",
      en: "What is Kopi Datuk Silungkang?",
    },
    keywords: ["kopi","coffee","robusta","datuk","silungkang","kedai","cafe"],
    jawaban: {
      id: "Kopi robusta lokal yang disangrai secara tradisional di atas tungku kayu bakar, lalu ditumbuk manual sebelum diseduh. Bisa dinikmati di kedai-kedai tua sekitar pasar lama.",
      en: "Local robusta coffee traditionally roasted over a wood-fired stove, then manually ground before brewing. Found at old coffee shops around the historic market area.",
    },
    section: "kuliner",
    followUp: ["k1"],
  },
  {
    id: "k4",
    pertanyaan: {
      id: "Apa oleh-oleh khas Sawahlunto?",
      en: "What souvenirs should I buy from Sawahlunto?",
    },
    keywords: ["oleh","souvenir","bawa","take home","kerupuk","beli","buy"],
    jawaban: {
      id: "Oleh-oleh terbaik: Kerupuk Ubi Silungkang (camilan renyah khas), dan Songket Silungkang (kain tenun tradisional) untuk yang lebih berkesan.",
      en: "Best souvenirs: Kerupuk Ubi Silungkang (crispy local snack), and Songket Silungkang (traditional handwoven textile) for something more meaningful.",
    },
    section: "kuliner",
    followUp: ["k1", "b3"],
  },
  {
    id: "k5",
    pertanyaan: {
      id: "Di mana bisa makan Dendeng Batokok?",
      en: "Where can I eat Dendeng Batokok?",
    },
    keywords: ["makan","where","dimana","restoran","warung","restaurant"],
    jawaban: {
      id: "Tersedia di rumah makan sekitar pasar lama dan pusat kota Sawahlunto. Banyak warung yang menjadikannya menu andalan.",
      en: "Available at restaurants around the old market and city centre of Sawahlunto. Many warungs feature it as their signature dish.",
    },
    section: "kuliner",
    followUp: ["k2"],
  },
  {
    id: "k6",
    pertanyaan: {
      id: "Apa itu Sup Silungkang?",
      en: "What is Sup Silungkang?",
    },
    keywords: ["sup","silungkang","soup","kuah","bening","soto"],
    jawaban: {
      id: "Sup berkuah bening kaya rempah berisi daging sapi dengan tulang, ditaburi bawang goreng renyah. Cocok dinikmati di udara sejuk dataran tinggi Sawahlunto.",
      en: "A clear, spice-rich soup with beef and bone, topped with crispy fried shallots. Perfect to enjoy in Sawahlunto's cool highland air.",
    },
    section: "kuliner",
    followUp: ["k1"],
  },

  // ── WISATA ───────────────────────────────────────────────────────────────
  {
    id: "w1",
    pertanyaan: {
      id: "Apa destinasi wajib di Sawahlunto?",
      en: "What are the must-visit destinations in Sawahlunto?",
    },
    keywords: ["wajib","must","destinasi","top","terbaik","best","rekomendasi","recommend"],
    jawaban: {
      id: "Tiga wajib: Lubang Mbah Soero (terowongan tambang asli), Danau Biru (danau bekas tambang yang memesona), dan Museum Goedang Ransoem (dapur umum kolonial). Tambahkan Puncak Cemara untuk view kota terbaik.",
      en: "Three must-visits: Lubang Mbah Soero (original mine tunnel), Danau Biru (stunning former mine lake), and Museum Goedang Ransoem (colonial mass kitchen). Add Puncak Cemara for the best city view.",
    },
    section: "wisata",
    followUp: ["w2", "w5", "w9"],
  },
  {
    id: "w2",
    pertanyaan: {
      id: "Berapa hari idealnya di Sawahlunto?",
      en: "How many days should I spend in Sawahlunto?",
    },
    keywords: ["berapa hari","how many days","itinerary","rencana","lama","stay"],
    jawaban: {
      id: "2-3 hari ideal: Hari 1 kawasan heritage kota (Lubang Mbah Soero, Goedang Ransoem, Museum Kereta Api, Silo). Hari 2 wisata alam (Danau Biru, Desa Rantih). Hari 3 budaya dan peta kota.",
      en: "2-3 days is ideal: Day 1 city heritage area (Lubang Mbah Soero, Goedang Ransoem, Railway Museum, Silo). Day 2 nature (Danau Biru, Desa Rantih). Day 3 culture and city exploration.",
    },
    section: "wisata",
    followUp: ["w1", "w3"],
  },
  {
    id: "w3",
    pertanyaan: {
      id: "Bagaimana cara ke Sawahlunto?",
      en: "How do I get to Sawahlunto?",
    },
    keywords: ["cara","how","transport","bus","travel","padang","bukittinggi","akses"],
    jawaban: {
      id: "Dari Padang ±3 jam via darat (100km ke arah timur laut). Dari Bukittinggi ±2 jam. Tidak ada bandara — akses terbaik via kendaraan pribadi atau travel/bus dari Padang.",
      en: "From Padang approximately 3 hours by road (100km northeast). From Bukittinggi approximately 2 hours. No airport — best accessed by private vehicle or travel/bus from Padang.",
    },
    section: "wisata",
    followUp: ["w2"],
  },
  {
    id: "w4",
    pertanyaan: {
      id: "Apakah ada pemandu wisata di Sawahlunto?",
      en: "Are there tour guides available in Sawahlunto?",
    },
    keywords: ["pemandu","guide","tour","disparpora","dinas pariwisata"],
    jawaban: {
      id: "Ya, pemandu wisata tersedia melalui Dinas Pariwisata Pemuda dan Olahraga (Disparpora) Kota Sawahlunto. Sangat disarankan untuk kunjungan ke Lubang Mbah Soero.",
      en: "Yes, tour guides are available through the Sawahlunto City Tourism Office (Disparpora). Highly recommended for visits to Lubang Mbah Soero.",
    },
    section: "wisata",
    followUp: ["w1"],
  },
  {
    id: "w5",
    pertanyaan: {
      id: "Berapa tiket Lubang Mbah Soero?",
      en: "What is the admission fee for Lubang Mbah Soero?",
    },
    keywords: ["tiket","harga","price","admission","fee","lubang mbah soero","masuk"],
    jawaban: {
      id: "Domestik Rp15.000, wisatawan mancanegara Rp50.000. Harga dapat berubah — konfirmasi sebelum datang.",
      en: "Domestic Rp15,000, foreign visitors Rp50,000. Prices subject to change — confirm before visiting.",
    },
    section: "wisata",
    followUp: ["w6", "w7"],
  },
  {
    id: "w6",
    pertanyaan: {
      id: "Jam buka Lubang Mbah Soero?",
      en: "What are the opening hours of Lubang Mbah Soero?",
    },
    keywords: ["jam","buka","tutup","open","hours","jadwal","schedule","lubang"],
    jawaban: {
      id: "Senin-Jumat 08.00-16.00 WIB, Sabtu-Minggu 09.00-17.00 WIB.",
      en: "Monday-Friday 08:00-16:00 WIB, Saturday-Sunday 09:00-17:00 WIB.",
    },
    section: "wisata",
    followUp: ["w5"],
  },
  {
    id: "w7",
    pertanyaan: {
      id: "Berapa tiket Museum Goedang Ransoem?",
      en: "What is the admission fee for Museum Goedang Ransoem?",
    },
    keywords: ["tiket","goedang ransoem","museum","harga","price","admission","ransoem"],
    jawaban: {
      id: "Dewasa Rp10.000, anak-anak Rp7.000, wisatawan mancanegara Rp50.000. Buka setiap hari 08.00-17.00 WIB.",
      en: "Adults Rp10,000, children Rp7,000, foreign visitors Rp50,000. Open daily 08:00-17:00 WIB.",
    },
    section: "wisata",
    followUp: ["w8"],
  },
  {
    id: "w8",
    pertanyaan: {
      id: "Apakah Mak Itam masih beroperasi?",
      en: "Is Mak Itam still operating?",
    },
    keywords: ["mak itam","kereta","train","steam","uap","beroperasi","jadwal","museum kereta"],
    jawaban: {
      id: "Mak Itam sesekali masih beroperasi sebagai kereta wisata, biasanya saat event khusus kota. Cek jadwal via Museum Kereta Api atau Dinas Pariwisata sebelum datang jika ingin menyaksikannya.",
      en: "Mak Itam still runs occasionally as a heritage tourist train, usually during special city events. Check the schedule via the Railway Museum or Tourism Office before visiting if you want to see it in operation.",
    },
    section: "wisata",
    followUp: ["w7", "s8"],
  },
  {
    id: "w9",
    pertanyaan: {
      id: "Bagaimana cara ke Danau Biru?",
      en: "How do I get to Danau Biru?",
    },
    keywords: ["danau biru","lake","cara","how","akses","transport","ojek"],
    jawaban: {
      id: "Dari pusat kota ±30 menit via kendaraan pribadi atau ojek. Medan jalan berbatu menuju danau, tidak disarankan pakai kendaraan rendah.",
      en: "About 30 minutes from the city centre by private vehicle or ojek (motorcycle taxi). The road to the lake is rough — low-clearance vehicles not recommended.",
    },
    section: "wisata",
    followUp: ["w10", "w11"],
  },
  {
    id: "w10",
    pertanyaan: {
      id: "Jam buka Danau Biru?",
      en: "What are the opening hours of Danau Biru?",
    },
    keywords: ["jam","buka","danau biru","open","tiket","hours"],
    jawaban: {
      id: "Buka setiap hari Senin-Minggu 08.00-18.00 WIB. Tiket sekitar Rp10.000-15.000.",
      en: "Open daily Monday-Sunday 08:00-18:00 WIB. Ticket approximately Rp10,000-15,000.",
    },
    section: "wisata",
    followUp: ["w9"],
  },
  {
    id: "w11",
    pertanyaan: {
      id: "Apakah ada spot foto bagus di Sawahlunto?",
      en: "Where are the best photo spots in Sawahlunto?",
    },
    keywords: ["foto","photo","instagram","spot","best","bagus","keren","view"],
    jawaban: {
      id: "Top 3: Puncak Polan (papan \"SAWAHLUNTO\" ala Hollywood Sign), Batu Runciang (formasi batu karst saat sunset), Danau Biru (refleksi air biru di antara perbukitan hijau).",
      en: "Top 3: Puncak Polan (the \"SAWAHLUNTO\" Hollywood Sign-style billboard), Batu Runciang (karst rock formation at sunset), Danau Biru (blue water reflections amid green hills).",
    },
    section: "wisata",
    followUp: ["w9"],
  },
  {
    id: "w12",
    pertanyaan: {
      id: "Destinasi untuk keluarga dengan anak?",
      en: "What destinations are good for families with children?",
    },
    keywords: ["keluarga","anak","family","children","kids","seru","fun"],
    jawaban: {
      id: "Kebun Buah Kandi (petik buah langsung), Kawasan Kandi (danau & camping), dan Waterboom (cek operasional dulu). Semua di kawasan Kandi yang berdekatan.",
      en: "Kebun Buah Kandi (pick-your-own fruit), Kawasan Kandi (lake & camping), and Waterboom (check current operations first). All located near each other in the Kandi area.",
    },
    section: "wisata",
    followUp: ["w13"],
  },
  {
    id: "w13",
    pertanyaan: {
      id: "Apakah Waterboom Sawahlunto masih buka?",
      en: "Is the Sawahlunto Waterboom still open?",
    },
    keywords: ["waterboom","water park","kolam","renang","swimming","buka","open","operational"],
    jawaban: {
      id: "Masih beroperasi namun beberapa wahana dalam pembenahan. Sebaiknya hubungi pengelola PT Wahana Wisata Sawahlunto sebelum datang untuk memastikan wahana apa saja yang aktif.",
      en: "Still operating but some rides are currently under maintenance. Best to contact the operator PT Wahana Wisata Sawahlunto before visiting to confirm which rides are active.",
    },
    section: "wisata",
    followUp: ["w12"],
  },
  {
    id: "w14",
    pertanyaan: {
      id: "Destinasi alam terbaik di Sawahlunto?",
      en: "What are the best nature destinations in Sawahlunto?",
    },
    keywords: ["alam","nature","outdoor","trekking","hiking","air terjun","waterfall","gunung"],
    jawaban: {
      id: "Top alam: Danau Biru (danau bekas tambang), Desa Wisata Rantih (air terjun & trekking), Batu Runciang (karst), Padang Savana Kolok (padang rumput), Puncak Polan (view kota).",
      en: "Top nature spots: Danau Biru (former mine lake), Desa Wisata Rantih (waterfall & trekking), Batu Runciang (karst), Padang Savana Kolok (grassland), Puncak Polan (city view).",
    },
    section: "wisata",
    followUp: ["w9"],
  },
  {
    id: "w15",
    pertanyaan: {
      id: "Gedung Pusat Kebudayaan bisa dikunjungi?",
      en: "Can I visit the Gedung Pusat Kebudayaan (Gluck Auf)?",
    },
    keywords: ["gpk","gluck auf","pusat kebudayaan","cultural","buka","open","revitalisasi"],
    jawaban: {
      id: "Saat ini sedang direvitalisasi (mulai Februari 2026, target selesai 12 Agustus 2026). Belum bisa dikunjungi seperti biasa — pantau informasi terbaru via media sosial Pemko Sawahlunto.",
      en: "Currently under revitalisation (started February 2026, expected completion 12 August 2026). Not open for regular visits — follow Sawahlunto City's social media for the latest updates.",
    },
    section: "wisata",
    followUp: ["w1"],
  },
  {
    id: "w16",
    pertanyaan: {
      id: "Di mana bisa lihat peta lengkap destinasi?",
      en: "Where can I see a complete map of all destinations?",
    },
    keywords: ["peta","map","lokasi","dimana","where","semua","all","complete"],
    jawaban: {
      id: "Kunjungi halaman Peta Kota di situs ini — tersedia peta ilustrasi dan peta sungguhan interaktif yang menandai semua lokasi wisata.",
      en: "Visit the City Map page on this site — both an illustrated map and an interactive real map are available, marking all tourist locations.",
    },
    section: "wisata",
    followUp: ["w1"],
  },

  // ── INOVASI ──────────────────────────────────────────────────────────────
  {
    id: "i1",
    pertanyaan: {
      id: "Mengapa Sawahlunto jadi UNESCO?",
      en: "Why was Sawahlunto inscribed as UNESCO World Heritage?",
    },
    keywords: ["mengapa","why","alasan","reason","kriteria","criteria","unesco"],
    jawaban: {
      id: "UNESCO mengakuinya atas dua kriteria: (ii) sebagai bukti pertukaran teknologi pertambangan antara Eropa dan Asia, dan (iv) sebagai contoh luar biasa perpaduan teknologi industri dengan kearifan lokal dalam sejarah manusia.",
      en: "UNESCO recognised it under two criteria: (ii) as evidence of the exchange of mining technology between Europe and Asia, and (iv) as an outstanding example of the integration of industrial technology with local wisdom in human history.",
    },
    section: "inovasi",
    followUp: ["s4", "i2"],
  },
  {
    id: "i2",
    pertanyaan: {
      id: "Apa itu Geopark Nasional Sawahlunto?",
      en: "What is the Sawahlunto National Geopark?",
    },
    keywords: ["geopark","geologi","geology","fosil","fossil","ikan","22"],
    jawaban: {
      id: "Kawasan wisata geologi dengan 22 geosite yang dapat dikembangkan, termasuk Geosite Fosil Ikan Gurami Yamini — fosil ikan purba berusia puluhan juta tahun yang hanya ditemukan di Desa Tumpuk Tangah, Sawahlunto.",
      en: "A geological tourism area with 22 developable geosites, including the Geosite of Yamini Gurami Fish Fossils — tens-of-millions-year-old ancient fish fossils found only in Tumpuk Tangah Village, Sawahlunto.",
    },
    section: "inovasi",
    followUp: ["w16"],
  },
  {
    id: "i3",
    pertanyaan: {
      id: "Apa perkembangan terbaru di Sawahlunto?",
      en: "What are the latest developments in Sawahlunto?",
    },
    keywords: ["terbaru","latest","baru","new","2026","update","perkembangan"],
    jawaban: {
      id: "Dua perkembangan terbaru 2026: Hotel Saka Ombilin Heritage (hotel bintang 4 pertama, soft launching April 2026, hasil revitalisasi gedung kolonial 1916) dan pengakuan Desa Sikalang sebagai Desa Kreatif Sumatera Barat.",
      en: "Two notable 2026 developments: Hotel Saka Ombilin Heritage (the city's first 4-star hotel, soft launched April 2026, revitalised from a 1916 colonial building) and Desa Sikalang recognised as a Creative Village of West Sumatra.",
    },
    section: "inovasi",
    followUp: ["i1"],
  },
  {
    id: "i4",
    pertanyaan: {
      id: "Apakah situs ini bisa diakses offline?",
      en: "Can this website be accessed offline?",
    },
    keywords: ["offline","sinyal","signal","cache","internet","tanpa","without"],
    jawaban: {
      id: "Ya! Halaman yang pernah kamu buka tersimpan otomatis di perangkatmu. Artinya kamu bisa membaca info wisata Sawahlunto meski tanpa sinyal — berguna di kawasan tambang atau area terpencil.",
      en: "Yes! Pages you've visited are automatically saved to your device. This means you can read Sawahlunto travel information even without signal — useful in mining areas or remote spots.",
    },
    section: "inovasi",
  },

  // ── UMUM ─────────────────────────────────────────────────────────────────
  {
    id: "u1",
    pertanyaan: {
      id: "Apa itu Sawahlunto?",
      en: "What is Sawahlunto?",
    },
    keywords: ["apa","what","sawahlunto","kota","city","tentang","about"],
    jawaban: {
      id: "Sawahlunto adalah kota bekas tambang batu bara kolonial di Sumatera Barat yang kini menjadi Situs Warisan Dunia UNESCO. Taglinenya: \"Dari kota tambang, menuju kota wisata digital.\"",
      en: "Sawahlunto is a former colonial coal mining city in West Sumatra, now a UNESCO World Heritage Site. Its tagline: \"From a mining town, towards a digital heritage tourism city.\"",
    },
    section: "umum",
    followUp: ["s1", "s4"],
  },
  {
    id: "u2",
    pertanyaan: {
      id: "Di mana Sawahlunto berada?",
      en: "Where is Sawahlunto located?",
    },
    keywords: ["dimana","where","lokasi","location","sumatera barat","padang","peta"],
    jawaban: {
      id: "Sawahlunto terletak di Sumatera Barat, sekitar 100km ke arah timur laut dari Padang. Kota ini berada di lembah perbukitan Bukit Barisan, di ketinggian sekitar 250-650 meter di atas permukaan laut.",
      en: "Sawahlunto is located in West Sumatra, approximately 100km northeast of Padang. The city sits in the valleys of the Bukit Barisan range, at an elevation of approximately 250-650 metres above sea level.",
    },
    section: "umum",
    followUp: ["w3"],
  },
  {
    id: "u3",
    pertanyaan: {
      id: "Kapan waktu terbaik ke Sawahlunto?",
      en: "When is the best time to visit Sawahlunto?",
    },
    keywords: ["kapan","when","waktu","time","musim","season","festival"],
    jawaban: {
      id: "Sawahlunto bisa dikunjungi sepanjang tahun. Untuk wisata alam, hindari musim hujan (Oktober-Maret). Festival SISSCa (7 September) dan Makan Bajamba (1 Desember) adalah waktu terbaik untuk melihat budaya kota.",
      en: "Sawahlunto can be visited year-round. For nature trips, avoid the rainy season (October-March). SISSCa festival (7 September) and Makan Bajamba (1 December) are the best times to experience the city's culture.",
    },
    section: "umum",
    followUp: ["w2", "b2", "b4"],
  },
  {
    id: "u4",
    pertanyaan: {
      id: "Sumber informasi resmi Sawahlunto?",
      en: "Where can I find official Sawahlunto information?",
    },
    keywords: ["sumber","info","official","resmi","website","instagram","contact"],
    jawaban: {
      id: "Portal resmi: sawahluntokota.go.id (pemerintah kota) dan sawahluntotourism.sawahluntokota.go.id (Dinas Pariwisata). Akun Instagram resmi: @sawahluntokota dan @disparporasawahlunto.",
      en: "Official portals: sawahluntokota.go.id (city government) and sawahluntotourism.sawahluntokota.go.id (Tourism Office). Official Instagram: @sawahluntokota and @disparporasawahlunto.",
    },
    section: "umum",
  },

  // ── WISATA LANJUTAN ──────────────────────────────────────────────────────
  {
    id: "w17",
    pertanyaan: {
      id: "Apa itu Silo Sawahlunto?",
      en: "What is the Silo Sawahlunto?",
    },
    keywords: ["silo","tabung","tangki","tank","taman segitiga","bukit asam","sirene","siren"],
    jawaban: {
      id: "Silo adalah tiga tabung raksasa bekas penampungan batu bara yang berdiri di Taman Segitiga, persis di depan Kantor PT Bukit Asam. Bangunan ini sengaja dibiarkan apa adanya untuk menjaga keasliannya. Hal paling berkesan dari Silo: sirine tua yang dulu menandai jam kerja orang rantai masih berbunyi tiga kali sehari — pukul 07.00, 13.00, dan 16.00.",
      en: "The Silo consists of three giant coal storage tanks standing at Taman Segitiga, directly in front of PT Bukit Asam's office. The structure is deliberately left as-is to preserve its authenticity. Most striking: the old siren that once marked the orang rantai's working hours still sounds three times daily — at 07:00, 13:00, and 16:00.",
    },
    section: "wisata",
    followUp: ["w27", "s3"],
  },
  {
    id: "w18",
    pertanyaan: {
      id: "Apa itu Makam Belanda (Kerkhof) di Sawahlunto?",
      en: "What is the Kerkhof (Dutch Cemetery) in Sawahlunto?",
    },
    keywords: ["makam","kerkhof","belanda","dutch","cemetery","pemakaman","lubang panjang","1917"],
    jawaban: {
      id: "Kerkhof adalah kompleks pemakaman kolonial yang telah ada sejak 1917 di kawasan Lubang Panjang. Menyimpan puluhan makam bergaya Eropa milik umat Kristen Belanda, beserta beberapa makam Jepang dan Tionghoa — cerminan keberagaman penghuni kota tambang pada masanya. Tak jarang keturunan Belanda datang untuk menapak tilas leluhur mereka.",
      en: "Kerkhof is a colonial cemetery dating back to 1917 in the Lubang Panjang area. It holds dozens of European-style graves belonging to Dutch Christians, alongside some Japanese and Chinese graves — a reflection of the mining town's diverse community. Descendants of Dutch workers still occasionally visit to trace their ancestors.",
    },
    section: "wisata",
    followUp: ["b5", "w5"],
  },
  {
    id: "w19",
    pertanyaan: {
      id: "Apa itu Museum Tambang Ombilin?",
      en: "What is the Museum Tambang Ombilin?",
    },
    keywords: ["museum tambang","ombilin","1891","soeharto","koleksi","collection","1914"],
    jawaban: {
      id: "Museum ini diresmikan Juni 2014 di sebuah gedung bersejarah yang telah berdiri sejak 1891, dan pernah menjadi rumah peristirahatan Presiden Soeharto. Koleksinya merekam seluruh perjalanan industri tambang: peralatan kerja, arsip kolonial, kostum penambang, kendaraan pengangkut batu bara, foto lama, hingga mesin pemilah batu bara. Pemandu dan film singkat tersedia untuk penjelasan lebih mendalam.",
      en: "Inaugurated in June 2014, this museum is housed in a historic building that has stood since 1891 and once served as President Soeharto's rest house. Its collection chronicles the entire mining industry: tools, colonial archives, miner's costumes, coal transport vehicles, old photographs, and coal sorting machines. Guides and a short film are available for deeper insight.",
    },
    section: "wisata",
    followUp: ["w7", "s2"],
  },
  {
    id: "w20",
    pertanyaan: {
      id: "Apa itu Puncak Cemara?",
      en: "What is Puncak Cemara?",
    },
    keywords: ["puncak cemara","cemara","view","panorama","spot foto","instagramable","anak"],
    jawaban: {
      id: "Puncak Cemara di Kecamatan Barangin adalah titik pandang dengan panorama seluruh Kota Sawahlunto yang indah, baik siang maupun malam hari. Area ini dilengkapi spot foto instagramable, gazebo, lesehan, mushala, dan area bermain anak — cocok untuk keluarga. Biaya masuk terjangkau dan lokasinya tidak jauh dari pusat kota.",
      en: "Puncak Cemara in Kecamatan Barangin offers a panoramic view of the whole of Sawahlunto, beautiful both by day and at night. The area features photo spots, gazebos, relaxation areas, a prayer room, and a children's play area — great for families. Admission is affordable and the location is close to the city centre.",
    },
    section: "wisata",
    followUp: ["w21", "w11"],
  },
  {
    id: "w21",
    pertanyaan: {
      id: "Apa itu Puncak Polan?",
      en: "What is Puncak Polan?",
    },
    keywords: ["puncak polan","poland","paragliding","paralayang","tulisan","sign","sawahlunto","villa"],
    jawaban: {
      id: "Puncak Polan (juga disebut Puncak Poland atau Puncak Sungai) adalah destinasi ketinggian favorit penggila paragliding nasional, ditandai tulisan besar \"SAWAHLUNTO\" di bukit — mengingatkan pada Hollywood Sign. Tersedia fasilitas villa, dan waktu terbaik berkunjung adalah subuh untuk melihat sunrise atau sore untuk matahari terbenam.",
      en: "Puncak Polan (also called Puncak Poland or Puncak Sungai) is a favourite high-altitude destination for paragliding enthusiasts nationwide, marked by a large \"SAWAHLUNTO\" sign on the hillside — reminiscent of the Hollywood Sign. Villa facilities are available, and the best times to visit are dawn for sunrise or late afternoon for sunset.",
    },
    section: "wisata",
    followUp: ["w20", "w11"],
  },
  {
    id: "w22",
    pertanyaan: {
      id: "Apa itu Desa Wisata Rantih?",
      en: "What is Desa Wisata Rantih?",
    },
    keywords: ["rantih","desa wisata","air terjun","waterfall","bikan","tibarau","camping","trekking","tubing"],
    jawaban: {
      id: "Sekitar 12 km dari pusat kota, Desa Wisata Rantih menawarkan alam pedesaan asri: dua air terjun (Bikan dan Tibarau), rumah pohon, area camping, jalur trekking hutan, dan susur sungai dengan tubing di Sungai Ombilin. Dikelola oleh Kelompok Sadar Wisata Rantih bersama warga — paket makan juga tersedia melalui lembaga wisata desa.",
      en: "About 12 km from the city centre, Desa Wisata Rantih offers unspoilt rural scenery: two waterfalls (Bikan and Tibarau), a treehouse, camping area, forest trekking trails, and river tubing along the Ombilin River. Managed by the Rantih Tourism Awareness Group — meal packages are also available through the village tourism body.",
    },
    section: "wisata",
    followUp: ["w14", "w23"],
  },
  {
    id: "w23",
    pertanyaan: {
      id: "Apa itu Lubang Kalam?",
      en: "What is Lubang Kalam?",
    },
    keywords: ["lubang kalam","terowongan","tunnel","muara kalaban","kereta","railway","1km"],
    jawaban: {
      id: "Lubang Kalam adalah terowongan kereta api sepanjang 1 kilometer yang menghubungkan Stasiun Sawahlunto dengan Stasiun Muara Kalaban. Dibangun untuk distribusi batu bara di era kolonial, kini hanya sesekali dilewati Mak Itam — lokomotif uap legendaris yang masih beroperasi saat event khusus. Menawarkan latar foto dramatis yang khas.",
      en: "Lubang Kalam is a 1-kilometre railway tunnel connecting Sawahlunto Station with Muara Kalaban Station. Built for colonial-era coal distribution, it is now only occasionally traversed by Mak Itam — the legendary steam locomotive that still operates during special events. It offers a distinctively dramatic photographic backdrop.",
    },
    section: "wisata",
    followUp: ["w8", "w22"],
  },
  {
    id: "w24",
    pertanyaan: {
      id: "Apa itu Gereja Katolik Santa Barbara?",
      en: "What is the Santa Barbara Catholic Church?",
    },
    keywords: ["gereja","santa barbara","katolik","catholic","church","1920","eropa","belanda"],
    jawaban: {
      id: "Dibangun 1919-1920 oleh perusahaan tambang untuk memenuhi kebutuhan ibadah pegawai Eropa yang mayoritas Katolik, gereja ini ditasbihkan 27 November 1920. Arsitekturnya bergaya Eropa dengan menara lonceng dan jendela melengkung berornamen. Sempat jadi asrama tentara Jepang, kini kembali aktif sebagai tempat ibadah — berdampingan dengan Sekolah Santa Lucia yang dibangun di masa yang sama.",
      en: "Built in 1919-1920 by the mining company for the predominantly Catholic European staff, the church was consecrated on 27 November 1920. Its European-style architecture features a bell tower and ornate arched windows. It briefly served as a Japanese barracks during the occupation and is now active as a place of worship — standing alongside Santa Lucia School, built at the same time.",
    },
    section: "wisata",
    followUp: ["w25", "b5"],
  },
  {
    id: "w25",
    pertanyaan: {
      id: "Apa itu Masjid Agung Nurul Islam?",
      en: "What is the Masjid Agung Nurul Islam?",
    },
    keywords: ["masjid","nurul islam","1952","menara","minaret","pembangkit","listrik","power plant","1894"],
    jawaban: {
      id: "Masjid ini punya asal-usul tak terduga: bangunannya semula pembangkit listrik tenaga uap 1894 untuk tambang. Setelah kemerdekaan sempat jadi tempat perakitan senjata pejuang, lalu diresmikan sebagai masjid pada 1952. Cerobong asap pembangkitnya kini menjelma menara setinggi lebih dari 75 meter. Ruang basement berlorong yang dulu untuk perakitan senjata masih bisa ditelusuri.",
      en: "This mosque has an unexpected origin: the building was originally an 1894 steam power plant for the mine. After independence it briefly served as a weapons assembly point for fighters before being inaugurated as a mosque in 1952. Its former smokestack is now a minaret standing over 75 metres tall. The basement corridor once used for weapons assembly can still be explored.",
    },
    section: "wisata",
    followUp: ["w24", "b5"],
  },
  {
    id: "w26",
    pertanyaan: {
      id: "Apa itu Batu Runciang?",
      en: "What is Batu Runciang?",
    },
    keywords: ["batu runciang","karst","batu kapur","limestone","geopark","silungkang","panjat tebing","climbing"],
    jawaban: {
      id: "Batu Runciang adalah kawasan geopark di Kecamatan Silungkang dengan formasi batu kapur raksasa yang terbentuk jutaan tahun silam. Dari ketinggiannya, terlihat sebagian panorama Kota Sawahlunto. Tersedia jembatan untuk akses dan menikmati keindahan bebatuan, serta area panjat tebing dan camping. Terbaik dikunjungi saat sunrise atau sunset.",
      en: "Batu Runciang is a geopark in Kecamatan Silungkang featuring giant limestone formations millions of years old. From its heights, part of Sawahlunto's cityscape is visible. A bridge provides access and allows visitors to take in the rock formations; rock climbing and camping areas are also available. Best visited at sunrise or sunset.",
    },
    section: "wisata",
    followUp: ["w14", "i2"],
  },
  {
    id: "w27",
    pertanyaan: {
      id: "Apa itu Taman Segitiga?",
      en: "What is Taman Segitiga?",
    },
    keywords: ["taman segitiga","alun-alun","square","tugu","monument","bukit asam","silo"],
    jawaban: {
      id: "Taman Segitiga adalah alun-alun kota berbentuk segitiga di depan Kantor PT Bukit Asam, dengan latar belakang tiga Silo raksasa yang jadi ikon visual Sawahlunto. Di sini berdiri tugu dua penambang berhelm — satu bersekop, satu mengangkat belencong — sebagai penghormatan untuk jasa para penambang. Ramai dikunjungi warga siang dan malam, cocok jadi titik awal jelajah kota tua.",
      en: "Taman Segitiga is a triangular public square in front of PT Bukit Asam's office, with the three iconic Silo tanks as a backdrop. A monument depicting two helmeted miners — one holding a shovel, one lifting a pickaxe — honours the contributions of mine workers. Busy day and night with locals, it makes an ideal starting point for exploring the old city.",
    },
    section: "wisata",
    followUp: ["w17", "w19"],
  },
  {
    id: "w28",
    pertanyaan: {
      id: "Apa itu Kawasan Kandi?",
      en: "What is the Kandi area?",
    },
    keywords: ["kandi","camping","danau kandi","meer von kandi","kolam","memancing","fishing","sampan"],
    jawaban: {
      id: "Kawasan Kandi adalah bekas area tambang terbuka yang kini jadi destinasi rekreasi alam: camping ground dengan cottage, Danau Kandi untuk memancing dan bersampan, dan gazebo tepi air untuk bersantai. Di sini juga ada Meer Von Kandi Heritage yang menyediakan berbagai wahana air dan fasilitas rekreasi keluarga.",
      en: "The Kandi area is a former open-cast mine now transformed into a nature recreation destination: a camping ground with cottages, Danau Kandi for fishing and boating, and lakeside gazebos for relaxation. Meer Von Kandi Heritage here also provides various water rides and family recreation facilities.",
    },
    section: "wisata",
    followUp: ["w29", "w12"],
  },
  {
    id: "w29",
    pertanyaan: {
      id: "Apa itu Kebun Buah Kandi?",
      en: "What is Kebun Buah Kandi?",
    },
    keywords: ["kebun buah","kandi","agrowisata","agrotourism","petik","pick","durian","rambutan","mangga"],
    jawaban: {
      id: "Kebun Buah Kandi adalah agrowisata yang dikembangkan sejak 2012 dari lahan tidak produktif. Kini membudidayakan berbagai buah: durian, jeruk, buah naga, jambu, lengkeng, rambutan, hingga mangga. Saat musim panen, pengunjung bisa memetik langsung dan membawa pulang dengan harga lebih murah dari pasar. Dilengkapi area bermain anak dan kolam pancing.",
      en: "Kebun Buah Kandi is an agrotourism site developed since 2012 from formerly unproductive land. It now cultivates a variety of fruits: durian, citrus, dragon fruit, guava, longan, rambutan, and mango. During harvest season, visitors can pick fruit directly and take it home at below-market prices. A children's play area and fishing pond are also available.",
    },
    section: "wisata",
    followUp: ["w28", "w12"],
  },
  {
    id: "w30",
    pertanyaan: {
      id: "Berapa tiket dan jam buka Puncak Cemara?",
      en: "What are the admission fee and opening hours of Puncak Cemara?",
    },
    keywords: ["tiket","harga","price","jam","buka","open","puncak cemara","admission"],
    jawaban: {
      id: "Harga tiket masuk sekitar Rp4.000 untuk dewasa dan Rp2.000 untuk anak-anak (dapat berubah, konfirmasi sebelum datang). Area terbuka, terbaik dikunjungi sore hingga malam untuk menikmati lampu kota Sawahlunto yang menyala.",
      en: "Admission is approximately Rp4,000 for adults and Rp2,000 for children (subject to change — confirm before visiting). The area is open access, best visited late afternoon to evening to enjoy the city lights of Sawahlunto glittering below.",
    },
    section: "wisata",
    followUp: ["w20"],
  },

  // ── BUDAYA LANJUTAN ──────────────────────────────────────────────────────
  {
    id: "b7",
    pertanyaan: {
      id: "Sawahlunto dikenal sebagai kota multietnis, seperti apa?",
      en: "Sawahlunto is known as a multiethnic city — what does that mean?",
    },
    keywords: ["multietnis","multiethnic","beragam","diverse","etnis","suku","ethnic","cosmopolitan"],
    jawaban: {
      id: "Karena para pekerja tambang dulu didatangkan dari seluruh penjuru Nusantara — Minangkabau, Jawa, Tionghoa, Batak, Bugis, dan lain-lain — Sawahlunto tumbuh menjadi kota dengan keberagaman etnis yang luar biasa. Keberagaman ini melahirkan budaya unik seperti Bahasa Tansi, tradisi Makan Bajamba yang merayakan kebersamaan, serta identitas kota yang lebih cosmopolitan dibanding kota-kota lain di Sumatera Barat.",
      en: "Because mine workers were brought from across the Indonesian archipelago — Minangkabau, Javanese, Chinese, Batak, Bugis and others — Sawahlunto grew into a city of remarkable ethnic diversity. This diversity gave birth to unique cultural expressions like Bahasa Tansi, the Makan Bajamba communal feast tradition, and a more cosmopolitan city identity than most other cities in West Sumatra.",
    },
    section: "budaya",
    followUp: ["b1", "b2", "b5"],
  },
  {
    id: "b8",
    pertanyaan: {
      id: "Apakah budaya multietnis Sawahlunto masih terasa hari ini?",
      en: "Is Sawahlunto's multiethnic culture still evident today?",
    },
    keywords: ["budaya","culture","masih","still","hari ini","today","predikat","title","kerkhof"],
    jawaban: {
      id: "Ya — beberapa jejaknya masih hidup: Bahasa Tansi masih digunakan dan dijaga oleh komunitas keturunan pekerja tambang, Makan Bajamba dirayakan setiap 1 Desember, dan di kompleks Makam Belanda (Kerkhof) masih terlihat makam dari berbagai etnis yang berdampingan. Kota ini juga secara resmi menyandang predikat \"Kota Wisata Tambang Multi Etnik yang Berbudaya\".",
      en: "Yes — several traces remain alive: Bahasa Tansi is still used and preserved by descendants of mine workers, Makan Bajamba is celebrated every 1 December, and at the Kerkhof cemetery graves of various ethnicities stand side by side. The city also officially holds the title of \"Multi-Ethnic Cultural Mining Tourism City\".",
    },
    section: "budaya",
    followUp: ["b1", "b2", "w18"],
  },

  // ── INOVASI LANJUTAN ─────────────────────────────────────────────────────
  {
    id: "i5",
    pertanyaan: {
      id: "Apa itu Desa Kreatif Sikalang?",
      en: "What is Desa Kreatif Sikalang?",
    },
    keywords: ["sikalang","desa kreatif","creative village","talawi","UMKM","2025","tangsi","tansi"],
    jawaban: {
      id: "Desa Sikalang di Kecamatan Talawi — yang juga jadi rumah bagi Danau Biru — resmi dibranding sebagai Desa Kreatif Sumatera Barat sejak 2025. Pemerintah desa mengembangkan program perluasan pasar UMKM secara daring dan luring, dengan menjadikan budaya Tangsi (Tansi) sebagai identitas khas desa. Ada empat klaster pengembangan: seni budaya, kuliner, fashion, dan pariwisata.",
      en: "Desa Sikalang in Kecamatan Talawi — which also hosts Danau Biru — was officially branded as a Creative Village of West Sumatra in 2025. The village government is developing programmes to expand UMKM market reach online and offline, with Tangsi (Tansi) culture as the village's distinctive identity. There are four development clusters: arts and culture, culinary, fashion, and tourism.",
    },
    section: "inovasi",
    followUp: ["i3", "b1", "w9"],
  },
  {
    id: "i6",
    pertanyaan: {
      id: "Apakah ada rencana membuka kembali tambang Ombilin?",
      en: "Are there plans to reopen the Ombilin mine?",
    },
    keywords: ["tambang","reopen","reaktivasi","bukit asam","danantara","2026","buka kembali","mine"],
    jawaban: {
      id: "Berdasarkan pemberitaan terkini (2026), Danantara Indonesia mendorong percepatan reaktivasi tambang Ombilin oleh PT Bukit Asam, yang saat ini sedang mengurus perizinan, Amdal, dan kajian kelayakan. Keputusan final belum ada. Untuk informasi paling mutakhir, pantau portal resmi sawahluntokota.go.id dan media nasional.",
      en: "Based on recent reporting (2026), Danantara Indonesia is pushing for the accelerated reactivation of the Ombilin mine by PT Bukit Asam, which is currently processing permits, environmental impact assessments, and feasibility studies. No final decision has been made. For the most up-to-date information, monitor sawahluntokota.go.id and national media.",
    },
    section: "inovasi",
    followUp: ["i3", "s4"],
  },
];
