// §03 Product — Variant B (Editorial spread)
// Source: .claude/worktrees/agent-a76c250c806a728bb/app/investors/OverviewView.tsx
export function Variant03Editorial() {
  return (
    <section id="product-editorial">
      <div className="wrap">
        <span className="slide-num">03 · Product</span>
        <div className="prod-spread">
          <figure className="prod-portrait">
            <div className="prod-plate">
              <svg
                className="prod-boop"
                viewBox="0 0 220 260"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Boop portrait of Mochi the Shiba Inu"
              >
                <defs>
                  <radialGradient id="boopFill" cx="42%" cy="38%" r="78%">
                    <stop offset="0%" stopColor="#FFD2C4" />
                    <stop offset="55%" stopColor="#FF9A8B" />
                    <stop offset="100%" stopColor="#E07566" />
                  </radialGradient>
                  <filter id="boopShadow" x="-20%" y="-10%" width="140%" height="130%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
                    <feOffset dy="8" result="off" />
                    <feComponentTransfer in="off" result="o2">
                      <feFuncA type="linear" slope="0.22" />
                    </feComponentTransfer>
                    <feMerge>
                      <feMergeNode in="o2" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <g filter="url(#boopShadow)" fill="url(#boopFill)">
                  <path d="M70 232
                           C58 220 52 200 56 178
                           C58 162 64 150 74 142
                           C70 128 72 110 82 96
                           C72 86 66 72 70 58
                           C74 44 86 36 100 38
                           C108 30 122 28 134 34
                           C148 30 162 38 166 52
                           C170 64 168 78 160 88
                           C170 98 176 112 176 128
                           C176 140 172 152 164 162
                           C172 172 178 188 176 204
                           C174 220 166 232 154 238
                           L92 240
                           C84 240 76 238 70 232 Z" />
                  <path d="M78 56 C74 38 84 24 96 28 C100 36 96 50 90 60 Z" fill="#C95A4A" />
                  <path d="M158 56 C162 38 152 24 140 28 C136 36 140 50 146 60 Z" fill="#C95A4A" />
                  <path d="M104 142 C112 152 124 152 132 142 C130 162 122 174 118 184 C114 174 106 162 104 142 Z" fill="#FFE8DD" opacity="0.85" />
                  <path d="M168 178 C188 170 198 156 192 140 C186 130 174 132 172 146 C170 158 174 168 168 178 Z" />
                </g>
                <g fill="#2A1A2E">
                  <ellipse cx="104" cy="76" rx="3.2" ry="4" />
                  <ellipse cx="134" cy="76" rx="3.2" ry="4" />
                  <path d="M115 90 C115 86 123 86 123 90 C123 94 119 96 119 96 C119 96 115 94 115 90 Z" />
                </g>
              </svg>
              <span className="prod-corner prod-corner--tl" aria-hidden="true" />
              <span className="prod-corner prod-corner--tr" aria-hidden="true" />
              <span className="prod-corner prod-corner--bl" aria-hidden="true" />
              <span className="prod-corner prod-corner--br" aria-hidden="true" />
            </div>
            <figcaption className="prod-caption">
              <em>Mochi</em> · Shiba Inu · scanned 2026
            </figcaption>
          </figure>

          <div className="prod-editorial">
            <h2 className="prod-headline">
              One scan. <em>Every surface.</em>
            </h2>
            <p className="prod-lede">
              The boop is a single asset. Every surface in the app, on the body, and out in the
              neighborhood is an expression of the same dog.
            </p>
            <ol className="prod-list">
              <li>
                <span className="prod-num">i</span>
                <div className="prod-row">
                  <h3>Walk</h3>
                  <p><em>Real walks, in-game progression.</em></p>
                </div>
              </li>
              <li>
                <span className="prod-num">ii</span>
                <div className="prod-row">
                  <h3>Virtual Fitting</h3>
                  <p><em>Outfits live on your boop, real garment ships.</em></p>
                </div>
              </li>
              <li>
                <span className="prod-num">iii</span>
                <div className="prod-row">
                  <h3>Merch</h3>
                  <p><em>Your dog as the brand.</em></p>
                </div>
              </li>
              <li>
                <span className="prod-num">iv</span>
                <div className="prod-row">
                  <h3>Play</h3>
                  <p><em>Companion behavior, daily ritual.</em></p>
                </div>
              </li>
              <li>
                <span className="prod-num">v</span>
                <div className="prod-row">
                  <h3>Social</h3>
                  <p><em>Pets-only timeline.</em></p>
                </div>
              </li>
              <li>
                <span className="prod-num">vi</span>
                <div className="prod-row">
                  <h3>Friends</h3>
                  <p><em>Boops that know other boops.</em></p>
                </div>
              </li>
              <li>
                <span className="prod-num">vii</span>
                <div className="prod-row">
                  <h3>Local</h3>
                  <p><em>Vet, groomer, trainer, park.</em></p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
