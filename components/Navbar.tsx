"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LanguageToggle from "./LanguageToggle";
import type { Dictionary } from "@/dictionaries/id";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

interface NavbarProps {
  locale: string;
  dict: Dictionary;
}

type Platform = "ios" | "huawei" | "other";

function detectPlatform(): Platform {
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  if (/HuaweiBrowser|HUAWEI|HMSCore/i.test(ua)) return "huawei";
  return "other";
}

function InstallModal({
  platform,
  locale,
  onClose,
}: {
  platform: Platform;
  locale: string;
  onClose: () => void;
}) {
  const isId = locale === "id";

  const steps: Record<Platform, { title: string; steps: string[] }> = {
    ios: {
      title: isId ? "Pasang di iPhone / iPad" : "Install on iPhone / iPad",
      steps: isId
        ? [
            'Buka situs ini di Safari (bukan Chrome atau browser lain)',
            'Ketuk ikon Bagikan (kotak dengan panah ke atas) di bagian bawah layar',
            'Gulir ke bawah dan pilih "Tambahkan ke Layar Utama"',
            'Ketuk "Tambahkan" — aplikasi siap digunakan offline',
          ]
        : [
            'Open this site in Safari (not Chrome or other browsers)',
            'Tap the Share icon (box with arrow) at the bottom of the screen',
            'Scroll down and tap "Add to Home Screen"',
            'Tap "Add" — the app is ready to use offline',
          ],
    },
    huawei: {
      title: isId ? "Pasang di Perangkat Huawei" : "Install on Huawei Device",
      steps: isId
        ? [
            'Buka situs ini di Huawei Browser',
            'Ketuk ikon menu (tiga titik) di sudut kanan atas',
            'Pilih "Tambahkan ke layar utama"',
            'Konfirmasi — aplikasi siap digunakan offline',
          ]
        : [
            'Open this site in Huawei Browser',
            'Tap the menu icon (three dots) in the top right corner',
            'Select "Add to home screen"',
            'Confirm — the app is ready to use offline',
          ],
    },
    other: {
      title: isId ? "Pasang Aplikasi" : "Install App",
      steps: isId
        ? [
            'Buka situs ini di browser (Chrome, Edge, atau Samsung Internet)',
            'Ketuk ikon menu (tiga titik) di sudut kanan atas',
            'Pilih "Tambahkan ke layar utama" atau "Instal aplikasi"',
            'Konfirmasi — aplikasi siap digunakan offline',
          ]
        : [
            'Open this site in your browser (Chrome, Edge, or Samsung Internet)',
            'Tap the menu icon (three dots) in the top right corner',
            'Select "Add to home screen" or "Install app"',
            'Confirm — the app is ready to use offline',
          ],
    },
  };

  const content = steps[platform];

  return (
    <div
      className="fixed inset-0 z-100 flex items-end sm:items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />

      {/* Modal */}
      <div
        className="relative w-full max-w-sm bg-cream rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-charcoal/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-terracotta flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v13M8 11l4 4 4-4"/>
                <path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"/>
              </svg>
            </div>
            <h2 className="font-serif text-base font-semibold text-charcoal leading-snug">
              {content.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-charcoal/50 hover:text-charcoal hover:bg-charcoal/8 transition-colors"
            aria-label="Tutup"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Steps */}
        <ol className="px-5 py-4 flex flex-col gap-3">
          {content.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-terracotta text-cream text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <p className="text-sm text-charcoal/80 leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>

        {/* Footer note */}
        <p className="px-5 pb-5 text-xs text-charcoal/40 leading-relaxed">
          {isId
            ? "Setelah dipasang, situs dapat diakses tanpa koneksi internet."
            : "Once installed, the site can be accessed without an internet connection."}
        </p>
      </div>
    </div>
  );
}

export default function Navbar({ locale, dict }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [installed, setInstalled] = useState(false);
  const [installModal, setInstallModal] = useState<Platform | null>(null);
  const installPromptRef = React.useRef<Event | null>(null);
  const pathname = usePathname();
  const { nav } = dict;

  // Tutup drawer setiap kali pathname berubah (navigasi selesai)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => { setMenuOpen(false); }, [pathname]);

  React.useEffect(() => {
    const handler = (e: Event) => { e.preventDefault(); installPromptRef.current = e; };
    const onInstalled = () => { setInstalled(true); installPromptRef.current = null; };
    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", onInstalled);
    if (window.matchMedia("(display-mode: standalone)").matches) setInstalled(true);
    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  async function handleInstall() {
    const prompt = installPromptRef.current;
    if (prompt) {
      (prompt as BeforeInstallPromptEvent).prompt();
      const { outcome } = await (prompt as BeforeInstallPromptEvent).userChoice;
      if (outcome === "accepted") setInstalled(true);
      installPromptRef.current = null;
    } else {
      setMenuOpen(false);
      setInstallModal(detectPlatform());
    }
  }

  React.useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 40) setScrolled(true);
      else setScrolled(false);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: nav.sejarah, href: `/${locale}/sejarah` },
    { label: nav.budaya, href: `/${locale}/budaya` },
    { label: nav.kuliner, href: `/${locale}/kuliner` },
    { label: nav.destinasi, href: `/${locale}/wisata` },
    { label: nav.inovasi, href: `/${locale}/inovasi` },
    { label: nav.peta, href: `/${locale}/peta` },
  ];

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <>
      <header className={`text-cream sticky top-0 z-50 will-change-transform transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/80 backdrop-blur-md border-b border-cream/10"
          : "bg-charcoal"
      }`}>
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
                      ? "text-cream bg-cream/15 font-semibold"
                      : "text-cream/70 hover:text-cream hover:bg-cream/10"
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
                className="p-2 rounded text-cream hover:bg-cream/10 transition-colors min-h-11 min-w-11 flex items-center justify-center"
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
          <div className={`border-t border-cream/10 ${scrolled ? "bg-charcoal/90 backdrop-blur-md" : "bg-charcoal"}`}>
            <nav className="max-w-7xl mx-auto px-4 py-2 flex flex-col gap-0.5" aria-label="Menu mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm px-3 py-3 rounded transition-colors min-h-11 flex items-center ${
                    isActive(link.href)
                      ? "text-cream bg-cream/15 font-semibold"
                      : "text-cream/70 hover:text-cream hover:bg-cream/10"
                  }`}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}

              {/* PWA install — tersembunyi jika sudah ter-install atau mode standalone */}
              {!installed && (
                <div className="border-t border-cream/10 mt-1 pt-2 pb-1">
                  <button
                    onClick={handleInstall}
                    className="w-full flex items-center gap-3 px-3 py-3 rounded text-sm text-cream/70 hover:text-cream hover:bg-cream/10 transition-colors min-h-11"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
                      <path d="M12 2v13M8 11l4 4 4-4"/>
                      <path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"/>
                    </svg>
                    {locale === "id" ? "Pasang Aplikasi" : "Install App"}
                  </button>
                </div>
              )}
            </nav>
          </div>
        )}
      </header>

      {/* PWA install modal — muncul di semua platform yang tidak mendukung native prompt */}
      {installModal && (
        <InstallModal
          platform={installModal}
          locale={locale}
          onClose={() => setInstallModal(null)}
        />
      )}
    </>
  );
}
