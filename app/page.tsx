import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "boop · the AI-native app for pets",
  description: "Scan your dog. Meet your boop.",
};

export default function Home() {
  return (
    <main className="landing">
      <div className="landing-inner">
        <div className="landing-mark">
          <span className="landing-logo">boop</span>
          <svg
            className="landing-paw"
            width="36"
            height="36"
            viewBox="0 0 64 64"
            aria-hidden="true"
          >
            <path
              d="M32 26 Q22 26 17 33 Q11 42 16 51 Q22 58 32 58 Q42 58 48 51 Q53 42 47 33 Q42 26 32 26 Z"
              fill="#FF9A8B"
            />
            <ellipse cx="13" cy="26" rx="5.5" ry="6.5" fill="#FF9A8B" />
            <ellipse cx="24" cy="13" rx="6" ry="7" fill="#FF9A8B" />
            <ellipse cx="40" cy="13" rx="6" ry="7" fill="#FF9A8B" />
            <ellipse cx="51" cy="26" rx="5.5" ry="6.5" fill="#FF9A8B" />
          </svg>
        </div>
        <h1 className="landing-tagline">
          The AI-native app, built <em>for pets.</em>
        </h1>
        <div className="landing-ctas">
          <a className="landing-btn primary" href="https://play.boopai.app/">
            Demo
          </a>
          <Link className="landing-btn ghost" href="/investors">
            Investors
          </Link>
        </div>
      </div>
      <footer className="landing-foot">
        <span>© 2026 Boop Go, Inc.</span>
        <a href="mailto:hello@boopai.app">hello@boopai.app</a>
      </footer>
    </main>
  );
}
