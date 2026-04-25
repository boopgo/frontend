"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { PALETTES } from "./demo/PetCreature";

const Yard3D = dynamic(() => import("./demo/Yard3D"), { ssr: false });

type Audience = "pet-parent" | "press" | "brand";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [audience, setAudience] = useState<Audience>("pet-parent");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [msg, setMsg] = useState<{ text: string; kind: "ok" | "err" | "" }>({ text: "", kind: "" });
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width:900px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    const targets = document.querySelectorAll(".page-consumer > section:not(.hero)");
    targets.forEach((el) => el.classList.add("reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  async function submitWaitlist(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    setSubmitting(true);
    setMsg({ text: "", kind: "" });
    try {
      const r = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, audience }),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error || "Something went wrong.");
      setDone(true);
      setMsg({
        kind: "ok",
        text: data.already
          ? "You're already on the list 💛 check your inbox."
          : "You're in. Check your inbox — your pet's second life starts there. 🐾",
      });
    } catch (err) {
      setMsg({ kind: "err", text: err instanceof Error ? err.message : "Something went wrong." });
      setSubmitting(false);
    }
  }

  return (
    <div className="page-consumer">
      <nav>
        <a className="logo" href="#">
          boop
          <svg className="paw" width="16" height="16" viewBox="0 0 64 64" aria-hidden="true">
            <path d="M32 26 Q22 26 17 33 Q11 42 16 51 Q22 58 32 58 Q42 58 48 51 Q53 42 47 33 Q42 26 32 26 Z" fill="#FF9A8B" />
            <ellipse cx="13" cy="26" rx="5.5" ry="6.5" fill="#FF9A8B" />
            <ellipse cx="24" cy="13" rx="6"   ry="7"   fill="#FF9A8B" />
            <ellipse cx="40" cy="13" rx="6"   ry="7"   fill="#FF9A8B" />
            <ellipse cx="51" cy="26" rx="5.5" ry="6.5" fill="#FF9A8B" />
          </svg>
        </a>
        <a href="#scan">How it works</a>
        <a href="#pillars">Product</a>
        <a className="investor-link" href="/investors">
          Investors
        </a>
        <a
          className="ig"
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <a className="cta" href="#final">
          Get early access
        </a>
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        onClick={(e) => {
          if ((e.target as HTMLElement).tagName === "A") setMenuOpen(false);
        }}
      >
        <a href="#scan">How it works</a>
        <a href="#pillars">Product</a>
        <a href="/investors">Investors</a>
        <a className="cta" href="#final">
          Get early access
        </a>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="pulse"></span>Coming to iOS · Summer 2026
            </span>
            <h1 className="big">
              Your pet,
              <br />
              <em>booped.</em>
            </h1>
            <p className="lede">
              Boop your pet into a pocket twin. One that grows with them, plays with others, and turns every walk into
              an adventure worth sharing.
            </p>
            <div className="cta-row">
              <a className="btn" href="#final">
                <svg className="appleicon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Join the waitlist
              </a>
              <a className="btn ghost" href="#scan">
                See how it works
              </a>
            </div>
            <p className="soon">⌛ Waitlist open · 4,200+ pet parents already in</p>
          </div>
          <div className="hero-visual">
            <span className="floater f1">🐾</span>
            <span className="floater f2">✨</span>
            <span className="floater f3">🦴</span>
            <span className="floater f4">🎾</span>
            <div className="phone">
              <div className="notch"></div>
              <div className="screen reveal-screen">
                <div className="reveal-yard-mini">
                  <Yard3D
                    pets={[
                      {
                        id: "landing-preview",
                        name: "Mochi",
                        species: "dog",
                        palette: PALETTES[0],
                        x: 0.5,
                        y: 0.5,
                        vx: 0,
                        vy: 0,
                        facing: -1 as const,
                        bob: 0,
                      },
                    ]}
                  />
                </div>
                <div className="reveal-sheet-mini">
                  <h3>Say hello.</h3>
                  <p>What&apos;s their name?</p>
                  <div className="name-input-mock">Mochi</div>
                  <a className="reveal-cta" href="/demo">Next →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCAN */}
      <section className="scan" id="scan">
        <div className="wrap">
          <span className="section-label">Step one · The scan</span>
          <h2 className="title">
            One photo. One <em>boop.</em>
          </h2>
          <p className="dek">
            Our AI reads your pet&apos;s breed, markings, and tiny quirks — that head tilt, that one floppy ear — and
            turns them into a personalized companion that actually feels like them.
          </p>
          <div className="scan-grid">
            <div className="scan-card">
              <div className="photo real">🐕</div>
              <h4>Before</h4>
              <p>Just a photo of Mochi at the park.</p>
            </div>
            <div className="arrow">→</div>
            <div className="scan-card">
              <div className="photo gen">
                <span className="sparkle s1">✨</span>
                <span className="sparkle s2">✦</span>
                <span className="sparkle s3">✨</span>
                🐶
              </div>
              <h4>After</h4>
              <p>A living digital Mochi — your pet&apos;s second life begins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="pillars" id="pillars">
        <div className="wrap">
          <span className="section-label">What boop does</span>
          <h2 className="title">
            Three things. <em>Done lovingly.</em>
          </h2>
          <div className="pillar-grid">
            <div className="pillar p1">
              <div className="icon">🐾</div>
              <h3>A companion that grows.</h3>
              <p>
                Your digital pet learns their real-world counterpart&apos;s moods, milestones, and habits — leveling up
                alongside them over time.
              </p>
            </div>
            <div className="pillar p2">
              <div className="icon">🗺️</div>
              <h3>Walks that reward.</h3>
              <p>
                Every step unlocks items, treats, and surprise encounters. Daily care becomes a game you and your pet
                actually want to play.
              </p>
            </div>
            <div className="pillar p3">
              <div className="icon">💌</div>
              <h3>A feed, drama-free.</h3>
              <p>No politics. No takes. Just pets being pets and the humans who adore them. The internet&apos;s softest corner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUTFITS */}
      <section className="outfits">
        <div className="wrap">
          <span className="section-label">Digital → physical</span>
          <h2 className="title">
            Every outfit is a <em>real product</em>.
          </h2>
          <p className="dek">
            Dress your digital pet in the collar, sweater, or harness they&apos;ll wear IRL. One tap to buy. A new
            commerce layer, built for the pet economy from day one.
          </p>
          <div className="outfit-grid">
            <div className="outfit-visual">
              <span className="tag-line t1">
                Rainbow Party Hat<small>$18 · Bark &amp; Bow</small>
              </span>
              <span className="tag-line t2">
                Sunset Collar<small>$32 · Wildone</small>
              </span>
              <div className="outfit-pet">
                <div className="hat"></div>
              </div>
            </div>
            <div className="outfit-copy">
              <h3>A storefront your pet wears.</h3>
              <p>
                We&apos;re launching with direct integrations across indie pet brands — outfits scanned, fitted, and
                purchasable inside the app. No more banner ads. Your pet&apos;s wardrobe <em>is</em> the marketplace.
              </p>
              <div className="brand-row">
                <span className="brand-chip">Wild One</span>
                <span className="brand-chip">Bark &amp; Bow</span>
                <span className="brand-chip">Fi</span>
                <span className="brand-chip">Chewy ⌀</span>
                <span className="brand-chip">+ 40 indie brands</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEED */}
      <section className="feed">
        <div className="wrap">
          <span className="section-label">Social, but sweet</span>
          <h2 className="title">
            A social feed that <em>doesn&apos;t hurt.</em>
          </h2>
          <p className="dek">
            No comments section doom-loop. No news. No outrage cycle. Just your pet meeting nearby pets on their walk,
            and a world of people who get it.
          </p>
          <div className="feed-grid">
            <div>
              <h3 style={{ fontSize: 28, marginBottom: 14 }}>
                Pet-first. <em>Human-second.</em>
              </h3>
              <p style={{ color: "var(--sub)", fontSize: 16, maxWidth: 460 }}>
                Every post is a pet. Every interaction is kind. We reward time well-spent — walks, meetups, pets cared
                for — not rage-bait engagement. The feed resets with the sunset.
              </p>
              <ul style={{ marginTop: 22, padding: 0, listStyle: "none", fontSize: 15 }}>
                <li style={{ margin: "10px 0" }}>
                  🌅 <b>Sunset resets</b> — your feed clears each night
                </li>
                <li style={{ margin: "10px 0" }}>
                  📍 <b>Pet meetups</b> — see who&apos;s on a walk nearby, right now
                </li>
                <li style={{ margin: "10px 0" }}>
                  💛 <b>Reactions only</b> — no comments. Only love.
                </li>
              </ul>
            </div>
            <div className="feed-mock">
              <div className="feed-header">
                <b>Today&apos;s walk</b>
                <span style={{ fontSize: 13, color: "var(--sub)" }}>🌤 72°</span>
              </div>
              <div className="feed-post">
                <div className="feed-user">
                  <div className="avatar a1"></div>
                  <div>
                    <b>mochi</b>
                    <div style={{ fontSize: 12, color: "var(--sub)" }}>met a new friend · 2 blocks away</div>
                  </div>
                  <small>now</small>
                </div>
                <div className="feed-img i1">🐕‍🦺</div>
                <div className="feed-caption">first zoomies of the day! 🎾</div>
                <div className="feed-meta">💛 142 &nbsp; 🐾 sniffed by 8</div>
              </div>
              <div className="feed-post">
                <div className="feed-user">
                  <div className="avatar a2"></div>
                  <div>
                    <b>pepper</b>
                    <div style={{ fontSize: 12, color: "var(--sub)" }}>Level 3 · tabby</div>
                  </div>
                  <small>12m</small>
                </div>
                <div className="feed-img i2">🐈</div>
                <div className="feed-caption">the sunbeam is mine now.</div>
                <div className="feed-meta">💛 88 &nbsp; 🐾 sniffed by 4</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="final" id="final">
        <div className="wrap">
          <h2>
            Meet your pet&apos;s <em>second life</em>.
          </h2>
          <p className="lede" style={{ margin: "0 auto", color: "#4a1a3e" }}>
            Join the waitlist. We&apos;ll send your TestFlight invite the moment it&apos;s ready.
          </p>
          <form
            ref={formRef}
            className={`waitlist-form${done ? " done" : ""}`}
            id="waitlist"
            onSubmit={submitWaitlist}
          >
            <div className="audience-pills" role="radiogroup" aria-label="I am a...">
              <button
                type="button"
                className={`pill${audience === "pet-parent" ? " active" : ""}`}
                onClick={() => setAudience("pet-parent")}
              >
                🐾 Pet parent
              </button>
              <button
                type="button"
                className={`pill${audience === "press" ? " active" : ""}`}
                onClick={() => setAudience("press")}
              >
                📰 Press
              </button>
              <button
                type="button"
                className={`pill${audience === "brand" ? " active" : ""}`}
                onClick={() => setAudience("brand")}
              >
                🛍 Brand partner
              </button>
            </div>
            <div className="email-row">
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                autoComplete="email"
              />
              <button type="submit" id="waitlist-submit" disabled={submitting}>
                {submitting ? "Sending..." : "Join the waitlist"}
              </button>
            </div>
            <div className={`form-msg${msg.kind ? " " + msg.kind : ""}`}>{msg.text}</div>
            <p className="tiny">No spam. We&apos;ll only email you when there&apos;s something real to share.</p>
          </form>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="logo">boop</div>
          <div>
            <a href="/investors">For investors →</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="mailto:hello@boopai.app">Contact</a>
          </div>
          <div style={{ width: "100%", textAlign: "center", opacity: 0.5, fontSize: 12 }}>
            © 2026 boop, inc. Made with 🐾 in San Francisco.
          </div>
        </div>
      </footer>
    </div>
  );
}
