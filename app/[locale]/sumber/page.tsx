import { getDictionary } from "@/dictionaries";
import HeroBanner from "@/components/HeroBanner";

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

// ── Tipe ────────────────────────────────────────────────────────────────────
type Sumber = {
  no: number;
  nama: string;
  judul?: string;        // judul artikel / buku (italic)
  tahun?: string;
  desc?: string;
  url?: string;
};

// ── A. Sumber Resmi & Utama (1–7) ───────────────────────────────────────────
const sumberResmi: Sumber[] = [
  {
    no: 1,
    nama: "UNESCO World Heritage Centre",
    judul: "Ombilin Coal Mining Heritage of Sawahlunto",
    desc: "Halaman resmi pencatatan warisan dunia UNESCO",
    url: "https://whc.unesco.org/en/list/1610/",
  },
  {
    no: 2,
    nama: "UNESCO World Heritage Centre",
    judul: "Dokumen Nominasi & Evaluasi ICOMOS",
    desc: "Dokumen nominasi lengkap dan penilaian teknis ICOMOS — sumber paling presisi soal komposisi pekerja tambang & orang rantai",
    url: "https://whc.unesco.org/document/176199",
  },
  {
    no: 3,
    nama: "UNESCO World Heritage Centre",
    judul: "Management Plan OCMHS (2017)",
    desc: "Rencana pengelolaan resmi Ombilin Coal Mining Heritage of Sawahlunto",
    url: "https://whc.unesco.org/document/168589",
  },
  {
    no: 4,
    nama: "UNESCO Jakarta",
    judul: "Enhancing the promotion of rich social histories of Ombilin Coal Mining Heritage of Sawahlunto",
    desc: "Termasuk catatan tentang bahasa kreol Tangsi/Tansi",
    url: "https://whc.unesco.org/en/news/2662",
  },
  {
    no: 5,
    nama: "Indonesia.go.id — Portal Resmi Pemerintah RI",
    judul: "Jejak Sejarah Tambang Batu Bara Ombilin Menjadi Situs Warisan Dunia",
    url: "https://indonesia.go.id/ragam/pariwisata/pariwisata/jejak-sejarah-tambang-batu-bara-ombilin-menjadi-situs-warisan-dunia",
  },
  {
    no: 6,
    nama: "Portal Resmi Kota Sawahlunto — sawahluntokota.go.id",
    desc: "Dipakai di berbagai halaman: Sejarah, Budaya, Wisata, Inovasi",
    url: "https://sawahluntokota.go.id",
  },
  {
    no: 7,
    nama: "Sawahlunto Tourism — Dinas Pariwisata Kota Sawahlunto",
    url: "https://sawahluntotourism.sawahluntokota.go.id",
  },
];

// ── B. Sumber Akademik (8–9) ─────────────────────────────────────────────────
const sumberAkademik: Sumber[] = [
  {
    no: 8,
    nama: "Erwiza Erman",
    judul: "Membaranya Batubara: Konflik Kelas dan Etnik Ombilin-Sawahlunto-Sumatera Barat 1892–1996",
    tahun: "2016",
    desc: "Dikutip dalam artikel Indonesia.go.id",
  },
  {
    no: 9,
    nama: "Erwiza Erman, dkk.",
    judul: "Dinamika Kota Tambang Sawahlunto: Dari Ekonomi Kapitalis ke Ekonomi Rakyat",
    tahun: "2006",
  },
];

