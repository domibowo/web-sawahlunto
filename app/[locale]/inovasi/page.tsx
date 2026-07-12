import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import { inovasiData, inovasiDinamikaTambang, inovasiReferensi, type InovasiSection } from "@/data/inovasi";
import HeroBanner from "@/components/HeroBanner";
import CTAButton from "@/components/CTAButton";
import InovasiContentGrid from "@/components/InovasiContentGrid";
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

  const allItems: InovasiSection[] = [...inovasiData, inovasiDinamikaTambang];

  return (
    <>
      <HeroBanner size="sm" title={iv.heroTitle} subtitle={iv.intro} imageSrc="/images/gerakan-smart-city.webp" imageAlt="Gerakan Smart City Sawahlunto" />

      <InovasiContentGrid
        items={allItems}
        lang={lang}
        locale={locale}
        disclaimerTambang={iv.disclaimerTambang}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
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

