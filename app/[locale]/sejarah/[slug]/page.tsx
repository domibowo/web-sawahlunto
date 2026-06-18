import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { sejarahData, getSejarahBySlug, getAdjacentSejarah } from "@/data/sejarah";

export function generateStaticParams() {
  const locales = ["id", "en"];
  const slugs = sejarahData.map((item) => item.slug);
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

function ImagePlaceholder({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-charcoal/15 flex items-center justify-center ${className}`}>
      <svg
        className="w-20 h-20 text-charcoal/20"
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

export default async function SejarahDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const item = getSejarahBySlug(slug);
  if (!item) notFound();

  const dict = await getDictionary(locale);
  const { sejarah: s } = dict;
  const isId = locale === "id";

  const judul = isId ? item.judul : item.judulEn;
  const detail = isId ? item.detail : item.detailEn;
  const { prev, next } = getAdjacentSejarah(slug);

  return (
    <>
      {/* Back + Breadcrumb */}
      <div className="bg-cream-dark border-b border-cream-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4 flex-wrap">
          <Link
            href={`/${locale}/sejarah`}
            className="text-sm text-teal font-semibold hover:text-teal-dark transition-colors"
          >
            {s.backToSejarah}
          </Link>
          <nav className="text-xs text-charcoal/50 flex items-center gap-1.5">
            <Link href={`/${locale}`} className="hover:text-charcoal transition-colors">
              {s.backToHome}
            </Link>
            <span>/</span>
            <Link href={`/${locale}/sejarah`} className="hover:text-charcoal transition-colors">
              {s.breadcrumbSejarah}
            </Link>
            <span>/</span>
            <span className="text-charcoal/70 truncate max-w-[160px] sm:max-w-xs">{judul}</span>
          </nav>
        </div>
      </div>

      {/* Hero image + title */}
      <section className="relative">
        <ImagePlaceholder className="w-full h-48 sm:h-64 md:h-72" />
        <div className="absolute inset-0 bg-charcoal/55 flex flex-col items-center justify-end pb-8 px-4 text-center">
          <span className="inline-block bg-terracotta text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
            {item.tahun}
          </span>
          <h1 className="font-serif text-cream text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-2xl">
            {judul}
          </h1>
        </div>
      </section>

      {/* Detail content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <p className="text-charcoal text-base sm:text-lg leading-relaxed sm:leading-loose">
          {detail}
        </p>

        {/* Photo credit */}
        <p className="mt-8 text-xs text-charcoal/40 italic">{s.photoCredit}</p>
      </article>

      {/* Adjacent navigation */}
      <nav className="border-t border-cream-dark bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {prev ? (
            <Link
              href={`/${locale}/sejarah/${prev.slug}`}
              className="group flex flex-col sm:max-w-[45%]"
            >
              <span className="text-xs text-charcoal/50 mb-1">{s.prevEvent}</span>
              <span className="font-serif text-sm font-semibold text-charcoal group-hover:text-teal transition-colors leading-snug">
                {isId ? prev.judul : prev.judulEn}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/${locale}/sejarah/${next.slug}`}
              className="group flex flex-col sm:max-w-[45%] sm:items-end sm:text-right"
            >
              <span className="text-xs text-charcoal/50 mb-1">{s.nextEvent}</span>
              <span className="font-serif text-sm font-semibold text-charcoal group-hover:text-teal transition-colors leading-snug">
                {isId ? next.judul : next.judulEn}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </>
  );
}
