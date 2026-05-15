"use client";

import { useState } from "react";
import Image from "next/image";

const SLIDES = [
  {
    quote: "Knowledge is one that liberates",
    body:
      "The three core goals of Uttaranchal University are committed to student-centric teaching-learning, world-class research & innovation, and humanistic social responsibility — encapsulated in our firmness while steering the university into a new arena.",
    name: "Jitender Joshi",
    role: "President",
    photo: "/colleges/uu/Screenshot 2026-05-11 164344.png",
  },
  {
    quote: "Where ideas become institutions",
    body:
      "Our 42-acre campus is engineered for focused learning — twelve schools, twenty laboratories, two libraries, three auditoriums, separate hostels and dedicated centres of excellence in AI, Cyber Security, Bioinformatics and Pharmaceutical Sciences.",
    name: "Prof. Rajesh Bahuguna",
    role: "Vice-Chancellor",
    photo: "/uu-new/intellectual/president.png",
  },
  
];

export function UUIntellectualCarousel() {
  const [i, setI] = useState(0);
  const slide = SLIDES[i];
  const go = (n: number) => setI((n + SLIDES.length) % SLIDES.length);

  return (
    <div className="uu2-intel">
      <button
        type="button"
        className="uu2-intel-nav uu2-intel-prev"
        onClick={() => go(i - 1)}
        aria-label="Previous"
      >
        ‹
      </button>
      <div className="uu2-intel-stage">
        <div className="uu2-intel-quote">
          <p className="uu2-intel-q">&ldquo;{slide.quote}&rdquo;</p>
          <p className="uu2-intel-body">{slide.body}</p>
          <p className="uu2-intel-name">{slide.name}</p>
          <p className="uu2-intel-role">{slide.role}</p>
        </div>
        <div className="uu2-intel-photo">
          <Image
            src={slide.photo}
            alt={slide.name}
            width={900}
            height={900}
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <button
        type="button"
        className="uu2-intel-nav uu2-intel-next"
        onClick={() => go(i + 1)}
        aria-label="Next"
      >
        ›
      </button>
      <div className="uu2-intel-dots">
        {SLIDES.map((_, n) => (
          <button
            key={n}
            type="button"
            className={`uu2-intel-dot ${n === i ? "is-active" : ""}`}
            aria-label={`Slide ${n + 1}`}
            onClick={() => go(n)}
          />
        ))}
      </div>
    </div>
  );
}
