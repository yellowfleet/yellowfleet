type WakeLinesProps = {
  className?: string;
  stroke?: string;
};

/**
 * The site's signature graphic: a stylized hull wake — the V-shaped ripple
 * trail left behind a moving catamaran. Used in the hero, as a section
 * divider, and echoed in smaller form elsewhere. Grounded in the real
 * product (quiet, low-wake electric vessels) rather than a generic
 * decorative shape.
 */
export function WakeLines({ className = "", stroke = "currentColor" }: WakeLinesProps) {
  return (
    <svg
      viewBox="0 0 1200 220"
      fill="none"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M600 0 L600 40"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M600 40 C 460 70, 360 80, 180 110 C 120 118, 60 128, 0 145"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M600 40 C 740 70, 840 80, 1020 110 C 1080 118, 1140 128, 1200 145"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M600 40 C 500 95, 430 110, 280 155 C 220 172, 150 190, 60 210"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path
        d="M600 40 C 700 95, 770 110, 920 155 C 980 172, 1050 190, 1140 210"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  );
}
