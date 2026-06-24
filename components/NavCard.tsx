import Link from "next/link";

type CardColor = "terracotta" | "charcoal" | "teal";

interface NavCardProps {
  href: string;
  icon: string;
  label: string;
  desc: string;
  color?: CardColor;
}

const bgMap: Record<CardColor, string> = {
  terracotta: "bg-terracotta hover:bg-terracotta-dark",
  charcoal: "bg-charcoal hover:bg-charcoal/80",
  teal: "bg-teal hover:bg-teal-dark",
};

export default function NavCard({ href, icon, label, desc, color = "terracotta" }: NavCardProps) {
  return (
    <Link
      href={href}
      className={`group ${bgMap[color]} flex flex-col gap-4 p-5 sm:p-6 min-h-37 sm:min-h-40 transition-colors`}
    >
      <div className="w-8 h-8 flex items-center justify-center shrink-0">
        <svg
          className="w-6 h-6 text-cream/75 group-hover:text-cream transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
      <div>
        <h3 className="font-sans font-medium text-cream text-sm sm:text-base leading-snug">
          {label}
        </h3>
        <p className="text-cream/55 text-xs sm:text-sm leading-relaxed mt-1 line-clamp-2">
          {desc}
        </p>
      </div>
    </Link>
  );
}
