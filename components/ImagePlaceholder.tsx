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
      className={`flex items-center justify-center ${className}`}
      style={{ background: "#E8DCC5" }}
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        style={{ opacity: 0.25 }}
      >
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#2B2420" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3.5" stroke="#2B2420" strokeWidth="1.5" />
        <path d="M8 5l1.5-2h5L16 5" stroke="#2B2420" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
