import type { MetadataRoute } from "next";

/**
 * PWA manifest for play.boopai.app
 *
 * The middleware rewrites play.boopai.app/* → /play/*, so from the
 * subdomain's perspective everything lives at the root. We point
 * start_url at "/" and scope at "/" because that's what the browser
 * sees on play.boopai.app.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "boop",
    short_name: "boop",
    description: "Snap a photo, get your boop — your pet's digital twin.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#FFD6A5",
    theme_color: "#FF9A8B",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
