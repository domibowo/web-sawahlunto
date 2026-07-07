import type { Bilingual, GambarEntry, Reference } from "@/types";
import { gambarKuliner } from "@/data/gambar";

export type KulinerSection = {
  id: string;
  judul: Bilingual;
  isi: Bilingual;
  gambar: GambarEntry;
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
    gambar: gambarKuliner["dendeng-batokok"],
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
    gambar: gambarKuliner["kopi-datuk-silungkang"],
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
    gambar: gambarKuliner["sup-silungkang"],
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
    gambar: gambarKuliner["kerupuk-ubi-silungkang"],
  },
  {
    id: "pical",
    judul: {
      id: "Pical",
      en: "Pical",
    },
    isi: {
      id: "Di Kelurahan Tanah Lapang, tidak jauh dari Lubang Mbah Soero, ada satu hidangan yang sering luput dari perhatian wisatawan: Pical. Sekilas mirip gado-gado, tapi rasanya berbeda — mie kuning pipih, tahu, kol, dan sayur hijau disiram kuah kacang dengan bumbu khas Sawahlunto.[6] 'Pical Mbah Soero' adalah salah satu tempat paling dikenal untuk menikmatinya, menjadi pilihan makan siang favorit warga setempat setelah mengunjungi kawasan tambang.[7]",
      en: "In Kelurahan Tanah Lapang, not far from Lubang Mbah Soero, there is one dish that often escapes visitors' attention: Pical. At first glance it resembles gado-gado, but the taste is different — flat yellow noodles, tofu, cabbage, and leafy greens doused in peanut sauce with Sawahlunto's own spice blend.[6] 'Pical Mbah Soero' is one of the best-known spots to enjoy it, a favourite lunchtime choice for locals after visiting the mining area.[7]",
    },
    gambar: gambarKuliner["pical"],
  },
  {
    id: "ale-ale-silungkang",
    judul: {
      id: "Ale-ale Silungkang",
      en: "Ale-ale Silungkang",
    },
    isi: {
      id: "Dari Nagari Silungkang Duo, kue ini sudah dikenal sejak lama sebagai penganan tradisional yang membutuhkan kesabaran — proses memasaknya bisa memakan waktu 6–7 jam.[8] Bahan dasarnya sederhana: beras, gula Jawa, air kelapa, dan perasan pandan yang memberi warna dan aroma khas.[7] Teksturnya kenyal di dalam, sedikit garing di luar, dan rasanya manis alami tanpa perlu pemanis tambahan. Sekilas mirip serabi, tapi karakter rasanya benar-benar berbeda.",
      en: "From Nagari Silungkang Duo, this cake has long been known as a traditional treat that demands patience — the cooking process can take six to seven hours.[8] Its ingredients are simple: rice, palm sugar, coconut water, and pandan juice that gives it its distinctive colour and fragrance.[7] The texture is chewy inside, slightly crisp outside, and naturally sweet without any added sweetener. It resembles a serabi at first glance, but the flavour is entirely its own.",
    },
    gambar: gambarKuliner["ale-ale-silungkang"],
  },
  {
    id: "lamang-tungkek",
    judul: {
      id: "Lamang Tungkek",
      en: "Lamang Tungkek",
    },
    isi: {
      id: "Seperti opor ayam yang identik dengan lebaran tapi sebenarnya bisa dinikmati kapan saja, Lamang Tungkek adalah makanan khas Kecamatan Talawi yang paling mudah ditemukan saat Idul Adha — momen di mana hampir setiap rumah tangga di sana membuatnya.[9] Terbuat dari tepung beras, santan, dan gula aren yang dibungkus daun pisang lalu dimasak perlahan, Lamang Tungkek hadir dalam bentuk bulat lonjong dengan rasa manis lemak yang khas.[9] Kalau kamu berkunjung bukan saat Idul Adha, tanyakan ke warga Talawi — beberapa masih membuatnya untuk pesanan.",
      en: "Like ketupat that is closely associated with Eid but can be enjoyed any time, Lamang Tungkek is a Talawi District speciality most easily found during Eid al-Adha — the moment when almost every household there makes it.[9] Made from rice flour, coconut milk, and palm sugar wrapped in banana leaves and cooked slowly, Lamang Tungkek comes in an oval shape with a rich, naturally sweet flavour.[9] If you visit outside Eid al-Adha, ask the locals in Talawi — some still make it to order.",
    },
    gambar: gambarKuliner["lamang-tungkek"],
  },
  {
    id: "kue-pinyaram",
    judul: {
      id: "Kue Pinyaram",
      en: "Kue Pinyaram",
    },
    isi: {
      id: "Kue bulat gepeng ini adalah bagian dari kekayaan kuliner Minangkabau yang hidup di Sawahlunto. Terbuat dari tepung beras, gula aren, dan santan kelapa, kemudian digoreng dengan cetakan khusus hingga tepinya garing dan tengahnya padat.[10] Tersedia dalam dua varian: pinyaram hitam (gula aren, rasa lebih kaya) dan pinyaram putih (gula pasir, rasa lebih ringan), dengan variasi modern seperti pandan dan umbi ungu yang mulai bermunculan.[10] Tahan 4–7 hari, menjadikannya salah satu oleh-oleh yang praktis dibawa pulang. Di Minangkabau, kue ini hadir di berbagai momen penting — dari pernikahan hingga perayaan hari besar keagamaan.[10]",
      en: "Kue Pinyaram (a traditional Minangkabau fried rice cake), flat and round, is part of the culinary heritage alive in Sawahlunto. Made from rice flour, palm sugar, and coconut milk, then fried in a special mould until the edges are crisp and the centre is dense.[10] It comes in two variants: pinyaram hitam (palm sugar, richer flavour) and pinyaram putih (cane sugar, lighter taste), with modern variations like pandan and purple yam beginning to appear.[10] It keeps for four to seven days, making it one of the most practical souvenirs to bring home. In Minangkabau, this cake appears at many significant occasions — from weddings to major religious celebrations.[10]",
    },
    gambar: gambarKuliner["kue-pinyaram"],
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
  {
    nomor: 6,
    sumber: "detikFood",
    url: "https://food.detik.com/info-kuliner/d-4601428/jadi-kandidat-warisan-budaya-unesco-ini-5-makanan-enak-di-sawahlunto",
  },
  {
    nomor: 7,
    sumber: "Pigijo Blog",
    url: "https://blog.pigijo.com/5-makanan-khas-sawahlunto-yang-wajib-kawanjo-cicipi-dijamin-bikin-nagih/",
  },
  {
    nomor: 8,
    sumber: "Jadesta Kemenparekraf — Kuliner Khas Silungkang",
    url: "https://jadesta.kemenpar.go.id/paket/kuliner_khas_silungkang",
  },
  {
    nomor: 9,
    sumber: "Portal Resmi Kota Sawahlunto — Lamang Tungkek",
    url: "https://sawahluntokota.go.id/baca/lamang-tungkek-khas-talawi-sawahlunto-tersedia-setiap-hari-raya-idul-adha",
  },
  {
    nomor: 10,
    sumber: "Kidalnarsis — Pinyaram Si Manis Menggoda dari Minangkabau",
    url: "https://www.kidalnarsis.com/2019/07/pinyaram.html",
  },
];
