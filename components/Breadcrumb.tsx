import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string; // tanpa href = item aktif (halaman sekarang)
};

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap gap-1.5 font-mono text-[11px] uppercase tracking-[0.07em]">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true" className="text-charcoal/30">/</span>}
            {item.href ? (
              <Link
                href={item.href}
                className="text-charcoal-muted hover:text-terracotta transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-terracotta truncate max-w-40 sm:max-w-xs" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
