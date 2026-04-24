"use client";

import { useEffect, useRef, useState } from "react";
import PetCreature, { PALETTES, Palette, Species } from "./PetCreature";
import "./demo.css";

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
            onShufflePalette={() =>
              setDraftPalette(PALETTES[(PALETTES.indexOf(draftPalette) + 1) % PALETTES.length])
            }
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
        boop<span className="dot" />
      </div>
      <div className="tag">meet your pet, reimagined</div>
    </div>
  );
}

function WelcomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="screen welcome">
      <div className="status-bar" />
      <div className="hero-art">
        <div className="blob" />
      </div>
      <h1>
        Let's bring <em>your pet</em> home.
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
      <h1>Sculpting your boop</h1>
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
  onShufflePalette,
  onNext,
}: {
  species: Species;
  palette: Palette;
  name: string;
  setName: (s: string) => void;
  onShufflePalette: () => void;
  onNext: () => void;
}) {
  return (
    <div className="screen reveal">
      <div className="reveal-yard">
        <div className="status-bar" />
        <div className="progress">
          <div className="p on" /><div className="p on" /><div className="p on" />
        </div>
        <div className="sun" />
        <div className="cloud c1" />
        <div className="cloud c2" />
        <div className="cloud c3" />
        <div className="tree" style={{ left: 12, bottom: 10, fontSize: 34 }}>🌳</div>
        <div className="tree" style={{ right: 18, bottom: 6, fontSize: 30 }}>🌲</div>
        <div className="avatar-wrap">
          <span className="sparkle">✨</span>
          <span className="sparkle">✨</span>
          <span className="sparkle">✨</span>
          <span className="sparkle">✨</span>
          <div className="avatar-shadow" />
          <div className="avatar-bob">
            <PetCreature species={species} palette={palette} size={180} />
          </div>
        </div>
      </div>
      <div className="reveal-sheet">
        <h1>Say hello.</h1>
        <p className="lede" style={{ textAlign: "center", marginTop: 8 }}>
          Tap a color to remix. Give them a name when you're ready.
        </p>
      <div style={{ display: "flex", gap: 10, justifyContent: "center", margin: "16px 0 4px" }}>
        {PALETTES.map((p, i) => (
          <button
            key={i}
            onClick={() => onShufflePalette()}
            aria-label="try another color"
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: p.body,
              border: p === palette ? "3px solid #2A1A2E" : "2px solid #fff",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>
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
  return (
    <div className="screen wizard">
      <div className="wiz-yard">
        <div className="status-bar" />
        <button className="close-x" onClick={onBack} aria-label="back" style={{ background: "rgba(255,255,255,.8)", color: "var(--ink)" }}>←</button>
        <div className="progress">
          {Array.from({ length: WIZARD_STEP_COUNT }).map((_, i) => (
            <div key={i} className={`p ${i <= stepIndex ? "on" : ""}`} />
          ))}
        </div>
        <div className="sun" />
        <div className="cloud c1" />
        <div className="cloud c2" />
        <div className="tree" style={{ left: 12, bottom: 6, fontSize: 28 }}>🌳</div>
        <div className="tree" style={{ right: 16, bottom: 4, fontSize: 24 }}>🌲</div>
        <div className="wiz-avatar">
          <div className="avatar-shadow" />
          <div className="avatar-bob">
            <PetCreature species={species} palette={palette} size={120} />
          </div>
          <div className="wiz-name-tag">{petName}</div>
        </div>
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
  const [tick, setTick] = useState(0);
  const petsRef = useRef<Pet[]>(pets);
  petsRef.current = pets;

  // wandering animation
  useEffect(() => {
    let frame: number;
    let last = performance.now();
    const step = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      petsRef.current = petsRef.current.map((p) => {
        let { x, y, vx, vy, bob, facing } = p;
        x += vx * dt * 8;
        y += vy * dt * 8;
        bob += dt * 4;
        // bounce off yard edges (keep pets inside 0.05..0.9 horizontally, 0.4..0.85 vertically)
        if (x < 0.06) { x = 0.06; vx = Math.abs(vx); }
        if (x > 0.9)  { x = 0.9;  vx = -Math.abs(vx); }
        if (y < 0.42) { y = 0.42; vy = Math.abs(vy); }
        if (y > 0.85) { y = 0.85; vy = -Math.abs(vy); }
        // occasional direction change
        if (Math.random() < 0.008) {
          vx = (Math.random() - 0.5) * 0.025;
          vy = (Math.random() - 0.5) * 0.012;
        }
        facing = vx >= 0 ? 1 : -1;
        return { ...p, x, y, vx, vy, bob, facing };
      });
      setTick((t) => (t + 1) % 1000);
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  const livePets = petsRef.current;

  // sort by y so pets further back render behind
  const sorted = [...livePets].sort((a, b) => a.y - b.y);

  return (
    <div className="screen home">
      <div className="yard" ref={yardRef}>
        <div className="sun" />
        <div className="cloud c1" />
        <div className="cloud c2" />
        <div className="cloud c3" />
        <div className="tree" style={{ left: 16, fontSize: 40 }}>🌳</div>
        <div className="tree" style={{ right: 24, bottom: "50%" }}>🌲</div>
        <div className="tree" style={{ left: "42%", bottom: "48%", fontSize: 26, opacity: .9 }}>🌴</div>

        {sorted.map((p) => {
          const bobOffset = Math.sin(p.bob) * 2;
          return (
            <div
              key={p.id}
              className="pet-token"
              style={{
                left: `${p.x * 100}%`,
                top: `${p.y * 100}%`,
                transform: `translate(-50%, -50%) translateY(${bobOffset}px)`,
                zIndex: Math.floor(p.y * 100),
              }}
              onClick={(e) => {
                e.currentTarget.classList.toggle("show-name");
              }}
            >
              <div className="shadow" />
              <div className="name-tag">{p.name}</div>
              <PetCreature
                species={p.species}
                palette={p.palette}
                size={90}
                facing={p.facing}
                walking
              />
            </div>
          );
        })}

        <button className="fab" onClick={onAdd} aria-label="add a pet">+</button>

        {toast && <div className="toast">{toast}</div>}

        <div className="tabbar">
          <button className="tab active"><span className="icon">🏠</span>Home</button>
          <button className="tab"><span className="icon">🎾</span>Play</button>
          <button className="tab"><span className="icon">💛</span>Care</button>
          <button className="tab"><span className="icon">👤</span>You</button>
        </div>
      </div>
    </div>
  );
}
