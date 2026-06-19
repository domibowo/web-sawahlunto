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
      className={`bg-charcoal/10 flex flex-col items-center justify-center gap-2 ${className}`}
    >
      <svg
        className="w-12 h-12 text-charcoal/20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span className="text-xs text-charcoal/30 select-none">Foto menyusul</span>
    </div>
  );
}
