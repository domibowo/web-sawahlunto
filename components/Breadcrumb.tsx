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
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-charcoal/50">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-charcoal transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-charcoal/70 truncate max-w-[160px] sm:max-w-xs" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
