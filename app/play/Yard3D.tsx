"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import type { Palette, Species } from "./PetCreature";

export type Pet3D = {
  id: string;
  name: string;
  species: Species;
  palette: Palette;
  x: number; // 0..1 yard space
  y: number; // 0..1 yard space (maps to z in world)
  vx: number;
  vy: number;
  facing: 1 | -1;
  bob: number;
};

// Map 0..1 yard coords into world coords.
// Yard world size is tuned so that walkable area (pets constrained to
// 0.1..0.9 on each axis) fits exactly inside the camera's visible frame
// across typical mobile aspect ratios.
const YARD_W = 6;
const YARD_D = 4.2;

// "Small planet" — Mario-Galaxy-style curved ground. The yard is a
// patch on top of a sphere, so the horizon curves down at the edges
// instead of meeting the sky in a sharp horizontal line.
const PLANET_R = 14;
const PLANET_CY = -PLANET_R + 0.05; // top of sphere just above y=0

/** Y-coordinate of the planet's surface at a given (x, z). null if outside. */
function planetY(x: number, z: number): number {
  const distSq = x * x + z * z;
  const r2 = PLANET_R * PLANET_R;
  if (distSq >= r2) return PLANET_CY; // outside sphere — should never happen for in-yard props
  return PLANET_CY + Math.sqrt(r2 - distSq);
}

const toWorld = (p: Pet3D): [number, number, number] => {
  const x = (p.x - 0.5) * YARD_W;
  const z = (p.y - 0.5) * YARD_D;
  return [x, planetY(x, z), z];
};

