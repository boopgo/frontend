"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const DISMISS_KEY = "boop:install:dismissed-until";
const COOLDOWN_DAYS = 7;
const SHOW_DELAY_MS = 8000; // wait until they're engaged

export default function InstallPrompt() {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [showIosHint, setShowIosHint] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Already installed → bail (matchMedia covers iOS standalone too)
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      // @ts-expect-error iOS-specific
      window.navigator.standalone === true;
    if (standalone) return;

    // Recently dismissed → bail
    const until = Number(localStorage.getItem(DISMISS_KEY) || 0);
    if (until && Date.now() < until) return;

    const ua = navigator.userAgent;
    const isIos = /iPhone|iPad|iPod/.test(ua) && !/CriOS|FxiOS/.test(ua);

    let timer: ReturnType<typeof setTimeout> | null = null;

    const onBeforeInstall = (e: Event) => {
      e.preventDefault();
      setInstallEvent(e as BeforeInstallPromptEvent);
      timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    };
    window.addEventListener("beforeinstallprompt", onBeforeInstall);

    if (isIos) {
      // No native install API on iOS — show our own hint after a delay
      timer = setTimeout(() => {
        setShowIosHint(true);
        setVisible(true);
      }, SHOW_DELAY_MS);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      if (timer) clearTimeout(timer);
    };
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    const until = Date.now() + COOLDOWN_DAYS * 24 * 60 * 60 * 1000;
    try {
      localStorage.setItem(DISMISS_KEY, String(until));
    } catch {}
  };

  const onInstall = async () => {
    if (!installEvent) return;
    try {
      await installEvent.prompt();
      const { outcome } = await installEvent.userChoice;
      if (outcome === "accepted") dismiss();
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="install-prompt" role="dialog" aria-label="Install boop">
      <button className="install-close" onClick={dismiss} aria-label="dismiss">
        ✕
      </button>
      <div className="install-icon">
        <svg width="36" height="36" viewBox="0 0 64 64" aria-hidden="true">
          <path d="M32 26 Q22 26 17 33 Q11 42 16 51 Q22 58 32 58 Q42 58 48 51 Q53 42 47 33 Q42 26 32 26 Z" fill="#FF9A8B" />
          <ellipse cx="13" cy="26" rx="5.5" ry="6.5" fill="#FF9A8B" />
          <ellipse cx="24" cy="13" rx="6"   ry="7"   fill="#FF9A8B" />
          <ellipse cx="40" cy="13" rx="6"   ry="7"   fill="#FF9A8B" />
          <ellipse cx="51" cy="26" rx="5.5" ry="6.5" fill="#FF9A8B" />
        </svg>
      </div>
      <div className="install-body">
        <div className="install-title">Add boop to your home screen</div>
        {showIosHint ? (
          <div className="install-hint">
            Tap{" "}
            <span className="install-share" aria-hidden="true">
              <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                <path d="M7 1v9.5M7 1L4 4M7 1l3 3M2 8v5.5A1.5 1.5 0 0 0 3.5 15h7A1.5 1.5 0 0 0 12 13.5V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>{" "}
            then <b>Add to Home Screen</b>
          </div>
        ) : (
          <button className="install-cta" onClick={onInstall}>
            Install
          </button>
        )}
      </div>
    </div>
  );
}
