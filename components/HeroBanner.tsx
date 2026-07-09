import Image from "next/image";

interface HeroBannerProps {
  size?: "lg" | "sm";
  badge?: string;
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageCredit?: string;
}

const heightMap = {
  lg: "h-72 sm:h-96 md:h-[480px] lg:h-[560px]",
  sm: "h-48 sm:h-64 md:h-72",
};

export default function HeroBanner({
  size = "lg",
  badge,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  imageCredit,
}: HeroBannerProps) {
  return (
    <section className={`relative overflow-hidden ${heightMap[size]}`}>
      {/* Base bg — visible sebelum gambar siap / saat tidak ada gambar */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, #3a2e2a 0%, #2B2420 100%)" }}
      />
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt ?? title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          fetchPriority="high"
        />
      )}

      {/* Content */}
      <div
        className={`absolute inset-0 flex flex-col items-center px-4 text-center ${
          size === "lg" ? "justify-center" : "justify-end pb-8 sm:pb-10"
        }`}
      >
        {badge && (
          <span className="inline-block font-mono text-sm sm:text-base uppercase tracking-[0.08em] text-terracotta mb-3 sm:mb-4">
            {badge}
          </span>
        )}
        <h1
          className={`font-serif text-cream font-bold leading-tight max-w-3xl ${
            size === "lg"
              ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              : "text-2xl sm:text-3xl md:text-4xl"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-cream/80 text-sm sm:text-base max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      {imageCredit && (
        <p className="absolute bottom-2 right-3 text-[10px] text-cream/40 italic leading-none">
          {imageCredit}
        </p>
      )}
    </section>
  );
}
