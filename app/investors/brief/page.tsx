import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { marked } from "marked";

export const metadata: Metadata = {
  title: "boop · investor memo",
  description: "Investor memo — Boop, Inc.",
  robots: "noindex",
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/§/g, "s")
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function InvestorBrief() {
  const md = readFileSync(join(process.cwd(), "docs", "investor-brief.md"), "utf8");

  const tokens = marked.lexer(md);
  const toc: { text: string; slug: string }[] = [];
  for (const token of tokens) {
    if (token.type === "heading" && token.depth === 2) {
      const raw = token.text;
      const display = raw.replace(/\s*—\s*/, " ");
      toc.push({ text: display, slug: slugify(raw) });
    }
  }

  let html = marked.parse(md, { async: false }) as string;
  let i = 0;
  html = html.replace(/<h2>/g, () => {
    const slug = toc[i]?.slug ?? "";
    i += 1;
    return `<h2 id="${slug}">`;
  });

  return (
    <div className="page-brief">
      <header className="brief-masthead">
        <div className="masthead-row">
          <div className="masthead-mark">Boop, Inc.</div>
          <div className="masthead-meta">
            <span>Consumer Internet</span>
            <span>·</span>
            <span>Seed</span>
            <span>·</span>
            <span>April 2026</span>
          </div>
        </div>
        <div className="masthead-title">Investor Memo</div>
      </header>
      <div className="brief-layout">
        <article className="brief" dangerouslySetInnerHTML={{ __html: html }} />
        <aside className="brief-toc">
          <div className="toc-label">Contents</div>
          <ol>
            {toc.map((item) => (
              <li key={item.slug}>
                <a href={`#${item.slug}`}>{item.text}</a>
              </li>
            ))}
          </ol>
        </aside>
      </div>
      <footer className="brief-foot">
        <span>Boop, Inc.</span>
        <span>investors@boopai.app</span>
        <span>
          <a href="/investors">Visual brief →</a>
        </span>
      </footer>
    </div>
  );
}
