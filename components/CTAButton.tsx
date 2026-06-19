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
    "inline-block px-6 sm:px-8 py-3 rounded font-semibold text-sm sm:text-base transition-colors min-h-[44px] flex items-center justify-center";

  const styles = {
    primary: "bg-terracotta text-white hover:bg-terracotta-dark",
    outline: "border-2 border-teal text-teal hover:bg-teal hover:text-white",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {label}
    </Link>
  );
}
