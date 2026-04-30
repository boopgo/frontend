"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function OverviewBriefTabs() {
  const pathname = usePathname() ?? "";
  const onBrief = pathname.startsWith("/investors/brief");
  return (
    <div className="ib-tabs-wrap">
      <nav className="ib-tabs" aria-label="Investor materials">
        <Link
          href="/investors"
          className={`ib-tab ${!onBrief ? "is-active" : ""}`}
          aria-current={!onBrief ? "page" : undefined}
        >
          Overview
        </Link>
        <Link
          href="/investors/brief"
          className={`ib-tab ${onBrief ? "is-active" : ""}`}
          aria-current={onBrief ? "page" : undefined}
        >
          Memo
        </Link>
      </nav>
    </div>
  );
}
