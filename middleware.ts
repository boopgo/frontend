import { NextRequest, NextResponse } from "next/server";

/**
 * Multi-domain routing.
 *
 *   play.boopai.app/*       → app/play/* (the PWA)
 *     - "/" rewrites to "/play"
 *     - "/foo" rewrites to "/play/foo"
 *     - non-app paths (e.g. "/investors") are blocked with 404
 *
 *   boopai.app / www.boopai.app
 *     - "/" → app/page.tsx (consumer landing)
 *     - "/investors" → investor brief
 *     - "/play*" is redirected to https://play.boopai.app/* so the play
 *       experience always lives on its own host (clean PWA scope, no
 *       accidental SEO indexing of the app surface)
 *
 *   localhost / preview deploys (vercel.app)
 *     - no rewrites; everything served from its natural path so dev /
 *       preview testing works without DNS
 */
export const config = {
  matcher: [
    // run on every request except Next internals + static assets
    "/((?!_next/|api/|favicon.ico|icon|apple-icon|manifest|sw.js|.*\\..*).*)",
  ],
};

const PLAY_HOST = "play.boopai.app";
const MARKETING_HOSTS = new Set(["boopai.app", "www.boopai.app"]);

export function middleware(req: NextRequest) {
  const host = req.headers.get("host")?.toLowerCase() ?? "";
  const url = req.nextUrl;
  const path = url.pathname;

  // PLAY subdomain — rewrite everything under /play
  if (host === PLAY_HOST) {
    // routes that are allowed to render outside /play (none for now)
    // anything else → /play[path]
    if (!path.startsWith("/play")) {
      const next = url.clone();
      next.pathname = path === "/" ? "/play" : `/play${path}`;
      return NextResponse.rewrite(next);
    }
    return NextResponse.next();
  }

  // MARKETING — apex / www — block /play, force people to the subdomain
  if (MARKETING_HOSTS.has(host)) {
    if (path === "/play" || path.startsWith("/play/")) {
      const target = new URL(req.url);
      target.host = PLAY_HOST;
      target.pathname = path.replace(/^\/play/, "") || "/";
      return NextResponse.redirect(target.toString(), 308);
    }
    return NextResponse.next();
  }

  // localhost, vercel preview URLs, anything else → no rewrite
  return NextResponse.next();
}
