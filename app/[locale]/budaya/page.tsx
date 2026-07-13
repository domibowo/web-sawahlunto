import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import { budayaData, budayaReferensi } from "@/data/budaya";
import HeroBanner from "@/components/HeroBanner";
import CTAButton from "@/components/CTAButton";
import ContentGrid from "@/components/ContentGrid";
import ReferenceList from "@/components/ReferenceList";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isId = locale === "id";
  return {
    title: isId ? "Budaya & Tradisi" : "Culture & Traditions",
    description: isId
      ? "Seni, adat, dan festival Sawahlunto — warisan budaya lintas etnis dari era pertambangan kolonial."
      : "Arts, customs, and festivals of Sawahlunto — a multi-ethnic cultural heritage from the colonial mining era.",
    alternates: { canonical: `https://sawahlunto.id/${locale}/budaya` },
  };
}

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

export default async function BudayaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const { budaya: b } = dict;
  const lang = locale as "id" | "en";

  return (
    <>
      <HeroBanner size="sm" title={b.heroTitle} subtitle={b.intro} imageSrc="/images/songket-silungkang.webp" imageAlt="Songket Silungkang" imageCredit="Foto: Exposs Sumbar" />

      <ContentGrid items={budayaData} lang={lang} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <ReferenceList items={budayaReferensi} scope="budaya" />
      </div>

      {/* CTA */}
      <div className="flex justify-center pb-16 sm:pb-20">
        <CTAButton
          href={`/${locale}/kuliner`}
          label={b.nextKuliner}
          variant="outline"
        />
      </div>
    </>
  );
}
