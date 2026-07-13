import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import HeroBanner from "@/components/HeroBanner";
import CTAButton from "@/components/CTAButton";
import PetaToggle from "@/components/PetaToggle";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isId = locale === "id";
  return {
    title: isId ? "Peta Kota" : "City Map",
    description: isId
      ? "Peta interaktif Kota Sawahlunto — temukan terowongan tambang, museum, danau, dan destinasi wisata lainnya."
      : "Interactive map of Sawahlunto — find mining tunnels, museums, lakes, and other tourist destinations.",
    alternates: { canonical: `https://sawahlunto.id/${locale}/peta` },
  };
}

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

export default async function PetaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const { peta: p } = dict;
  const lang = locale as "id" | "en";

  return (
    <>
      <HeroBanner size="sm" title={p.heroTitle} subtitle={p.intro} imageSrc="/images/taman-segitiga.webp" imageAlt="Taman Segitiga Sawahlunto" imageCredit="Foto: Palanta Budaya" />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <PetaToggle
          locale={locale}
          lang={lang}
          tapHint={p.tapHint}
          toggleIlustrasi={p.toggleIlustrasi}
          toggleSungguhan={p.toggleSungguhan}
          toggleRute={p.toggleRute}
          needsInternet={p.needsInternet}
          ruteStrings={{
            ruteStart:   p.ruteStart,
            ruteCurrent: p.ruteCurrent,
            ruteNext:    p.ruteNext,
            rutePath:    p.rutePath,
            ruteBack:    p.ruteBack,
            ruteReset:   p.ruteReset,
            ruteDetail:  p.ruteDetail,
            ruteEnd:     p.ruteEnd,
          }}
        />
      </section>

      <div className="flex justify-center pb-16 sm:pb-20">
        <CTAButton href={`/${locale}`} label={p.backToHome} variant="outline" />
      </div>
    </>
  );
}
