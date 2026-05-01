"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function OverviewBriefTabs() {
  const params = useSearchParams();
  const onMemo = params?.get("tab") === "memo";
  return (
    <div className="ib-tabs-wrap">
      <nav className="ib-tabs" aria-label="Investor materials">
        <Link
          href="/investors"
          className={`ib-tab ${!onMemo ? "is-active" : ""}`}
          aria-current={!onMemo ? "page" : undefined}
        >
          Overview
        </Link>
        <Link
          href="/investors?tab=memo"
          className={`ib-tab ${onMemo ? "is-active" : ""}`}
          aria-current={onMemo ? "page" : undefined}
        >
          Memo
        </Link>
      </nav>
    </div>
  );
}
