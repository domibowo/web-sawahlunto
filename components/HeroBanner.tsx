import ImagePlaceholder from "./ImagePlaceholder";

interface HeroBannerProps {
  size?: "lg" | "sm";
  badge?: string;
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
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
}: HeroBannerProps) {
  return (
    <section className={`relative overflow-hidden ${heightMap[size]}`}>
      {imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt={imageAlt ?? title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <ImagePlaceholder className="absolute inset-0 w-full h-full" alt={imageAlt ?? title} />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/55" />

      {/* Content */}
      <div
        className={`absolute inset-0 flex flex-col items-center px-4 text-center ${
          size === "lg" ? "justify-center" : "justify-end pb-8 sm:pb-10"
        }`}
      >
        {badge && (
          <span className="inline-block bg-teal text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 sm:mb-4 tracking-wide uppercase">
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
    </section>
  );
}
