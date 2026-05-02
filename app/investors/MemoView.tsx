import { readFileSync } from "node:fs";
import { join } from "node:path";
import { marked } from "marked";

marked.use({
  tokenizer: {
    del() {
      return undefined;
    },
  },
});
import { InvestorNav } from "./Nav";
import { BriefToc } from "./Toc";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/§/g, "s")
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function MemoView() {
  const md = readFileSync(join(process.cwd(), "docs", "investor-brief.md"), "utf8");

  const tokens = marked.lexer(md);
  const toc: { text: string; slug: string }[] = [];
  for (const token of tokens) {
    if (token.type === "heading" && token.depth === 2) {
      const r = token.text;
      const display = r.replace(/\s*—\s*/, " ");
      toc.push({ text: display, slug: slugify(r) });
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
      <InvestorNav />
      <header className="brief-masthead">
        <div className="masthead-row">
          <div className="masthead-mark">Boop Go, Inc.</div>
          <div className="masthead-meta">
            <span>Consumer Internet</span>
            <span>·</span>
            <span>Seed</span>
            <span>·</span>
            <span>May 2026</span>
          </div>
        </div>
        <div className="masthead-title">Investor Memo</div>
      </header>
      <div className="brief-layout">
        <article className="brief" dangerouslySetInnerHTML={{ __html: html }} />
        <BriefToc items={toc} />
      </div>
    </div>
  );
}
