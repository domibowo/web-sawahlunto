"use client";

import { useState, useEffect, useRef, useCallback, type ReactNode } from "react";

function AutoSizeTitle({ text, className }: { text: string; className: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  const resize = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.fontSize = "";
    const maxH = el.parentElement!.clientHeight - 20; // dikurangi padding
    if (el.scrollHeight <= maxH) return;
    let size = parseFloat(getComputedStyle(el).fontSize);
    while (el.scrollHeight > maxH && size > 10) {
      size -= 0.5;
      el.style.fontSize = `${size}px`;
    }
  }, []);

  useEffect(() => { resize(); }, [text, resize]);

  return <span ref={ref} className={className}>{text}</span>;
}
import SafeImage from "@/components/SafeImage";
import type { GambarEntry } from "@/types";

export type ContentItem = {
  id: string;
  judul: { id: string; en: string };
  isi: { id: string; en: string };
  gambar: GambarEntry;
};

interface Props {
  items: ContentItem[];
  lang: "id" | "en";
  renderExtra?: (item: ContentItem, lang: "id" | "en") => ReactNode;
}

function stripFootnotes(text: string) {
  return text.replace(/\[\d+\]/g, "");
}

export default function ContentGrid({ items, lang, renderExtra }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [cols, setCols] = useState(2);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      setCols(window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 2);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (activeIndex !== null && panelRef.current) {
      setTimeout(() => {
        panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 50);
    }
  }, [activeIndex]);

  const rows: ContentItem[][] = [];
  for (let i = 0; i < items.length; i += cols) {
    rows.push(items.slice(i, i + cols));
  }

  const activeRowIndex = activeIndex !== null ? Math.floor(activeIndex / cols) : -1;
  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  function toggle(idx: number) {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  }

  return (
    <div className="flex flex-col gap-3 px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      {rows.map((row, rowIdx) => (
        <div key={rowIdx}>
          {/* Card row */}
          <div
            data-row={rowIdx}
            className="grid gap-3"
            style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
          >
            {row.map((item, colIdx) => {
              const globalIdx = rowIdx * cols + colIdx;
              const isActive = activeIndex === globalIdx;
              return (
                <button
                  key={item.id}
                  onClick={() => toggle(globalIdx)}
                  aria-expanded={isActive}
                  className={[
                    "relative group text-left overflow-hidden transition-colors duration-200 border",
                    isActive
                      ? "border-charcoal bg-charcoal"
                      : "border-cream-dark bg-cream hover:border-terracotta/40 hover:bg-cream-dark",
                  ].join(" ")}
                >
                  {/* Image — fixed height */}
                  <div className="relative">
                    <SafeImage
                      src={item.gambar.src}
                      alt={item.judul[lang]}
                      className="w-full h-40"
                      priority={globalIdx < 4}
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-charcoal/50 pointer-events-none" />
                    )}
                  </div>

                  {/* Caption — fixed height */}
                  <div className={`h-22 px-3 pt-3 pb-2 sm:px-4 flex flex-col justify-start overflow-hidden ${isActive ? "bg-charcoal" : ""}`}>
                    <AutoSizeTitle
                      text={item.judul[lang]}
                      className={`block font-serif text-sm font-semibold leading-snug ${
                        isActive ? "text-cream" : "text-charcoal group-hover:text-terracotta"
                      } transition-colors`}
                    />
                  </div>

                  {/* Active caret */}
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

          {/* Expand panel */}
          {activeRowIndex === rowIdx && activeItem && (
            <div
              ref={panelRef}
              className="bg-charcoal text-cream mt-1 rounded-sm"
              style={{ animation: "wisataExpand 0.25s ease" }}
            >
              <div className="px-6 py-8 sm:px-10 sm:py-10 grid sm:grid-cols-2 gap-8 items-start">
                <SafeImage
                  src={activeItem.gambar.src}
                  alt={activeItem.judul[lang]}
                  credit={activeItem.gambar.credit}
                  creditClass="text-cream/40"
                  className="w-full aspect-video"
                />
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream mb-4 leading-snug">
                    {activeItem.judul[lang]}
                  </h2>
                  <p className="text-cream/70 text-sm sm:text-base leading-relaxed">
                    {stripFootnotes(activeItem.isi[lang])}
                  </p>
                  {renderExtra && (
                    <div className="mt-6">
                      {renderExtra(activeItem, lang)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

    </div>
  );
}
