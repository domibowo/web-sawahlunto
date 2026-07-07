import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { wisataData, getWisataBySlug, getAdjacentWisata } from "@/data/wisata";
import { wisataReferensi } from "@/data/wisata";
import HeroBanner from "@/components/HeroBanner";
import Breadcrumb from "@/components/Breadcrumb";
import PrevNextNav from "@/components/PrevNextNav";
import FootnoteText from "@/components/FootnoteText";
import ReferenceList from "@/components/ReferenceList";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const item = getWisataBySlug(slug);
  if (!item) return {};
  const lang = locale as "id" | "en";
  const title = item.nama[lang];
  const description = item.ringkasan[lang];
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: item.gambar.src ? [{ url: item.gambar.src, alt: title }] : [],
    },
    alternates: {
      canonical: `https://sawahlunto.id/${locale}/wisata/${slug}`,
      languages: {
        "id": `https://sawahlunto.id/id/wisata/${slug}`,
        "en": `https://sawahlunto.id/en/wisata/${slug}`,
      },
    },
  };
}

export function generateStaticParams() {
  return ["id", "en"].flatMap((locale) =>
    wisataData.map((item) => ({ locale, slug: item.slug }))
  );
}

// Ikon SVG inline — dipakai di blok info praktis
function InfoIcon({ path }: { path: string }) {
  return (
    <svg
      className="w-4 h-4 shrink-0 text-terracotta mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

const ICON_JAM = "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z";
const ICON_TIKET = "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z";
const ICON_TIPS = "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z";

export default async function WisataDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const item = getWisataBySlug(slug);
  if (!item) notFound();

  const dict = await getDictionary(locale);
  const { wisata: w } = dict;
  const lang = locale as "id" | "en";

  const nama = item.nama[lang];
  const detail = item.detail[lang];
  const { prev, next } = getAdjacentWisata(slug);

  return (
    <React.Fragment key={slug}>
      {/* Breadcrumb */}
      <div className="bg-cream-dark border-b border-cream-dark/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
          <Breadcrumb
            items={[
              { label: w.backToHome, href: `/${locale}` },
              { label: w.breadcrumbWisata, href: `/${locale}/wisata` },
              { label: nama },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroBanner
        size="sm"
        title={nama}
        imageSrc={item.gambar.src || undefined}
        imageAlt={nama}
        imageCredit={item.gambar.credit}
      />

      {/* Konten */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Status badge */}
        {item.statusBadge && (
          <div className="mb-8 flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3">
            <span className="text-amber-600 text-lg leading-none mt-0.5" aria-hidden="true">⚠</span>
            <div>
              <span className="block font-mono text-xs font-semibold uppercase tracking-wide text-amber-700 mb-0.5">
                {item.statusBadge[lang]}
              </span>
              <p className="text-sm text-amber-800 leading-relaxed">
                {item.infoPraktis?.jamBuka[lang]}
              </p>
            </div>
          </div>
        )}

        {/* Narasi detail */}
        <p className="text-charcoal text-base sm:text-lg leading-relaxed sm:leading-loose">
          <FootnoteText text={detail} scope={slug} />
        </p>

        {/* Blok info praktis */}
        {item.infoPraktis && (
          <div className="mt-10 border-t border-cream-dark pt-8">
            <h2 className="font-serif text-xl font-semibold text-charcoal mb-6">
              {w.infoPraktisTitle}
            </h2>

            <div className="flex flex-col gap-5">
              {/* Jam buka */}
              <div className="flex gap-3">
                <InfoIcon path={ICON_JAM} />
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.07em] text-terracotta mb-1">
                    {w.jamBukaLabel}
                  </span>
                  <p className="text-charcoal text-sm leading-relaxed">
                    {item.infoPraktis.jamBuka[lang]}
                  </p>
                </div>
              </div>

              {/* Harga tiket */}
              <div className="flex gap-3">
                <InfoIcon path={ICON_TIKET} />
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.07em] text-terracotta mb-1">
                    {w.hargaTiketLabel}
                  </span>
                  <p className="text-charcoal text-sm leading-relaxed">
                    {item.infoPraktis.hargaTiket[lang]}
                  </p>
                </div>
              </div>

              {/* Tips */}
              <div className="flex gap-3">
                <InfoIcon path={ICON_TIPS} />
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.07em] text-terracotta mb-1">
                    {w.tipsLabel}
                  </span>
                  <p className="text-charcoal text-sm leading-relaxed">
                    {item.infoPraktis.tips[lang]}
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="mt-6 text-xs text-charcoal/50 italic leading-relaxed">
              {w.disclaimer}
            </p>
          </div>
        )}

        <ReferenceList items={wisataReferensi} scope={slug} />
      </div>

      {/* Prev / Next */}
      <PrevNextNav
        prev={prev ? { href: `/${locale}/wisata/${prev.slug}`, label: prev.nama[lang] } : null}
        next={next ? { href: `/${locale}/wisata/${next.slug}`, label: next.nama[lang] } : null}
        prevLabel={w.prevDest}
        nextLabel={w.nextDest}
      />
    </React.Fragment>
  );
}
