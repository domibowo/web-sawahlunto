import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import { kulinerData, kulinerReferensi } from "@/data/kuliner";
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
    title: isId ? "Kuliner Khas" : "Local Cuisine",
    description: isId
      ? "Cita rasa autentik kota tambang — kuliner khas Sawahlunto yang diwariskan turun-temurun."
      : "Authentic flavors of a mining city — traditional Sawahlunto cuisine passed down through generations.",
    alternates: { canonical: `https://sawahlunto.id/${locale}/kuliner` },
  };
}

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

export default async function KulinerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const { kuliner: k } = dict;
  const lang = locale as "id" | "en";

  return (
    <>
      <HeroBanner size="sm" title={k.heroTitle} subtitle={k.intro} imageSrc="/images/dendeng-batokok.webp" imageAlt="Dendeng Batokok" imageCredit="Foto: RRI Bukittinggi" />

      <ContentGrid items={kulinerData} lang={lang} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <ReferenceList items={kulinerReferensi} scope="kuliner" />
      </div>

      <div className="flex justify-center pb-16 sm:pb-20">
        <CTAButton
          href={`/${locale}/wisata`}
          label={k.nextWisata}
          variant="outline"
        />
      </div>
    </>
  );
}
