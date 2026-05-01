"use client";

import { useEffect, useMemo, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const DOG_GLB_PATH = "/models/dog.glb";

export type DogModelProps = {
  bodyColor: string;
  bellyColor: string;
  speedRef: React.RefObject<number>;
};

export function DogModel({ bodyColor, bellyColor, speedRef }: DogModelProps) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(DOG_GLB_PATH);

  const cloned = useMemo(() => {
    const c = scene.clone(true);
    c.traverse((obj) => {
      const m = obj as THREE.Mesh;
      if (!m.isMesh) return;
      m.castShadow = true;
      m.receiveShadow = true;
      const mat = m.material as THREE.MeshStandardMaterial | THREE.MeshStandardMaterial[];
      const mats = Array.isArray(mat) ? mat : [mat];
      mats.forEach((mm, idx) => {
        if (!(mm instanceof THREE.MeshStandardMaterial)) return;
        const cloneMat = mm.clone();
        cloneMat.color = new THREE.Color(idx === 0 ? bodyColor : bellyColor);
        cloneMat.roughness = 0.85;
        if (Array.isArray(mat)) (m.material as THREE.Material[])[idx] = cloneMat;
        else m.material = cloneMat;
      });
    });
    return c;
  }, [scene, bodyColor, bellyColor]);

  const { actions, names } = useAnimations(animations, group);

  const findAction = (...candidates: string[]) => {
    for (const c of candidates) {
      const hit = names.find((n) => n.toLowerCase() === c.toLowerCase());
      if (hit && actions[hit]) return actions[hit]!;
    }
    return null;
  };

  const idleAction = useMemo(
    () => findAction("Idle", "AnimalArmature|Idle", "Idle_2"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [names]
  );
  const walkAction = useMemo(
    () => findAction("Walk", "AnimalArmature|Walk", "Walking"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [names]
  );

  useEffect(() => {
    idleAction?.reset().fadeIn(0.2).play();
    walkAction?.reset().fadeIn(0.2).play();
    if (idleAction) idleAction.weight = 1;
    if (walkAction) walkAction.weight = 0;
    return () => {
      idleAction?.fadeOut(0.2);
      walkAction?.fadeOut(0.2);
    };
  }, [idleAction, walkAction]);

  useFrame((_, dt) => {
    if (!idleAction || !walkAction) return;
    const moving = (speedRef.current ?? 0) > 0.001 ? 1 : 0;
    idleAction.weight += (1 - moving - idleAction.weight) * Math.min(1, dt * 8);
    walkAction.weight += (moving - walkAction.weight) * Math.min(1, dt * 8);
  });

  return (
    <group ref={group} scale={0.55} position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
      <primitive object={cloned} />
    </group>
  );
}
