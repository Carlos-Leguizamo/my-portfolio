"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import type { Mesh } from "three";

function WobbleSphere() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const { pointer, clock } = state;
    const t = clock.getElapsedTime();

    mesh.rotation.x = t * 0.12 + pointer.y * 0.3;
    mesh.rotation.y = t * 0.18 + pointer.x * 0.3;
  });

  return (
    <Sphere ref={meshRef} args={[1.6, 64, 64]}>
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={0.45}
        speed={1.8}
        roughness={0.15}
        metalness={0.4}
        emissive="#4c1d95"
        emissiveIntensity={0.4}
      />
    </Sphere>
  );
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 3, 5]} intensity={2} color="#8b5cf6" />
      <pointLight position={[-4, -2, -3]} intensity={1.2} color="#3b82f6" />
    </>
  );
}

export function HeroScene() {
  return (
    <div
      className="h-full w-full"
      role="img"
      aria-label="Esfera 3D distorsionada animada, decorativa"
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <SceneLights />
          <WobbleSphere />
        </Suspense>
      </Canvas>
    </div>
  );
}
