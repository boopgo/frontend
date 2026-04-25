import type { Metadata } from "next";
import "./logo.css";

export const metadata: Metadata = {
  title: "boop — logo lab",
  robots: { index: false, follow: false },
};

const PEACH = "#FF9A8B";

/* ============================================================
   THE STANDARD DOG PAW — three carefully proportioned takes.
   Each is the classic 4-toe paw print, drawn with anatomically
   correct toe arc and a heart-rounded main pad. Differences are
   only in proportion and stylization weight.
   ============================================================ */

function StandardPaw({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="Standard dog paw">
      {/* main pad — classic rounded teardrop with soft top */}
      <path
        d="M32 28
           Q24 28 20 33
           Q15 40 18 48
           Q22 56 32 56
           Q42 56 46 48
           Q49 40 44 33
           Q40 28 32 28 Z"
        fill={PEACH}
      />
      {/* 4 toes in an arc — outer pair smaller, inner pair larger and higher */}
      <ellipse cx="14" cy="28" rx="4.5" ry="5.5" fill={PEACH} />
      <ellipse cx="25" cy="15" rx="5"   ry="6"   fill={PEACH} />
      <ellipse cx="39" cy="15" rx="5"   ry="6"   fill={PEACH} />
      <ellipse cx="50" cy="28" rx="4.5" ry="5.5" fill={PEACH} />
    </svg>
  );
}

function StandardPawChunky({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="Standard dog paw (chunky)">
      {/* fatter, bolder main pad */}
      <path
        d="M32 26
           Q22 26 17 33
           Q11 42 16 51
           Q22 58 32 58
           Q42 58 48 51
           Q53 42 47 33
           Q42 26 32 26 Z"
        fill={PEACH}
      />
      {/* bigger toes, tighter to pad */}
      <ellipse cx="13" cy="26" rx="5.5" ry="6.5" fill={PEACH} />
      <ellipse cx="24" cy="13" rx="6"   ry="7"   fill={PEACH} />
      <ellipse cx="40" cy="13" rx="6"   ry="7"   fill={PEACH} />
      <ellipse cx="51" cy="26" rx="5.5" ry="6.5" fill={PEACH} />
    </svg>
  );
}

function StandardPawSlim({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="Standard dog paw (slim)">
      {/* slimmer, more elegant proportions */}
      <path
        d="M32 30
           Q26 30 23 35
           Q19 41 22 48
           Q26 55 32 55
           Q38 55 42 48
           Q45 41 41 35
           Q38 30 32 30 Z"
        fill={PEACH}
      />
      <ellipse cx="16" cy="30" rx="3.5" ry="4.5" fill={PEACH} />
      <ellipse cx="26" cy="18" rx="4"   ry="5"   fill={PEACH} />
      <ellipse cx="38" cy="18" rx="4"   ry="5"   fill={PEACH} />
      <ellipse cx="48" cy="30" rx="3.5" ry="4.5" fill={PEACH} />
    </svg>
  );
}

const PAWS = [
  { name: "Standard dog paw", Cmp: StandardPaw },
  { name: "Standard dog paw — chunky", Cmp: StandardPawChunky },
  { name: "Standard dog paw — slim", Cmp: StandardPawSlim },
];

/* ============================================================
   SNOOTS — the part you actually boop. Cat-style heart noses,
   wet button noses, three-quarter snouts, and onomatopoeia.
   ============================================================ */

function HeartNose({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="Heart nose">
      <path
        d="M32 16
           C26 12 18 14 18 22
           C18 30 32 44 32 44
           C32 44 46 30 46 22
           C46 14 38 12 32 16 Z"
        fill={PEACH}
      />
    </svg>
  );
}

function ButtonNose({ size = 64, color = PEACH, highlight = "#fff" }: { size?: number; color?: string; highlight?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="Button nose">
      <ellipse cx="32" cy="32" rx="20" ry="16" fill={color} />
      <ellipse cx="26" cy="26" rx="5" ry="3" fill={highlight} opacity=".55" />
    </svg>
  );
}

function ButtonNoseNostrils({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="Button nose with nostrils">
      <ellipse cx="32" cy="32" rx="20" ry="16" fill={PEACH} />
      <ellipse cx="26" cy="24" rx="5" ry="3" fill="#fff" opacity=".55" />
      {/* nostrils */}
      <ellipse cx="26" cy="36" rx="2" ry="3" fill="#FF7B63" />
      <ellipse cx="38" cy="36" rx="2" ry="3" fill="#FF7B63" />
    </svg>
  );
}

