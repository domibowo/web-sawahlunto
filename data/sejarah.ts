export interface SejarahItem {
  slug: string;
  tahun: string;
  judul: string;
  judulEn: string;
  ringkasan: string;
  ringkasanEn: string;
  detail: string;
  detailEn: string;
}

export const sejarahData: SejarahItem[] = [
  {
    slug: "penemuan-batu-bara",
    tahun: "1867",
    judul: "Penemuan Batu Bara Ombilin",
    judulEn: "Discovery of Ombilin Coal",
    ringkasan:
      "Insinyur Belanda Willem Hendrik de Greve menemukan endapan batu bara berkualitas tinggi di lembah Ombilin, mengubah desa kecil ini selamanya.",
    ringkasanEn:
      "Dutch engineer Willem Hendrik de Greve discovered high-quality coal deposits in the Ombilin valley, forever changing this small village.",
    detail:
      "Pada 1867, geolog Belanda Willem Hendrik de Greve menemukan cadangan batu bara berkualitas tinggi di kawasan Ombilin saat melakukan survei di pedalaman Sumatera Barat. Penelitiannya kemudian dilanjutkan oleh Jacobus Cluysenaer dan Daniel Veth, setelah de Greve meninggal akibat kecelakaan saat eksplorasi lanjutan di Sungai Indragiri pada 1872. Penemuan inilah yang menjadi titik awal seluruh sejarah pertambangan Sawahlunto.",
    detailEn:
      "In 1867, Dutch geologist Willem Hendrik de Greve discovered high-quality coal reserves in the Ombilin area while conducting surveys in the interior of West Sumatra. His research was later continued by Jacobus Cluysenaer and Daniel Veth, after de Greve died in an accident during further exploration on the Indragiri River in 1872. This discovery marked the beginning of Sawahlunto's entire mining history.",
  },
  {
    slug: "tambang-dibuka",
    tahun: "1891",
    judul: "Tambang Resmi Dibuka",
    judulEn: "Mine Officially Opened",
    ringkasan:
      "Setelah disahkan parlemen Belanda, penambangan batu bara dimulai secara resmi di Ombilin dengan investasi besar dari pemerintah kolonial.",
    ringkasanEn:
      "After approval by the Dutch parliament, coal mining officially began at Ombilin with massive investment from the colonial government.",
    detail:
      "Parlemen Belanda mengesahkan undang-undang pertambangan batu bara Ombilin pada akhir November 1891. Pemerintah kolonial menginvestasikan sekitar 5,5 juta gulden untuk membangun permukiman dan fasilitas penambangan, mengubah lembah sunyi ini menjadi kawasan industri yang sibuk.",
    detailEn:
      "The Dutch parliament passed the Ombilin coal mining law in late November 1891. The colonial government invested approximately 5.5 million guilders to build settlements and mining facilities, transforming this quiet valley into a bustling industrial area.",
  },
  {
    slug: "jalur-kereta",
    tahun: "1894",
    judul: "Jalur Kereta Sawahlunto–Teluk Bayur",
    judulEn: "Sawahlunto–Teluk Bayur Railway Line",
    ringkasan:
      "Rel kereta dibangun untuk mengangkut batu bara dari Sawahlunto ke pelabuhan Teluk Bayur di Padang.",
    ringkasanEn:
      "A railway was built to transport coal from Sawahlunto to the port of Teluk Bayur in Padang.",
    detail:
      "Demi mempermudah distribusi batu bara hingga ke Eropa, Belanda membangun jalur kereta api yang menghubungkan Sawahlunto dengan Pelabuhan Teluk Bayur. Stasiun kereta dengan fasilitas lengkap dibangun pada 1918, kini menjadi Museum Kereta Api Sawahlunto.",
    detailEn:
      "To facilitate coal distribution all the way to Europe, the Dutch built a railway connecting Sawahlunto to the Port of Teluk Bayur. A fully-equipped train station was built in 1918, now serving as the Sawahlunto Railway Museum.",
  },
  {
    slug: "orang-rantai",
    tahun: "Era kolonial",
    judul: "Orang Rantai — Kerja Paksa di Bawah Kolonial",
    judulEn: "Orang Rantai — Forced Labor Under Colonial Rule",
    ringkasan:
      "Ribuan pekerja, banyak di antaranya tahanan, dipaksa bekerja dengan kaki dirantai dalam kondisi yang tidak manusiawi.",
    ringkasanEn:
      "Thousands of workers, many of them prisoners, were forced to work with their feet chained in inhumane conditions.",
    detail:
      "Di balik kemajuan industri tambang, tersimpan sejarah kelam: ribuan pekerja yang dikenal sebagai 'orang rantai' dipaksa bekerja dengan kaki dirantai agar tidak melarikan diri. Jejaknya masih bisa disaksikan di terowongan Lubang Mbah Soero, yang namanya diambil dari mandor asal Jawa bernama Soerono — dikenal lewat dua versi cerita berbeda, sebagian menyebutnya pekerja keras yang disegani, sebagian lain mengingatnya sebagai pengawas yang kejam.",
    detailEn:
      "Behind the progress of the mining industry lies a dark history: thousands of workers known as 'orang rantai' (chained people) were forced to work with their feet shackled to prevent escape. Their traces can still be seen in the Lubang Mbah Soero tunnel, named after a Javanese foreman named Soerono — remembered through two different stories, some calling him a hardworking and respected worker, others recalling him as a cruel overseer.",
  },
  {
    slug: "puncak-kejayaan",
    tahun: "1920–1921",
    judul: "Puncak Kejayaan Tambang",
    judulEn: "The Mine's Golden Age",
    ringkasan:
      "Produksi batu bara Sawahlunto mencapai puncaknya, bahkan pernah memenuhi 90% kebutuhan energi Hindia Belanda.",
    ringkasanEn:
      "Sawahlunto's coal production reached its peak, at one point supplying 90% of the Dutch East Indies' energy needs.",
    detail:
      "Pada awal abad ke-20, tambang Ombilin mencapai masa kejayaannya. Produksinya memenuhi hingga 90 persen kebutuhan energi Hindia Belanda, dengan ribuan pekerja dan hampir seratus staf Belanda mengelola operasionalnya. Sawahlunto tumbuh menjadi kota besar di pantai barat Sumatera, hanya kalah dari Padang.",
    detailEn:
      "In the early 20th century, the Ombilin mine reached its golden age. Its production fulfilled up to 90 percent of the Dutch East Indies' energy needs, with thousands of workers and nearly a hundred Dutch staff managing operations. Sawahlunto grew into a major city on the west coast of Sumatra, second only to Padang.",
  },
  {
    slug: "kota-nyaris-mati",
    tahun: "Awal 2000-an",
    judul: "Sawahlunto Nyaris Jadi Kota Mati",
    judulEn: "Sawahlunto Nearly Becomes a Ghost Town",
    ringkasan:
      "Cadangan batu bara menipis, produksi terhenti, dan penduduk kota menyusut drastis.",
    ringkasanEn:
      "Coal reserves dwindled, production halted, and the city's population shrank drastically.",
    detail:
      "Hampir seabad setelah masa kejayaannya, cadangan batu bara Ombilin menipis dan biaya operasional meningkat. Pada awal 2000-an, aktivitas penambangan nyaris terhenti total. Banyak penduduk kehilangan pekerjaan dan pindah ke kota lain, membuat Sawahlunto berada di ambang menjadi kota mati.",
    detailEn:
      "Nearly a century after its golden age, Ombilin's coal reserves dwindled and operating costs rose. By the early 2000s, mining activity had almost completely stopped. Many residents lost their jobs and moved to other cities, bringing Sawahlunto to the brink of becoming a ghost town.",
  },
  {
    slug: "warisan-dunia-unesco",
    tahun: "2019",
    judul: "Pengakuan Warisan Dunia UNESCO",
    judulEn: "UNESCO World Heritage Recognition",
    ringkasan:
      "Setelah bertahun-tahun upaya pelestarian, Tambang Batu Bara Ombilin ditetapkan UNESCO sebagai Warisan Dunia kelima Indonesia.",
    ringkasanEn:
      "After years of conservation efforts, the Ombilin Coal Mine was designated by UNESCO as Indonesia's fifth World Heritage Site.",
    detail:
      "Alih-alih menyerah pada nasib sebagai kota mati, Sawahlunto memilih merawat warisan tambangnya. Usaha pelestarian yang dirintis sejak 2012 dan masuk Daftar Tentatif UNESCO pada 2015 membuahkan hasil pada 6 Juli 2019, ketika Tambang Batu Bara Ombilin resmi ditetapkan sebagai Situs Warisan Dunia UNESCO kelima milik Indonesia.",
    detailEn:
      "Instead of surrendering to the fate of a ghost town, Sawahlunto chose to preserve its mining heritage. Conservation efforts initiated since 2012 and added to the UNESCO Tentative List in 2015 bore fruit on July 6, 2019, when the Ombilin Coal Mine was officially designated as Indonesia's fifth UNESCO World Heritage Site.",
  },
];

export function getSejarahBySlug(slug: string): SejarahItem | undefined {
  return sejarahData.find((item) => item.slug === slug);
}

export function getAdjacentSejarah(
  slug: string
): { prev: SejarahItem | null; next: SejarahItem | null } {
  const index = sejarahData.findIndex((item) => item.slug === slug);
  return {
    prev: index > 0 ? sejarahData[index - 1] : null,
    next: index < sejarahData.length - 1 ? sejarahData[index + 1] : null,
  };
}
