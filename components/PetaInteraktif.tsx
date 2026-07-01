"use client";

import Link from "next/link";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { petaHotspots } from "@/data/peta";

// Warna hotspot per id; fallback bergantian terracotta/teal berdasarkan index
const HOTSPOT_COLORS: Record<string, string> = {
  "pusat-kota":                  "#2B2420",
  "lubang-mbah-soero":           "#C1502E",
  "museum-goedang-ransoem":      "#1D7A6B",
  "museum-kereta-api":           "#C1502E",
  "museum-tambang-ombilin":      "#1D7A6B",
  "silo":                        "#C1502E",
  "taman-segitiga":              "#1D7A6B",
  "hotel-ombilin-kota-tua":      "#1D7A6B",
  "gereja-santa-barbara":        "#C1502E",
  "masjid-nurul-islam":          "#1D7A6B",
  "gedung-pusat-kebudayaan":     "#D97706", // amber — sedang direvitalisasi
  "makam-belanda":               "#1D7A6B",
  "batu-runciang":               "#C1502E",
  "desa-wisata-rantih":          "#C1502E",
  "lubang-kalam":                "#1D7A6B",
  "waterboom-muaro-kalaban":     "#C1502E",
  "puncak-cemara":               "#1D7A6B",
  "puncak-polan":                "#C1502E",
  "danau-biru":                  "#C1502E",
  "geosite-fosil-ikan-gurami":   "#1D7A6B",
  "kawasan-kandi":               "#1D7A6B",
  "kebun-buah-kandi":            "#C1502E",
  "padang-savana-kolok":         "#1D7A6B",
};

// Label dua baris: [line1-id, line2-id, line1-en, line2-en]
// null = satu baris saja
type LabelTuple = [string, string | null, string, string | null];
const LABEL_LINES: Record<string, LabelTuple> = {
  "pusat-kota":                  ["Pusat Kota",        null,            "City Centre",        null],
  "lubang-mbah-soero":           ["Lubang",            "Mbah Soero",    "Lubang",             "Mbah Soero"],
  "museum-goedang-ransoem":      ["Museum Goedang",    "Ransoem",       "Museum Goedang",     "Ransoem"],
  "museum-kereta-api":           ["Museum Kereta Api", "& Mak Itam",    "Railway Museum",     "& Mak Itam"],
  "museum-tambang-ombilin":      ["Museum",            "Tambang",       "Mining",             "Museum"],
  "silo":                        ["Silo",              null,            "Silo",               null],
  "taman-segitiga":              ["Taman",             "Segitiga",      "Taman",              "Segitiga"],
  "hotel-ombilin-kota-tua":      ["Hotel",             "Ombilin",       "Hotel",              "Ombilin"],
  "gereja-santa-barbara":        ["Gereja Santa",      "Barbara",       "Santa Barbara",      "Church"],
  "masjid-nurul-islam":          ["Masjid",            "Nurul Islam",   "Nurul Islam",        "Mosque"],
  "gedung-pusat-kebudayaan":     ["Gdg Pusat",         "Kebudayaan",    "Cultural",           "Centre ⚠"],
  "makam-belanda":               ["Makam",             "Belanda",       "Dutch",              "Cemetery"],
  "batu-runciang":               ["Batu",              "Runciang",      "Batu",               "Runciang"],
  "desa-wisata-rantih":          ["Desa",              "Rantih",        "Rantih",             "Village"],
  "lubang-kalam":                ["Lubang",            "Kalam",         "Lubang",             "Kalam"],
  "waterboom-muaro-kalaban":     ["Waterboom",         "Muaro Kalaban", "Waterboom",          "Muaro Kalaban"],
  "puncak-cemara":               ["Puncak",            "Cemara",        "Puncak",             "Cemara"],
  "puncak-polan":                ["Puncak",            "Polan",         "Puncak",             "Polan"],
  "danau-biru":                  ["Danau Biru",        null,            "Danau Biru",         null],
  "geosite-fosil-ikan-gurami":   ["Geosite",           "Yamini",        "Yamini",             "Geosite"],
  "kawasan-kandi":               ["Kawasan",           "Kandi",         "Kandi",              "Area"],
  "kebun-buah-kandi":            ["Kebun Buah",        "Kandi",         "Kandi Fruit",        "Garden"],
  "padang-savana-kolok":         ["Savana",            "Kolok",         "Kolok",              "Savanna"],
};

// Posisi label relatif terhadap titik tengah hotspot
type LabelPos = {
  x: number;             // offset horizontal dari titik
  y: number;             // offset vertikal dari titik
  anchor: "start" | "middle" | "end";
  line1dy: number;       // dy baris pertama
  line2dy: number;       // dy baris kedua (relatif terhadap baris pertama)
};