// ── C. Sejarah (10–17) ──────────────────────────────────────────────────────
const sumberSejarah: Sumber[] = [
  {
    no: 10,
    nama: "Kompas.com",
    judul: "Sejarah Sawahlunto, Kota Pemilik Tambang Batu Bara Pertama di Indonesia dan Tertua di Asia Tenggara",
    url: "https://medan.kompas.com/read/2022/01/15/154345278/sejarah-sawahlunto-kota-pemilik-tambang-batu-bara-pertama-di-indonesia-dan",
  },
  {
    no: 11,
    nama: "BBC Indonesia",
    judul: "Sejarah 'orang rantai' di tambang batu bara Ombilin dikisahkan ulang lewat wayang Sawahlunto",
    url: "https://www.bbc.com/indonesia/articles/cgm704rzjl3o",
  },
  {
    no: 12,
    nama: "1001indonesia.net",
    judul: "Tambang Batubara Ombilin, Warisan Budaya Dunia UNESCO",
    desc: "Puncak kejayaan tambang 1920–1921",
    url: "https://1001indonesia.net/tambang-batubara-ombilin-sawahlunto/",
  },
  {
    no: 13,
    nama: "Wikipedia Bahasa Indonesia",
    judul: "Tambang Batu Bara Ombilin",
    url: "https://id.wikipedia.org/wiki/Tambang_Batu_Bara_Ombilin",
  },
  {
    no: 14,
    nama: "Indonesiana.id",
    judul: "Sawahlunto, dari Kota Tambang ke Warisan Dunia",
    desc: "Kota yang nyaris mati di awal 2000-an",
    url: "https://www.indonesiana.id/read/184576/sawahlunto-dari-kota-tambang-ke-warisan-dunia",
  },
  {
    no: 15,
    nama: "Peluangnews.id",
    judul: "Sawahlunto, Situs Tambang Batu Bara Tertua di Asia Tenggara",
    url: "https://peluangnews.id/sawahlunto-situs-tambang-batu-bara-tertua-di-asia-tenggara/",
  },
  {
    no: 16,
    nama: "Portal Resmi Kota Sawahlunto",
    judul: "Sejarah Kota Sawahlunto",
    desc: "Tanggal resmi berdirinya kota: 1 Desember 1888",
    url: "https://portal.sawahluntakota.go.id/sejarah-kota-sawahlunto/",
  },
  {
    no: 17,
    nama: "telusuri.id",
    judul: "Nostalgia di Kota Warisan Dunia Sawahlunto",
    desc: "Kisah orang rantai",
    url: "https://telusuri.id/nostalgia-di-kota-warisan-dunia-sawahlunto/",
  },
];

// ── D. Budaya & Tradisi (18–24) ──────────────────────────────────────────────
const sumberBudaya: Sumber[] = [
  {
    no: 18,
    nama: "detikSumut",
    judul: "Asal Usul Bahasa Tansi di Kota Sawahlunto",
    url: "https://www.detik.com/sumut/budaya/d-7616784/asal-usul-bahasa-tansi-di-kota-sawahlunto",
  },
  {
    no: 19,
    nama: "ANTARA News",
    judul: "Merawat ingatan dan kejayaan Songket Silungkang lewat SISSCa",
    url: "https://www.antaranews.com/video/5091661/merawat-ingatan-dan-kejayaan-songket-silungkang-lewat-sissca",
  },
  {
    no: 20,
    nama: "Digilaw.id",
    judul: "SISSCA Sawahlunto: Indikasi Geografis Songket Silungkang",
    desc: "Detail teknis tenun ATBM/palanta, proses 5M, pengakuan WBTB 2019",
    url: "https://digilaw.id/sissca-sawahlunto-indikasi-geografis-dan-nilai-historis-songket-silungkang/",
  },
  {
    no: 21,
    nama: "Venom Production",
    judul: "SISSCa: Merayakan Satu Dekade Warisan Budaya",
    desc: "Filosofi 5M, tanggal pengakuan 8 Oktober 2019",
    url: "https://venom.co.id/blog/post/sawahlunto-international-songket-silungkang-carnival-sissca-merayakan-satu-dekade-warisan-budaya",
  },
  {
    no: 22,
    nama: "Liputan6.com",
    judul: "6 Fakta Menarik tentang Sawahlunto",
    desc: "Predikat \"Kota Wisata Tambang Multi Etnik yang Berbudaya\"",
    url: "https://www.liputan6.com/lifestyle/read/4547667/6-fakta-menarik-tentang-sawahlunto-tambang-batu-bara-tertua-di-asia-tenggara-berada",
  },
  {
    no: 23,
    nama: "Topsatu.com",
    judul: "Sawahlunto: Kota Tua, Seribu Cerita, Warisan Dunia",
    desc: "Tradisi Makan Bajamba (1 Desember)",
    url: "https://www.topsatu.com/sawahlunto-kota-tua-seribu-cerita-warisan-dunia/",
  },
  {
    no: 24,
    nama: "Portal Resmi Kota Sawahlunto",
    judul: "SISSCa 2025",
    desc: "SISSCa masuk TOP 110 KEN Kemenparekraf; tema 2026 diumumkan",
    url: "https://sawahluntokota.go.id/baca/sawahlunto-internasional-songket-silungkang-carnival-sissca-2025-sukses-dihelat-sekretariat-dprd-kota-sawahlunto-angkat-tema-kerupuk-kubang-sebagai-icon",
  },
];

