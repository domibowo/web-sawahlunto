import Link from "next/link";
import { getDictionary } from "@/dictionaries";

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

function ImagePlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-charcoal/20 flex items-center justify-center ${className}`}
    >
      <svg
        className="w-16 h-16 text-charcoal/30"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    </div>
  );
}

const navCardLinks: Record<string, string> = {
  sejarah: "sejarah",
  budaya: "budaya",
  kuliner: "kuliner",
  destinasi: "destinasi",
  inovasi: "inovasi",
  peta: "peta",
};

const cardIconPaths: Record<string, string> = {
  sejarah:
    "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  budaya:
    "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
  kuliner:
    "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
  destinasi:
    "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  inovasi:
    "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  peta: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const { home } = dict;

  const cardKeys = Object.keys(navCardLinks) as (keyof typeof home.cards)[];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <ImagePlaceholder className="w-full h-64 sm:h-80 md:h-96 lg:h-[480px]" />
        <div className="absolute inset-0 bg-charcoal/50 flex flex-col items-center justify-center text-center px-4">
          <span className="inline-block bg-teal text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
            {home.badge}
          </span>
          <h1 className="font-serif text-cream text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-pre-line">
            {home.headline}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center">
        <p className="text-charcoal-light text-base sm:text-lg leading-relaxed">
          {home.intro}
        </p>
        <Link
          href={`/${locale}/sejarah`}
          className="mt-8 inline-block bg-terracotta text-white px-6 sm:px-8 py-3 rounded font-semibold text-sm sm:text-base hover:bg-terracotta-dark transition-colors"
        >
          {home.ctaLabel}
        </Link>
      </section>

      {/* Navigation cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {cardKeys.map((key) => {
            const card = home.cards[key];
            const slug = navCardLinks[key];
            const iconPath = cardIconPaths[key];
            return (
              <Link
                key={key}
                href={`/${locale}/${slug}`}
                className="group bg-white border border-cream-dark rounded-lg p-4 sm:p-5 lg:p-6 hover:border-teal hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cream rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-teal/10 transition-colors">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-terracotta group-hover:text-teal transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={iconPath}
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-charcoal font-semibold text-sm sm:text-base mb-1 sm:mb-2">
                  {card.title}
                </h3>
                <p className="text-charcoal-light text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {card.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
