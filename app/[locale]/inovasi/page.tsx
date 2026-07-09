import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { inovasiData, inovasiDinamikaTambang, inovasiReferensi, type InovasiDimensi } from "@/data/inovasi";
import HeroBanner from "@/components/HeroBanner";
import CTAButton from "@/components/CTAButton";
import SafeImage from "@/components/SafeImage";
import FootnoteText from "@/components/FootnoteText";
import ReferenceList from "@/components/ReferenceList";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isId = locale === "id";
  return {
    title: isId ? "Inovasi & Teknologi" : "Innovation & Technology",
    description: isId
      ? "Transformasi digital Sawahlunto — dari kota tambang yang nyaris mati menuju destinasi wisata bertaraf dunia."
      : "Sawahlunto's digital transformation — from a near-ghost mining town to a world-class tourism destination.",
    alternates: { canonical: `https://sawahlunto.id/${locale}/inovasi` },
  };
}

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

export default async function InovasiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const { inovasi: iv } = dict;
  const lang = locale as "id" | "en";

  return (
    <>
      <HeroBanner size="sm" title={iv.heroTitle} subtitle={iv.intro} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex flex-col gap-16 sm:gap-20">
        {/* 5 section utama */}
        {inovasiData.map((section, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={section.id}
              className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}
            >
              <div className="w-full md:w-2/5 shrink-0">
                <SafeImage
                  src={section.gambar.src}
                  alt={section.judul[lang]}
                  credit={section.gambar.credit}
                  className="w-full aspect-video"
                  priority={index === 0}
                />
              </div>

              <div className="flex-1">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal leading-snug mb-4">
                  {section.judul[lang]}
                </h2>
                <p className="text-charcoal-light text-base sm:text-lg leading-relaxed">
                  <FootnoteText text={section.isi[lang]} scope="inovasi" />
                </p>
                {section.dimensi && (
                  <DimensiGrid dimensi={section.dimensi} lang={lang} locale={locale} />
                )}
              </div>
            </section>
          );
        })}

        {/* OPSIONAL — blok dinamika tambang. Hapus <section> ini jika tidak dipakai. */}
        <section className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="w-full md:w-2/5 shrink-0">
            <SafeImage
              src={inovasiDinamikaTambang.gambar.src}
              alt={inovasiDinamikaTambang.judul[lang]}
              credit={inovasiDinamikaTambang.gambar.credit}
              className="w-full aspect-video"
            />
          </div>

          <div className="flex-1">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal leading-snug mb-4">
              {inovasiDinamikaTambang.judul[lang]}
            </h2>
            <p className="text-charcoal-light text-base sm:text-lg leading-relaxed">
              <FootnoteText text={inovasiDinamikaTambang.isi[lang]} scope="inovasi" />
            </p>
            <p className="mt-3 text-xs text-charcoal/50 italic">
              {iv.disclaimerTambang}
            </p>
          </div>
        </section>
        {/* /OPSIONAL */}

        <ReferenceList items={inovasiReferensi} scope="inovasi" />
      </div>

      <div className="flex justify-center pb-16 sm:pb-20">
        <CTAButton
          href={`/${locale}/peta`}
          label={iv.nextPeta}
          variant="outline"
        />
      </div>
    </>
  );
}

const KATEGORI_COLOR: Record<string, string> = {
  "Smart Branding":     "bg-terracotta text-cream",
  "Smart Environment":  "bg-teal text-cream",
  "Smart Living":       "bg-teal text-cream",
  "Smart Society":      "bg-terracotta text-cream",
  "Smart Economy":      "bg-teal text-cream",
  "Smart Governance":   "bg-charcoal text-cream",
};

function DimensiGrid({ dimensi, lang, locale }: { dimensi: InovasiDimensi[]; lang: "id" | "en"; locale: string }) {
  const label = lang === "id"
    ? `Lihat ${dimensi.length} inovasi Smart City`
    : `See ${dimensi.length} Smart City innovations`;

  return (
    <details className="mt-5 group">
      <summary className="cursor-pointer list-none inline-flex items-center gap-1 text-sm font-semibold text-teal hover:text-teal-dark transition-colors select-none">
        <span className="group-open:hidden">{label} →</span>
        <span className="hidden group-open:inline">{lang === "id" ? "Sembunyikan ↑" : "Hide ↑"}</span>
      </summary>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {dimensi.map((d) => (
          <div
            key={d.nama}
            className="border border-cream-dark bg-white/60 px-4 py-3 flex flex-col gap-1"
          >
            <span className={`self-start text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${KATEGORI_COLOR[d.kategori] ?? "bg-charcoal/10 text-charcoal"}`}>
              {d.kategori}
            </span>
            <p className="font-serif text-base font-semibold text-charcoal leading-snug">
              {d.nama}
            </p>
            <p className="text-[11px] text-charcoal/50 italic leading-tight">
              {d.kepanjangan[lang]}
            </p>
            <p className="text-sm text-charcoal-light leading-relaxed mt-0.5">
              {d.deskripsi[lang]}
            </p>
            <Link
              href={`/${locale}/inovasi/${d.slug}`}
              className="mt-2 self-end text-sm font-semibold text-teal hover:text-teal-dark transition-colors"
            >
              {lang === "id" ? "Baca selengkapnya" : "Read more"} →
            </Link>
          </div>
        ))}
      </div>
    </details>
  );
}
