import type { Metadata } from "next";
import { InvestorNav } from "./Nav";

export const metadata: Metadata = {
  title: "boop · investor memo",
  description: "boop is the AI-native app for pets. Seed round open.",
  robots: "noindex, nofollow, noarchive",
};

export default function Investors() {
  return (
    <div className="page-investors">
      <InvestorNav />

      {/* 1. HOOK */}
      <section className="hook">
        <div className="wrap">
          <span className="slide-num">01 · One-liner</span>
          <h1>
            The AI-native
            <br />
            app, built
            <br />
            <em>for pets.</em>
          </h1>
          <p className="lede">
            Scan your pet with AI → get a living digital companion. Turn daily walks into a game. Shop outfits
            they&apos;ll actually wear. All inside one daily-use app where the feed is pet-first and drama-free.
          </p>
          <div className="meta">
            <span className="pill dark">iOS · launching summer 2026</span>
            <span className="pill">Raising — seed</span>
            <span className="pill">San Francisco</span>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM */}
      <section>
        <div className="wrap">
          <span className="slide-num">02 · Problem</span>
          <h2>
            Pet parents spend like parents — but every app was built for <em>humans</em>.
          </h2>
          <div className="two">
            <div>
              <h3>Pets are family. The internet hasn&apos;t caught up.</h3>
              <p>
                90M US households own a pet. 66% of Gen Z owners describe them as &quot;their child.&quot; Yet every app
                a pet parent touches — Instagram, Chewy, Fi, Rover — treats the pet as an accessory to a human user.
              </p>
            </div>
            <div>
              <h3>Social media is toxic. Pet people are not.</h3>
              <p>
                Instagram and TikTok drive pet owners to post — and then subject them to the same rage-bait feeds. Pet
                content thrives, but inside platforms whose incentive is engagement-at-any-cost. There&apos;s no home
                for the softest corner of the internet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION */}
      <section>
        <div className="wrap">
          <span className="slide-num">03 · Solution</span>
          <h2>
            One app. Three loops. <em>All pet-first.</em>
          </h2>
          <p className="dek">
            Scan your pet → meet their AI companion. Walk with them → earn rewards and meet nearby pets. Post to the
            feed → only other pets. Commerce, social, and care — collapsed into one daily ritual.
          </p>
          <div className="placeholder">
            <b>🎥 Product demo loop goes here</b>
            30-second screen recording of the iOS app: scan → avatar generates → pet walks on map → feed scrolls. Embed
            as autoplay mp4 or GIF.
          </div>
        </div>
      </section>

      {/* 4. WHY NOW */}
      <section>
        <div className="wrap">
          <span className="slide-num">04 · Why now</span>
          <h2>
            The unlock is <em>AI</em>. The moment is <em>now.</em>
          </h2>
          <div className="why-list">
            <div className="why">
              <div className="bignum">01</div>
              <div>
                <h4>AI image + multimodal models finally work.</h4>
                <p>
                  Pet-accurate avatar generation was sci-fi 24 months ago. Today, $0.02 and 3 seconds per scan. First
                  consumer app to productize it wins the category.
                </p>
              </div>
            </div>
            <div className="why">
              <div className="bignum">02</div>
              <div>
                <h4>The pet economy has outgrown the tools built for it.</h4>
                <p>
                  $150B global, 6% YoY growth — outpacing consumer tech overall. Yet every market leader (Chewy, Petco,
                  Rover) is infrastructure-era, not AI-era.
                </p>
              </div>
            </div>
            <div className="why">
              <div className="bignum">03</div>
              <div>
                <h4>Gen Z is the first pets-before-kids generation.</h4>
                <p>
                  Delayed family formation + higher pet ownership + native mobile behavior. A generational demographic
                  shift ready for a generational product.
                </p>
              </div>
            </div>
            <div className="why">
              <div className="bignum">04</div>
              <div>
                <h4>Social platforms are losing trust, not gaining it.</h4>
                <p>
                  Users are actively looking for smaller, saner, single-purpose feeds. Boop is the first credible
                  pure-joy network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRACTION */}
      <section>
        <div className="wrap">
          <span className="slide-num">05 · Traction</span>
          <h2>
            Early signal. <em>Real demand.</em>
          </h2>
          <div className="stat-grid">
            <div className="stat highlight">
              <b>4,200+</b>
              <span>Pet parents on waitlist (and growing)</span>
            </div>
            <div className="stat">
              <b>[TBD]</b>
              <span>Demo video views</span>
            </div>
            <div className="stat">
              <b>[TBD]</b>
              <span>LOIs from brand partners</span>
            </div>
            <div className="stat">
              <b>[TBD]</b>
              <span>Organic press mentions</span>
            </div>
          </div>
          <div className="placeholder">
            <b>📈 Replace [TBD] numbers with real traction as it accrues</b>
            Add a growth chart here (waitlist-over-time) once you have 30+ days of data. Screenshot it from the Supabase
            dashboard or export the CSV and chart it.
          </div>
        </div>
      </section>

      {/* 6. BUSINESS MODEL */}
      <section>
        <div className="wrap">
          <span className="slide-num">06 · Business model</span>
          <h2>
            Five revenue layers. <em>One daily app.</em>
          </h2>
          <p className="dek">
            $26 blended ARPU year-3, $58 at saturation. Each layer anchored to a public comp; none invented. Full stack
            with GM%, ARPU math, and per-layer comps in the memo.
          </p>
          <div className="revenue-grid">
            <div className="rev">
              <div className="label">v1 · Layer 1</div>
              <h3>In-app digital purchases</h3>
              <p>
                Cosmetic outfits, walk-loop power-ups, and AI-generation credits on the digital companion. Comp:
                Pokémon GO $545M IAP in 2024 across ~115M MAU. ~70% GM after Apple&apos;s cut.
              </p>
            </div>
            <div className="rev">
              <div className="label">v1 · Layer 2</div>
              <h3>Affiliate commerce</h3>
              <p>
                Every digital outfit maps to a real purchasable SKU. 15–25% affiliate take rate across indie brand
                partners. Comp: Etsy, LTK. ~95% GM.
              </p>
            </div>
            <div className="rev">
              <div className="label">Y2+ · Layer 3</div>
              <h3>Private label &amp; custom merch</h3>
              <p>
                Boop-branded apparel and custom-printed merch featuring the user&apos;s own dog. Comp: BarkBox, Crown
                &amp; Paw. ~40% GM.
              </p>
            </div>
            <div className="rev">
              <div className="label">Y2+ · Layer 4</div>
              <h3>Local merchant network</h3>
              <p>
                Paid map placement and lead-gen for vets, groomers, trainers, dog parks. Comp: Yelp&apos;s ~530K paying
                business locations. ~85% GM.
              </p>
            </div>
            <div className="rev">
              <div className="label">Y3+ · Layer 5</div>
              <h3>National brand partnerships</h3>
              <p>
                Sponsored outfit drops co-branded with national brands; anonymized cohort licensing of breed × geo ×
                walk data. Comp: Pinterest. ~85% GM.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MARKET */}
      <section>
        <div className="wrap">
          <span className="slide-num">07 · Market</span>
          <h2>
            A category big enough to <em>matter.</em>
          </h2>
          <div className="stat-grid">
            <div className="stat">
              <b>$158B</b>
              <span>US pet industry, 2025 actuals (APPA), growing 3.7% YoY</span>
            </div>
            <div className="stat">
              <b>$428</b>
              <span>Discretionary spend per dog household per year — the slice Boop monetizes</span>
            </div>
            <div className="stat">
              <b>68M</b>
              <span>US dog-owning households — the seed universe</span>
            </div>
            <div className="stat">
              <b>$80M</b>
              <span>Year-3 ARR floor at 15% addressable penetration; $130M stretch, $1.18B saturation</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. COMPETITION */}
      <section>
        <div className="wrap">
          <span className="slide-num">08 · Competition &amp; moat</span>
          <h2>
            No one owns the AI-native pet layer. <em>Yet.</em>
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table className="comp-table">
              <thead>
                <tr>
                  <th></th>
                  <th>AI avatar</th>
                  <th>Pet-first feed</th>
                  <th>Gamified walks</th>
                  <th>Commerce integrated</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="us">boop</td>
                  <td className="yes">✓</td>
                  <td className="yes">✓</td>
                  <td className="yes">✓</td>
                  <td className="yes">✓</td>
                </tr>
                <tr>
                  <td>Instagram</td>
                  <td className="no">✗</td>
                  <td className="no">✗</td>
                  <td className="no">✗</td>
                  <td className="mid">partial</td>
                </tr>
                <tr>
                  <td>Chewy</td>
                  <td className="no">✗</td>
                  <td className="no">✗</td>
                  <td className="no">✗</td>
                  <td className="yes">✓</td>
                </tr>
                <tr>
                  <td>Fi (collar)</td>
                  <td className="no">✗</td>
                  <td className="no">✗</td>
                  <td className="mid">partial</td>
                  <td className="no">✗</td>
                </tr>
                <tr>
                  <td>BarkBox</td>
                  <td className="no">✗</td>
                  <td className="no">✗</td>
                  <td className="no">✗</td>
                  <td className="yes">✓</td>
                </tr>
                <tr>
                  <td>Rover</td>
                  <td className="no">✗</td>
                  <td className="no">✗</td>
                  <td className="no">✗</td>
                  <td className="no">✗</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="dek" style={{ marginTop: 30 }}>
            <b>Moat:</b> proprietary pet-scan dataset (the more pets scanned, the better the avatars), exclusive
            brand-partner outfit library, and network effects on local walks (the app gets better with density).
          </p>
        </div>
      </section>

      {/* 9. TEAM */}
      <section>
        <div className="wrap">
          <span className="slide-num">09 · Team</span>
          <h2>
            A small pack. <em>Built for this.</em>
          </h2>
          <div className="team-grid">
            <div className="person">
              <div className="head">🦊</div>
              <h4>[Founder Name]</h4>
              <div className="role">Founder &amp; CEO</div>
              <p>[Short bio — prior companies, relevant wins, domain credibility.]</p>
              <a href="#">LinkedIn →</a>
            </div>
            <div className="person">
              <div className="head">🐻</div>
              <h4>[Co-founder Name]</h4>
              <div className="role">Co-founder, AI</div>
              <p>[Short bio — ML background, published work, prior shipping credits.]</p>
              <a href="#">LinkedIn →</a>
            </div>
            <div className="person">
              <div className="head">🐰</div>
              <h4>[Head of Product]</h4>
              <div className="role">Head of Product</div>
              <p>[Short bio — consumer social experience, shipped apps, relevant scale.]</p>
              <a href="#">LinkedIn →</a>
            </div>
          </div>
          <div className="placeholder">
            <b>Replace emoji + bracketed text with real headshots + real bios + real LinkedIn links.</b>
            Placeholder headshots kill investor credibility faster than anything else on this page.
          </div>
        </div>
      </section>

      {/* 10. ASK */}
      <section className="ask" id="ask">
        <div className="wrap">
          <span className="slide-num" style={{ color: "var(--peach)" }}>
            10 · The ask
          </span>
          <h2>
            Raising <em>$1M</em> seed.
          </h2>
          <p className="dek">
            SAFE · $10M post-money cap · ~24 months runway · reserve held for validated double-down.
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
              <span>v1 monetization live, baseline ARPU captured</span>
            </div>
            <div className="ask-box">
              <div className="label">Team hires</div>
              <b>2</b>
              <span>Lead engineer + deferred GTM</span>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CONTACT */}
      <section className="contact" id="contact">
        <div className="wrap">
          <span className="slide-num" style={{ color: "#4a1a3e" }}>
            11 · Let&apos;s talk
          </span>
          <h2>
            Meet the team behind your pet&apos;s <em>second life.</em>
          </h2>
          <p className="dek" style={{ color: "#4a1a3e", margin: "0 auto" }}>
            15 minutes. We&apos;ll walk you through the product, the roadmap, and why this is a venture-scale company.
          </p>
          <div className="btn-row">
            <a className="btn" href="[CALENDLY_URL]">
              📅 Book 15 min
            </a>
            <a className="btn ghost" href="mailto:investors@boopai.app">
              investors@boopai.app
            </a>
          </div>
          <a className="deck-link" href="[DECK_URL]">
            📄 Download the full deck (PDF) →
          </a>
          <div className="placeholder" style={{ maxWidth: 560, margin: "40px auto 0" }}>
            <b>Replace [CALENDLY_URL] and [DECK_URL]</b>
            Paste your Calendly link and deck URL (Google Drive / Pitch / DocSend) directly into the href attributes in
            this section.
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <a href="/">← boop (consumer)</a>
          <a href="mailto:investors@boopai.app">investors@boopai.app</a>
          <span style={{ display: "block", marginTop: 12, opacity: 0.6 }}>© 2026 boop, inc.</span>
        </div>
      </footer>
    </div>
  );
}
