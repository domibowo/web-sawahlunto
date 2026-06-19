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
      className={`text-xs font-semibold px-2.5 py-1.5 rounded border border-teal text-teal hover:bg-teal hover:text-white transition-colors min-h-[36px] inline-flex items-center ${className}`}
      aria-label={`Ganti ke bahasa ${otherLocale === "id" ? "Indonesia" : "Inggris"}`}
    >
      {otherLocale.toUpperCase()}
    </Link>
  );
}
