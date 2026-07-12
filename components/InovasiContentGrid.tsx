"use client";

import Link from "next/link";
import ContentGrid, { type ContentItem } from "@/components/ContentGrid";
import type { InovasiSection, InovasiDimensi } from "@/data/inovasi";

const KATEGORI_COLOR: Record<string, string> = {
  "Smart Branding":    "bg-terracotta text-cream",
  "Smart Environment": "bg-teal text-cream",
  "Smart Living":      "bg-teal text-cream",
  "Smart Society":     "bg-terracotta text-cream",
  "Smart Economy":     "bg-teal text-cream",
  "Smart Governance":  "bg-charcoal text-cream",
};

function DimensiList({
  dimensi,
  lang,
  locale,
}: {
  dimensi: InovasiDimensi[];
  lang: "id" | "en";
  locale: string;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
      {dimensi.map((d) => (
        <div
          key={d.nama}
          className="border border-cream/20 bg-cream/5 px-3 py-2.5 flex flex-col gap-1"
        >
          <span
            className={`self-start text-[9px] font-mono font-semibold uppercase tracking-wide px-1.5 py-0.5 ${
              KATEGORI_COLOR[d.kategori] ?? "bg-cream/20 text-cream"
            }`}
          >
            {d.kategori}
          </span>
          <p className="font-serif text-sm font-semibold text-cream leading-snug">
            {d.nama}
          </p>
          <p className="text-[10px] text-cream/40 italic leading-tight">
            {d.kepanjangan[lang]}
          </p>
          <p className="text-xs text-cream/60 leading-relaxed mt-0.5 line-clamp-3">
            {d.deskripsi[lang]}
          </p>
          <Link
            href={`/${locale}/inovasi/${d.slug}`}
            className="mt-1 self-end text-xs font-mono uppercase tracking-[0.06em] text-terracotta hover:text-terracotta/70 transition-colors"
          >
            {lang === "id" ? "Selengkapnya" : "Read more"} →
          </Link>
        </div>
      ))}
    </div>
  );
}

interface Props {
  items: InovasiSection[];
  lang: "id" | "en";
  locale: string;
  disclaimerTambang: string;
}

export default function InovasiContentGrid({
  items,
  lang,
  locale,
  disclaimerTambang,
}: Props) {
  return (
    <ContentGrid
      items={items}
      lang={lang}
      renderExtra={(item, l) => {
        const sec = item as InovasiSection;
        return (
          <>
            {sec.id === "dinamika-tambang" && (
              <p className="text-xs text-cream/40 italic mb-4">
                {disclaimerTambang}
              </p>
            )}
            {sec.dimensi && (
              <DimensiList dimensi={sec.dimensi} lang={l} locale={locale} />
            )}
          </>
        );
      }}
    />
  );
}
