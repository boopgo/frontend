"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import PetCreature, { PALETTES, Palette, Species } from "./PetCreature";
import "./play.css";

const Yard3D = dynamic(() => import("./Yard3D"), { ssr: false });

type Step =
  | "splash"
  | "welcome"
  | "capture"
  | "generating"
  | "reveal"
  | "pronouns"
  | "birthday"
  | "breed"
  | "personality"
  | "home";

type Pronoun = "he" | "she";
type AgeRange = "puppy" | "young" | "adult" | "senior";

type Pet = {
  id: string;
  name: string;
  species: Species;
  palette: Palette;
  pronoun?: Pronoun;
  birthday?: string;
  ageRange?: AgeRange;
  breed?: string;
  personality?: string[];
  x: number;
  y: number;
  vx: number;
  vy: number;
  facing: 1 | -1;
  bob: number;
};

const BREEDS: Record<Species, string[]> = {
  dog: ["Labrador", "Golden Retriever", "Poodle", "German Shepherd", "French Bulldog", "Beagle", "Dachshund", "Corgi", "Husky", "Shih Tzu"],
  cat: ["Domestic Shorthair", "Maine Coon", "Persian", "Siamese", "Ragdoll", "British Shorthair", "Bengal", "Sphynx"],
  bunny: ["Holland Lop", "Netherland Dwarf", "Mini Rex", "Lionhead", "Flemish Giant", "Rex"],
};

const PERSONALITY_TAGS = [
  { id: "cuddler", label: "Cuddler", emoji: "🥰" },
  { id: "zoomies", label: "Zoomies", emoji: "💨" },
  { id: "shy",     label: "Shy",     emoji: "🫣" },
  { id: "explorer",label: "Explorer",emoji: "🧭" },
  { id: "chatterbox", label: "Chatterbox", emoji: "🗣" },
  { id: "chill",   label: "Chill",   emoji: "😌" },
];

const AGE_RANGES: { id: AgeRange; label: string; hint: string }[] = [
  { id: "puppy",  label: "Baby",   hint: "< 1 yr" },
  { id: "young",  label: "Young",  hint: "1–3 yrs" },
  { id: "adult",  label: "Adult",  hint: "3–8 yrs" },
  { id: "senior", label: "Senior", hint: "8+ yrs" },
];

const SPECIES_EMOJI: Record<Species, string> = {
  dog: "🐕",
  cat: "🐈",
  bunny: "🐇",
};

const SAMPLE_NAMES = ["Mochi", "Biscuit", "Pepper", "Olive", "Waffle", "Clover"];
const pickName = (i: number) => SAMPLE_NAMES[i % SAMPLE_NAMES.length];

// Each screen owns the color that paints behind the iOS notch / browser chrome.
// Drives both <meta name="theme-color"> (Android Chrome top bar) and
// html/body background (iOS PWA safe-area + overscroll).
const SCREEN_THEMES: Record<Step, string> = {
  splash: "#FFF0DB",
  welcome: "#b9e0ff",
  capture: "#1a0f1e",
  generating: "#FFF0DB",
  reveal: "#b9e0ff",
  pronouns: "#b9e0ff",
  birthday: "#b9e0ff",
  breed: "#b9e0ff",
  personality: "#b9e0ff",
  home: "#b9e0ff",
};