// ── E. Kuliner (25–28) ──────────────────────────────────────────────────────
const sumberKuliner: Sumber[] = [
  {
    no: 25,
    nama: "Sering Jalan",
    judul: "6 Makanan dan Kuliner Khas Kota Sawahlunto",
    desc: "Dendeng Batokok, Sup Silungkang",
    url: "https://seringjalan.com/6-makanan-dan-kuliner-khas-kota-sawahlunto/",
  },
  {
    no: 26,
    nama: "Budaya Indonesia",
    judul: "Dendeng Batokok khas Sawahlunto",
    desc: "Proses batokok (memukul daging)",
    url: "https://budaya-indonesia.org/Dendeng-Batokok-khas-Sawahlunto",
  },
  {
    no: 27,
    nama: "AlongWalker",
    judul: "Top 10 Oleh-Oleh Khas Sawahlunto",
    desc: "Kopi Datuk Silungkang, oleh-oleh populer",
    url: "https://id.alongwalker.co/top-10-oleh-oleh-khas-sawahlunto-yang-paling-populer-s3747.html",
  },
  {
    no: 28,
    nama: "PAFI Sawahlunto Kota",
    judul: "Kuliner Tradisional yang Unik dan Lezat di Sawahlunto",
    desc: "Kerupuk Ubi Silungkang",
    url: "https://pafisawahluntokota.info/kuliner-tradisionalnya-yang-unik-dan-lezat-di-sawahlunto-kotasumatera-barat/",
  },
  {
    no: 29,
    nama: "detikFood",
    judul: "Jadi Kandidat Warisan Budaya UNESCO, Ini 5 Makanan Enak di Sawahlunto",
    desc: "Pical",
    url: "https://food.detik.com/info-kuliner/d-4601428/jadi-kandidat-warisan-budaya-unesco-ini-5-makanan-enak-di-sawahlunto",
  },
  {
    no: 30,
    nama: "Pigijo Blog",
    judul: "5 Makanan Khas Sawahlunto yang Wajib Kamu Cicipi",
    desc: "Pical Mbah Soero, Ale-ale Silungkang",
    url: "https://blog.pigijo.com/5-makanan-khas-sawahlunto-yang-wajib-kawanjo-cicipi-dijamin-bikin-nagih/",
  },
  {
    no: 31,
    nama: "Jadesta Kemenparekraf",
    judul: "Kuliner Khas Silungkang",
    desc: "Ale-ale Silungkang — proses & bahan",
    url: "https://jadesta.kemenpar.go.id/paket/kuliner_khas_silungkang",
  },
  {
    no: 32,
    nama: "Portal Resmi Kota Sawahlunto",
    judul: "Lamang Tungkek Khas Talawi Sawahlunto",
    desc: "Lamang Tungkek — bahan & momen Idul Adha",
    url: "https://sawahluntokota.go.id/baca/lamang-tungkek-khas-talawi-sawahlunto-tersedia-setiap-hari-raya-idul-adha",
  },
  {
    no: 33,
    nama: "Kidalnarsis",
    judul: "Pinyaram Si Manis Menggoda dari Minangkabau",
    desc: "Kue Pinyaram — varian & daya tahan",
    url: "https://www.kidalnarsis.com/2019/07/pinyaram.html",
  },
];

