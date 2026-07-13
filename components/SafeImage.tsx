"use client";

import { useEffect, useRef, useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  credit?: string;
  creditClass?: string;
}

export default function SafeImage({
  src,
  alt,
  className = "",
  priority = false,
  credit,
  creditClass,
}: SafeImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete && !imgRef.current.naturalWidth) {
      setFailed(true);
    } else if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

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
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding={priority ? "sync" : "async"}
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
        <figcaption className={`mt-1 text-right text-xs italic ${creditClass ?? "text-charcoal/40"}`}>
          {credit}
        </figcaption>
      )}
    </figure>
  );
}