function Creature({ pet }: { pet: Pet3D }) {
  const group = useRef<THREE.Group>(null);
  const legFL = useRef<THREE.Mesh>(null);
  const legFR = useRef<THREE.Mesh>(null);
  const legBL = useRef<THREE.Mesh>(null);
  const legBR = useRef<THREE.Mesh>(null);
  const tail = useRef<THREE.Mesh>(null);
  const head = useRef<THREE.Group>(null);

  const bodyColor = pet.palette.body;
  const bellyColor = pet.palette.belly;
  const accentColor = pet.palette.accent;

  useFrame((state, dt) => {
    if (!group.current) return;
    const [wx, wy, wz] = toWorld(pet);
    // smooth target follow
    group.current.position.x += (wx - group.current.position.x) * Math.min(1, dt * 8);
    group.current.position.z += (wz - group.current.position.z) * Math.min(1, dt * 8);
    // face direction
    const targetRot = pet.facing === 1 ? Math.PI / 2 : -Math.PI / 2;
    const cur = group.current.rotation.y;
    const diff = ((targetRot - cur + Math.PI) % (Math.PI * 2)) - Math.PI;
    group.current.rotation.y += diff * Math.min(1, dt * 6);

    const t = state.clock.elapsedTime;
    // bob, layered on top of the planet's curved surface y
    group.current.position.y = wy + Math.sin(t * 4 + pet.bob) * 0.04;

    // leg shuffle (only when moving)
    const speed = Math.hypot(pet.vx, pet.vy);
    const shuffle = speed > 0.001 ? Math.sin(t * 10) * 0.22 : 0;
    if (legFL.current) legFL.current.rotation.x = shuffle;
    if (legBR.current) legBR.current.rotation.x = shuffle;
    if (legFR.current) legFR.current.rotation.x = -shuffle;
    if (legBL.current) legBL.current.rotation.x = -shuffle;

    // tail wag
    if (tail.current) tail.current.rotation.y = Math.sin(t * 6 + pet.bob) * 0.35;

    // subtle head turn
    if (head.current) head.current.rotation.y = Math.sin(t * 0.9 + pet.bob) * 0.12;
  });

  const initialWorld = toWorld(pet);

  return (
    <group ref={group} position={initialWorld}>
      {/* body */}
      <mesh castShadow position={[0, 0.42, 0]} rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[0.32, 0.45, 8, 16]} />
        <meshStandardMaterial color={bodyColor} roughness={0.8} />
      </mesh>
      {/* belly */}
      <mesh position={[0, 0.32, 0]} rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[0.22, 0.35, 8, 16]} />
        <meshStandardMaterial color={bellyColor} roughness={0.9} />
      </mesh>

      {/* legs */}
      <mesh ref={legFL} castShadow position={[0.22, 0.15, 0.18]}>
        <cylinderGeometry args={[0.08, 0.08, 0.3, 12]} />
        <meshStandardMaterial color={accentColor} roughness={0.85} />
      </mesh>
      <mesh ref={legFR} castShadow position={[0.22, 0.15, -0.18]}>
        <cylinderGeometry args={[0.08, 0.08, 0.3, 12]} />
        <meshStandardMaterial color={accentColor} roughness={0.85} />
      </mesh>
      <mesh ref={legBL} castShadow position={[-0.22, 0.15, 0.18]}>
        <cylinderGeometry args={[0.08, 0.08, 0.3, 12]} />
        <meshStandardMaterial color={accentColor} roughness={0.85} />
      </mesh>
      <mesh ref={legBR} castShadow position={[-0.22, 0.15, -0.18]}>
        <cylinderGeometry args={[0.08, 0.08, 0.3, 12]} />
        <meshStandardMaterial color={accentColor} roughness={0.85} />
      </mesh>

      {/* tail */}
      <group position={[-0.38, 0.48, 0]}>
        <mesh ref={tail} castShadow position={[-0.12, 0.06, 0]} rotation={[0, 0, 0.6]}>
          <capsuleGeometry args={[0.06, 0.2, 6, 10]} />
          <meshStandardMaterial color={bodyColor} roughness={0.8} />
        </mesh>
      </group>

      {/* head */}
      <group ref={head} position={[0.42, 0.65, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.3, 24, 20]} />
          <meshStandardMaterial color={bodyColor} roughness={0.8} />
        </mesh>
        {/* snout */}
        <mesh position={[0.22, -0.05, 0]}>
          <sphereGeometry args={[0.15, 16, 14]} />
          <meshStandardMaterial color={bellyColor} roughness={0.9} />
        </mesh>
        {/* nose */}
        <mesh position={[0.35, -0.02, 0]}>
          <sphereGeometry args={[0.045, 12, 10]} />
          <meshStandardMaterial color="#2A1A2E" roughness={0.3} />
        </mesh>
        {/* eyes */}
        <mesh position={[0.18, 0.08, 0.14]}>
          <sphereGeometry args={[0.04, 10, 10]} />
          <meshStandardMaterial color="#2A1A2E" />
        </mesh>
        <mesh position={[0.18, 0.08, -0.14]}>
          <sphereGeometry args={[0.04, 10, 10]} />
          <meshStandardMaterial color="#2A1A2E" />
        </mesh>

        {/* species-specific ears */}
        <Ears species={pet.species} color={accentColor} bodyColor={bodyColor} />
      </group>
    </group>
  );
}

