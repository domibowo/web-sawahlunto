"use client";

import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  credit?: string;
}

export default function SafeImage({
  src,
  alt,
  className = "",
  priority = false,
  credit,
}: SafeImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <ImagePlaceholder className={className} alt={alt} />;
  }

  return (
    <figure>
      <div className={`relative overflow-hidden ${className}`}>
        {/* Shimmer — visible while image is fetching */}
        {!loaded && (
          <div
            className="absolute inset-0 animate-pulse"
            style={{ background: "#E8DCC5" }}
          />
        )}

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      </div>
      {credit && (
        <figcaption className="mt-1 text-right text-xs text-charcoal/40 italic">
          {credit}
        </figcaption>
      )}
    </figure>
  );
}
