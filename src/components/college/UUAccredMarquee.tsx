import Image from "next/image";

const LOGOS = [
  { src: "/uu-new/uni/uni-1.png", alt: "Accreditation 1" },
  { src: "/uu-new/uni/uni-2.png", alt: "Accreditation 2" },
  { src: "/uu-new/uni/uni-3.png", alt: "Accreditation 3" },
  { src: "/uu-new/uni/uni-4.png", alt: "Accreditation 4" },
  { src: "/uu-new/uni/uni-5.png", alt: "Accreditation 5" },
  { src: "/uu-new/uni/uni-6.png", alt: "Accreditation 6" },
  { src: "/uu-new/uni/uni-7.png", alt: "Accreditation 7" },
];

export function UUAccredMarquee() {
  const track = [...LOGOS, ...LOGOS];
  return (
    <div className="uu2-marquee" aria-hidden={false}>
      <div className="uu2-marquee-track">
        {track.map((l, i) => (
          <div className="uu2-marquee-item" key={`${l.src}-${i}`}>
            <Image
              src={l.src}
              alt={l.alt}
              width={220}
              height={220}
              sizes="220px"
              style={{ objectFit: "contain", width: "auto", height: "100%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