function Ears({ species, color, bodyColor }: { species: Species; color: string; bodyColor: string }) {
  if (species === "cat") {
    return (
      <>
        <mesh position={[-0.08, 0.28, 0.18]} rotation={[0, 0, -0.2]}>
          <coneGeometry args={[0.1, 0.22, 4]} />
          <meshStandardMaterial color={color} roughness={0.8} />
        </mesh>
        <mesh position={[-0.08, 0.28, -0.18]} rotation={[0, 0, -0.2]}>
          <coneGeometry args={[0.1, 0.22, 4]} />
          <meshStandardMaterial color={color} roughness={0.8} />
        </mesh>
      </>
    );
  }
  if (species === "bunny") {
    return (
      <>
        <mesh position={[-0.02, 0.42, 0.1]} rotation={[0, 0, 0.15]}>
          <capsuleGeometry args={[0.06, 0.3, 6, 10]} />
          <meshStandardMaterial color={bodyColor} roughness={0.85} />
        </mesh>
        <mesh position={[-0.02, 0.42, -0.1]} rotation={[0, 0, 0.15]}>
          <capsuleGeometry args={[0.06, 0.3, 6, 10]} />
          <meshStandardMaterial color={bodyColor} roughness={0.85} />
        </mesh>
      </>
    );
  }
  // dog
  return (
    <>
      <mesh position={[-0.08, 0.05, 0.22]} rotation={[0, 0, -0.3]}>
        <capsuleGeometry args={[0.07, 0.22, 6, 10]} />
        <meshStandardMaterial color={color} roughness={0.85} />
      </mesh>
      <mesh position={[-0.08, 0.05, -0.22]} rotation={[0, 0, -0.3]}>
        <capsuleGeometry args={[0.07, 0.22, 6, 10]} />
        <meshStandardMaterial color={color} roughness={0.85} />
      </mesh>
    </>
  );
}

/**
 * Place a child node on the planet surface at horizontal (x, z),
 * rotated so its local "up" aligns with the sphere normal at that
 * point. Lets us write trees/flowers in their natural local space.
 */
function OnPlanet({
  x,
  z,
  children,
}: {
  x: number;
  z: number;
  children: React.ReactNode;
}) {
  const y = planetY(x, z);
  const ny = y - PLANET_CY;
  const tiltX = -Math.atan2(z, ny);
  const tiltZ = Math.atan2(x, ny);
  return (
    <group position={[x, y, z]} rotation={[tiltX, 0, tiltZ]}>
      {children}
    </group>
  );
}

function Tree({ scale = 1 }: { scale?: number }) {
  return (
    <group scale={scale}>
      <mesh position={[0, 0.4, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.16, 0.8, 8]} />
        <meshStandardMaterial color="#8a5a3a" roughness={0.9} />
      </mesh>
      <mesh position={[0, 1.2, 0]} castShadow>
        <sphereGeometry args={[0.7, 14, 12]} />
        <meshStandardMaterial color="#6db968" roughness={0.95} />
      </mesh>
      <mesh position={[0.3, 1.5, 0.1]} castShadow>
        <sphereGeometry args={[0.5, 12, 10]} />
        <meshStandardMaterial color="#7ec878" roughness={0.95} />
      </mesh>
      <mesh position={[-0.25, 1.45, -0.1]} castShadow>
        <sphereGeometry args={[0.45, 12, 10]} />
        <meshStandardMaterial color="#7ec878" roughness={0.95} />
      </mesh>
    </group>
  );
}

function Flower({ color }: { color: string }) {
  return (
    <group>
      <mesh position={[0, 0.08, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.16, 6]} />
        <meshStandardMaterial color="#5ba84a" />
      </mesh>
      <mesh position={[0, 0.17, 0]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.15} />
      </mesh>
    </group>
  );
}

function Ground() {
  return (
    <>
      {/* The "small planet" — a sphere just below the play area whose
         visible top is the curved hill the pets walk on. Soft warm green. */}
      <mesh position={[0, PLANET_CY, 0]} receiveShadow>
        <sphereGeometry args={[PLANET_R, 96, 64]} />
        <meshStandardMaterial color="#7ab370" roughness={1} />
      </mesh>
    </>
  );
}

