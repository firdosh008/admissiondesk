"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const PHOTOS = [
  "/uu-new/photos/photo-1.png",
  "/uu-new/photos/photo-2.png",
  "/uu-new/photos/photo-3.png",
  "/uu-new/photos/photo-4.png",
  "/uu-new/photos/photo-5.png",
];

export function UUPhotoCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((n: number) => {
    setI((prev) => (n + PHOTOS.length) % PHOTOS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(() => go(i + 1), 4200);
    return () => window.clearTimeout(t);
  }, [i, paused, go]);

  return (
    <div
      className="uu2-photos"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="uu2-photos-frame">
        {PHOTOS.map((src, n) => (
          <div
            key={src}
            className={`uu2-photos-slide ${n === i ? "is-active" : ""}`}
            aria-hidden={n !== i}
          >
            <Image
              src={src}
              alt={`Campus photo ${n + 1}`}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
              priority={n === 0}
            />
          </div>
        ))}
        <button
          type="button"
          className="uu2-photos-nav uu2-photos-prev"
          onClick={() => go(i - 1)}
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          type="button"
          className="uu2-photos-nav uu2-photos-next"
          onClick={() => go(i + 1)}
          aria-label="Next"
        >
          ›
        </button>
      </div>
      <div className="uu2-photos-dots">
        {PHOTOS.map((_, n) => (
          <button
            key={n}
            type="button"
            className={`uu2-photos-dot ${n === i ? "is-active" : ""}`}
            aria-label={`Photo ${n + 1}`}
            onClick={() => go(n)}
          />
        ))}
      </div>
    </div>
  );
}
