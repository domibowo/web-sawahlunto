interface ImagePlaceholderProps {
  className?: string;
  alt?: string;
}

export default function ImagePlaceholder({
  className = "",
  alt = "Gambar belum tersedia",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`bg-charcoal/8 ${className}`}
    />
  );
}