export default function DemoPage() {
  const [step, setStep] = useState<Step>("splash");
  const [species, setSpecies] = useState<Species>("dog");
  const [draftPalette, setDraftPalette] = useState<Palette>(PALETTES[0]);
  const [name, setName] = useState("");
  const [pronoun, setPronoun] = useState<Pronoun | undefined>();
  const [birthday, setBirthday] = useState<string>("");
  const [ageRange, setAgeRange] = useState<AgeRange | undefined>();
  const [breed, setBreed] = useState<string>("");
  const [personality, setPersonality] = useState<string[]>([]);
  const [pets, setPets] = useState<Pet[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  // Sync top-of-screen color (theme-color + safe-area bg) to current step.
  useEffect(() => {
    const color = SCREEN_THEMES[step];
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", color);
    document.documentElement.style.background = color;
    document.body.style.background = color;
  }, [step]);

  // auto-advance splash
  useEffect(() => {
    if (step === "splash") {
      const t = setTimeout(() => setStep("welcome"), 1800);
      return () => clearTimeout(t);
    }
    if (step === "generating") {
      const t = setTimeout(() => setStep("reveal"), 2400);
      return () => clearTimeout(t);
    }
  }, [step]);

  // toast auto-dismiss
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  const startCapture = () => {
    setSpecies("dog");
    setDraftPalette(PALETTES[Math.floor(Math.random() * PALETTES.length)]);
    setName("");
    setPronoun(undefined);
    setBirthday("");
    setAgeRange(undefined);
    setBreed("");
    setPersonality([]);
    setStep("capture");
  };

  const handleShutter = () => setStep("generating");

  const handleFinish = () => {
    const finalName = name.trim() || pickName(pets.length);
    const newPet: Pet = {
      id: crypto.randomUUID(),
      name: finalName,
      species,
      palette: draftPalette,
      pronoun,
      birthday: birthday || undefined,
      ageRange,
      breed: breed || undefined,
      personality: personality.length ? personality : undefined,
      x: 0.2 + Math.random() * 0.6,
      y: 0.45 + Math.random() * 0.4,
      vx: (Math.random() - 0.5) * 0.02,
      vy: (Math.random() - 0.5) * 0.01,
      facing: Math.random() > 0.5 ? 1 : -1,
      bob: Math.random() * Math.PI * 2,
    };
    setPets((p) => [...p, newPet]);
    setStep("home");
    setToast(`${finalName} joined the yard!`);
  };

  return (
    <div className="demo-stage">
      <div className="phone">
        {step === "splash" && <SplashScreen />}
        {step === "welcome" && <WelcomeScreen onStart={startCapture} />}
        {step === "capture" && (
          <CaptureScreen
            species={species}
            setSpecies={setSpecies}
            onShutter={handleShutter}
            onClose={() => (pets.length ? setStep("home") : setStep("welcome"))}
          />
        )}
        {step === "generating" && <GeneratingScreen />}
        {step === "reveal" && (
          <RevealScreen
            species={species}
            palette={draftPalette}
            name={name}
            setName={setName}
            onNext={() => setStep("pronouns")}
          />
        )}
        {step === "pronouns" && (
          <WizardShell
            species={species}
            palette={draftPalette}
            petName={name || "your boop"}
            stepIndex={0}
            title={<>Is {name || "your boop"} a <em>he</em> or a <em>she</em>?</>}
            subtitle="We'll use this when we talk about them in the app."
            onBack={() => setStep("reveal")}
            onSkip={() => setStep("birthday")}
            canNext={!!pronoun}
            onNext={() => setStep("birthday")}
          >
            <div className="chip-row">
              {(["he", "she"] as Pronoun[]).map((p) => (
                <button
                  key={p}
                  className={`chip chip-xl ${pronoun === p ? "on" : ""}`}
                  onClick={() => setPronoun(p)}
                >
                  <span className="chip-emoji">{p === "he" ? "♂" : "♀"}</span>
                  {p === "he" ? "He" : "She"}
                </button>
              ))}
            </div>
          </WizardShell>
        )}
        {step === "birthday" && (
          <WizardShell
            species={species}
            palette={draftPalette}
            petName={name || "your boop"}
            stepIndex={1}
            title={<>When's their <em>birthday</em>?</>}
            subtitle="We'll celebrate every year. Don't know? Give us a rough idea."
            onBack={() => setStep("pronouns")}
            onSkip={() => setStep("breed")}
            canNext={!!(birthday || ageRange)}
            onNext={() => setStep("breed")}
          >
            <input
              type="date"
              className="date-input"
              value={birthday}
              max={new Date().toISOString().split("T")[0]}
              onChange={(e) => { setBirthday(e.target.value); setAgeRange(undefined); }}
            />
            <div className="or-divider"><span>or pick an age</span></div>
            <div className="chip-grid">
              {AGE_RANGES.map((a) => (
                <button
                  key={a.id}
                  className={`chip ${ageRange === a.id ? "on" : ""}`}
                  onClick={() => { setAgeRange(a.id); setBirthday(""); }}
                >
                  <div className="chip-label">{a.label}</div>
                  <div className="chip-hint">{a.hint}</div>
                </button>
              ))}
            </div>
          </WizardShell>
        )}
        {step === "breed" && (
          <WizardShell
            species={species}
            palette={draftPalette}
            petName={name || "your boop"}
            stepIndex={2}
            title={<>What <em>breed</em>?</>}
            subtitle="Helps us get their look and care just right."
            onBack={() => setStep("birthday")}
            onSkip={() => setStep("personality")}
            canNext={!!breed}
            onNext={() => setStep("personality")}
          >
            <button
              className={`chip chip-wide ${breed === "Mix / Not sure" ? "on" : ""}`}
              onClick={() => setBreed("Mix / Not sure")}
            >
              <span className="chip-emoji">✨</span>
              Mix / Not sure
              <span className="chip-sub">Totally fine — most boops are</span>
            </button>
            <div className="or-divider"><span>or pick one</span></div>
            <div className="chip-wrap">
              {BREEDS[species].map((b) => (
                <button
                  key={b}
                  className={`chip chip-sm ${breed === b ? "on" : ""}`}
                  onClick={() => setBreed(b)}
                >
                  {b}
                </button>
              ))}
            </div>
          </WizardShell>
        )}
        {step === "personality" && (
          <WizardShell
            species={species}
            palette={draftPalette}
            petName={name || "your boop"}
            stepIndex={3}
            title={<>What are they <em>like</em>?</>}
            subtitle="Pick as many as fit. This shapes their vibe at home."
            onBack={() => setStep("breed")}
            onSkip={handleFinish}
            canNext={true}
            nextLabel={`Bring ${name.trim() || "them"} home →`}
            onNext={handleFinish}
          >
            <div className="chip-wrap">
              {PERSONALITY_TAGS.map((t) => {
                const on = personality.includes(t.id);
                return (
                  <button
                    key={t.id}
                    className={`chip chip-md ${on ? "on" : ""}`}
                    onClick={() =>
                      setPersonality((curr) =>
                        on ? curr.filter((x) => x !== t.id) : [...curr, t.id]
                      )
                    }
                  >
                    <span className="chip-emoji">{t.emoji}</span>
                    {t.label}
                  </button>
                );
              })}
            </div>
          </WizardShell>
        )}
        {step === "home" && (
          <HomeScreen pets={pets} onAdd={startCapture} toast={toast} />
        )}
      </div>
    </div>
  );
}

/* ============================================================
   SCREENS
   ============================================================ */

function SplashScreen() {
  return (
    <div className="screen splash">
      <div className="status-bar" />
      <div className="logo-bloom">
        boop
        <svg className="paw" width="52" height="52" viewBox="0 0 64 64" aria-hidden="true">
          <path d="M32 26 Q22 26 17 33 Q11 42 16 51 Q22 58 32 58 Q42 58 48 51 Q53 42 47 33 Q42 26 32 26 Z" fill="#FF9A8B" />
          <ellipse cx="13" cy="26" rx="5.5" ry="6.5" fill="#FF9A8B" />
          <ellipse cx="24" cy="13" rx="6"   ry="7"   fill="#FF9A8B" />
          <ellipse cx="40" cy="13" rx="6"   ry="7"   fill="#FF9A8B" />
          <ellipse cx="51" cy="26" rx="5.5" ry="6.5" fill="#FF9A8B" />
        </svg>
      </div>
      <div className="tag">Boop your Boop</div>
    </div>
  );
}

function WelcomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="screen welcome">
      <div className="welcome-yard">
        <Yard3D pets={[]} />
        <div className="status-bar" />
      </div>
      <div className="welcome-sheet">
        <h1>
          Let's <em>boop</em> your pet.
        </h1>
        <p className="lede">
          Snap a photo and we'll sculpt a boop — your pet's digital twin — ready to live in your pocket.
        </p>
        <div className="actions">
          <button className="btn-primary" onClick={onStart}>
            Get started →
          </button>
          <button className="btn-ghost">I already have an account</button>
        </div>
      </div>
    </div>
  );
}

