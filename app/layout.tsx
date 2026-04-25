import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boop: Boop your Boop",
  description:
    "Snap a photo, get your boop — your pet's digital twin, ready to live in your pocket.",
  appleWebApp: {
    title: "Boop AI",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,800;1,9..144,700&family=Nunito:wght@500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