// ── F. Destinasi Wisata — Heritage & Museum (29–46) ─────────────────────────
const sumberHeritage: Sumber[] = [
  {
    no: 29,
    nama: "Wikipedia",
    judul: "Silo Sawahlunto",
    url: "https://id.wikipedia.org/wiki/Silo_Sawahlunto",
  },
  {
    no: 30,
    nama: "RRI.co.id",
    judul: "Megahnya Taman Bersejarah di Sawahlunto",
    desc: "Silo, Taman Segitiga",
    url: "https://rri.co.id/features/544380/megahnya-taman-bersejarah-di-sawahlunto",
  },
  {
    no: 31,
    nama: "National Geographic Indonesia",
    judul: "Museum Ombilin: Rekam Jejak Tambang Sawahlunto",
    desc: "Gedung berdiri 1891, pernah jadi rumah peristirahatan Soeharto, diresmikan Juni 2014",
    url: "https://nationalgeographic.grid.id/read/13291952/museum-ombilin-rekam-jejak-tambang-sawahlunto",
  },
  {
    no: 32,
    nama: "Wikipedia",
    judul: "Kompleks Makam Belanda Sawahlunto",
    desc: "Kerkhof, sejak 1917",
    url: "https://id.wikipedia.org/wiki/Kompleks_Makam_Belanda_Sawahlunto",
  },
  {
    no: 33,
    nama: "eXpos Sumbar",
    judul: "Komplek Makam Belanda di Sawahlunto",
    url: "https://www.expossumbar.com/berita/46454/komplek-makam-belanda-di-sawahlunto",
  },
  {
    no: 34,
    nama: "Jelajah Nagari Awak",
    judul: "Kerkhoff Sawahlunto",
    desc: "Makam Belanda — keturunan Belanda yang masih berkunjung",
    url: "https://www.kidalnarsis.com/2018/09/kerkhoff-sawahlunto.html",
  },
  {
    no: 35,
    nama: "Atourin",
    judul: "Pemakaman Belanda di Sawahlunto",
    url: "https://atourin.com/destination/sawahlunto/pemakaman-belanda",
  },
  {
    no: 36,
    nama: "Wikipedia",
    judul: "Gereja Santa Barbara, Sawahlunto",
    desc: "Dibangun 1919–1920, ditasbihkan 27 November 1920, sempat jadi asrama Jepang",
    url: "https://id.wikipedia.org/wiki/Gereja_Santa_Barbara,_Sawahlunto",
  },
  {
    no: 37,
    nama: "Kelana Nusantara",
    judul: "Sawahlunto, Situs Warisan Budaya Dunia",
    desc: "Gereja Santa Barbara",
    url: "https://kelananusantara.com/sawahlunto-situs-warisan-budaya-dunia/",
  },
  {
    no: 38,
    nama: "Wikipedia",
    judul: "Khas Ombilin Sawahlunto",
    desc: "Hotel Ombilin — berdiri 1918, sempat jadi asrama tentara, kini Khas Ombilin Hotel",
    url: "https://id.wikipedia.org/wiki/Khas_Ombilin_Sawahlunto",
  },
  {
    no: 39,
    nama: "Portal Resmi Kota Sawahlunto",
    judul: "Hotel Rekomendasi Sawahlunto",
    desc: "Hotel Ombilin & kawasan kota tua",
    url: "https://sawahluntokota.go.id/baca/mencari-hotel-recomended-saat-berlibur-di-kota-warisan-tambang-ombilin-sawahlunto-sumbar",
  },
  {
    no: 40,
    nama: "Wikipedia",
    judul: "Masjid Agung Nurul Islam",
    desc: "Bekas PLTU 1894, diresmikan sebagai masjid 1952, menara dari cerobong asap >75 meter",
    url: "https://id.wikipedia.org/wiki/Masjid_Agung_Nurul_Islam",
  },
  {
    no: 41,
    nama: "Halal Tourism Sumbar",
    judul: "Masjid Agung Nurul Islam Sawahlunto",
    url: "https://halaltourism.visitbeautifulwestsumatra.id/masjid-agung-nurul-islam-sawahlunto/",
  },
  {
    no: 42,
    nama: "Wikipedia",
    judul: "Gedung Pusat Kebudayaan Sawahlunto",
    desc: "Dibangun 1910, diresmikan sebagai GPK 1 Desember 2006, terbakar November 2022",
    url: "https://id.wikipedia.org/wiki/Gedung_Pusat_Kebudayaan_Sawahlunto",
  },
  {
    no: 43,
    nama: "Kata Sumbar",
    judul: "Menilik Sejarah Gedung Pusat Kebudayaan Sawahlunto",
    desc: "Gedung Pusat Kebudayaan (Gluck Auf)",
    url: "https://katasumbar.com/menilik-sejarah-gedung-pusat-kebudayaan-sawahlunto/",
  },
  {
    no: 44,
    nama: "Kata Sumbar",
    judul: "Ludes Terbakar: Sejarah GPK Sawahlunto",
    desc: "Kebakaran GPK November 2022",
    url: "https://katasumbar.com/ludes-terbakar-begini-sejarah-gpk-sawahlunto-jadi-gedung-pertemuan-pejabat-tambang-zaman-kolonial/",
  },
  {
    no: 45,
    nama: "Portal Resmi Kota Sawahlunto",
    judul: "Gedung Pusat Kebudayaan GPK Direvitalisasi",
    desc: "Mulai 13 Februari 2026, PT Guna Cipta Kreasi, Rp22,5 miliar, target selesai 12 Agustus 2026",
    url: "https://sawahluntokota.go.id/baca/gedung-pusat-kebudayaan-gpk-direvitalisasi",
  },
  {
    no: 46,
    nama: "Asita Sumbar",
    judul: "19 Destinasi Wisata di Sawahlunto yang Unik dan Instagenik",
    desc: "Lubang Kalam",
    url: "https://www.asitasumbar.com/19-destinasi-wisata-di-sawahlunto-yang-unik-dan-instagenik/",
  },
];

