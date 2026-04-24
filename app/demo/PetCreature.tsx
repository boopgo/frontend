"use client";

/**
 * Placeholder for the future 3D avatar. Renders a soft SVG creature
 * with body, head, ears, eyes, and tail. Palette and species vary.
 */
export type Species = "dog" | "cat" | "bunny";
export type Palette = {
  body: string;
  belly: string;
  accent: string;
};

export const PALETTES: Palette[] = [
  { body: "#FFB07A", belly: "#FFE1C7", accent: "#FF7B63" }, // peach/coral
  { body: "#C3AED6", belly: "#E8DDF2", accent: "#8E73AF" }, // lilac
  { body: "#A8D8EA", belly: "#DDF0F7", accent: "#6FB8D1" }, // sky
  { body: "#B8E6C5", belly: "#DFF3E4", accent: "#7FC48F" }, // mint
  { body: "#FFD56B", belly: "#FFEDC0", accent: "#E6A93D" }, // sun
];

type Props = {
  species: Species;
  palette: Palette;
  size?: number;
  facing?: 1 | -1;
  walking?: boolean;
};

export default function PetCreature({ species, palette, size = 160, facing = 1, walking = false }: Props) {
  const legPhase = walking ? "walking" : "";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      style={{ transform: `scaleX(${facing})`, overflow: "visible" }}
      aria-hidden
    >
      {/* legs */}
      <g className={`legs ${legPhase}`}>
        <ellipse cx="80" cy="160" rx="9" ry="14" fill={palette.accent} className="leg leg-bl" />
        <ellipse cx="120" cy="160" rx="9" ry="14" fill={palette.accent} className="leg leg-br" />
        <ellipse cx="70" cy="158" rx="9" ry="13" fill={palette.accent} className="leg leg-fl" />
        <ellipse cx="110" cy="158" rx="9" ry="13" fill={palette.accent} className="leg leg-fr" />
      </g>

      {/* body */}
      <ellipse cx="100" cy="130" rx="52" ry="40" fill={palette.body} />
      <ellipse cx="100" cy="140" rx="36" ry="26" fill={palette.belly} opacity="0.75" />

      {/* tail */}
      {species === "bunny" ? (
        <circle cx="150" cy="118" r="12" fill="#fff" />
      ) : species === "cat" ? (
        <path
          d="M150 120 Q175 100 170 75"
          stroke={palette.body}
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
        >
          <animate attributeName="d" dur="2.2s" repeatCount="indefinite"
            values="M150 120 Q175 100 170 75;M150 120 Q180 110 185 80;M150 120 Q175 100 170 75" />
        </path>
      ) : (
        <path
          d="M150 115 Q170 105 168 88"
          stroke={palette.body}
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
        >
          <animate attributeName="d" dur="0.9s" repeatCount="indefinite"
            values="M150 115 Q170 105 168 88;M150 115 Q172 115 180 100;M150 115 Q170 105 168 88" />
        </path>
      )}

      {/* head */}
      <g>
        <ellipse cx="100" cy="80" rx="40" ry="36" fill={palette.body} />

        {/* ears */}
        {species === "dog" && (
          <>
            <ellipse cx="70" cy="70" rx="12" ry="22" fill={palette.accent} transform="rotate(-20 70 70)" />
            <ellipse cx="130" cy="70" rx="12" ry="22" fill={palette.accent} transform="rotate(20 130 70)" />
          </>
        )}
        {species === "cat" && (
          <>
            <polygon points="70,48 78,78 58,72" fill={palette.accent} />
            <polygon points="130,48 142,72 122,78" fill={palette.accent} />
            <polygon points="72,54 76,70 64,68" fill="#ffdce6" />
            <polygon points="128,54 138,68 124,70" fill="#ffdce6" />
          </>
        )}
        {species === "bunny" && (
          <>
            <ellipse cx="82" cy="36" rx="8" ry="26" fill={palette.body} transform="rotate(-10 82 36)" />
            <ellipse cx="118" cy="36" rx="8" ry="26" fill={palette.body} transform="rotate(10 118 36)" />
            <ellipse cx="82" cy="40" rx="3" ry="18" fill="#ffdce6" transform="rotate(-10 82 40)" />
            <ellipse cx="118" cy="40" rx="3" ry="18" fill="#ffdce6" transform="rotate(10 118 40)" />
          </>
        )}

        {/* eyes */}
        <g>
          <circle cx="86" cy="80" r="4.5" fill="#2A1A2E">
            <animate attributeName="ry" dur="4s" keyTimes="0;0.92;0.95;1" values="4.5;4.5;0.3;4.5" repeatCount="indefinite" />
          </circle>
          <circle cx="114" cy="80" r="4.5" fill="#2A1A2E">
            <animate attributeName="ry" dur="4s" keyTimes="0;0.92;0.95;1" values="4.5;4.5;0.3;4.5" repeatCount="indefinite" />
          </circle>
          <circle cx="87.5" cy="78.5" r="1.5" fill="#fff" />
          <circle cx="115.5" cy="78.5" r="1.5" fill="#fff" />
        </g>

        {/* nose + mouth */}
        <ellipse cx="100" cy="92" rx="4" ry="3" fill={palette.accent} />
        <path d="M100 95 Q96 100 92 98 M100 95 Q104 100 108 98"
          stroke="#2A1A2E" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* cheek blush */}
        <circle cx="74" cy="92" r="5" fill="#FF9A8B" opacity="0.35" />
        <circle cx="126" cy="92" r="5" fill="#FF9A8B" opacity="0.35" />
      </g>

      <style>{`
        .legs.walking .leg-bl { animation: wbl 0.5s infinite; }
        .legs.walking .leg-br { animation: wbr 0.5s infinite; }
        .legs.walking .leg-fl { animation: wfl 0.5s infinite; }
        .legs.walking .leg-fr { animation: wfr 0.5s infinite; }
        @keyframes wbl { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        @keyframes wbr { 0%,100%{transform:translateY(-4px)} 50%{transform:translateY(0)} }
        @keyframes wfl { 0%,100%{transform:translateY(-3px)} 50%{transform:translateY(1px)} }
        @keyframes wfr { 0%,100%{transform:translateY(1px)} 50%{transform:translateY(-3px)} }
      `}</style>
    </svg>
  );
}
