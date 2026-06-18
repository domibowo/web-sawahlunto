import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { sejarahData } from "@/data/sejarah";

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

export default async function SejarahPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const { sejarah: s } = dict;
  const isId = locale === "id";

  return (
    <>
      {/* Hero kecil */}
      <section className="bg-charcoal text-cream py-10 sm:py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {s.heroTitle}
          </h1>
          <p className="text-cream/75 text-sm sm:text-base leading-relaxed">
            {s.intro}
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="relative">
          {/* Vertical line — desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-cream-dark -translate-x-1/2" />

          <ol className="flex flex-col gap-8 sm:gap-10">
            {sejarahData.map((item, index) => {
              const isEven = index % 2 === 0;
              const judul = isId ? item.judul : item.judulEn;
              const ringkasan = isId ? item.ringkasan : item.ringkasanEn;

              return (
                <li key={item.slug} className="relative md:grid md:grid-cols-2 md:gap-8">
                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-4">
                    {/* Year bubble */}
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-terracotta text-white flex items-center justify-center text-xs font-bold shrink-0 leading-none text-center px-1">
                        {item.tahun.length > 4 ? (
                          <span className="text-[9px] leading-tight">{item.tahun}</span>
                        ) : (
                          item.tahun
                        )}
                      </div>
                      {index < sejarahData.length - 1 && (
                        <div className="w-px flex-1 bg-cream-dark mt-2" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-2">
                      <Link href={`/${locale}/sejarah/${item.slug}`}>
                        <h2 className="font-serif text-lg font-semibold text-charcoal hover:text-teal transition-colors">
                          {judul}
                        </h2>
                      </Link>
                      <p className="text-charcoal-light text-sm mt-1 leading-relaxed">
                        {ringkasan}
                      </p>
                      <Link
                        href={`/${locale}/sejarah/${item.slug}`}
                        className="inline-block mt-3 text-sm font-semibold text-teal hover:text-teal-dark transition-colors"
                      >
                        {s.readMore} →
                      </Link>
                    </div>
                  </div>

                  {/* Desktop layout — alternating sides */}
                  {/* Left side */}
                  <div
                    className={`hidden md:flex ${
                      isEven ? "md:justify-end pr-8" : "md:justify-start pl-8 md:order-2"
                    }`}
                  >
                    <div className="max-w-sm">
                      {isEven && (
                        <>
                          <Link href={`/${locale}/sejarah/${item.slug}`}>
                            <h2 className="font-serif text-xl font-semibold text-charcoal hover:text-teal transition-colors text-right">
                              {judul}
                            </h2>
                          </Link>
                          <p className="text-charcoal-light text-sm mt-2 leading-relaxed text-right">
                            {ringkasan}
                          </p>
                          <div className="mt-3 text-right">
                            <Link
                              href={`/${locale}/sejarah/${item.slug}`}
                              className="text-sm font-semibold text-teal hover:text-teal-dark transition-colors"
                            >
                              {s.readMore} →
                            </Link>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Center bubble */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-terracotta text-white flex items-center justify-center text-xs font-bold text-center leading-tight px-1 z-10">
                      {item.tahun}
                    </div>
                  </div>

                  {/* Right side */}
                  <div
                    className={`hidden md:flex ${
                      isEven ? "md:justify-start pl-8 md:order-2" : "md:justify-end pr-8"
                    }`}
                  >
                    <div className="max-w-sm">
                      {!isEven && (
                        <>
                          <Link href={`/${locale}/sejarah/${item.slug}`}>
                            <h2 className="font-serif text-xl font-semibold text-charcoal hover:text-teal transition-colors">
                              {judul}
                            </h2>
                          </Link>
                          <p className="text-charcoal-light text-sm mt-2 leading-relaxed">
                            {ringkasan}
                          </p>
                          <Link
                            href={`/${locale}/sejarah/${item.slug}`}
                            className="inline-block mt-3 text-sm font-semibold text-teal hover:text-teal-dark transition-colors"
                          >
                            {s.readMore} →
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* CTA next */}
        <div className="mt-14 sm:mt-20 text-center">
          <Link
            href={`/${locale}/budaya`}
            className="inline-block border-2 border-teal text-teal px-6 py-3 rounded font-semibold text-sm hover:bg-teal hover:text-white transition-colors"
          >
            {s.nextCulture}
          </Link>
        </div>
      </section>
    </>
  );
}