// ── F. Destinasi Wisata — Wisata Alam & Outdoor (47–56) ─────────────────────
const sumberAlam: Sumber[] = [
  {
    no: 47,
    nama: "Kompas.com",
    judul: "14 Tempat Wisata Andalan Sawahlunto",
    desc: "Puncak Polan, Silo, gambaran umum destinasi",
    url: "https://travel.kompas.com/read/2019/06/27/140800927/14-tempat-wisata-andalan-sawahlunto?page=all",
  },
  {
    no: 48,
    nama: "Sawahlunto Tourism — Dinas Pariwisata",
    judul: "Puncak Cemara: Wahana Rekreasi Alam Disukai Anak-Anak",
    desc: "Gazebo, lesehan, mushala, area bermain anak, Kecamatan Barangin",
    url: "https://sawahluntotourism.sawahluntokota.go.id/baca/puncak-cemara-sawahlunto-wahana-rekreasi-alam-disukai-anak-anak",
  },
  {
    no: 49,
    nama: "Jelajah Sumbar",
    judul: "Puncak Cemara Sawahlunto",
    url: "https://www.jelajahsumbar.com/puncak-cemara-sawahlunto/",
  },
  {
    no: 50,
    nama: "Kompas.com",
    judul: "Puncak Cemara Sawahlunto: Daya Tarik, Harga Tiket, dan Rute",
    desc: "Tiket dewasa Rp4.000, anak Rp2.000",
    url: "https://regional.kompas.com/read/2024/02/05/213253678/puncak-cemara-sawahlunto-daya-tarik-harga-tiket-dan-rute",
  },
  {
    no: 51,
    nama: "iTrip.id",
    judul: "Destinasi Wisata Sawahlunto",
    desc: "Padang Savana Kolok — hijau musim hujan, menguning musim kemarau",
    url: "https://www.itrip.id/tempat-wisata-sawahlunto",
  },
  {
    no: 52,
    nama: "Kata Sumbar",
    judul: "Selain Wisata Kandi, Ini Destinasi Lain di Sawahlunto",
    url: "https://katasumbar.com/selain-wisata-kandi-ini-destinasi-lain-di-sawahlunto-yang-bisa-anda-kunjungi/",
  },
  {
    no: 53,
    nama: "IDN Times",
    judul: "Wisata Alam di Sawahlunto",
    desc: "Batu Runciang (Kecamatan Silungkang, panjat tebing, camping), Puncak Polan (villa, paragliding nasional)",
    url: "https://www.idntimes.com/travel/destination/wisata-alam-di-sawahlunto-c1c2-01-r4p71-z7qlmc",
  },
  {
    no: 54,
    nama: "Berita Minang",
    judul: "Sisi Lain Pesona Air Terjun Desa Wisata Rantih",
    desc: "12km dari kota, Air Terjun Bikan dan Tibarau",
    url: "https://www.beritaminang.com/berita/12/sisi-lain-pesona-air-terjun-desa-wisata-rantih",
  },
  {
    no: 55,
    nama: "Jadesta Kemenparekraf",
    judul: "Desa Rantih",
    desc: "Rumah pohon, camping, trekking, tubing Sungai Ombilin, paket makan",
    url: "https://jadesta.kemenparekraf.go.id/desa/rantih",
  },
  {
    no: 56,
    nama: "Direktori Pariwisata",
    judul: "Sawahlunto — Direktori Destinasi",
    url: "https://direktoripariwisata.id/unit/1591",
  },
];

// ── F. Destinasi Wisata — Kawasan Kandi & Rekreasi Keluarga (57–60) ─────────
const sumberKandi: Sumber[] = [
  {
    no: 57,
    nama: "Berita Minang",
    judul: "Camping Ground Kandi: Destinasi Alam yang Cocok untuk Healing di Sawahlunto",
    desc: "Kawasan Kandi: camping, cottage, danau, gazebo",
    url: "https://www.beritaminang.com/berita/21070/camping-ground-kandi-destinasi-alam-yang-cocok-untuk-healing-di-sawahlunto",
  },
  {
    no: 58,
    nama: "Batamnews",
    judul: "Meer Von Kandi Heritage: Objek Wisata Baru di Sawahlunto",
    desc: "Meer Von Kandi Heritage, wahana air",
    url: "https://www.batamnews.co.id/berita-98734-meer-von-kandi-heritage-objek-wisata-baru-yang-menarik-di-sawahlunto-sumatera-barat.html",
  },
  {
    no: 59,
    nama: "RRI.co.id",
    judul: "Kebun Buah Kandi: Destinasi Wisata Keluarga di Sawahlunto",
    desc: "Dikembangkan sejak 2012, durian/jeruk/buah naga/rambutan/mangga, area bermain anak, kolam pancing",
    url: "https://rri.co.id/bukittinggi/wisata/1139001/kebun-buah-kandi-destinasi-wisata-keluarga-di-sawahlunto",
  },
  {
    no: 60,
    nama: "Sawahlunto Tourism",
    judul: "Tiket Masuk Kebun Buah Kandi",
    desc: "Tiket anak Rp3.000–4.000, dewasa Rp5.000–6.000",
    url: "https://sawahluntotourism.com/en/product/tiket-masuk-kebun-buah-kandi/",
  },
];

