import { getDictionary } from "@/dictionaries";
import HeroBanner from "@/components/HeroBanner";

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

const sumberResmi = [
  {
    nama: "UNESCO World Heritage Centre",
    desc: "Ombilin Coal Mining Heritage of Sawahlunto — halaman resmi pencatatan warisan dunia",
    url: "https://whc.unesco.org/en/list/1610/",
  },
  {
    nama: "UNESCO WHC — Dokumen Nominasi & Evaluasi ICOMOS",
    desc: "Dokumen nominasi lengkap dan penilaian teknis ICOMOS yang menjadi dasar penetapan UNESCO",
    url: "https://whc.unesco.org/document/176199",
  },
  {
    nama: "UNESCO WHC — Management Plan OCMHS (2017)",
    desc: "Rencana pengelolaan resmi Ombilin Coal Mining Heritage of Sawahlunto",
    url: "https://whc.unesco.org/document/168589",
  },
  {
    nama: "UNESCO Jakarta",
    desc: "\"Enhancing the promotion of rich social histories of Ombilin Coal Mining Heritage of Sawahlunto\" — termasuk catatan tentang bahasa kreol Tangsi/Tansi",
    url: "https://whc.unesco.org/en/news/2662",
  },
  {
    nama: "Indonesia.go.id — Portal Resmi Pemerintah RI",
    desc: "\"Jejak Sejarah Tambang Batu Bara Ombilin Menjadi Situs Warisan Dunia\"",
    url: "https://indonesia.go.id/ragam/pariwisata/pariwisata/jejak-sejarah-tambang-batu-bara-ombilin-menjadi-situs-warisan-dunia",
  },
];

const titles: Record<string, { hero: string; intro: string; resmi: string; tambahan: string; catatan: string; catatanIsi: string }> = {
  id: {
    hero: "Sumber & Referensi",
    intro: "Seluruh konten situs ini disusun berdasarkan riset dari sumber-sumber terpercaya. Berikut adalah daftar sumber utama yang digunakan.",
    resmi: "Sumber Resmi / Utama",
    tambahan: "Sumber Tambahan",
    catatan: "Catatan editorial",
    catatanIsi: "Riset disusun dari berbagai sumber tambahan, termasuk karya akademik (Erwiza Erman, dkk.), media nasional (Kompas.com, detikSumut, ANTARA News, Liputan6), dan sumber lokal.",
  },
  en: {
    hero: "Sources & References",
    intro: "All content on this site is based on research from reliable sources. Below are the primary sources used.",
    resmi: "Official / Primary Sources",
    tambahan: "Additional Sources",
    catatan: "Editorial note",
    catatanIsi: "Research was compiled from various additional sources, including academic works (Erwiza Erman, et al.), national media (Kompas.com, detikSumut, ANTARA News, Liputan6), and local sources.",
  },
};

export default async function SumberPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  await getDictionary(locale);
  const t = titles[locale] ?? titles.id;

  return (
    <>
      <HeroBanner size="sm" title={t.hero} subtitle={t.intro} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal mb-6">
          {t.resmi}
        </h2>
        <ol className="flex flex-col gap-6">
          {sumberResmi.map((s, i) => (
            <li key={i} className="flex gap-4">
              <span className="font-serif text-terracotta font-bold text-lg leading-none mt-0.5 shrink-0 w-6 text-right">
                {i + 1}.
              </span>
              <div>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-charcoal hover:text-teal transition-colors"
                >
                  {s.nama}
                </a>
                <p className="text-charcoal-light text-sm mt-1 leading-relaxed">
                  {s.desc}
                </p>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-teal/70 hover:text-teal transition-colors break-all mt-0.5 inline-block"
                >
                  {s.url}
                </a>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 pt-8 border-t border-cream-dark">
          <p className="text-sm text-charcoal-light italic">
            <span className="font-semibold not-italic text-charcoal">{t.catatan}: </span>
            {t.catatanIsi}
          </p>
        </div>
      </div>
    </>
  );
}
