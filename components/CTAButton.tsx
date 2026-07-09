import Link from "next/link";

interface CTAButtonProps {
  href: string;
  label: string;
  variant?: "primary" | "outline";
  className?: string;
}

export default function CTAButton({
  href,
  label,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full font-medium text-sm sm:text-base transition-colors min-h-11";

  const styles = {
    primary: "bg-terracotta-dark text-cream hover:bg-charcoal",
    outline: "border-2 border-teal text-teal hover:bg-teal hover:text-cream",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {label}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
