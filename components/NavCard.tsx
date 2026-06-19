import Link from "next/link";

interface NavCardProps {
  href: string;
  icon: string; // SVG path data
  label: string;
  desc: string;
}

export default function NavCard({ href, icon, label, desc }: NavCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white border border-cream-dark rounded-lg p-4 sm:p-5 lg:p-6 hover:border-teal hover:shadow-sm transition-all"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cream rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-teal/10 transition-colors">
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-terracotta group-hover:text-teal transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
      <h3 className="font-serif text-charcoal font-semibold text-sm sm:text-base mb-1 sm:mb-2">
        {label}
      </h3>
      <p className="text-charcoal-light text-xs sm:text-sm leading-relaxed line-clamp-3">
        {desc}
      </p>
    </Link>
  );
}
