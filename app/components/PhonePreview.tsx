"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { PALETTES } from "../play/PetCreature";
import type { Pet3D } from "../play/Yard3D";

const Yard3D = dynamic(() => import("../play/Yard3D"), { ssr: false });

type Size = "default" | "small";

const initialPet: Pet3D = {
  id: "preview",
  name: "Mochi",
  species: "dog",
  palette: PALETTES[0],
  x: 0.5,
  y: 0.5,
  vx: 0,
  vy: 0,
  facing: -1,
  bob: 0,
};

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

export function PhonePreview({ size = "default" }: { size?: Size }) {
  const [pet, setPet] = useState<Pet3D>(initialPet);
  const targetRef = useRef<{ x: number; y: number } | null>(null);
  const yardRef = useRef<HTMLDivElement>(null);
  const downPosRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      setPet((p) => {
        const t = targetRef.current;
        if (!t) {
          if (p.vx === 0 && p.vy === 0) return p;
          return { ...p, vx: 0, vy: 0 };
        }
        const dx = t.x - p.x;
        const dy = t.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 0.015) {
          targetRef.current = null;
          return { ...p, vx: 0, vy: 0 };
        }
        const speed = 0.32;
        const step = Math.min(dist, speed * dt);
        const ux = dx / dist;
        const uy = dy / dist;
        return {
          ...p,
          x: p.x + ux * step,
          y: p.y + uy * step,
          vx: ux * speed,
          vy: uy * speed,
          facing: ux >= 0 ? 1 : -1,
        };
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    downPosRef.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const start = downPosRef.current;
    downPosRef.current = null;
    if (!start) return;
    if (Math.hypot(e.clientX - start.x, e.clientY - start.y) > 6) return; // drag, not tap
    const el = yardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const fx = (e.clientX - rect.left) / rect.width;
    const fy = (e.clientY - rect.top) / rect.height;
    targetRef.current = { x: clamp(fx, 0.12, 0.88), y: clamp(fy, 0.12, 0.88) };
  };

  return (
    <div className={`phone ${size === "small" ? "phone-sm" : ""}`}>
      <div className="notch"></div>
      <div className="screen reveal-screen">
        <div
          className="reveal-yard-mini"
          ref={yardRef}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          <Yard3D pets={[pet]} />
        </div>
        <div className="reveal-sheet-mini">
          <h3>Say hello.</h3>
          <p>What&apos;s their name?</p>
          <div className="name-input-mock">Mochi</div>
          <a className="reveal-cta" href="https://play.boopai.app/">
            Next →
          </a>
        </div>
      </div>
    </div>
  );
}
