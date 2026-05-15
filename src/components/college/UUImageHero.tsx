"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/uu-new/hero/hero-1.png", alt: "Jahan sapne udaan bharte hain · Deepa Pandey now at Google" },
  { src: "/uu-new/hero/hero-2.png", alt: "Uttaranchal University campus banner" },
];

const AUTO_MS = 5000;

export function UUImageHero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((n: number) => {
    setIndex((prev) => (n + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(() => go(index + 1), AUTO_MS);
    return () => window.clearTimeout(t);
  }, [index, paused, go]);

  return (
    <div
      className="uu2-hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {SLIDES.map((s, i) => (
        <div
          key={s.src}
          className={`uu2-hero-slide ${i === index ? "is-active" : ""}`}
          aria-hidden={i !== index}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "bottom" }}
          />
        </div>
      ))}

      <button
        type="button"
        className="uu2-hero-nav uu2-hero-prev"
        onClick={() => go(index - 1)}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        type="button"
        className="uu2-hero-nav uu2-hero-next"
        onClick={() => go(index + 1)}
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="uu2-hero-dots" role="tablist">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`uu2-hero-dot ${i === index ? "is-active" : ""}`}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === index}
          />
        ))}
      </div>
    </div>
  );
}
