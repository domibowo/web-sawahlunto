"use client";

import { useEffect, useRef } from "react";
import { petaHotspots } from "@/data/peta";

// Warna marker sesuai DESIGN.md — terracotta untuk semua destinasi wisata
const MARKER_COLOR = "#C1502E";
const MARKER_BORDER = "#F4ECDD";

export default function PetaSungguhan({ locale, lang }: { locale: string; lang: "id" | "en" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    let map: unknown;
    let destroyed = false;

    (async () => {
      const maplibre = await import("maplibre-gl");
      const { layers, namedTheme } = await import("protomaps-themes-base");

      if (destroyed || !containerRef.current) return;

      const SOURCE = "protomaps";
      const theme = namedTheme("light");
      const origin = window.location.origin;

      const mapStyle = {
        version: 8 as const,
        glyphs: `${origin}/maps/glyphs/{fontstack}/{range}.pbf`,
        sprite: `${origin}/maps/sprites/light`,
        sources: {
          [SOURCE]: {
            type: "vector" as const,
            // Tile individual (HTTP biasa) — tidak butuh custom protocol
            tiles: [`${origin}/maps/tiles/{z}/{x}/{y}.mvt`],
            minzoom: 0,
            maxzoom: 14,
            bounds: [100.75, -0.71, 100.81, -0.62] as [number, number, number, number],
            attribution: '© <a href="https://protomaps.com">Protomaps</a> © <a href="https://openstreetmap.org">OpenStreetMap</a>',
          },
        },
        layers: layers(SOURCE, theme, { lang }) as import("maplibre-gl").LayerSpecification[],
      };

      const m = new maplibre.Map({
        container: containerRef.current,
        style: mapStyle,
        center: [100.7739, -0.6777],
        zoom: 13.5,
        attributionControl: { compact: true },
      });
      mapRef.current = m;
      map = m;

      m.addControl(new maplibre.NavigationControl(), "top-right");
      m.on("error", (e) => {
        console.error("[MapLibre]", (e.error as { message?: string })?.message ?? e);
      });

      m.on("load", () => {
        if (destroyed) return;

        petaHotspots.forEach((spot) => {
          // Outer div = hit area (ukuran tetap, tidak berubah saat hover)
          const el = document.createElement("div");
          el.style.cssText = [
            `width:28px`, `height:28px`,
            `display:flex`, `align-items:center`, `justify-content:center`,
            `cursor:${spot.href ? "pointer" : "default"}`,
          ].join(";");
          // Inner dot = visual yang scale (pointer-events:none supaya tidak mempengaruhi hit area)
          const dot = document.createElement("div");
          dot.style.cssText = [
            `width:14px`, `height:14px`,
            `background:${MARKER_COLOR}`,
            `border:2.5px solid ${MARKER_BORDER}`,
            `border-radius:50%`,
            `transition:transform 0.15s ease`,
            `pointer-events:none`,
          ].join(";");
          el.appendChild(dot);
          el.addEventListener("mouseenter", () => { dot.style.transform = "scale(1.4)"; });
          el.addEventListener("mouseleave", () => { dot.style.transform = ""; });

          const label = spot.label[lang];
          const popupHtml = spot.href
            ? `<div style="font-family:sans-serif;font-size:13px;line-height:1.5;padding:2px 0">
                 <strong style="display:block;margin-bottom:4px;color:#2B2420">${label}</strong>
                 <a href="/${locale}${spot.href}"
                    style="color:#C1502E;font-size:12px;text-decoration:none;font-weight:500">
                   ${lang === "id" ? "Lihat detail →" : "See details →"}
                 </a>
               </div>`
            : `<div style="font-family:sans-serif;font-size:13px;font-weight:600;color:#2B2420;padding:2px 0">${label}</div>`;

          const popup = new maplibre.Popup({
            offset: 14,
            closeButton: false,
            maxWidth: "220px",
          }).setHTML(popupHtml);

          new maplibre.Marker({ element: el })
            .setLngLat([spot.lng, spot.lat])
            .setPopup(popup)
            .addTo(m);
        });
      });
    })();

    return () => {
      destroyed = true;
      if (map && typeof (map as { remove?: () => void }).remove === "function") {
        (map as { remove: () => void }).remove();
      }
      mapRef.current = null;
    };
  }, [locale, lang]);

  return (
    <>
      {/* maplibre-gl CSS — loaded inline once per page */}
      <link rel="stylesheet" href="/maps/maplibre-gl.css" />
      <div
        ref={containerRef}
        style={{ width: "100%", height: "420px" }}
        aria-label={lang === "id" ? "Peta Sawahlunto interaktif" : "Interactive map of Sawahlunto"}
      />
    </>
  );
}
