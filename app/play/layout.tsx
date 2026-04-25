import type { Metadata } from "next";
import RegisterSW from "./RegisterSW";

export const metadata: Metadata = {
  title: "boop — play",
  robots: { index: false, follow: false },
};

export default function PlayLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <RegisterSW />
    </>
  );
}