function GrassField() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const COUNT = 2800;

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const tmp = new THREE.Object3D();
    const color = new THREE.Color();
    const greens = ["#4f9a45", "#6cba5e", "#8fd07d", "#c2dc6f"];

    for (let i = 0; i < COUNT; i++) {
      // Sample within a polar cap on the planet (radius up to 9 from
      // axis), denser toward the top.
      const angle = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * 9;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      const y = planetY(x, z); // sit on the curved surface

      const scaleY = 0.7 + Math.random() * 0.9;
      const scaleXZ = 0.8 + Math.random() * 0.5;

      tmp.position.set(x, y, z);
      // Tilt each blade so its base aligns with the sphere's surface
      // normal. The normal at (x,y,z) points away from planet center.
      const nx = x;
      const ny = y - PLANET_CY;
      const nz = z;
      const tiltX = Math.atan2(nz, ny); // around X
      const tiltZ = -Math.atan2(nx, ny); // around Z
      tmp.rotation.set(
        tiltX + (Math.random() - 0.5) * 0.15,
        Math.random() * Math.PI * 2,
        tiltZ + (Math.random() - 0.5) * 0.15
      );
      tmp.scale.set(scaleXZ, scaleY, scaleXZ);
      tmp.updateMatrix();
      mesh.setMatrixAt(i, tmp.matrix);

      color.set(greens[Math.floor(Math.random() * greens.length)]);
      const j = 0.9 + Math.random() * 0.2;
      color.multiplyScalar(j);
      mesh.setColorAt(i, color);
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, []);

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, COUNT]}
      castShadow
      receiveShadow
    >
      <coneGeometry args={[0.028, 0.42, 3]} />
      <meshStandardMaterial roughness={0.95} />
    </instancedMesh>
  );
}

function Clovers() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const COUNT = 120;

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const tmp = new THREE.Object3D();
    const color = new THREE.Color();
    for (let i = 0; i < COUNT; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * 7;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      const y = planetY(x, z) + 0.01;

      // Orient the disc so it lies flat on the sphere surface (face up
      // along the surface normal, then random spin for variety).
      const nx = x;
      const ny = y - PLANET_CY;
      const nz = z;
      const tiltX = -Math.atan2(nz, ny);
      const tiltZ = Math.atan2(nx, ny);
      tmp.position.set(x, y, z);
      tmp.rotation.set(-Math.PI / 2 + tiltX, Math.random() * Math.PI * 2, tiltZ);
      const s = 0.12 + Math.random() * 0.08;
      tmp.scale.set(s, s, s);
      tmp.updateMatrix();
      mesh.setMatrixAt(i, tmp.matrix);
      color.setHSL(0.28 + Math.random() * 0.06, 0.55, 0.45 + Math.random() * 0.1);
      mesh.setColorAt(i, color);
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, []);

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, COUNT]} receiveShadow>
      <circleGeometry args={[1, 5]} />
      <meshStandardMaterial roughness={1} />
    </instancedMesh>
  );
}

