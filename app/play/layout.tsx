import type { Metadata, Viewport } from "next";
import RegisterSW from "./RegisterSW";
import InstallPrompt from "./InstallPrompt";

export const metadata: Metadata = {
  title: "boop — play",
  robots: { index: false, follow: false },
  appleWebApp: {
    capable: true,
    title: "boop",
    statusBarStyle: "default",
    startupImage: [
      // iPhone 16 Pro Max / 15 Plus / 14 Pro Max
      {
        url: "/splash-1290x2796.png",
        media:
          "(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
      },
      // iPhone 16 Pro / 15 / 14 Pro
      {
        url: "/splash-1179x2556.png",
        media:
          "(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
      },
      // iPhone 14 / 13 / 12
      {
        url: "/splash-1170x2532.png",
        media:
          "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
      },
      // iPhone 13 mini / 12 mini
      {
        url: "/splash-1080x2340.png",
        media:
          "(device-width: 360px) and (device-height: 780px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
      },
      // iPhone XR / 11
      {
        url: "/splash-828x1792.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
      },
      // iPhone SE / 8
      {
        url: "/splash-750x1334.png",
        media:
          "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#FF9A8B",
  initialScale: 1,
  width: "device-width",
  viewportFit: "cover",
};

export default function PlayLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <RegisterSW />
      <InstallPrompt />
    </>
  );
}
