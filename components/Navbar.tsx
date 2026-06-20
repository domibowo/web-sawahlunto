"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LanguageToggle from "./LanguageToggle";
import type { Dictionary } from "@/dictionaries/id";

interface NavbarProps {
  locale: string;
  dict: Dictionary;
}

export default function Navbar({ locale, dict }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { nav } = dict;

  const navLinks = [
    { label: nav.sejarah, href: `/${locale}/sejarah` },
    { label: nav.budaya, href: `/${locale}/budaya` },
    { label: nav.kuliner, href: `/${locale}/kuliner` },
    { label: nav.destinasi, href: `/${locale}/destinasi` },
    { label: nav.inovasi, href: `/${locale}/inovasi` },
    { label: nav.peta, href: `/${locale}/peta` },
  ];

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className="bg-charcoal text-cream sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="font-serif text-lg md:text-xl font-bold text-cream hover:text-cream-dark transition-colors shrink-0"
          >
            {nav.siteName}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Menu utama">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm px-2 lg:px-3 py-1.5 rounded transition-colors ${
                  isActive(link.href)
                    ? "text-cream bg-white/15 font-semibold"
                    : "text-cream/70 hover:text-cream hover:bg-white/10"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <LanguageToggle locale={locale} className="ml-2 lg:ml-4" />
          </nav>

          {/* Mobile: lang toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageToggle locale={locale} />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded text-cream hover:bg-white/10 transition-colors min-h-11 min-w-11 flex items-center justify-center"
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-charcoal">
          <nav className="max-w-7xl mx-auto px-4 py-2 flex flex-col gap-0.5" aria-label="Menu mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm px-3 py-3 rounded transition-colors min-h-11 flex items-center ${
                  isActive(link.href)
                    ? "text-cream bg-white/15 font-semibold"
                    : "text-cream/70 hover:text-cream hover:bg-white/10"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
