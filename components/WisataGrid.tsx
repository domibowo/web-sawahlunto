"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { wisataData } from "@/data/wisata";

interface Props {
  locale: string;
  lang: "id" | "en";
  jelajahi: string;
  jamBukaLabel: string;
  hargaTiketLabel: string;
  disclaimer: string;
}

// Kategori label per slug (reuse from RuteWisata)
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
  "desa-wisata-rantih":        { id: "Desa", en: "Village" },
  "waterboom-muaro-kalaban":   { id: "Rekreasi", en: "Recreation" },
  "puncak-cemara":             { id: "Alam", en: "Nature" },
  "puncak-polan":              { id: "Alam", en: "Nature" },
  "danau-biru":                { id: "Alam", en: "Nature" },
  "geosite-fosil-ikan-gurami": { id: "Geosite", en: "Geosite" },
  "kawasan-kandi":             { id: "Kawasan", en: "Area" },
  "kebun-buah-kandi":          { id: "Alam", en: "Nature" },
  "padang-savana-kolok":       { id: "Alam", en: "Nature" },
  "pusat-kota":                { id: "Pusat Kota", en: "City Centre" },
  "waterboom":                 { id: "Rekreasi", en: "Recreation" },
};

export default function WisataGrid({ locale, lang, jelajahi, jamBukaLabel, hargaTiketLabel, disclaimer }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [cols, setCols] = useState(2);
  const [query, setQuery] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      setCols(window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 2);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Restore active card from URL hash on mount (e.g. after browser back)
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const idx = wisataData.findIndex((w) => w.slug === hash);
    if (idx !== -1) setActiveIndex(idx);
  }, []);

  // Sync URL hash when active card changes.
  // Deferred with setTimeout so history.replaceState runs after React's commit
  // phase and the DevTools extension finishes walking the fiber tree —
  // calling replaceState mid-reconciliation triggers a DevTools internal error.
  useEffect(() => {
    const t = setTimeout(() => {
      if (activeIndex !== null) {
        const slug = filtered[activeIndex]?.slug;
        if (slug) history.replaceState(null, "", `#${slug}`);
      } else {
        history.replaceState(null, "", location.pathname + location.search);
      }
    }, 0);
    return () => clearTimeout(t);
  }, [activeIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  // Scroll expand panel into view when opened
  useEffect(() => {
    if (activeIndex !== null && panelRef.current) {
      setTimeout(() => {
        panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 50);
    }
  }, [activeIndex]);

  const q = query.trim().toLowerCase();
  const filtered = q
    ? wisataData.filter((w) =>
        w.nama[lang].toLowerCase().includes(q) ||
        (KATEGORI[w.slug]?.[lang] ?? "").toLowerCase().includes(q)
      )
    : wisataData;

  // Group items into rows
  const rows: typeof wisataData[] = [];
  for (let i = 0; i < filtered.length; i += cols) {
    rows.push(filtered.slice(i, i + cols));
  }

  const activeRowIndex = activeIndex !== null ? Math.floor(activeIndex / cols) : -1;
  const activeItem = activeIndex !== null ? filtered[activeIndex] : null;

  function toggle(globalIdx: number) {
    setActiveIndex((prev) => (prev === globalIdx ? null : globalIdx));
  }

  function handleSearch(val: string) {
    setQuery(val);
    setActiveIndex(null);
  }

  return (
    <div className="flex flex-col gap-3 px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      {/* Search bar */}
      <div className="flex flex-col gap-1.5 mb-2">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/30 pointer-events-none select-none">
            ⌕
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder={lang === "id" ? "Cari destinasi wisata…" : "Search destinations…"}
            className="w-full pl-8 pr-10 py-2.5 bg-cream border border-cream-dark text-sm text-charcoal placeholder:text-charcoal/30 outline-none focus:border-terracotta/50 transition-colors"
          />
          {q && (
            <button
              onClick={() => handleSearch("")}
              aria-label="Hapus pencarian"
              className="absolute right-0 top-0 h-full px-3.5 flex items-center text-charcoal/40 hover:text-charcoal transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="2" y1="2" x2="12" y2="12"/>
                <line x1="12" y1="2" x2="2" y2="12"/>
              </svg>
            </button>
          )}
        </div>
        <p className="font-mono text-[10px] text-charcoal/40 pl-1">
          {filtered.length} {lang === "id" ? "hasil ditemukan" : "results found"}
        </p>
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-sm text-charcoal/40 py-12">
          {lang === "id" ? `Tidak ada hasil untuk "${query}"` : `No results for "${query}"`}
        </p>
      )}

      {rows.map((row, rowIdx) => (
        <div key={rowIdx}>
          {/* ── Card row ── */}
          <div
            data-row={rowIdx}
            className="grid gap-3"
            style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
          >
            {row.map((item, colIdx) => {
              const globalIdx = rowIdx * cols + colIdx;
              const isActive = activeIndex === globalIdx;
              const kat = KATEGORI[item.slug];

              return (
                <button
                  key={item.slug}
                  onClick={() => toggle(globalIdx)}
                  aria-expanded={isActive}
                  className={[
                    "relative group text-left overflow-hidden transition-colors duration-200 border",
                    isActive
                      ? "border-charcoal bg-charcoal"
                      : "border-cream-dark bg-cream hover:border-terracotta/40 hover:bg-cream-dark",
                  ].join(" ")}
                >
                  {/* Image — fixed height directly on SafeImage */}
                  <div className="relative">
                    <SafeImage
                      src={item.gambar.src}
                      alt={item.nama[lang]}
                      className="w-full h-40"
                      priority={globalIdx < 4}
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-charcoal/50 pointer-events-none" />
                    )}
                  </div>

                  {/* Caption — fixed height */}
                  <div className={`h-22 px-3 pt-3 pb-2 sm:px-4 flex flex-col justify-start overflow-hidden ${isActive ? "bg-charcoal" : ""}`}>
                    {item.statusBadge && (
                      <span className="block text-[9px] font-mono uppercase tracking-[0.07em] text-terracotta leading-none mb-1">
                        ⚠ {item.statusBadge[lang]}
                      </span>
                    )}
                    <span
                      className={`block font-mono text-[9px] uppercase tracking-[0.07em] leading-none mb-1.5 ${
                        isActive ? "text-terracotta" : "text-charcoal/40"
                      }`}
                    >
                      {kat?.[lang] ?? ""}
                    </span>
                    <span
                      className={`block font-serif text-sm font-semibold leading-snug line-clamp-2 ${
                        isActive ? "text-cream" : "text-charcoal group-hover:text-terracotta"
                      } transition-colors`}
                    >
                      {item.nama[lang]}
                    </span>
                  </div>

                  {/* Active caret pointing down to the panel */}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full z-10 block w-0 h-0"
                      style={{
                        borderLeft: "10px solid transparent",
                        borderRight: "10px solid transparent",
                        borderTop: "10px solid #2B2420",
                      }}
                    />
                  )}
                </button>
              );
            })}

          </div>

          {/* ── Expand panel ── */}
          {activeRowIndex === rowIdx && activeItem && (
            <div
              ref={panelRef}
              className="bg-charcoal text-cream mt-1 rounded-sm"
              style={{ animation: "wisataExpand 0.25s ease" }}
            >
              <div className="px-6 py-8 sm:px-10 sm:py-10 grid sm:grid-cols-2 gap-8 items-start">
                {/* Image */}
                <SafeImage
                  src={activeItem.gambar.src}
                  alt={activeItem.nama[lang]}
                  credit={activeItem.gambar.credit}
                  creditClass="text-cream/40"
                  className="w-full aspect-video"
                />

                {/* Info */}
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-terracotta mb-2">
                    {KATEGORI[activeItem.slug]?.[lang] ?? ""}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream mb-3 leading-snug">
                    {activeItem.nama[lang]}
                  </h2>
                  <p className="text-cream/70 text-sm sm:text-base leading-relaxed mb-6">
                    {activeItem.ringkasan[lang]}
                  </p>

                  {/* Info Praktis mini */}
                  {activeItem.infoPraktis && (
                    <div className="flex flex-col gap-3 mb-7 text-sm">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.07em] text-terracotta block mb-0.5">
                          {jamBukaLabel}
                        </span>
                        <span className="text-cream/60">{activeItem.infoPraktis.jamBuka[lang]}</span>
                      </div>
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.07em] text-terracotta block mb-0.5">
                          {hargaTiketLabel}
                        </span>
                        <span className="text-cream/60">{activeItem.infoPraktis.hargaTiket[lang]}</span>
                      </div>
                    </div>
                  )}

                  <p className="text-[10px] text-cream/30 mb-5 italic">{disclaimer}</p>

                  <Link
                    href={`/${locale}/wisata/${activeItem.slug}`}
                    className="inline-block font-mono text-xs uppercase tracking-[0.07em] border border-terracotta text-terracotta px-5 py-2.5 hover:bg-terracotta hover:text-cream transition-colors"
                  >
                    {jelajahi} →
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}


    </div>
  );
}
