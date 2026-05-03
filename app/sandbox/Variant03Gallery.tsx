// §03 Product · Variant C (Gallery)
// Source: .claude/worktrees/agent-a28a4b4a52590c47b/app/investors/OverviewView.tsx
// Headline normalized to "One scan. Every surface." per sandbox spec.

function Boop({ small = false }: { small?: boolean }) {
  return (
    <svg
      className={small ? "boop-svg is-small" : "boop-svg"}
      viewBox="0 0 100 80"
      aria-hidden="true"
    >
      <path
        d="M22 60
           C 18 58, 16 50, 18 44
           C 14 42, 13 36, 16 32
           C 12 28, 14 22, 20 22
           C 22 14, 30 12, 34 18
           C 40 14, 48 16, 50 22
           L 70 22
           C 78 22, 84 28, 84 38
           L 84 56
           C 84 62, 80 64, 76 64
           L 74 64
           L 72 70
           L 66 70
           L 66 64
           L 36 64
           L 36 70
           L 30 70
           L 28 64
           Z"
        fill="var(--peach)"
      />
      <path
        d="M24 18 C 20 12, 24 6, 30 8 C 32 12, 30 18, 26 22 Z"
        fill="var(--coral)"
        opacity=".85"
      />
      {/* eye with sparkle highlight */}
      <ellipse cx="22" cy="27" rx="2.2" ry="2.6" fill="#2a1a2e" />
      <circle cx="22.7" cy="26" r="0.7" fill="#fff" />
      {/* nose at snout tip */}
      <ellipse cx="14" cy="33" rx="1.8" ry="1.4" fill="#2a1a2e" />
    </svg>
  );
}

export function Variant03Gallery() {
  return (
    <section id="product-gallery">
      <div className="wrap">
        <span className="slide-num">03 · Product</span>
        <h2>
          One scan. <em>Every surface.</em>
        </h2>
        <p className="dek">
          One scan becomes a single boop asset, then it shows up everywhere: in your pocket, on your walks, on
          your shirt, at the vet. Same silhouette, every surface.
        </p>
        <div className="gallery">
          <article className="gtile gtile-walk">
            <div className="gstage">
              <Boop />
              <svg className="g-leash" viewBox="0 0 80 60" aria-hidden="true">
                <path d="M10 6 C 30 14, 50 30, 56 46" />
              </svg>
              <div className="g-route" aria-hidden="true">
                <span>1.5 mi</span>
              </div>
            </div>
            <div className="glabel">
              <h3>Walk</h3>
              <p>Real walks, in-game progression.</p>
            </div>
          </article>

          <article className="gtile gtile-fitting">
            <div className="gstage">
              <Boop />
              <span className="g-jacket" aria-hidden="true">🧥</span>
              <span className="g-tag" aria-hidden="true">$48</span>
            </div>
            <div className="glabel">
              <h3>Virtual Fitting</h3>
              <p>Outfits live on your boop, real garment ships.</p>
            </div>
          </article>

          <article className="gtile gtile-merch">
            <div className="gstage">
              <div className="g-shirt" aria-hidden="true">
                <Boop small />
              </div>
              <span className="g-tag" aria-hidden="true">$24</span>
            </div>
            <div className="glabel">
              <h3>Merch</h3>
              <p>Your dog as the brand.</p>
            </div>
          </article>

          <article className="gtile gtile-play">
            <div className="gstage">
              <Boop />
              <span className="g-ball" aria-hidden="true"></span>
              <span className="g-spark" aria-hidden="true">✦</span>
            </div>
            <div className="glabel">
              <h3>Play</h3>
              <p>Companion behavior, daily ritual.</p>
            </div>
          </article>

          <article className="gtile gtile-social">
            <div className="gstage">
              <div className="g-post">
                <Boop small />
                <span className="g-heart" aria-hidden="true">♥</span>
              </div>
            </div>
            <div className="glabel">
              <h3>Social</h3>
              <p>Pets-only timeline.</p>
            </div>
          </article>

          <article className="gtile gtile-friends">
            <div className="gstage">
              <span className="g-pair g-pair-back"><Boop small /></span>
              <span className="g-pair g-pair-front"><Boop small /></span>
            </div>
            <div className="glabel">
              <h3>Friends</h3>
              <p>Boops that know other boops.</p>
            </div>
          </article>

          <article className="gtile gtile-local">
            <div className="gstage">
              <Boop />
              <span className="g-pin" aria-hidden="true">
                <span className="g-pin-dot"></span>
              </span>
              <span className="g-store" aria-hidden="true">VET</span>
            </div>
            <div className="glabel">
              <h3>Local</h3>
              <p>Vet, groomer, trainer, park.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
