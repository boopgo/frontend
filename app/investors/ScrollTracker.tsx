"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hook", label: "One-liner" },
  { id: "gap", label: "The gap" },
  { id: "product", label: "Product" },
  { id: "market", label: "Why now × market" },
  { id: "business-model", label: "Business model" },
  { id: "competition", label: "Competition" },
  { id: "team", label: "Team" },
  { id: "ask", label: "The ask" },
];

export function ScrollTracker() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const container = document.querySelector<HTMLElement>(".page-investors");
    if (!container) return;

    const onScroll = () => {
      const offset = container.clientHeight * 0.4;
      let current = sections[0].id;
      for (const s of sections) {
        const el = container.querySelector<HTMLElement>(`#${s.id}`);
        if (!el) continue;
        const top = el.getBoundingClientRect().top - container.getBoundingClientRect().top;
        if (top - offset <= 0) current = s.id;
        else break;
      }
      setActive(current);
    };

    onScroll();
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const container = document.querySelector<HTMLElement>(".page-investors");
    const el = container?.querySelector<HTMLElement>(`#${id}`);
    if (container && el) {
      const top = el.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop;
      container.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav className="investor-tracker" aria-label="Section tracker">
      {sections.map((s, i) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          onClick={(e) => handleClick(e, s.id)}
          className={active === s.id ? "is-active" : ""}
        >
          <span className="num">{String(i + 1).padStart(2, "0")}</span>
          <span className="dot" />
          <span className="label">{s.label}</span>
        </a>
      ))}
    </nav>
  );
}