function ButtonNoseGlossy({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="Glossy wet button nose">
      <defs>
        <radialGradient id="nose-grad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FFC1B0" />
          <stop offset="55%" stopColor={PEACH} />
          <stop offset="100%" stopColor="#FF7B63" />
        </radialGradient>
      </defs>
      <ellipse cx="32" cy="32" rx="22" ry="18" fill="url(#nose-grad)" />
      <ellipse cx="24" cy="22" rx="7" ry="4" fill="#fff" opacity=".75" />
      <circle cx="40" cy="40" r="2" fill="#fff" opacity=".5" />
    </svg>
  );
}

function ButtonNoseSparkle({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="Button nose with sparkle">
      <ellipse cx="32" cy="34" rx="20" ry="16" fill={PEACH} />
      <ellipse cx="26" cy="28" rx="5" ry="3" fill="#fff" opacity=".55" />
      {/* tiny boop sparkle */}
      <g transform="translate(50 14)">
        <path d="M0 -5 L1.4 -1.4 L5 0 L1.4 1.4 L0 5 L-1.4 1.4 L-5 0 L-1.4 -1.4 Z" fill="#FFB347" />
      </g>
    </svg>
  );
}

function WetNose({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="Wet shiny nose">
      <path
        d="M32 12
           C22 12 14 18 14 28
           C14 38 22 50 32 50
           C42 50 50 38 50 28
           C50 18 42 12 32 12 Z"
        fill={PEACH}
      />
      <ellipse cx="26" cy="22" rx="5" ry="3.5" fill="#fff" opacity=".7" />
      <circle cx="36" cy="20" r="1.8" fill="#fff" opacity=".5" />
    </svg>
  );
}

