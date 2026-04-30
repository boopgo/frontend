import Link from "next/link";
import { OverviewBriefTabs } from "./Tabs";

export function InvestorNav() {
  return (
    <nav className="boop-nav">
      <div className="boop-nav-inner">
        <Link className="boop-nav-logo" href="/">
          boop
          <svg className="boop-nav-paw" width="18" height="18" viewBox="0 0 64 64" aria-hidden="true">
            <path
              d="M32 26 Q22 26 17 33 Q11 42 16 51 Q22 58 32 58 Q42 58 48 51 Q53 42 47 33 Q42 26 32 26 Z"
              fill="#FF9A8B"
            />
            <ellipse cx="13" cy="26" rx="5.5" ry="6.5" fill="#FF9A8B" />
            <ellipse cx="24" cy="13" rx="6" ry="7" fill="#FF9A8B" />
            <ellipse cx="40" cy="13" rx="6" ry="7" fill="#FF9A8B" />
            <ellipse cx="51" cy="26" rx="5.5" ry="6.5" fill="#FF9A8B" />
          </svg>
        </Link>
        <span className="boop-nav-tag">Investors</span>
        <span className="boop-nav-spacer" />
        <OverviewBriefTabs />
      </div>
    </nav>
  );
}