const LABEL_POS: Record<string, LabelPos> = {
  // ── kota lama ──
  "pusat-kota":                  { x: -14, y: 0,  anchor: "end",   line1dy: -4,  line2dy: 10 },
  "lubang-mbah-soero":           { x: -14, y: 0,  anchor: "end",   line1dy: -10, line2dy: 11 },
  "museum-goedang-ransoem":      { x:  14, y: 0,  anchor: "start", line1dy: -10, line2dy: 11 },
  "museum-kereta-api":           { x:  14, y: 0,  anchor: "start", line1dy: -4,  line2dy: 9  },
  "museum-tambang-ombilin":      { x: -14, y: 0,  anchor: "end",   line1dy: -10, line2dy: 11 },
  "silo":                        { x:  14, y: 0,  anchor: "start", line1dy: -4,  line2dy: 9  },
  "taman-segitiga":              { x: -14, y: 0,  anchor: "end",   line1dy: -10, line2dy: 11 },
  "hotel-ombilin-kota-tua":      { x: -14, y: 0,  anchor: "end",   line1dy: -10, line2dy: 11 },
  "gereja-santa-barbara":        { x:  14, y: 0,  anchor: "start", line1dy: -10, line2dy: 11 },
  "masjid-nurul-islam":          { x:  14, y: 0,  anchor: "start", line1dy: -10, line2dy: 11 },
  "gedung-pusat-kebudayaan":     { x:   0, y: 14, anchor: "middle",line1dy: 4,   line2dy: 11 },
  // ── barat / selatan ──
  "makam-belanda":               { x:  14, y: 0,  anchor: "start", line1dy: -10, line2dy: 11 },
  "batu-runciang":               { x:  14, y: 0,  anchor: "start", line1dy: -10, line2dy: 11 },
  "desa-wisata-rantih":          { x:  14, y: 0,  anchor: "start", line1dy: -10, line2dy: 11 },
  // ── jalur tengah ──
  "lubang-kalam":                { x:  14, y: 0,  anchor: "start", line1dy: -10, line2dy: 11 },
  "waterboom-muaro-kalaban":     { x:  14, y: 0,  anchor: "start", line1dy: -10, line2dy: 11 },
  // ── dataran tinggi ──
  "puncak-cemara":               { x:  14, y: 0,  anchor: "start", line1dy: -6,  line2dy: 7  },
  "puncak-polan":                { x:  14, y: 0,  anchor: "start", line1dy: -10, line2dy: 11 },
  // ── talawi / kandi ──
  "danau-biru":                  { x:  14, y: 0,  anchor: "start", line1dy: 4,   line2dy: 14 },
  "geosite-fosil-ikan-gurami":   { x: -14, y: 0,  anchor: "end",   line1dy: -10, line2dy: 11 },
  "kawasan-kandi":               { x: -14, y: 0,  anchor: "end",   line1dy: -10, line2dy: 11 },
  "kebun-buah-kandi":            { x: -14, y: 0,  anchor: "end",   line1dy: -10, line2dy: 11 },
  "padang-savana-kolok":         { x: -14, y: 0,  anchor: "end",   line1dy: -10, line2dy: 11 },
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

        {/* Jalur putus-putus — rute utama kota → danau */}
        <path
          d="M 150,440 C 178,415 198,396 220,380 C 248,370 267,360 280,360 C 308,375 323,390 340,400 C 392,344 427,301 460,260 C 502,218 532,188 560,160"
          stroke="#2B2420"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          fill="none"
          strokeLinecap="round"
        />
        {/* Jalur putus-putus — rute kanan (lubang kalam → kandi) */}
        <path
          d="M 340,400 C 362,382 378,368 392,358 C 408,342 420,328 430,312 C 452,285 480,268 510,308 C 522,285 528,262 535,240 C 550,212 568,198 580,305"
          stroke="#2B2420"
          strokeOpacity="0.20"
          strokeWidth="1.5"
          strokeDasharray="4 5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Hotspot markers */}
        {petaHotspots.map((spot) => {
          const color = HOTSPOT_COLORS[spot.id] ?? "#C1502E";
          const pos = LABEL_POS[spot.id] ?? { x: 14, y: 0, anchor: "start" as const, line1dy: -10, line2dy: 11 };
          const labelTuple = LABEL_LINES[spot.id];
          const isId = lang === "id";

          let line1: string;
          let line2: string | null;
          if (labelTuple) {
            line1 = isId ? labelTuple[0] : labelTuple[2];
            line2 = isId ? labelTuple[1] : labelTuple[3];
          } else {
            // Auto-split label at midpoint space
            const raw = spot.label[lang];
            const mid = Math.floor(raw.length / 2);
            const spaceAfter = raw.indexOf(" ", mid);
            const spaceBefore = raw.lastIndexOf(" ", mid);
            const splitAt = spaceAfter !== -1
              ? (spaceBefore !== -1 && mid - spaceBefore < spaceAfter - mid ? spaceBefore : spaceAfter)
              : spaceBefore;
            if (splitAt > 0) {
              line1 = raw.substring(0, splitAt);
              line2 = raw.substring(splitAt + 1);
            } else {
              line1 = raw;
              line2 = null;
            }
          }

          const lx = spot.x + pos.x;
          const ly = spot.y + pos.y;

          const marker = (
            <g className="hotspot-dot">
              <circle cx={spot.x} cy={spot.y} r={9} fill={color} stroke="#F4ECDD" strokeWidth={2} />
              <circle cx={spot.x} cy={spot.y} r={3} fill="#F4ECDD" />
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