function Scenery() {
  const flowers = useMemo(() => {
    const arr: { x: number; z: number; color: string }[] = [];
    const colors = ["#FF9A8B", "#FFD56B", "#C3AED6", "#ffffff", "#FFB6D9", "#FF7B63"];
    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = 2.5 + Math.random() * 6;
      arr.push({
        x: Math.cos(angle) * r,
        z: Math.sin(angle) * r,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    return arr;
  }, []);
  return (
    <>
      <OnPlanet x={-5} z={-3}><Tree scale={1.1} /></OnPlanet>
      <OnPlanet x={5.5} z={-2.5}><Tree scale={1} /></OnPlanet>
      <OnPlanet x={-4} z={3.5}><Tree scale={0.85} /></OnPlanet>
      <OnPlanet x={6} z={3}><Tree scale={0.9} /></OnPlanet>
      {flowers.map((f, i) => (
        <OnPlanet key={i} x={f.x} z={f.z}>
          <Flower color={f.color} />
        </OnPlanet>
      ))}
      {/* distant bushes */}
      <OnPlanet x={-7} z={0}>
        <mesh position={[0, 0.3, 0]} castShadow>
          <sphereGeometry args={[0.6, 12, 10]} />
          <meshStandardMaterial color="#6db968" roughness={1} />
        </mesh>
      </OnPlanet>
      <OnPlanet x={7} z={1}>
        <mesh position={[0, 0.25, 0]} castShadow>
          <sphereGeometry args={[0.5, 12, 10]} />
          <meshStandardMaterial color="#7ec878" roughness={1} />
        </mesh>
      </OnPlanet>
    </>
  );
}

function Sun() {
  return (
    <mesh position={[10, 9, -14]}>
      <sphereGeometry args={[1.6, 20, 20]} />
      <meshStandardMaterial color="#FFE9A8" emissive="#FFB347" emissiveIntensity={0.9} />
    </mesh>
  );
}

/**
 * Globe-explorer camera. Tracks where you're standing on the planet
 * (a unit vector from center), which way you're facing (a tangent
 * vector), and how zoomed in you are. One-finger drag walks the
 * standing point across the surface in the drag direction —
 * non-degenerate everywhere, including at the pole. Two-finger pinch
 * adjusts zoom; two-finger twist rotates heading around the standing
 * point ("compass spin").
 */
type ViewState = {
  standing: THREE.Vector3; // unit vector from planet center
  heading: THREE.Vector3; // unit tangent at standing point
  zoom: number; // 1 = default framing
};

const PLANET_CENTER = new THREE.Vector3(0, PLANET_CY, 0);
// At rest the camera sits at world (0, 4.8, 5.5) looking at (0, 0.2, 0).
// Decompose that camera-to-target offset into radial-up and tangent-back
// components in the standing frame.
const REST_TARGET_LIFT = 0.2; // surface target sits this far above sphere skin
const REST_RADIAL = 4.6; // camera height above target (radial)
const REST_BACK = 5.5; // camera distance behind target (along -heading)
const REST_DIST = Math.hypot(REST_RADIAL, REST_BACK); // for fov

function CameraOrbit({
  stateRef,
}: {
  stateRef: React.MutableRefObject<ViewState>;
}) {
  const { camera, size } = useThree();

  useEffect(() => {
    if ("fov" in camera) {
      const aspect = size.width / Math.max(1, size.height);
      const halfW = YARD_W / 2 + 0.4;
      const hFovRad = 2 * Math.atan(halfW / REST_DIST);
      const vFovRad = 2 * Math.atan(Math.tan(hFovRad / 2) / aspect);
      const vFovDeg = (vFovRad * 180) / Math.PI;
      camera.fov = Math.max(28, Math.min(85, vFovDeg));
      camera.updateProjectionMatrix();
    }
  }, [camera, size.width, size.height]);

  useFrame(() => {
    const s = stateRef.current;
    const target = PLANET_CENTER.clone()
      .addScaledVector(s.standing, PLANET_R + REST_TARGET_LIFT);
    const camPos = target.clone()
      .addScaledVector(s.standing, REST_RADIAL * s.zoom)
      .addScaledVector(s.heading, -REST_BACK * s.zoom);
    camera.position.copy(camPos);
    camera.up.copy(s.standing);
    camera.lookAt(target);
  });
  return null;
}

export default function Yard3D({
  pets,
  onPetClick,
}: {
  pets: Pet3D[];
  onPetClick?: (id: string) => void;
}) {
  const stateRef = useRef<ViewState>({
    standing: new THREE.Vector3(0, 1, 0),
    heading: new THREE.Vector3(0, 0, -1),
    zoom: 1,
  });
  // Tracks active pointers by id (multi-touch). 1 active = pan,
  // 2 active = pinch+twist.
  const pointersRef = useRef<Map<number, { x: number; y: number }>>(new Map());
  // Two-finger gesture: anchor the start state (d0, θ0) and run a
  // winner-take-all activation so pinch and twist don't fight.
  // mode='undecided' until one axis crosses its threshold from the
  // anchor; then locks to 'pinch' or 'twist' for the rest of the gesture.
  const gestureRef = useRef<{
    startDist: number;
    startAngle: number;
    lastDist: number;
    lastAngle: number;
    mode: "undecided" | "pinch" | "twist";
  } | null>(null);
  const PINCH_THRESHOLD = 0.12; // 12% scale change to activate zoom
  const TWIST_THRESHOLD = 0.22; // ~12.5° rotation to activate twist
  const movedRef = useRef(false);
  const [zoomTick, setZoomTick] = useState(0); // forces re-render when zoom buttons run
  const ZOOM_MIN = 0.4;
  const ZOOM_MAX = 2.2;
  const ZOOM_STEPS = [0.6, 1, 1.6];

  const setZoom = (z: number) => {
    stateRef.current.zoom = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, z));
    setZoomTick((t) => t + 1);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    movedRef.current = false;
    if (pointersRef.current.size === 2) {
      const pts = Array.from(pointersRef.current.values());
      const [a, b] = pts;
      const d0 = Math.hypot(b.x - a.x, b.y - a.y);
      const a0 = Math.atan2(b.y - a.y, b.x - a.x);
      gestureRef.current = {
        startDist: d0,
        startAngle: a0,
        lastDist: d0,
        lastAngle: a0,
        mode: "undecided",
      };
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const prev = pointersRef.current.get(e.pointerId);
    if (!prev) return;
    const next = { x: e.clientX, y: e.clientY };
    pointersRef.current.set(e.pointerId, next);
    const s = stateRef.current;

    if (pointersRef.current.size === 1) {
      // ── one-finger pan: parallel-transport the standing point across
      // the surface in the drag direction. Heading rotates with it so
      // "forward" stays consistent.
      const dx = next.x - prev.x;
      const dy = next.y - prev.y;
      if (Math.abs(dx) + Math.abs(dy) > 3) movedRef.current = true;
      const right = new THREE.Vector3().crossVectors(s.heading, s.standing).normalize();
      const tangent = right.clone().multiplyScalar(-dx).addScaledVector(s.heading, dy);
      const mag = tangent.length();
      if (mag < 1e-5) return;
      tangent.divideScalar(mag);
      const sens = 0.006 * s.zoom; // px → world arc; closer zoom = finer steps
      const angle = (mag * sens) / PLANET_R;
      const axis = new THREE.Vector3().crossVectors(s.standing, tangent).normalize();
      if (axis.lengthSq() < 1e-8) return;
      const q = new THREE.Quaternion().setFromAxisAngle(axis, angle);
      s.standing.applyQuaternion(q).normalize();
      s.heading.applyQuaternion(q);
      // re-orthogonalize heading to be tangent (perpendicular to standing)
      s.heading.addScaledVector(s.standing, -s.heading.dot(s.standing)).normalize();
      return;
    }

    if (pointersRef.current.size === 2 && gestureRef.current) {
      const g = gestureRef.current;
      const pts = Array.from(pointersRef.current.values());
      const [a, b] = pts;
      const newDist = Math.hypot(b.x - a.x, b.y - a.y);
      const newAngle = Math.atan2(b.y - a.y, b.x - a.x);

      // Cumulative deltas from the gesture anchor (not last frame) —
      // this is what lets slow rotations register without per-frame noise.
      const cumScale = newDist / Math.max(1, g.startDist);
      let cumTwist = newAngle - g.startAngle;
      // wrap to [-π, π]
      while (cumTwist > Math.PI) cumTwist -= 2 * Math.PI;
      while (cumTwist < -Math.PI) cumTwist += 2 * Math.PI;

      // Winner-take-all activation: whichever axis crosses its
      // threshold from the anchor first locks the gesture.
      if (g.mode === "undecided") {
        const pinchOver = Math.abs(Math.log(cumScale)) > Math.log(1 + PINCH_THRESHOLD);
        const twistOver = Math.abs(cumTwist) > TWIST_THRESHOLD;
        if (pinchOver && (!twistOver || Math.abs(Math.log(cumScale)) / Math.log(1 + PINCH_THRESHOLD) >= Math.abs(cumTwist) / TWIST_THRESHOLD)) {
          g.mode = "pinch";
          // re-anchor so the activation slack doesn't snap-jump
          g.lastDist = newDist;
          g.lastAngle = newAngle;
        } else if (twistOver) {
          g.mode = "twist";
          g.lastDist = newDist;
          g.lastAngle = newAngle;
        }
      }

      if (g.mode === "pinch") {
        const distRatio = newDist / Math.max(1, g.lastDist);
        const zoomDelta = 1 / distRatio;
        s.zoom = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, s.zoom * zoomDelta));
        setZoomTick((t) => t + 1);
      } else if (g.mode === "twist") {
        const dAngle = newAngle - g.lastAngle;
        const q = new THREE.Quaternion().setFromAxisAngle(s.standing, dAngle);
        s.heading.applyQuaternion(q);
        s.heading.addScaledVector(s.standing, -s.heading.dot(s.standing)).normalize();
      }

      g.lastDist = newDist;
      g.lastAngle = newAngle;
      movedRef.current = true;
      return;
    }
  };

  const onPointerUp = (e: React.PointerEvent) => {
    pointersRef.current.delete(e.pointerId);
    if (pointersRef.current.size < 2) gestureRef.current = null;
  };

  const cycleZoom = (dir: 1 | -1) => {
    const cur = stateRef.current.zoom;
    // find the nearest step and move from there
    let i = 0;
    let best = Infinity;
    for (let k = 0; k < ZOOM_STEPS.length; k++) {
      const d = Math.abs(ZOOM_STEPS[k] - cur);
      if (d < best) {
        best = d;
        i = k;
      }
    }
    const next = Math.max(0, Math.min(ZOOM_STEPS.length - 1, i + dir));
    setZoom(ZOOM_STEPS[next]);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ antialias: true }}
      camera={{ fov: 45, near: 0.1, far: 60 }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      onPointerCancel={onPointerUp}
      style={{ touchAction: "none" }}
    >
      <color attach="background" args={["#b9e0ff"]} />
      <fog attach="fog" args={["#cfe9f7", 14, 26]} />
      <CameraOrbit stateRef={stateRef} />

      <ambientLight intensity={0.55} />
      <directionalLight
        position={[6, 8, 4]}
        intensity={1.4}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <hemisphereLight args={["#ffe9b8", "#9fd88a", 0.4]} />

      <Sun />
      <Ground />
      <Clovers />
      <GrassField />
      <Scenery />
      {pets.map((p) => (
        <group
          key={p.id}
          onClick={(e) => {
            if (movedRef.current) return;
            e.stopPropagation();
            onPetClick?.(p.id);
          }}
        >
          <Creature pet={p} />
        </group>
      ))}
      <ContactShadows position={[0, 0.01, 0]} opacity={0.35} scale={20} blur={2.4} far={4} />
    </Canvas>
    <div
      style={{
        position: "absolute",
        top: 12,
        right: 12,
        display: "flex",
        flexDirection: "column",
        gap: 6,
        zIndex: 2,
        pointerEvents: "auto",
      }}
    >
      <button
        type="button"
        aria-label="Zoom in"
        onClick={() => cycleZoom(-1)}
        style={zoomBtnStyle}
      >
        +
      </button>
      <button
        type="button"
        aria-label="Reset view"
        onClick={() => {
          stateRef.current.standing.set(0, 1, 0);
          stateRef.current.heading.set(0, 0, -1);
          setZoom(1);
        }}
        style={{ ...zoomBtnStyle, fontSize: 12 }}
      >
        ⟳
      </button>
      <button
        type="button"
        aria-label="Zoom out"
        onClick={() => cycleZoom(1)}
        style={zoomBtnStyle}
      >
        −
      </button>
    </div>
    </div>
  );
}

const zoomBtnStyle: React.CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: 18,
  border: "none",
  background: "rgba(255, 255, 255, 0.85)",
  color: "#2A1A2E",
  fontSize: 18,
  fontWeight: 600,
  cursor: "pointer",
  boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  WebkitTapHighlightColor: "transparent",
};