// ── F. Destinasi Wisata — Waterboom (61–62) ──────────────────────────────────
const sumberWaterboom: Sumber[] = [
  {
    no: 61,
    nama: "Pariwisata Sumut",
    judul: "Waterboom Sawahlunto",
    desc: "Dibuka 2004, seluncuran 118 meter, bioskop 4D, bekas pemandian pejabat Belanda",
    url: "https://www.pariwisatasumut.net/2020/10/waterboom-sawahlunto.html",
  },
  {
    no: 62,
    nama: "ANTARA Sumatera Barat",
    judul: "WMS Terapkan Strategi Turnaround Perkuat Layanan Waterboom Sawahlunto",
    desc: "Kondisi terkini Desember 2025, pembenahan aktif PT Wahana Wisata Sawahlunto",
    url: "https://sumbar.antaranews.com/berita/734707/wws-terapkan-strategi-turnaround-perkuat-layanan-waterboom-sawahlunto",
  },
];

// ── G. Inovasi & Teknologi (63–68) ───────────────────────────────────────────
const sumberInovasi: Sumber[] = [
  {
    no: 63,
    nama: "Portal Resmi Kota Sawahlunto",
    judul: "Pemdes Sikalang Rangkai Beragam Program Inovasi Sepanjang 2026",
    desc: "Desa Kreatif Sikalang: UMKM, budaya Tangsi, 4 klaster pengembangan",
    url: "https://sawahluntokota.go.id/baca/pemdes-sikalang-rangkai-beragam-program-inovasi-sepanjang-2026",
  },
  {
    no: 64,
    nama: "Portal Resmi Kota Sawahlunto",
    judul: "Geosite Fossil Ikan Gurami Yamini: Destinasi Wisata Edukasi",
    desc: "Geosite Fosil Ombilinichthys yamini, Desa Tumpuk Tangah, Kecamatan Talawi",
    url: "https://sawahluntokota.go.id/baca/geosite-fossil-ikan-gurami-yamini-sawahlunto-menarik-sebagai-destinasi-wisata-edukasi",
  },
  {
    no: 65,
    nama: "ANTARA News",
    judul: "Cerita tentang Batu Bara yang Mengilaukan Kota Sawahlunto",
    desc: "Hotel Saka Ombilin Heritage: soft launching 17 April 2026, hotel bintang 4 pertama, revitalisasi gedung kolonial 1916, tamu dari 15 negara",
    url: "https://www.antaranews.com/berita/5081201/cerita-tentang-batu-bara-yang-mengilaukan-kota-sawahlunto?page=all",
  },
  {
    no: 73,
    nama: "Localise SDGs Indonesia",
    judul: "Inovasi Just Not Green Kota Sawahlunto sebagai Upaya Peningkatan Sektor Pariwisata",
    desc: "Program konversi 363,4 ha bekas tambang terbuka Kandi & Tanah Hitam menjadi kawasan wisata",
    url: "https://localisesdgs-indonesia.org/beranda/cs/inovasi-just-not-green-kota-sawahlunto-sebagai-upaya-peningkatan-sektor-pariwisata",
  },
  {
    no: 74,
    nama: "Tuxedovation Kemendagri",
    judul: "Just Not Green — Detail Inovasi",
    desc: "Nominasi penghargaan nasional Kemendagri 2017 atas inovasi pengembangan wisata bekas tambang",
    url: "https://tuxedovation.inovasi.litbang.kemendagri.go.id/detail_inovasi/26579",
  },
  {
    no: 75,
    nama: "Catatan Hasdi Putra (UNAND)",
    judul: "Gerakan Menuju 100 Smart City — Diskominfo Sawahlunto Gelar Briefing Bimbingan Teknis",
    desc: "Program 100 Smart City Kemkominfo 2023; pendampingan dewan pakar UNAND: Prof. Ikhwana Elfitri & Hasdi Putra",
    url: "https://staff.unand.ac.id/hasdiputra/2023/09/02/gerakan-menuju-100-smart-city-diskominfo-sawahlunto-gelar-briefing-bimbingan-teknis/",
  },
];

