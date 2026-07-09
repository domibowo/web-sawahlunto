"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LanguageToggleProps {
  locale: string;
  className?: string;
}

export default function LanguageToggle({ locale, className = "" }: LanguageToggleProps) {
  const pathname = usePathname();
  const otherLocale = locale === "id" ? "en" : "id";

  // Ganti prefix locale di path, pertahankan sisa path
  // /id/sejarah/penemuan-batu-bara → /en/sejarah/penemuan-batu-bara
  const otherPath = pathname.replace(
    new RegExp(`^/${locale}(/|$)`),
    `/${otherLocale}$1`
  );

  return (
    <Link
      href={otherPath}
      className={`text-xs font-semibold px-2.5 py-1.5 rounded-full border border-cream/40 text-cream/80 hover:bg-teal hover:text-cream hover:border-teal transition-colors min-h-9 inline-flex items-center ${className}`}
    >
      {otherLocale.toUpperCase()}
      <span className="sr-only">
        {otherLocale === "id" ? " — Bahasa Indonesia" : " — English"}
      </span>
    </Link>
  );
}
