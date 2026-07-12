"use client";

import Link from "next/link";
import { useState } from "react";
import { petaHotspots, ruteGraph, STARTING_POINTS } from "@/data/peta";
import { wisataData } from "@/data/wisata";

// Kategori per slug — untuk label kecil di kartu
const KATEGORI: Record<string, { id: string; en: string }> = {
  "lubang-mbah-soero":         { id: "Tambang", en: "Mine" },
  "lubang-kalam":              { id: "Tambang", en: "Mine" },
  "museum-goedang-ransoem":    { id: "Museum", en: "Museum" },
  "museum-kereta-api":         { id: "Museum", en: "Museum" },
  "museum-tambang-ombilin":    { id: "Museum", en: "Museum" },
  "silo":                      { id: "Sejarah", en: "Heritage" },
  "taman-segitiga":            { id: "Taman", en: "Park" },
  "hotel-ombilin-kota-tua":    { id: "Kota Tua", en: "Old Town" },
  "gereja-santa-barbara":      { id: "Religi", en: "Religious" },
  "masjid-nurul-islam":        { id: "Religi", en: "Religious" },
  "gedung-pusat-kebudayaan":   { id: "Budaya", en: "Culture" },
  "makam-belanda":             { id: "Sejarah", en: "Heritage" },
  "batu-runciang":             { id: "Alam", en: "Nature" },
  "desa-wisata-rantih":        { id: "Desa Wisata", en: "Village" },
  "waterboom-muaro-kalaban":   { id: "Rekreasi", en: "Recreation" },
  "puncak-cemara":             { id: "Alam", en: "Nature" },
  "puncak-polan":              { id: "Alam", en: "Nature" },
  "danau-biru":                { id: "Alam", en: "Nature" },
  "geosite-fosil-ikan-gurami": { id: "Geosite", en: "Geosite" },
  "kawasan-kandi":             { id: "Kawasan", en: "Area" },
  "kebun-buah-kandi":          { id: "Alam", en: "Nature" },
  "padang-savana-kolok":       { id: "Alam", en: "Nature" },
  "pusat-kota":                { id: "Pusat Kota", en: "City Centre" },
};

interface Strings {
  ruteStart: string;
  ruteCurrent: string;
  ruteNext: string;
  rutePath: string;
  ruteBack: string;
  ruteReset: string;
  ruteDetail: string;
  ruteEnd: string;
}

interface Props {
  locale: string;
  lang: "id" | "en";
  strings: Strings;
}

function getHotspot(id: string) {
  return petaHotspots.find((h) => h.id === id);
}

function getWisata(id: string) {
  return wisataData.find((w) => w.slug === id);
}

