import { InvestorNav } from "./Nav";
import { ScrollTracker } from "./ScrollTracker";
import { PhonePreview } from "../components/PhonePreview";

// Single shared boop silhouette: same SVG repeated across every §03 tile.
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

export function OverviewView() {
  return (
    <div className="page-investors">
      <InvestorNav />
      <ScrollTracker />

      {/* 01 · HOOK (hero styling preserved) */}
      <section className="hook" id="hook">
        <div className="wrap hook-split">
          <div className="hook-copy">
            <span className="slide-num">01 · One-liner</span>
            <h1>
              The AI-native
              <br />
              app, built
              <br />
              <em>for pets.</em>
            </h1>
            <p className="lede">
              Scan your dog once and they become your boop: a digital companion you walk, dress, and shop for. Try a
              jacket on your boop; one tap puts the real jacket in the mail.
            </p>
            <div className="meta">
              <span className="pill dark">iOS · launching summer 2026</span>
              <span className="pill">Raising · seed</span>
              <span className="pill">Tokyo · Austin</span>
            </div>
          </div>
          <div className="hook-preview">
            <PhonePreview size="small" />
          </div>
        </div>
      </section>

      {/* 02 · THE GAP */}
      <section id="gap">
        <div className="wrap">
          <span className="slide-num">02 · The gap</span>
          <div className="gap-split">
            <div className="gap-copy">
              <h2>
                There&apos;s no daily consumer surface that <em>holds it all.</em>
              </h2>
              <p className="dek">
                A pet parent&apos;s day moves across Chewy or Amazon for food, Rover or the vet for care, Google or Yelp
                for the dog park. The pet economy is $158B and growing, but the consumer surface that sits across all
                of it doesn&apos;t exist.
              </p>
              <p className="dek" style={{ marginTop: 24 }}>
                Boop AI is that surface. Every product, brand, and local merchant a pet parent already engages with
                converges on their boop, organized by name, breed, neighborhood, and daily routine.
              </p>
            </div>
            <div className="gap-orbit" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="gap-sat gap-sat-1" src="https://www.google.com/s2/favicons?domain=chewy.com&sz=128" alt="" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="gap-sat gap-sat-2" src="https://www.google.com/s2/favicons?domain=amazon.com&sz=128" alt="" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="gap-sat gap-sat-3" src="https://www.google.com/s2/favicons?domain=rover.com&sz=128" alt="" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="gap-sat gap-sat-4" src="https://www.google.com/s2/favicons?domain=google.com&sz=128" alt="" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="gap-sat gap-sat-5" src="https://www.google.com/s2/favicons?domain=yelp.com&sz=128" alt="" />
            <div className="gap-core">
              <svg className="gap-core-paw" width="22" height="22" viewBox="0 0 64 64" aria-hidden="true">
                <path
                  d="M32 26 Q22 26 17 33 Q11 42 16 51 Q22 58 32 58 Q42 58 48 51 Q53 42 47 33 Q42 26 32 26 Z"
                  fill="#FF9A8B"
                />
                <ellipse cx="13" cy="26" rx="5.5" ry="6.5" fill="#FF9A8B" />
                <ellipse cx="24" cy="13" rx="6" ry="7" fill="#FF9A8B" />
                <ellipse cx="40" cy="13" rx="6" ry="7" fill="#FF9A8B" />
                <ellipse cx="51" cy="26" rx="5.5" ry="6.5" fill="#FF9A8B" />
              </svg>
              <span className="gap-core-word">Boop AI</span>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* 03 · PRODUCT */}
      <section id="product">
        <div className="wrap">
          <span className="slide-num">03 · Product</span>
          <h2>
            Same dog. <em>Every expression.</em>
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
                <div className="g-fit-dog">
                  <Boop />
                  <span className="g-hat" aria-hidden="true">🎩</span>
                </div>
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

      {/* 04 · WHY NOW × MARKET */}
      <section id="market">
        <div className="wrap">
          <span className="slide-num">04 · Why now × market</span>
          <h2>
            <em>$158B.</em> Pre-AI. Now.
          </h2>
          <p className="dek">
            AI scans finally work on consumer photos. The US pet category is still pre-AI infrastructure: 68M
            dog-owning households, $428/yr discretionary spend per household, zero AI-native players.
          </p>
          <div className="stat-row">
            <div className="stat">
              <b>$158B</b>
              <span>US pet category</span>
            </div>
            <div className="stat">
              <b>68M</b>
              <span>dog-owning households</span>
            </div>
            <div className="stat">
              <b>$428</b>
              <span>discretionary / dog household / yr</span>
            </div>
          </div>
        </div>
      </section>

      {/* 05 · BUSINESS MODEL */}
      <section id="business-model">
        <div className="wrap">
          <span className="slide-num">05 · Business model</span>
          <h2>
            We are the <em>storefront,</em> not a referral pipe.
          </h2>
          <p className="dek">
            v1 ships Boop-IP physical goods: POD custom merch with your dog as design input, plus a private-label
            apparel core. $22 ARPU year-3, $50 at saturation. Full math in the memo.
          </p>
          <div className="layer-stack">
            <div className="layer is-live">
              <span className="layer-when">v1</span>
              <span className="layer-name">In-app purchases</span>
              <span className="layer-comp">Pokémon GO</span>
            </div>
            <div className="layer is-live">
              <span className="layer-when">v1.5</span>
              <span className="layer-name">Private label + custom merch</span>
              <span className="layer-comp">Crown &amp; Paw · BarkBox</span>
            </div>
            <div className="layer">
              <span className="layer-when">Y2+</span>
              <span className="layer-name">Marketplace commerce (MoR)</span>
              <span className="layer-comp">Faire · Wayfair</span>
            </div>
            <div className="layer">
              <span className="layer-when">Y2+</span>
              <span className="layer-name">Local merchant network</span>
              <span className="layer-comp">Yelp</span>
            </div>
            <div className="layer">
              <span className="layer-when">Y3+</span>
              <span className="layer-name">Brand partnerships</span>
              <span className="layer-comp">Pinterest</span>
            </div>
          </div>
        </div>
      </section>

      {/* 06 · COMPETITION */}
      <section id="competition">
        <div className="wrap">
          <span className="slide-num">06 · Competition</span>
          <h2>
            No one composes <em>the surfaces.</em>
          </h2>
          <p className="dek">
            Boop AI is the only player that&apos;s AI-native, scans the user&apos;s real dog, and ships the dress
            surface. Those three are the cold-start anchor and the v1 revenue engine, and no one else has them.
          </p>
          <div className="comp-matrix">
            <div className="comp-row comp-head">
              <span></span>
              <span className="is-key">AI-native</span>
              <span className="is-key">Real-pet scan</span>
              <span className="is-key">Dress</span>
              <span>Walk</span>
              <span>Friends</span>
              <span>Commerce</span>
              <span>Local</span>
            </div>
            <div className="comp-row is-us">
              <span className="comp-name">Boop AI</span>
              <span>●</span><span>●</span><span>●</span><span>●</span><span>●</span><span>●</span><span>●</span>
            </div>
            <div className="comp-row">
              <span className="comp-name">Chewy</span>
              <span>○</span><span>○</span><span>○</span><span>○</span><span>○</span><span>●</span><span>○</span>
            </div>
            <div className="comp-row">
              <span className="comp-name">Rover</span>
              <span>○</span><span>○</span><span>○</span><span>◐</span><span>○</span><span>●</span><span>●</span>
            </div>
            <div className="comp-row">
              <span className="comp-name">Lev</span>
              <span>○</span><span>○</span><span>○</span><span>●</span><span>●</span><span>●</span><span>●</span>
            </div>
            <div className="comp-row">
              <span className="comp-name">DogHood</span>
              <span>○</span><span>○</span><span>○</span><span>●</span><span>●</span><span>◐</span><span>●</span>
            </div>
          </div>
        </div>
      </section>

      {/* 06 · TEAM */}
      <section id="team">
        <div className="wrap">
          <span className="slide-num">07 · Team</span>
          <h2>
            Who&rsquo;s <em>building Boop.</em>
          </h2>
          <div className="team-grid">
            <div className="person">
              <h4>Theo Fandrich</h4>
              <p>CFA III · Cambridge Associates · Partyhats</p>
            </div>
            <div className="person">
              <h4>Ryan Li</h4>
              <p>Beijing University · Citadel · ByteDance · OKX</p>
            </div>
            <div className="person">
              <h4>Riolis</h4>
              <p>AAA mobile game developer · 10+ years (Sega)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 07 · ASK */}
      <section className="ask" id="ask">
        <div className="wrap">
          <span className="slide-num" style={{ color: "var(--peach)" }}>
            08 · The ask
          </span>
          <h2>
            Raising <em>$1M</em> seed.
          </h2>
          <p className="dek">
            SAFE · $10M post-money cap · ~24 months runway · ~$355K reserve held for validated double-down.
          </p>
          <div className="ask-grid">
            <div className="ask-box">
              <div className="label">Round</div>
              <b>$1M</b>
              <span>Seed · SAFE · $10M cap</span>
            </div>
            <div className="ask-box">
              <div className="label">Runway</div>
              <b>~24 mo</b>
              <span>Through iOS launch + 12 mo of v1 data</span>
            </div>
            <div className="ask-box">
              <div className="label">Milestones</div>
              <b>iOS launch</b>
              <span>v1 monetization (Layers 1 &amp; 2) live, baseline ARPU captured</span>
            </div>
          </div>
          <div className="btn-row" style={{ marginTop: 48 }}>
            <a className="btn ghost" href="mailto:hello@boopai.app">
              hello@boopai.app
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <a href="/">← boop (consumer)</a>
          <a href="mailto:hello@boopai.app">hello@boopai.app</a>
          <span style={{ display: "block", marginTop: 12, opacity: 0.6 }}>© 2026 Boop Go, Inc.</span>
        </div>
      </footer>
    </div>
  );
}
