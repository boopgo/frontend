/**
 * PWA manifest, served as a route handler instead of the
 * `app/manifest.ts` convention so we can control which pages link to
 * it. Only the play layout sets `metadata.manifest`, so marketing
 * pages don't offer a PWA install (avoiding a "marketing PWA"
 * footgun); the play subdomain gets the real install.
 */
export function GET() {
  const manifest = {
    name: "Boop AI",
    short_name: "Boop AI",
    description: "Snap a photo, get your boop — your pet's digital twin.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    // Both must match the splash screen's top color (#FFF0DB) so PWA
    // cold-launch on Android shows the splash color, not coral, before
    // our JS / CSS gets a chance to paint. theme_color also seeds the
    // system chrome tint until page.tsx's per-step useEffect kicks in.
    background_color: "#FFF0DB",
    theme_color: "#FFF0DB",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/icon-1024.png", sizes: "1024x1024", type: "image/png" },
    ],
  };

  return new Response(JSON.stringify(manifest), {
    headers: {
      "content-type": "application/manifest+json",
      "cache-control": "public, max-age=3600",
    },
  });
}
