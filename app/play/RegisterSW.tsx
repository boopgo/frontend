"use client";

import { useEffect } from "react";

/**
 * Register the play service worker. Runs only on play.boopai.app and
 * only in production builds — local dev / preview deploys skip it so
 * stale caches don't bite during iteration.
 */
export default function RegisterSW() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;
    if (window.location.hostname !== "play.boopai.app") return;
    if (process.env.NODE_ENV !== "production") return;

    navigator.serviceWorker.register("/sw.js", { scope: "/" }).catch(() => {
      // best-effort; ignore registration failures
    });
  }, []);

  return null;
}
