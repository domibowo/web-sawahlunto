import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import { inovasiData, inovasiDinamikaTambang, inovasiReferensi } from "@/data/inovasi";
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
                  src={section.gambar}
                  alt={section.judul[lang]}
                  className="w-full aspect-video"
                />
              </div>

              <div className="flex-1">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal leading-snug mb-4">
                  {section.judul[lang]}
                </h2>
                <p className="text-charcoal-light text-base sm:text-lg leading-relaxed">
                  <FootnoteText text={section.isi[lang]} scope="inovasi" />
                </p>
              </div>
            </section>
          );
        })}

        {/* OPSIONAL — blok dinamika tambang. Hapus <section> ini jika tidak dipakai. */}
        <section className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="w-full md:w-2/5 shrink-0">
            <SafeImage
              src={inovasiDinamikaTambang.gambar}
              alt={inovasiDinamikaTambang.judul[lang]}
              className="w-full aspect-video"
            />
          </div>

          <div className="flex-1">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal leading-snug mb-4">
              {inovasiDinamikaTambang.judul[lang]}
            </h2>
            <p className="text-charcoal-light text-base sm:text-lg leading-relaxed">
              {inovasiDinamikaTambang.isi[lang]}
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
