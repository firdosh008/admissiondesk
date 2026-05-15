"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

type Slide = {
  src: string;
  eyebrow: string;
  title: string;
  italic: string;
  body: string;
  cta: { label: string; href: string };
};

const SLIDES: Slide[] = [
  {
    src: "/colleges/uu/slide-1.jpg",
    eyebrow: "Admissions 2026–27 Now Open",
    title: "Uttaranchal University",
    italic: "For the Excellence within You",
    body: "100+ industry-centric programmes · 42-acre campus · NAAC A+ accreditation · scholarships up to 65%.",
    cta: { label: "Begin Application", href: "#apply" },
  },
  {
    src: "/colleges/uu/slide-2.jpg",
    eyebrow: "Placements that Speak",
    title: "1,200+ Recruiters",
    italic: "Including ₹55 LPA Domestic & ₹1.5 Cr International",
    body: "Pre-placement training from semester three · industry MoUs · live projects · placement cell with a 92% report rate.",
    cta: { label: "See Placement Record", href: "#placements" },
  },
  {
    src: "/colleges/uu/slide-3.jpg",
    eyebrow: "Scholarship that Rewards You",
    title: "Up to 65% Tuition Waiver",
    italic: "Early-Bird, Merit, Sports, Defence & Single-Girl-Child",
    body: "Multiple stackable scholarship slabs. Apply by 31 May 2026 to lock the highest Early-Bird tier.",
    cta: { label: "Check Eligibility", href: "#apply" },
  },
  {
    src: "/colleges/uu/slide-4.jpg",
    eyebrow: "Research & Innovation",
    title: "6,000+ Publications · 730+ Patents",
    italic: "Where Curiosity Becomes Career",
    body: "Centres of excellence in AI, Cyber Security, Bioinformatics and Pharmaceutical Sciences. Three faculty members in the world's top 2% scientists list.",
    cta: { label: "Explore Research", href: "#intellectual" },
  },
];

const AUTO_MS = 5500;

export function UUHeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((n: number) => {
    setIndex((prev) => (n + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(index + 1), AUTO_MS);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  return (
    <div
      className="uu-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {SLIDES.map((s, i) => (
        <article
          key={s.src}
          className={`uu-slide ${i === index ? "uu-slide-active" : ""}`}
          aria-hidden={i !== index}
        >
          <div className="uu-slide-img">
            <Image
              src={s.src}
              alt=""
              fill
              sizes="100vw"
              priority={i === 0}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="uu-slide-overlay" />
          <div className="uu-container uu-slide-body">
            <p className="uu-slide-eyebrow">{s.eyebrow}</p>
            <h2 className="uu-slide-title">{s.title}</h2>
            <p className="uu-slide-italic">{s.italic}</p>
            <p className="uu-slide-text">{s.body}</p>
            <a href={s.cta.href} className="uu-btn-orange uu-slide-cta">
              {s.cta.label} →
            </a>
          </div>
        </article>
      ))}

      <button
        type="button"
        className="uu-slider-nav uu-slider-prev"
        onClick={() => go(index - 1)}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        type="button"
        className="uu-slider-nav uu-slider-next"
        onClick={() => go(index + 1)}
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="uu-slider-dots" role="tablist">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`uu-slider-dot ${i === index ? "uu-slider-dot-active" : ""}`}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === index}
          />
        ))}
      </div>
    </div>
  );
}
