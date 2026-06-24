import type { Reference } from "@/types";

interface ReferenceListProps {
  items: Reference[];
  scope: string;
}

export default function ReferenceList({ items, scope }: ReferenceListProps) {
  if (!items.length) return null;

  return (
    <section className="mt-10 pt-6 border-t border-cream-dark">
      <ol className="flex flex-col gap-1.5">
        {items.map((ref) => (
          <li
            key={ref.nomor}
            id={`ref-${scope}-${ref.nomor}`}
            className="flex gap-2 text-xs text-charcoal/50 leading-relaxed"
          >
            <span className="shrink-0 font-semibold text-charcoal/40 w-4 text-right">
              {ref.nomor}.
            </span>
            <span>
              {ref.url ? (
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal-dark transition-colors underline underline-offset-2"
                >
                  {ref.sumber}
                </a>
              ) : (
                ref.sumber
              )}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