// ── F. Destinasi Wisata — Sumber Pendukung (66–72) ───────────────────────────
const sumberWisataPendukung: Sumber[] = [
  {
    no: 66,
    nama: "Traveloka Explore",
    judul: "Destinasi Wisata di Sawahlunto",
    url: "https://www.traveloka.com/id-id/explore/destination/destinasi-wisata-di-sawahlunto-acc/25486",
  },
  {
    no: 67,
    nama: "West Sumatra 360",
    judul: "9 Museum yang Wajib Kamu Kunjungi di Sumatera Barat",
    desc: "Museum Lubang Mbah Soero & Galeri Info Box",
    url: "https://westsumatra360.com/9-museum-yang-wajib-kamu-kunjungi-di-sumatera-barat/",
  },
  {
    no: 68,
    nama: "detikSumut",
    judul: "9 Rekomendasi Museum di Sumatera Barat",
    desc: "Museum Lubang Mbah Soero: tiket & jam buka",
    url: "https://www.detik.com/sumut/wisata/d-7050800/9-rekomendasi-museum-di-sumatera-barat-lokasi-jam-buka-dan-biaya-masuk",
  },
  {
    no: 69,
    nama: "Traveloka",
    judul: "Danau Biru Sawahlunto",
    desc: "Bekas galian tambang sejak 1981",
    url: "https://www.traveloka.com/id-id/explore/destination/wisata-danau-biru-sawahlunto-acc/420907",
  },
  {
    no: 70,
    nama: "Kompas.com",
    judul: "Puncak Cemara Sawahlunto: Daya Tarik, Harga Tiket, dan Rute",
    url: "https://regional.kompas.com/read/2024/02/05/213253678/puncak-cemara-sawahlunto-daya-tarik-harga-tiket-dan-rute",
  },
  {
    no: 71,
    nama: "ANTARA News Jambi",
    judul: "Napak Tilas Kejayaan Tambang Batu Bara Sawahlunto",
    desc: "Taman Segitiga, Silo",
    url: "https://jambi.antaranews.com/berita/331633/napak-tilas-kejayaan-tambang-batu-bara-sawahlunto",
  },
  {
    no: 72,
    nama: "Lkmmnas2012 (arsip akademik)",
    judul: "Deskripsi Sawahlunto",
    desc: "Silo: sirene berbunyi 3× sehari, pukul 07.00, 13.00, 16.00",
    url: "https://lkmmnas2012.wordpress.com/sosial-project/deskripsi-tempat/sawahlunto/",
  },
];

// ── Komponen bantu ───────────────────────────────────────────────────────────
function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-xs uppercase tracking-widest mb-3"
      style={{ fontFamily: "var(--font-jetbrains-mono, monospace)", color: "#C1502E" }}
    >
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-serif text-xl sm:text-2xl font-semibold mb-6"
      style={{ color: "#2B2420" }}
    >
      {children}
    </h2>
  );
}

function SubSectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="font-serif text-base font-semibold mb-3 mt-8"
      style={{ color: "#2B2420" }}
    >
      {children}
    </h3>
  );
}

