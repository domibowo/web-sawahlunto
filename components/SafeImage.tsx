"use client";

import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function SafeImage({ src, alt, className = "" }: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <ImagePlaceholder className={className} alt={alt} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
