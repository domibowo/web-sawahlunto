import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { inovasiData } from "@/data/inovasi";

function getAllDimensi() {
  return inovasiData.flatMap((s) => s.dimensi ?? []);
}

function getDimensiBySlug(slug: string) {
  return getAllDimensi().find((d) => d.slug === slug) ?? null;
}

export async function generateStaticParams() {
  return getAllDimensi().flatMap((d) => [
    { locale: "id", slug: d.slug },
    { locale: "en", slug: d.slug },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const d = getDimensiBySlug(slug);
  if (!d) return {};
  const lang = locale as "id" | "en";
  return {
    title: `${d.nama} — ${d.kategori}`,
    description: d.deskripsi[lang],
    alternates: {
      canonical: `https://sawahlunto.id/${locale}/inovasi/${slug}`,
      languages: {
        id: `https://sawahlunto.id/id/inovasi/${slug}`,
        en: `https://sawahlunto.id/en/inovasi/${slug}`,
      },
    },
  };
}

const KATEGORI_COLOR: Record<string, string> = {
  "Smart Branding":    "bg-terracotta text-cream",
  "Smart Environment": "bg-teal text-cream",
  "Smart Living":      "bg-teal text-cream",
  "Smart Society":     "bg-terracotta text-cream",
  "Smart Economy":     "bg-teal text-cream",
  "Smart Governance":  "bg-charcoal text-cream",
};

export default async function InovasiDimensiPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale);
  const { inovasi: iv } = dict;
  const lang = locale as "id" | "en";

  const dimensi = getDimensiBySlug(slug);
  if (!dimensi) notFound();

  const allDimensi = getAllDimensi();
  const currentIndex = allDimensi.findIndex((d) => d.slug === slug);
  const prev = currentIndex > 0 ? allDimensi[currentIndex - 1] : null;
  const next = currentIndex < allDimensi.length - 1 ? allDimensi[currentIndex + 1] : null;

  const badgeClass = KATEGORI_COLOR[dimensi.kategori] ?? "bg-charcoal/10 text-charcoal";

  return (
    <>
      {/* Hero sederhana */}
      <div className="bg-charcoal text-cream py-12 sm:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href={`/${locale}/inovasi`}
            className="inline-flex items-center gap-1 text-sm text-cream/60 hover:text-cream transition-colors mb-6"
          >
            ← {lang === "id" ? "Kembali ke Inovasi" : "Back to Innovation"}
          </Link>
          <span className={`inline-block text-[11px] font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded-full mb-4 ${badgeClass}`}>
            {dimensi.kategori}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight mb-2">
            {dimensi.nama}
          </h1>
          <p className="text-cream/60 italic text-base sm:text-lg">
            {dimensi.kepanjangan[lang]}
          </p>
        </div>
      </div>

      {/* Konten detail */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <p className="text-charcoal-light text-base sm:text-lg leading-relaxed">
          {dimensi.detail[lang]}
        </p>

        {/* Navigasi prev/next antar dimensi */}
        <nav className="mt-14 pt-8 border-t border-cream-dark flex justify-between gap-4">
          {prev ? (
            <Link
              href={`/${locale}/inovasi/${prev.slug}`}
              className="flex flex-col items-start gap-0.5 group max-w-[45%]"
            >
              <span className="text-xs text-charcoal/40 uppercase tracking-wide">
                ← {lang === "id" ? "Sebelumnya" : "Previous"}
              </span>
              <span className="text-sm font-semibold text-teal group-hover:text-teal-dark transition-colors leading-snug">
                {prev.nama}
              </span>
              <span className="text-xs text-charcoal/40">{prev.kategori}</span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/${locale}/inovasi/${next.slug}`}
              className="flex flex-col items-end gap-0.5 group max-w-[45%]"
            >
              <span className="text-xs text-charcoal/40 uppercase tracking-wide">
                {lang === "id" ? "Selanjutnya" : "Next"} →
              </span>
              <span className="text-sm font-semibold text-teal group-hover:text-teal-dark transition-colors leading-snug text-right">
                {next.nama}
              </span>
              <span className="text-xs text-charcoal/40">{next.kategori}</span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </article>
    </>
  );
}
