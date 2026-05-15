type Props = {
  monogram: string;
  size?: number;
  variant?: "shield" | "circle" | "hex" | "diamond";
  className?: string;
};

export function CollegeCrest({
  monogram,
  size = 96,
  variant = "shield",
  className,
}: Props) {
  const id = `crest-${monogram.replace(/[^a-z]/gi, "")}-${variant}`;
  const fontSize = monogram.length > 2 ? size * 0.32 : size * 0.42;

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={`${monogram} crest`}
    >
      <defs>
        <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f3d2e" />
          <stop offset="100%" stopColor="#082420" />
        </linearGradient>
        <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d4ae66" />
          <stop offset="100%" stopColor="#b8893a" />
        </linearGradient>
      </defs>

      {variant === "shield" ? (
        <>
          <path
            d="M50 6 L88 16 L88 52 C88 73 71 88 50 94 C29 88 12 73 12 52 L12 16 Z"
            fill={`url(#${id}-fill)`}
            stroke={`url(#${id}-gold)`}
            strokeWidth="1.4"
          />
          <path
            d="M50 12 L82 20 L82 52 C82 70 67 83 50 88 C33 83 18 70 18 52 L18 20 Z"
            fill="none"
            stroke="rgba(212,174,102,0.35)"
            strokeWidth="0.6"
          />
        </>
      ) : null}

      {variant === "circle" ? (
        <>
          <circle
            cx="50"
            cy="50"
            r="45"
            fill={`url(#${id}-fill)`}
            stroke={`url(#${id}-gold)`}
            strokeWidth="1.4"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="rgba(212,174,102,0.35)"
            strokeWidth="0.6"
          />
        </>
      ) : null}

      {variant === "hex" ? (
        <>
          <path
            d="M50 6 L88 28 L88 72 L50 94 L12 72 L12 28 Z"
            fill={`url(#${id}-fill)`}
            stroke={`url(#${id}-gold)`}
            strokeWidth="1.4"
          />
          <path
            d="M50 12 L82 31 L82 69 L50 88 L18 69 L18 31 Z"
            fill="none"
            stroke="rgba(212,174,102,0.35)"
            strokeWidth="0.6"
          />
        </>
      ) : null}

      {variant === "diamond" ? (
        <>
          <path
            d="M50 6 L94 50 L50 94 L6 50 Z"
            fill={`url(#${id}-fill)`}
            stroke={`url(#${id}-gold)`}
            strokeWidth="1.4"
          />
          <path
            d="M50 14 L86 50 L50 86 L14 50 Z"
            fill="none"
            stroke="rgba(212,174,102,0.35)"
            strokeWidth="0.6"
          />
        </>
      ) : null}

      {/* Top star ornament */}
      <g transform="translate(50,22)" fill={`url(#${id}-gold)`}>
        <circle r="1.4" />
        <circle cx="-6" r="0.8" />
        <circle cx="6" r="0.8" />
      </g>

      {/* Monogram */}
      <text
        x="50"
        y="56"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#f6efde"
        fontFamily="var(--font-display, Fraunces, Georgia, serif)"
        fontSize={fontSize}
        fontWeight="600"
        letterSpacing={monogram.length > 2 ? "0.06em" : "0.02em"}
      >
        {monogram}
      </text>

      {/* Bottom rule */}
      <line
        x1="34"
        y1="74"
        x2="66"
        y2="74"
        stroke={`url(#${id}-gold)`}
        strokeWidth="0.6"
      />
      <text
        x="50"
        y="82"
        textAnchor="middle"
        fill="rgba(246,239,222,0.7)"
        fontFamily="var(--font-sans, Manrope, sans-serif)"
        fontSize="6"
        letterSpacing="0.36em"
      >
        EST
      </text>
    </svg>
  );
}