function SumberList({ items, akademik = false }: { items: Sumber[]; akademik?: boolean }) {
  return (
    <ol className="flex flex-col gap-4">
      {items.map((s) => (
        <li key={s.no} className="flex gap-3">
          <span
            className="shrink-0 w-7 text-right text-sm font-semibold leading-snug pt-px"
            style={{ fontFamily: "var(--font-jetbrains-mono, monospace)", color: "#C1502E" }}
          >
            {s.no}.
          </span>
          <div className="min-w-0">
            {akademik ? (
              // Format buku: nama bold, judul miring, tahun
              <>
                <span
                  className="font-semibold text-sm"
                  style={{ color: "#2B2420", fontFamily: "var(--font-lora, serif)" }}
                >
                  {s.nama}
                </span>
                {s.judul && (
                  <span
                    className="italic text-sm ml-1"
                    style={{ color: "#6B5D4F", fontFamily: "var(--font-lora, serif)" }}
                  >
                    — <em>{s.judul}</em>
                    {s.tahun && ` (${s.tahun})`}
                  </span>
                )}
                {s.desc && (
                  <p
                    className="text-xs mt-1 leading-relaxed"
                    style={{ color: "#6B5D4F", fontFamily: "var(--font-plus-jakarta, sans-serif)" }}
                  >
                    {s.desc}
                  </p>
                )}
              </>
            ) : (
              // Format standar: nama bold + link
              <>
                <p>
                  <span
                    className="font-semibold text-sm"
                    style={{ color: "#2B2420", fontFamily: "var(--font-plus-jakarta, sans-serif)" }}
                  >
                    {s.nama}
                  </span>
                  {s.judul && (
                    <span
                      className="text-sm ml-1"
                      style={{ color: "#6B5D4F", fontFamily: "var(--font-plus-jakarta, sans-serif)" }}
                    >
                      — {s.judul}
                    </span>
                  )}
                </p>
                {s.desc && (
                  <p
                    className="text-xs mt-0.5 leading-relaxed"
                    style={{ color: "#6B5D4F", fontFamily: "var(--font-plus-jakarta, sans-serif)" }}
                  >
                    {s.desc}
                  </p>
                )}
                {s.url && (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs mt-0.5 inline-block break-all underline-offset-2 hover:underline"
                    style={{ color: "#1D7A6B", fontFamily: "var(--font-plus-jakarta, sans-serif)" }}
                  >
                    {s.url}
                  </a>
                )}
              </>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

function Divider() {
  return <div className="border-t mt-12 pt-12" style={{ borderColor: "#E8DCC5" }} />;
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default async function SumberPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  await getDictionary(locale);
  const isId = locale === "id";

  const hero = {
    title: isId ? "Sumber & Referensi" : "Sources & References",
    intro: isId
      ? "Seluruh konten situs ini disusun berdasarkan riset dari sumber-sumber terpercaya. Berikut daftar 75 sumber yang digunakan, dikelompokkan per topik."
      : "All content on this site is based on research from reliable sources. Below are the 75 sources used, grouped by topic.",
  };

  return (
    <>
      <HeroBanner size="sm" title={hero.title} subtitle={hero.intro} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* A — Sumber Resmi */}
        <Kicker>{isId ? "Kategori A" : "Category A"}</Kicker>
        <SectionTitle>{isId ? "Sumber Resmi & Utama" : "Official & Primary Sources"}</SectionTitle>
        <SumberList items={sumberResmi} />

        <Divider />

        {/* B — Akademik */}
        <Kicker>{isId ? "Kategori B" : "Category B"}</Kicker>
        <SectionTitle>{isId ? "Sumber Akademik" : "Academic Sources"}</SectionTitle>
        <SumberList items={sumberAkademik} akademik />

        <Divider />

        {/* C — Sejarah */}
        <Kicker>{isId ? "Kategori C" : "Category C"}</Kicker>
        <SectionTitle>{isId ? "Sejarah" : "History"}</SectionTitle>
        <SumberList items={sumberSejarah} />

        <Divider />

        {/* D — Budaya */}
        <Kicker>{isId ? "Kategori D" : "Category D"}</Kicker>
        <SectionTitle>{isId ? "Budaya & Tradisi" : "Culture & Tradition"}</SectionTitle>
        <SumberList items={sumberBudaya} />

        <Divider />

        {/* E — Kuliner */}
        <Kicker>{isId ? "Kategori E" : "Category E"}</Kicker>
        <SectionTitle>{isId ? "Kuliner" : "Cuisine"}</SectionTitle>
        <SumberList items={sumberKuliner} />

        <Divider />

        {/* F — Destinasi Wisata */}
        <Kicker>{isId ? "Kategori F" : "Category F"}</Kicker>
        <SectionTitle>{isId ? "Destinasi Wisata" : "Tourist Destinations"}</SectionTitle>

        <SubSectionTitle>{isId ? "Heritage & Museum" : "Heritage & Museums"}</SubSectionTitle>
        <SumberList items={sumberHeritage} />

        <SubSectionTitle>{isId ? "Wisata Alam & Outdoor" : "Nature & Outdoor"}</SubSectionTitle>
        <SumberList items={sumberAlam} />

        <SubSectionTitle>{isId ? "Kawasan Kandi & Rekreasi Keluarga" : "Kandi Area & Family Recreation"}</SubSectionTitle>
        <SumberList items={sumberKandi} />

        <SubSectionTitle>Waterboom</SubSectionTitle>
        <SumberList items={sumberWaterboom} />

        <SubSectionTitle>{isId ? "Sumber Wisata Pendukung" : "Additional Tourism Sources"}</SubSectionTitle>
        <SumberList items={sumberWisataPendukung} />

        <Divider />

        {/* G — Inovasi */}
        <Kicker>{isId ? "Kategori G" : "Category G"}</Kicker>
        <SectionTitle>{isId ? "Inovasi & Teknologi" : "Innovation & Technology"}</SectionTitle>
        <SumberList items={sumberInovasi} />

        {/* Footer note */}
        <div
          className="mt-12 pt-8 border-t text-sm leading-relaxed"
          style={{ borderColor: "#E8DCC5", color: "#6B5D4F", fontFamily: "var(--font-plus-jakarta, sans-serif)" }}
        >
          <span className="font-semibold" style={{ color: "#2B2420" }}>
            {isId ? "Catatan editorial: " : "Editorial note: "}
          </span>
          {isId
            ? "Daftar ini mencakup 75 sumber yang diverifikasi dan digunakan dalam penyusunan konten situs sawahlunto.id. Sumber akademik, resmi UNESCO, dan pemerintah diprioritaskan saat ada perbedaan data antar sumber."
            : "This list covers 75 verified sources used in compiling the content of sawahlunto.id. Academic, official UNESCO, and government sources are prioritised when data conflicts arise."}
        </div>
      </div>
    </>
  );
}
