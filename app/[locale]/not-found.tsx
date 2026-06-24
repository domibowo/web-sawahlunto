"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const copy = {
  id: {
    badge: "404",
    title: "Halaman belum tersedia",
    desc: "Halaman ini masih dalam pengembangan atau alamatnya tidak ditemukan.",
    cta: "Kembali ke Beranda",
  },
  en: {
    badge: "404",
    title: "Page not available yet",
    desc: "This page is still under development or the address could not be found.",
    cta: "Back to Home",
  },
};

export default function NotFound() {
  const pathname = usePathname();
  const lang = pathname?.startsWith("/en") ? "en" : "id";
  const locale = lang;
  const t = copy[lang];

  return (
    <div className="flex-1 bg-cream flex items-center justify-center px-4 py-20 sm:py-32">
      <div className="max-w-md text-center">
        <span className="inline-block font-mono text-[11px] uppercase tracking-[0.08em] text-terracotta mb-6">
          {t.badge}
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-charcoal leading-snug mb-4">
          {t.title}
        </h1>
        <p className="text-charcoal-light text-base leading-relaxed mb-10">
          {t.desc}
        </p>
        <Link
          href={`/${locale}`}
          className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-terracotta text-cream hover:bg-terracotta-dark transition-colors font-medium text-sm sm:text-base min-h-11"
        >
          {t.cta} →
        </Link>
      </div>
    </div>
  );
}
