"use client";

import { useEffect, useState } from "react";

type Item = { text: string; slug: string };

export function BriefToc({ items }: { items: Item[] }) {
  const [active, setActive] = useState<string>(items[0]?.slug ?? "");

  useEffect(() => {
    const headings = items
      .map((i) => document.getElementById(i.slug))
      .filter((el): el is HTMLElement => Boolean(el));
    if (headings.length === 0) return;

    const onScroll = () => {
      const offset = 120;
      let current = headings[0].id;
      for (const h of headings) {
        if (h.getBoundingClientRect().top - offset <= 0) current = h.id;
        else break;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  return (
    <aside className="brief-toc">
      <div className="toc-label">Contents</div>
      <ol>
        {items.map((item) => (
          <li key={item.slug}>
            <a
              href={`#${item.slug}`}
              className={active === item.slug ? "is-active" : ""}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}
