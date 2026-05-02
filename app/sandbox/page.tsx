import { Suspense } from "react";
import { InvestorNav } from "../investors/Nav";
import { Variant03Editorial } from "./Variant03Editorial";
import { Variant03Gallery } from "./Variant03Gallery";
import { Variant03Anatomy } from "./Variant03Anatomy";

export const metadata = {
  title: "boop · sandbox",
  robots: "noindex, nofollow, noarchive",
};

export default function Sandbox() {
  return (
    <div className="page-investors">
      <Suspense fallback={null}>
        <InvestorNav />
      </Suspense>

      <div className="sandbox-divider"><small>Variant B</small>Editorial spread</div>
      <Variant03Editorial />

      <div className="sandbox-divider"><small>Variant C</small>Gallery</div>
      <Variant03Gallery />

      <div className="sandbox-divider"><small>Variant D</small>Anatomy plate</div>
      <Variant03Anatomy />
    </div>
  );
}
