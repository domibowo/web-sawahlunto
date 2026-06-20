import { getDictionary } from "@/dictionaries";
import HeroBanner from "@/components/HeroBanner";
import NavCard from "@/components/NavCard";
import CTAButton from "@/components/CTAButton";

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

const cardIcons: Record<string, string> = {
  sejarah:
    "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  budaya:
    "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
  kuliner:
    "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
  wisata:
    "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  inovasi:
    "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  peta:
    "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
};

const cardRoutes: Record<string, string> = {
  sejarah: "sejarah",
  budaya: "budaya",
  kuliner: "kuliner",
  wisata: "wisata",
  inovasi: "inovasi",
  peta: "peta",
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const { home } = dict;

  const cardKeys = Object.keys(cardRoutes) as (keyof typeof home.cards)[];

  return (
    <>
      <HeroBanner
        size="lg"
        badge={home.badge}
        title={home.headline}
      />

      {/* Intro + CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center">
        <p className="text-charcoal-light text-base sm:text-lg leading-relaxed">
          {home.intro}
        </p>
        <div className="mt-8 flex justify-center">
          <CTAButton href={`/${locale}/sejarah`} label={home.ctaLabel} variant="primary" />
        </div>
      </section>

      {/* Grid NavCard */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20"
        aria-label="Jelajahi halaman"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {cardKeys.map((key) => {
            const card = home.cards[key];
            return (
              <NavCard
                key={key}
                href={`/${locale}/${cardRoutes[key]}`}
                icon={cardIcons[key]}
                label={card.title}
                desc={card.desc}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
