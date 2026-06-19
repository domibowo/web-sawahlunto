import Link from "next/link";

interface NavItem {
  href: string;
  label: string;
}

interface PrevNextNavProps {
  prev?: NavItem | null;
  next?: NavItem | null;
  prevLabel?: string; // teks "← Peristiwa sebelumnya"
  nextLabel?: string; // teks "Peristiwa selanjutnya →"
}

export default function PrevNextNav({
  prev,
  next,
  prevLabel = "← Sebelumnya",
  nextLabel = "Selanjutnya →",
}: PrevNextNavProps) {
  return (
    <nav
      className="border-t border-cream-dark bg-white"
      aria-label="Navigasi halaman"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-stretch sm:items-start justify-between gap-4">
        {prev ? (
          <Link
            href={prev.href}
            className="group flex flex-col sm:max-w-[45%] min-h-[44px] justify-center"
          >
            <span className="text-xs text-charcoal/50 mb-1">{prevLabel}</span>
            <span className="font-serif text-sm font-semibold text-charcoal group-hover:text-teal transition-colors leading-snug">
              {prev.label}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={next.href}
            className="group flex flex-col sm:max-w-[45%] sm:items-end sm:text-right min-h-[44px] justify-center"
          >
            <span className="text-xs text-charcoal/50 mb-1">{nextLabel}</span>
            <span className="font-serif text-sm font-semibold text-charcoal group-hover:text-teal transition-colors leading-snug">
              {next.label}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}
