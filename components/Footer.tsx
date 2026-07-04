import Link from "next/link";
import type { Dictionary } from "@/dictionaries/id";

interface FooterProps {
  locale: string;
  dict: Dictionary;
}

export default function Footer({ locale, dict }: FooterProps) {
  const { footer } = dict;

  return (
    <footer className="bg-charcoal text-cream/70 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center sm:text-left">{footer.credit}</p>
          <Link
            href={`/${locale}/sumber`}
            className="text-sm text-cream/50 hover:text-teal transition-colors"
          >
            {footer.sumberLink}
          </Link>
        </div>
      </div>
    </footer>
  );
}
