import type { Metadata } from "next";
import { OverviewView } from "./OverviewView";
import { MemoView } from "./MemoView";

export const metadata: Metadata = {
  title: "boop · investor memo",
  description: "boop is the AI-native app for pets. Seed round open.",
  robots: "noindex, nofollow, noarchive",
};

export default async function Investors({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab } = await searchParams;
  if (tab === "memo") return <MemoView />;
  return <OverviewView />;
}
