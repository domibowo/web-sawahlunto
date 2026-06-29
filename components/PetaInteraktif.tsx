"use client";

import Link from "next/link";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { petaHotspots } from "@/data/peta";

// Warna hotspot bergantian; pusat-kota selalu charcoal
const HOTSPOT_COLORS: Record<string, string> = {
  "pusat-kota": "#2B2420",
  "lubang-mbah-soero": "#C1502E",
  "museum-goedang-ransoem": "#1D7A6B",
  "museum-kereta-api": "#C1502E",
  "puncak-cemara": "#1D7A6B",
  "danau-biru": "#C1502E",
};

// Label dua baris untuk nama panjang (baris ke-1, baris ke-2)
// null = satu baris saja
const LABEL_LINES: Record<string, [string, string | null, string, string | null]> = {
  "pusat-kota":             ["Pusat Kota",       null,              "City Centre",       null],
  "lubang-mbah-soero":      ["Lubang",           "Mbah Soero",      "Lubang",            "Mbah Soero"],
  "museum-goedang-ransoem": ["Museum Goedang",   "Ransoem",         "Museum Goedang",    "Ransoem"],
  "museum-kereta-api":      ["Museum Kereta Api","& Mak Itam",      "Railway Museum",    "& Mak Itam"],
  "puncak-cemara":          ["Puncak",           "Cemara",          "Puncak",            "Cemara"],
  "danau-biru":             ["Danau Biru",       null,              "Danau Biru",        null],
};

// Posisi label relatif terhadap titik tengah hotspot
type LabelPos = {
  x: number;
  y: number;
  anchor: "start" | "middle" | "end";
  line1dy: number;
  line2dy: number;
};

const LABEL_POS: Record<string, LabelPos> = {
  "pusat-kota":             { x: -14, y: 0,  anchor: "end",    line1dy: -4,  line2dy: 10 },
  "lubang-mbah-soero":      { x: -14, y: 0,  anchor: "end",    line1dy: -10, line2dy: 11 },
  "museum-goedang-ransoem": { x: 14,  y: 0,  anchor: "start",  line1dy: -10, line2dy: 11 },
  "museum-kereta-api":      { x: 14,  y: 0,  anchor: "start",  line1dy: -4,  line2dy: 9 },
  "puncak-cemara":          { x: 14,  y: 0,  anchor: "start",  line1dy: -6,  line2dy: 7 },
  "danau-biru":             { x: 14,  y: 0,  anchor: "start",  line1dy: 4,   line2dy: 14 },
};

interface Props {
  locale: string;
  lang: "id" | "en";
}

export default function PetaInteraktif({ locale, lang }: Props) {
  return (
    <TransformWrapper
      initialScale={1}
      minScale={0.8}
      maxScale={4}
      centerOnInit
      wheel={{ step: 0.05 }}
      pinch={{ step: 5 }}
    >
      {({ resetTransform }) => (
        <>
          {/* Tombol reset zoom — hanya muncul di mobile via CSS */}
          <div className="flex justify-end mb-1 md:hidden">
            <button
              onClick={() => resetTransform()}
              className="text-xs text-charcoal/50 border border-charcoal/20 rounded px-2 py-0.5"
            >
              Reset zoom
            </button>
          </div>
          <TransformComponent
            wrapperStyle={{ width: "100%", overflow: "visible" }}
            contentStyle={{ width: "100%" }}
          >
    <div className="w-full overflow-x-auto touch-none">
      <svg
        viewBox="0 0 680 540"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-2xl mx-auto block"
        aria-label={lang === "id" ? "Peta ilustrasi kota Sawahlunto" : "Illustrated map of Sawahlunto city"}
        role="img"
      >
        <style>{`
          .hotspot-dot {
            transition: transform 0.15s ease;
            transform-box: fill-box;
            transform-origin: center;
          }
          .hotspot-link:hover .hotspot-dot {
            transform: scale(1.15);
          }
          .hotspot-link {
            cursor: pointer;
          }
        `}</style>

        {/* Latar kanvas */}
        <rect width="680" height="540" fill="#F4ECDD" />

        {/* Perbukitan dekoratif — back */}
        <ellipse cx="160" cy="310" rx="210" ry="140" fill="#E8DCC5" />
        <ellipse cx="530" cy="220" rx="210" ry="155" fill="#E8DCC5" />

        {/* Perbukitan dekoratif — front/tengah */}
        <ellipse cx="345" cy="430" rx="270" ry="115" fill="#DDD0B8" />

        {/* Sungai dekoratif */}
        <path
          d="M 0,500 C 70,488 110,510 190,500 C 270,490 315,512 395,498 C 470,485 530,508 610,495 L 680,502"
          stroke="#1D7A6B"
          strokeOpacity="0.55"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        {/* Jalur putus-putus antar hotspot */}
        <path
          d="M 150,440 C 178,415 198,396 220,380 C 248,370 267,360 280,360 C 308,375 323,390 340,400 C 392,344 427,301 460,260 C 502,218 532,188 560,160"
          stroke="#2B2420"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          fill="none"
          strokeLinecap="round"
        />

        {/* Hotspot markers */}
        {petaHotspots.map((spot) => {
          const color = HOTSPOT_COLORS[spot.id] ?? "#C1502E";
          const pos = LABEL_POS[spot.id];
          const lines = LABEL_LINES[spot.id];
          const isId = lang === "id";
          const line1 = isId ? lines[0] : lines[2];
          const line2 = isId ? lines[1] : lines[3];
          const lx = spot.x + pos.x;
          const ly = spot.y + pos.y;

          const marker = (
            <g className="hotspot-dot">
              {/* Lingkaran luar */}
              <circle cx={spot.x} cy={spot.y} r={9} fill={color} stroke="#F4ECDD" strokeWidth={2} />
              {/* Titik tengah */}
              <circle cx={spot.x} cy={spot.y} r={3} fill="#F4ECDD" />
              {/* Label */}
              <text
                x={lx}
                y={ly}
                textAnchor={pos.anchor}
                fontSize="9"
                fontFamily="var(--font-sans, sans-serif)"
                fill="#2B2420"
                fontWeight="500"
              >
                <tspan x={lx} dy={pos.line1dy}>{line1}</tspan>
                {line2 && <tspan x={lx} dy={pos.line2dy}>{line2}</tspan>}
              </text>
            </g>
          );

          if (!spot.href) {
            return <g key={spot.id}>{marker}</g>;
          }

          return (
            <Link
              key={spot.id}
              href={`/${locale}${spot.href}`}
              className="hotspot-link"
              aria-label={spot.label[lang]}
            >
              {marker}
            </Link>
          );
        })}
      </svg>
    </div>
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
}