function ThreeQuarterSnout({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="Three-quarter snout">
      {/* muzzle */}
      <ellipse cx="32" cy="42" rx="22" ry="14" fill={PEACH} />
      {/* nose */}
      <ellipse cx="32" cy="32" rx="6" ry="5" fill="#2A1A2E" />
      {/* mouth */}
      <path
        d="M32 38 L32 44 M32 44 Q26 48 22 46 M32 44 Q38 48 42 46"
        stroke="#2A1A2E"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NoseWithWhiskers({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="Nose with whiskers">
      <path
        d="M32 22
           C26 18 18 22 20 30
           C22 36 32 44 32 44
           C32 44 42 36 44 30
           C46 22 38 18 32 22 Z"
        fill={PEACH}
      />
      <path
        d="M14 28 L24 30 M14 34 L24 32 M50 28 L40 30 M50 34 L40 32"
        stroke={PEACH}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BlepNose({ size = 64 }: { size?: number }) {
  // nose + tiny tongue (the "blep" — pet internet slang)
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="Blep — nose with tongue">
      <path
        d="M32 14
           C26 10 18 14 18 22
           C18 30 32 42 32 42
           C32 42 46 30 46 22
           C46 14 38 10 32 14 Z"
        fill={PEACH}
      />
      <path
        d="M28 42 Q32 52 36 42 Q34 50 32 50 Q30 50 28 42 Z"
        fill="#FF7B63"
      />
    </svg>
  );
}

const SNOOTS = [
  { name: "Round button nose (original)", Cmp: ButtonNose },
  { name: "Button nose — with nostrils", Cmp: ButtonNoseNostrils },
  { name: "Button nose — glossy gradient", Cmp: ButtonNoseGlossy },
  { name: "Button nose — sparkle accent", Cmp: ButtonNoseSparkle },
  { name: "Heart nose (cat-style)", Cmp: HeartNose },
  { name: "Wet shiny nose", Cmp: WetNose },
  { name: "Three-quarter snout", Cmp: ThreeQuarterSnout },
  { name: "Nose with whiskers", Cmp: NoseWithWhiskers },
  { name: "Blep — nose + tiny tongue", Cmp: BlepNose },
];

/* ============================================================
   APP ICON BACKGROUND EXPLORATION
   The current peach→coral diagonal is fine but generic.
   Stronger backgrounds for App Store presence:
   ============================================================ */

// Backgrounds for the chunky standard dog paw (paw stays coral #FF9A8B).
const APP_BGS = [
  { name: "Ink — premium",            style: "#2A1A2E" },
  { name: "Deep plum",                style: "#3a2235" },
  { name: "Peach",                    style: "#FFD6A5" },
  { name: "Cream — minimal",          style: "#FFF6EC" },
  { name: "Sky",                      style: "#A8D8EA" },
  { name: "Lilac",                    style: "#C3AED6" },
  { name: "Mint",                     style: "#B8E6C5" },
  { name: "Sun",                      style: "#FFB347" },
  { name: "Peach → cream radial",     style: "radial-gradient(circle at 50% 35%, #FFE8C5 0%, #FFD6A5 100%)" },
  { name: "Sky → peach (yard)",       style: "linear-gradient(180deg, #b9e0ff 0%, #ffd9bf 60%, #d8ecc7 100%)" },
  { name: "Ink → plum gradient",      style: "linear-gradient(160deg, #2A1A2E, #4a2845)" },
  { name: "Cream → peach diagonal",   style: "linear-gradient(160deg, #FFF6EC, #FFD6A5)" },
];

export default function LogoLab() {
  return (
    <div className="logo-lab">
      {/* ---------- SELECTED WINNERS ---------- */}
      <section className="winners">
        <div className="winners-label">Selected</div>
        <h1 className="winners-title">The boop mark</h1>
        <p className="winners-sub">
          Standard chunky 4-toe paw, coral. Wordmark in Fraunces 800 ink.
          App icon on a peach → cream radial that ties to the /demo yard.
        </p>
        <div className="winners-row">
          <div className="winner-card">
            <span className="winner-cap">Nav lockup</span>
            <div className="winner-lockup">
              <span className="winner-word">boop</span>
              <StandardPawChunky size={26} />
            </div>
          </div>
          <div className="winner-card">
            <span className="winner-cap">App icon</span>
            <div className="winner-icon" style={{ background: "radial-gradient(circle at 50% 35%, #FFE8C5 0%, #FFD6A5 100%)" }}>
              <span className="winner-icon-word">boop</span>
              <StandardPawChunky size={28} />
            </div>
          </div>
          <div className="winner-card">
            <span className="winner-cap">Favicon — 32 / 20 / 14</span>
            <div className="winner-favicons">
              <StandardPawChunky size={32} />
              <StandardPawChunky size={20} />
              <StandardPawChunky size={14} />
            </div>
          </div>
        </div>
      </section>

      <header className="lab-header">
        <h1>Exploration — paw patterns</h1>
        <p>
          Three proportions of the classic 4-toe dog paw print: regular,
          chunky, and slim. Same anatomy — just different weight.
        </p>
      </header>

      <div className="lab-grid">
        {[...PAWS, ...SNOOTS].slice(0).map(({ name, Cmp }) => (
          <section key={name} className="variant">
            <h2>{name}</h2>
            <div className="lab-row">
              <div className="cell lockup">
                <span className="lockup-label">Lockup</span>
                <div className="lockup-mark">
                  <span className="word">boop</span>
                  <Cmp size={20} />
                </div>
              </div>

              <div className="cell app-icon">
                <span className="lockup-label">App icon</span>
                <div className="app-icon-tile">
                  <Cmp size={120} />
                </div>
              </div>

              <div className="cell favicons">
                <span className="lockup-label">Favicon legibility</span>
                <div className="favicon-row">
                  <Cmp size={32} />
                  <Cmp size={20} />
                  <Cmp size={14} />
                </div>
              </div>

              <div className="cell big">
                <span className="lockup-label">Big</span>
                <Cmp size={180} />
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* App icon background lab */}
      <header className="lab-header" style={{ marginTop: 56 }}>
        <h1>App icon backgrounds — standard chunky paw</h1>
        <p>
          The chunky 4-toe dog paw (peach / coral, unchanged) on twelve
          different app-icon backgrounds at 120×120.
        </p>
      </header>

      <div className="bg-grid">
        {APP_BGS.map(({ name, style }) => (
          <div key={name} className="bg-cell">
            <div className="bg-tile bg-tile-row" style={{ background: style }}>
              <span className="bg-tile-word">boop</span>
              <StandardPawChunky size={20} />
            </div>
            <span className="bg-name">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
