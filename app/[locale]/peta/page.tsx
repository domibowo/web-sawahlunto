import { getDictionary } from "@/dictionaries";
import HeroBanner from "@/components/HeroBanner";
import CTAButton from "@/components/CTAButton";
import PetaInteraktif from "@/components/PetaInteraktif";

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
      <HeroBanner size="sm" title={p.heroTitle} subtitle={p.intro} />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <PetaInteraktif locale={locale} lang={lang} />

        <p className="mt-5 text-center text-xs font-mono uppercase tracking-[0.07em] text-charcoal/50">
          {p.tapHint}
        </p>
      </section>

      <div className="flex justify-center pb-16 sm:pb-20">
        <CTAButton href={`/${locale}`} label={p.backToHome} variant="outline" />
      </div>
    </>
  );
}
