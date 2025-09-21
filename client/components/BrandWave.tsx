import { useMemo, useRef, useState } from "react";

type Props = {
  size?: number;
  className?: string;
  label?: string;
};

export default function BrandWave({
  size = 320,
  className = "",
  label = "Blyst AI",
}: Props) {
  const [boost, setBoost] = useState(false);
  const idRef = useRef(`wave-${Math.random().toString(36).slice(2)}`);
  const id = idRef.current;
  const logoVideo =
    "https://cdn.builder.io/o/assets%2F172b15ac9718458aa01c370ab6e1a4cf%2F2dda27bd7840414ca4a3cdf13f331080?alt=media&token=c49e08ab-2e73-4536-82ec-2e87291bde10&apiKey=172b15ac9718458aa01c370ab6e1a4cf";

  const { strokeWidth, radius } = useMemo(() => {
    const sw = Math.max(6, Math.floor(size / 40));
    return { strokeWidth: sw, radius: size / 2 - sw };
  }, [size]);

  return (
    // Perfectly square parent, always centered
    <div
      className={`logo-container mx-auto aspect-square relative select-none ${className}`}
      style={{ maxWidth: size, minWidth: 200 }}
      onMouseEnter={() => setBoost(true)}
      onMouseLeave={() => setBoost(false)}
      onClick={() => setBoost((b) => !b)}
      role="img"
      aria-label="Animated Blyst AI ring"
    >
      {/* Make video always circular, cover full parent */}
      <video
        src={logoVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full rounded-full object-cover logo-fade"
      />

      {/* Overlay SVG ring (use absolute to align perfectly) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${size} ${size}`}
      >
        <defs>
          <linearGradient id={`${id}-grad1`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9b5fff" />
            <stop offset="50%" stopColor="#00d4ff" />
            <stop offset="100%" stopColor="#ff8a00" />
          </linearGradient>
          <linearGradient id={`${id}-grad2`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff8a00" />
            <stop offset="50%" stopColor="#9b5fff" />
            <stop offset="100%" stopColor="#00d4ff" />
          </linearGradient>
          <filter
            id={`${id}-warp`}
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency={boost ? 0.012 : 0.02}
              numOctaves="2"
              seed="3"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur={boost ? "1.4s" : "3s"}
                values={boost ? "0.012;0.02;0.012" : "0.02;0.015;0.02"}
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in2="noise"
              in="SourceGraphic"
              scale={boost ? 18 : 10}
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feGaussianBlur stdDeviation="1.2" />
          </filter>
        </defs>
        <g filter={`url(#${id}-warp)`}>
          {[0, 1, 2].map((i) => {
            const dash = 40 + i * 10;
            return (
              <circle
                key={i}
                cx={size / 2}
                cy={size / 2}
                r={radius - i * (strokeWidth + 6)}
                fill="none"
                stroke={`url(#${i % 2 ? `${id}-grad2` : `${id}-grad1`})`}
                strokeWidth={strokeWidth - i}
                strokeDasharray={`${dash} ${dash}`}
                opacity={0.9 - i * 0.25}
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values={`0;${-dash * 2};0`}
                  dur={boost ? `${1.2 + i * 0.2}s` : `${2.2 + i * 0.5}s`}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
