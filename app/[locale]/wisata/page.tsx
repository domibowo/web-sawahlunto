import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import HeroBanner from "@/components/HeroBanner";
import CTAButton from "@/components/CTAButton";
import WisataGrid from "@/components/WisataGrid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isId = locale === "id";
  return {
    title: isId ? "Destinasi Wisata" : "Tourist Destinations",
    description: isId
      ? "Terowongan tambang bawah tanah, museum bersejarah, danau bekas galian — destinasi wisata unik Kota Sawahlunto."
      : "Underground mining tunnels, historic museums, and a stunning former excavation lake — unique tourist destinations in Sawahlunto.",
    alternates: { canonical: `https://sawahlunto.id/${locale}/wisata` },
  };
}

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

export default async function WisataPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const { wisata: w } = dict;
  const lang = locale as "id" | "en";

  return (
    <>
      <HeroBanner size="sm" title={w.heroTitle} subtitle={w.intro} imageSrc="/images/danau-biru-sawahlunto.webp" imageAlt="Danau Biru Sawahlunto" />

      <WisataGrid
        locale={locale}
        lang={lang}
        jelajahi={w.jelajahi}
        jamBukaLabel={w.jamBukaLabel}
        hargaTiketLabel={w.hargaTiketLabel}
        disclaimer={w.disclaimer}
      />

      <div className="flex justify-center py-12 sm:py-16">
        <CTAButton
          href={`/${locale}/inovasi`}
          label={w.nextInovasi}
          variant="outline"
        />
      </div>
    </>
  );
}