function CaptureScreen({
  species,
  setSpecies,
  onShutter,
  onClose,
}: {
  species: Species;
  setSpecies: (s: Species) => void;
  onShutter: () => void;
  onClose: () => void;
}) {
  return (
    <div className="screen capture">
      <div className="status-bar" />
      <button className="close-x" onClick={onClose} aria-label="close">✕</button>
      <div className="progress">
        <div className="p on" /><div className="p" /><div className="p" />
      </div>
      <div className="viewfinder">
        <div className="hint">Center your pet in frame</div>
        <div className="pet-silhouette">{SPECIES_EMOJI[species]}</div>
        <div className="species">
          {(["dog", "cat", "bunny"] as Species[]).map((s) => (
            <button
              key={s}
              className={s === species ? "on" : ""}
              onClick={() => setSpecies(s)}
            >
              {s[0].toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="controls">
        <button className="flip" aria-label="flip camera">↺</button>
        <button className="shutter" onClick={onShutter} aria-label="take photo" />
        <button className="flip" aria-label="upload" style={{ fontSize: 16 }}>📁</button>
      </div>
    </div>
  );
}

function GeneratingScreen() {
  return (
    <div className="screen generating">
      <div className="status-bar" />
      <div className="orb" />
      <h1>Booping your boop</h1>
      <div className="sub">
        Mapping the magic<span className="dots" />
      </div>
    </div>
  );
}

function RevealScreen({
  species,
  palette,
  name,
  setName,
  onNext,
}: {
  species: Species;
  palette: Palette;
  name: string;
  setName: (s: string) => void;
  onNext: () => void;
}) {
  const previewPet = {
    id: "preview",
    name: name || "boop",
    species,
    palette,
    x: 0.5,
    y: 0.5,
    vx: 0,
    vy: 0,
    facing: -1 as const,
    bob: 0,
  };
  return (
    <div className="screen reveal">
      <div className="reveal-yard">
        <Yard3D pets={[previewPet]} />
        <div className="status-bar" />
        <div className="progress">
          <div className="p on" /><div className="p on" /><div className="p on" />
        </div>
      </div>
      <div className="reveal-sheet">
        <h1>Say hello.</h1>
        <p className="lede" style={{ textAlign: "center", marginTop: 8 }}>
          What's their name?
        </p>
      <input
        className="name-input"
        placeholder="what's their name?"
        value={name}
        maxLength={20}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn-primary" onClick={onNext} disabled={!name.trim()}>
        Next →
      </button>
      <div className="bottom-pad" />
      </div>
    </div>
  );
}

/* ============================================================
   WIZARD SHELL — shared layout for onboarding metadata steps
   ============================================================ */

const WIZARD_STEP_COUNT = 4;

function WizardShell({
  species,
  palette,
  petName,
  stepIndex,
  title,
  subtitle,
  onBack,
  onSkip,
  onNext,
  canNext,
  nextLabel,
  children,
}: {
  species: Species;
  palette: Palette;
  petName: string;
  stepIndex: number;
  title: React.ReactNode;
  subtitle: string;
  onBack: () => void;
  onSkip: () => void;
  onNext: () => void;
  canNext: boolean;
  nextLabel?: string;
  children: React.ReactNode;
}) {
  const previewPet = {
    id: "wizard-preview",
    name: petName,
    species,
    palette,
    x: 0.5,
    y: 0.5,
    vx: 0,
    vy: 0,
    facing: -1 as const,
    bob: 0,
  };
  return (
    <div className="screen wizard">
      <div className="wiz-yard">
        <Yard3D pets={[previewPet]} />
        <div className="status-bar" />
        <button className="close-x" onClick={onBack} aria-label="back" style={{ background: "rgba(255,255,255,.8)", color: "var(--ink)" }}>←</button>
        <div className="progress">
          {Array.from({ length: WIZARD_STEP_COUNT }).map((_, i) => (
            <div key={i} className={`p ${i <= stepIndex ? "on" : ""}`} />
          ))}
        </div>
        <div className="wiz-name-tag-floating">{petName}</div>
      </div>
      <div className="wiz-sheet">
        <h1>{title}</h1>
        <p className="lede" style={{ marginTop: 8 }}>{subtitle}</p>
        <div className="wiz-body">{children}</div>
        <div className="wiz-actions">
          <button className="btn-ghost" onClick={onSkip}>Skip for now</button>
          <button className="btn-primary" onClick={onNext} disabled={!canNext}>
            {nextLabel || "Next →"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   HOME — the yard
   ============================================================ */

function HomeScreen({
  pets,
  onAdd,
  toast,
}: {
  pets: Pet[];
  onAdd: () => void;
  toast: string | null;
}) {
  const yardRef = useRef<HTMLDivElement>(null);
  const [livePets, setLivePets] = useState<Pet[]>(pets);

  // keep sim in sync when a new pet is added upstream
  useEffect(() => {
    setLivePets((prev) => {
      const byId = new Map(prev.map((p) => [p.id, p]));
      return pets.map((p) => byId.get(p.id) ?? p);
    });
  }, [pets]);

  // wandering animation
  useEffect(() => {
    let frame: number;
    let last = performance.now();
    const step = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      setLivePets((curr) =>
        curr.map((p) => {
          let { x, y, vx, vy, bob, facing } = p;
          x += vx * dt * 8;
          y += vy * dt * 8;
          bob += dt * 4;
          if (x < 0.1) { x = 0.1; vx = Math.abs(vx); }
          if (x > 0.9) { x = 0.9; vx = -Math.abs(vx); }
          if (y < 0.15) { y = 0.15; vy = Math.abs(vy); }
          if (y > 0.9)  { y = 0.9;  vy = -Math.abs(vy); }
          if (Math.random() < 0.008) {
            vx = (Math.random() - 0.5) * 0.025;
            vy = (Math.random() - 0.5) * 0.012;
          }
          facing = vx >= 0 ? 1 : -1;
          return { ...p, x, y, vx, vy, bob, facing };
        })
      );
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="screen home">
      <div className="yard" ref={yardRef}>
        <Yard3D pets={livePets} />

        <HomeMenu onAdd={onAdd} />

        {toast && <div className="toast">{toast}</div>}
      </div>
    </div>
  );
}

function HomeMenu({ onAdd }: { onAdd: () => void }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const t = setTimeout(() => window.addEventListener("click", close, { once: true }), 0);
    return () => { clearTimeout(t); window.removeEventListener("click", close); };
  }, [open]);

  const items = [
    { label: "Add pet", icon: "＋", onClick: onAdd },
    { label: "Play",    icon: "🎾", onClick: () => {} },
    { label: "Care",    icon: "💛", onClick: () => {} },
    { label: "You",     icon: "👤", onClick: () => {} },
  ];

  return (
    <div className={`home-menu ${open ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
      {items.map((it, i) => (
        <button
          key={it.label}
          className="home-menu-item"
          style={{
            ["--i" as never]: i + 1,
            transitionDelay: open ? `${i * 30}ms` : `${(items.length - i) * 20}ms`,
          }}
          onClick={() => { setOpen(false); it.onClick(); }}
          aria-label={it.label}
        >
          <span className="icon">{it.icon}</span>
          <span className="label">{it.label}</span>
        </button>
      ))}
      <button
        className="home-menu-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "close menu" : "open menu"}
      >
        {open ? "✕" : "⋮"}
      </button>
    </div>
  );
}
