"use client";

import { useState } from "react";
import type { Reference } from "@/types";

interface ReferenceListProps {
  items: Reference[];
  scope: string;
}

export default function ReferenceList({ items, scope }: ReferenceListProps) {
  const [open, setOpen] = useState(false);
  if (!items.length) return null;

  return (
    <section className="mt-10 border-t border-cream-dark">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="font-serif text-xl font-bold text-charcoal/50 group-hover:text-charcoal/70 transition-colors">
          Sumber Pustaka
          <span className="font-mono text-xs font-normal tracking-[0.06em] text-charcoal/30 ml-2">({items.length})</span>
        </span>
        <span className={`text-2xl text-charcoal/30 group-hover:text-charcoal/50 transition-all duration-200 ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {open && (
        <ol className="flex flex-col gap-1.5 pb-6">
          {items.map((ref) => (
            <li
              key={ref.nomor}
              id={`ref-${scope}-${ref.nomor}`}
              className="flex gap-2 text-xs text-charcoal/50 leading-relaxed"
            >
              <span className="shrink-0 font-semibold text-charcoal/40 w-4 text-right">
                {ref.nomor}.
              </span>
              <span>
                {ref.url ? (
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal hover:text-teal-dark transition-colors underline underline-offset-2"
                  >
                    {ref.sumber}
                  </a>
                ) : (
                  ref.sumber
                )}
              </span>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