export default function RuteWisata({ locale, lang, strings: s }: Props) {
  const [path, setPath] = useState<string[]>([]);

  const current = path.length > 0 ? path[path.length - 1] : null;
  const nextIds = current ? (ruteGraph[current] ?? []) : [];
  // Filter out already-visited to avoid cycles
  const nextOptions = nextIds.filter((id) => !path.includes(id));

  function start(id: string) {
    setPath([id]);
  }

  function goTo(id: string) {
    setPath((prev) => [...prev, id]);
  }

  function goBack() {
    setPath((prev) => prev.slice(0, -1));
  }

  function reset() {
    setPath([]);
  }

  // ── Starting screen ──────────────────────────────────────────────────────
  if (path.length === 0) {
    const startHotspots = STARTING_POINTS.map(getHotspot).filter(Boolean);
    return (
      <div className="flex flex-col gap-6">
        <p className="text-center font-mono text-xs uppercase tracking-[0.08em] text-charcoal/50">
          {s.ruteStart}
        </p>
        <div className="grid grid-cols-2 gap-3">
          {startHotspots.map((h) => {
            if (!h) return null;
            const wisata = getWisata(h.id);
            const kat = KATEGORI[h.id];
            return (
              <button
                key={h.id}
                onClick={() => start(h.id)}
                className="text-left border border-cream-dark bg-cream p-4 hover:border-terracotta transition-colors group"
              >
                <span className="block font-mono text-[10px] uppercase tracking-[0.07em] text-terracotta mb-1.5">
                  {kat?.[lang] ?? ""}
                </span>
                <span className="block font-serif text-base font-semibold text-charcoal leading-snug group-hover:text-terracotta transition-colors">
                  {h.label[lang]}
                </span>
                {wisata && (
                  <span className="block mt-1.5 text-[11px] text-charcoal/50 leading-snug line-clamp-2">
                    {wisata.ringkasan[lang]}
                  </span>
                )}
              </button>
            );
          })}
        </div>
        {/* Show all destinations as secondary */}
        <div className="border-t border-cream-dark pt-4">
          <p className="text-xs text-charcoal/40 mb-3 font-mono uppercase tracking-[0.07em]">
            {lang === "id" ? "Atau pilih destinasi lain" : "Or pick another destination"}
          </p>
          <div className="flex flex-wrap gap-2">
            {petaHotspots
              .filter((h) => !STARTING_POINTS.includes(h.id))
              .map((h) => (
                <button
                  key={h.id}
                  onClick={() => start(h.id)}
                  className="text-xs px-3 py-1.5 border border-cream-dark text-charcoal hover:border-terracotta hover:text-terracotta transition-colors"
                >
                  {h.label[lang]}
                </button>
              ))}
          </div>
        </div>
      </div>
    );
  }

  // ── Route screen ─────────────────────────────────────────────────────────
  const currentHotspot = getHotspot(current!)!;
  const currentWisata = getWisata(current!);
  const kat = KATEGORI[current!];
  const isEnd = nextOptions.length === 0;

  return (
    <div className="flex flex-col gap-6">
      {/* Breadcrumb path */}
      <div className="flex flex-wrap items-center gap-1 text-[11px] text-charcoal/40 font-mono">
        <span className="uppercase tracking-[0.06em] mr-1">{s.rutePath}:</span>
        {path.map((id, i) => {
          const h = getHotspot(id);
          return (
            <span key={id} className="flex items-center gap-1">
              {i > 0 && <span>→</span>}
              <span className={i === path.length - 1 ? "text-terracotta font-semibold" : ""}>
                {h?.label[lang] ?? id}
              </span>
            </span>
          );
        })}
      </div>

      {/* Current location card */}
      <div className="border border-charcoal/20 bg-charcoal text-cream p-5">
        <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-terracotta mb-2">
          {s.ruteCurrent} · {kat?.[lang] ?? ""}
        </span>
        <h2 className="font-serif text-xl font-bold leading-tight mb-2">
          {currentHotspot.label[lang]}
        </h2>
        {currentWisata && (
          <p className="text-sm text-cream/70 leading-relaxed mb-4">
            {currentWisata.ringkasan[lang]}
          </p>
        )}
        {currentWisata?.statusBadge && (
          <div className="flex items-start gap-2 bg-terracotta/15 border border-terracotta/30 px-3 py-2.5 mb-4">
            <span className="text-terracotta mt-0.5 shrink-0">⚠</span>
            <p className="text-xs text-cream/80 leading-relaxed">
              <span className="font-semibold text-terracotta">
                {currentWisata.statusBadge[lang]}
              </span>
              {" — "}
              {lang === "id"
                ? "Lokasi ini sedang dalam proses revitalisasi dan belum dapat dipastikan waktu pembukaannya. Harap konfirmasi terlebih dahulu sebelum berkunjung."
                : "This location is currently under renovation and its reopening date is uncertain. Please confirm before visiting."}
            </p>
          </div>
        )}
        <div className="flex flex-wrap items-center gap-4 mt-1">
          {currentHotspot.href && (
            <Link
              href={`/${locale}${currentHotspot.href}`}
              className="font-mono text-xs uppercase tracking-[0.07em] text-terracotta hover:text-cream transition-colors"
            >
              {s.ruteDetail}
            </Link>
          )}
          {currentHotspot.gmapsUrl && (
            <a
              href={currentHotspot.gmapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.07em] text-cream/50 hover:text-cream transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {lang === "id" ? "Buka di Maps" : "Open in Maps"}
            </a>
          )}
        </div>
      </div>

      {/* Next options */}
      {isEnd ? (
        <div className="border border-cream-dark bg-cream-dark/50 p-4 text-center">
          <p className="text-sm text-charcoal/60 mb-3">{s.ruteEnd}</p>
          <button
            onClick={reset}
            className="font-mono text-xs uppercase tracking-[0.07em] text-terracotta hover:text-terracotta-dark transition-colors"
          >
            {s.ruteReset}
          </button>
        </div>
      ) : (
        <>
          <p className="font-mono text-xs uppercase tracking-[0.07em] text-charcoal/50">
            {s.ruteNext}
          </p>
          <div className="grid grid-cols-2 gap-3">
            {nextOptions.map((id) => {
              const h = getHotspot(id);
              if (!h) return null;
              const nextKat = KATEGORI[id];
              const nextWisata = getWisata(id);
              return (
                <button
                  key={id}
                  onClick={() => goTo(id)}
                  className="text-left border border-cream-dark bg-cream p-4 hover:border-terracotta transition-colors group"
                >
                  <span className="block font-mono text-[10px] uppercase tracking-[0.07em] text-charcoal/40 mb-1 group-hover:text-terracotta transition-colors">
                    {nextKat?.[lang] ?? ""}
                  </span>
                  <span className="block font-serif text-sm font-semibold text-charcoal leading-snug group-hover:text-terracotta transition-colors">
                    {h.label[lang]}
                  </span>
                  {nextWisata && (
                    <span className="block mt-1 text-[10px] text-charcoal/40 leading-snug line-clamp-2">
                      {nextWisata.ringkasan[lang]}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}

      {/* Back / Reset */}
      <div className="flex gap-3 pt-1">
        {path.length > 1 && (
          <button
            onClick={goBack}
            className="font-mono text-xs uppercase tracking-[0.07em] text-charcoal/50 hover:text-charcoal transition-colors"
          >
            {s.ruteBack}
          </button>
        )}
        <button
          onClick={reset}
          className="font-mono text-xs uppercase tracking-[0.07em] text-charcoal/30 hover:text-charcoal/60 transition-colors"
        >
          {s.ruteReset}
        </button>
      </div>
    </div>
  );
}
