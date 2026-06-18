"use client";

import Link from "next/link";
import { useState } from "react";
import type { Dictionary } from "@/dictionaries/id";

interface NavbarProps {
  locale: string;
  dict: Dictionary;
}

export default function Navbar({ locale, dict }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const otherLocale = locale === "id" ? "en" : "id";
  const { nav, lang } = dict;

  const navLinks = [
    { label: nav.sejarah, href: `/${locale}/sejarah` },
    { label: nav.budaya, href: `/${locale}/budaya` },
    { label: nav.kuliner, href: `/${locale}/kuliner` },
    { label: nav.destinasi, href: `/${locale}/destinasi` },
    { label: nav.inovasi, href: `/${locale}/inovasi` },
    { label: nav.peta, href: `/${locale}/peta` },
  ];

  return (
    <header className="bg-charcoal text-cream sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="font-serif text-lg md:text-xl font-bold text-cream hover:text-cream-dark transition-colors"
          >
            {nav.siteName}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm px-2 lg:px-3 py-1.5 rounded text-cream/80 hover:text-cream hover:bg-white/10 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`/${otherLocale}`}
              className="ml-2 lg:ml-4 text-xs font-semibold px-2.5 py-1 rounded border border-teal text-teal hover:bg-teal hover:text-white transition-colors"
            >
              {lang.toggle}
            </Link>
          </nav>

          {/* Mobile: lang toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href={`/${otherLocale}`}
              className="text-xs font-semibold px-2 py-1 rounded border border-teal text-teal hover:bg-teal hover:text-white transition-colors"
            >
              {lang.toggle}
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded text-cream hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm px-3 py-2.5 rounded text-cream/80 hover:text-cream hover:bg-white/10 transition-colors"
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
