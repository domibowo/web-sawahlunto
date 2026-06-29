"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import PetaInteraktif from "@/components/PetaInteraktif";

// Lazy-load MapLibre + PMTiles — tidak masuk bundle awal
const PetaSungguhan = dynamic(() => import("@/components/PetaSungguhan"), { ssr: false });

interface Props {
  locale: string;
  lang: "id" | "en";
  tapHint: string;
  toggleIlustrasi: string;
  toggleSungguhan: string;
  needsInternet: string;
}

export default function PetaToggle({
  locale, lang, tapHint, toggleIlustrasi, toggleSungguhan, needsInternet,
}: Props) {
  const [mode, setMode] = useState<"ilustrasi" | "sungguhan">("ilustrasi");

  const btnBase = "px-4 py-1.5 text-sm font-sans font-medium transition-colors rounded-full";
  const active = "bg-charcoal text-cream";
  const inactive = "bg-cream-dark text-charcoal hover:bg-[#DDD0B8]";

  return (
    <>
      {/* Toggle */}
      <div className="flex justify-center gap-2 mb-6">
        <button
          onClick={() => setMode("ilustrasi")}
          className={`${btnBase} ${mode === "ilustrasi" ? active : inactive}`}
        >
          {toggleIlustrasi}
        </button>
        <button
          onClick={() => setMode("sungguhan")}
          className={`${btnBase} ${mode === "sungguhan" ? active : inactive}`}
        >
          {toggleSungguhan}
        </button>
      </div>

      {mode === "ilustrasi" && (
        <>
          <PetaInteraktif locale={locale} lang={lang} />
          <p className="mt-5 text-center text-xs font-mono uppercase tracking-[0.07em] text-charcoal/50">
            {tapHint}
          </p>
        </>
      )}

      {mode === "sungguhan" && (
        <>
          <p className="mb-3 text-center text-xs font-mono uppercase tracking-[0.07em] text-charcoal/50">
            {needsInternet}
          </p>
          <PetaSungguhan locale={locale} lang={lang} />
        </>
      )}
    </>
  );
}
