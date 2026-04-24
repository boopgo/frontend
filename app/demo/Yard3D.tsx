"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
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
// Yard is ~14 wide × 10 deep, centered on origin at ground (y=0).
const YARD_W = 14;
const YARD_D = 10;
const toWorld = (p: Pet3D): [number, number, number] => [
  (p.x - 0.5) * YARD_W,
  0,
  (p.y - 0.5) * YARD_D,
];

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
    const [wx, , wz] = toWorld(pet);
    // smooth target follow
    group.current.position.x += (wx - group.current.position.x) * Math.min(1, dt * 8);
    group.current.position.z += (wz - group.current.position.z) * Math.min(1, dt * 8);
    // face direction
    const targetRot = pet.facing === 1 ? Math.PI / 2 : -Math.PI / 2;
    const cur = group.current.rotation.y;
    const diff = ((targetRot - cur + Math.PI) % (Math.PI * 2)) - Math.PI;
    group.current.rotation.y += diff * Math.min(1, dt * 6);

    const t = state.clock.elapsedTime;
    // bob
    group.current.position.y = Math.sin(t * 4 + pet.bob) * 0.04;

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

function Tree({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return (
    <group position={position} scale={scale}>
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

function Flower({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <group position={position}>
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
      {/* grass ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, 0, 0]}>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#9fd88a" roughness={1} />
      </mesh>
      {/* subtle darker patch under yard */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, 0.001, 0]}>
        <circleGeometry args={[8, 48]} />
        <meshStandardMaterial color="#b7dca0" roughness={1} />
      </mesh>
      {/* dirt path */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, 0.002, 2.4]}>
        <planeGeometry args={[3.5, 1.4]} />
        <meshStandardMaterial color="#d9b486" roughness={1} />
      </mesh>
    </>
  );
}

function Scenery() {
  const flowers = useMemo(() => {
    const arr: { pos: [number, number, number]; color: string }[] = [];
    const colors = ["#FF9A8B", "#FFD56B", "#C3AED6", "#ffffff"];
    for (let i = 0; i < 18; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = 4 + Math.random() * 4;
      arr.push({
        pos: [Math.cos(angle) * r, 0, Math.sin(angle) * r],
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    return arr;
  }, []);
  return (
    <>
      <Tree position={[-5, 0, -3]} scale={1.1} />
      <Tree position={[5.5, 0, -2.5]} scale={1} />
      <Tree position={[-4, 0, 3.5]} scale={0.85} />
      <Tree position={[6, 0, 3]} scale={0.9} />
      {flowers.map((f, i) => (
        <Flower key={i} position={f.pos} color={f.color} />
      ))}
      {/* distant bushes */}
      <mesh position={[-7, 0.3, 0]} castShadow>
        <sphereGeometry args={[0.6, 12, 10]} />
        <meshStandardMaterial color="#6db968" roughness={1} />
      </mesh>
      <mesh position={[7, 0.25, 1]} castShadow>
        <sphereGeometry args={[0.5, 12, 10]} />
        <meshStandardMaterial color="#7ec878" roughness={1} />
      </mesh>
      {/* sun orb */}
      <mesh position={[10, 9, -14]}>
        <sphereGeometry args={[1.6, 20, 20]} />
        <meshStandardMaterial color="#FFE9A8" emissive="#FFB347" emissiveIntensity={0.9} />
      </mesh>
    </>
  );
}

export default function Yard3D({
  pets,
  onPetClick,
}: {
  pets: Pet3D[];
  onPetClick?: (id: string) => void;
}) {
  return (
    <Canvas shadows dpr={[1, 2]} gl={{ antialias: true }}>
      {/* warm sky-to-peach background */}
      <color attach="background" args={["#ffd9bf"]} />
      <fog attach="fog" args={["#ffd9bf", 14, 28]} />

      <PerspectiveCamera makeDefault position={[0, 3.2, 7.5]} fov={42} />

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

      <Suspense fallback={null}>
        <Ground />
        <Scenery />
        {pets.map((p) => (
          <group key={p.id} onClick={() => onPetClick?.(p.id)}>
            <Creature pet={p} />
          </group>
        ))}
        <ContactShadows position={[0, 0.01, 0]} opacity={0.35} scale={20} blur={2.4} far={4} />
        <Environment preset="sunset" background={false} />
      </Suspense>
    </Canvas>
  );
}
