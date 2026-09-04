/* eslint-disable react-hooks/immutability -- R3F utilise légitimement
   la mutation directe des objets three.js dans useFrame. */
"use client";

import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  Icosahedron,
  Torus,
  Environment,
  AdaptiveDpr,
  PerformanceMonitor,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";

/* ============================================================
   Concept : "Protection in Motion"
   - Icosaèdre central = protection, stabilité, confiance
   - Anneau orbital (tore) = mobilité, transport, mouvement
   - Fragments géométriques = polyvalence des services
   - Particules = ambiance, profondeur
   Couleurs : nuances de bleu + gris, accent rouge subtil.
   ============================================================ */

function CentralShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    // Rotation lente et noble
    meshRef.current.rotation.y = t * 0.15;
    meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.08;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
      <Icosahedron ref={meshRef} args={[1.5, 0]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#0f2b4c"
          metalness={0.85}
          roughness={0.15}
          flatShading
          envMapIntensity={1.2}
        />
      </Icosahedron>
    </Float>
  );
}

function OrbitingRing() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    // L'anneau orbite lentement autour du centre
    groupRef.current.rotation.z = t * 0.1;
    groupRef.current.rotation.y = t * 0.05;
  });

  return (
    <group ref={groupRef}>
      <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.5}>
        <Torus args={[2.4, 0.06, 16, 100]} position={[0, 0, 0]} rotation={[Math.PI / 3, 0, 0]}>
          <meshStandardMaterial
            color="#64748b"
            metalness={0.9}
            roughness={0.2}
            emissive="#1e3a5f"
            emissiveIntensity={0.15}
          />
        </Torus>
      </Float>

      {/* Second anneau plus petit, inclinaison différente */}
      <Float speed={1.0} rotationIntensity={0.4} floatIntensity={0.6}>
        <Torus args={[1.9, 0.04, 12, 80]} position={[0, 0, 0]} rotation={[Math.PI / 4, Math.PI / 6, 0]}>
          <meshStandardMaterial
            color="#94a3b8"
            metalness={0.8}
            roughness={0.25}
          />
        </Torus>
      </Float>
    </group>
  );
}

function FloatingFragments() {
  return (
    <>
      {/* Fragment 1 : petit icosaèdre bleu clair */}
      <Float speed={1.6} rotationIntensity={0.8} floatIntensity={1.4}>
        <Icosahedron args={[0.4, 0]} position={[3.2, 0.8, -1]}>
          <meshStandardMaterial
            color="#1e3a5f"
            metalness={0.7}
            roughness={0.3}
            flatShading
          />
        </Icosahedron>
      </Float>

      {/* Fragment 2 : petit tore gris */}
      <Float speed={1.3} rotationIntensity={0.7} floatIntensity={1.6}>
        <Torus args={[0.35, 0.1, 12, 48]} position={[-3.2, -0.5, -0.8]}>
          <meshStandardMaterial
            color="#94a3b8"
            metalness={0.6}
            roughness={0.35}
          />
        </Torus>
      </Float>

      {/* Fragment 3 : accent rouge subtil (très petit) */}
      <Float speed={2.0} rotationIntensity={1.0} floatIntensity={2.0}>
        <Icosahedron args={[0.18, 0]} position={[2.2, -1.8, -0.5]}>
          <meshStandardMaterial
            color="#e31e24"
            metalness={0.6}
            roughness={0.3}
            emissive="#e31e24"
            emissiveIntensity={0.4}
            flatShading
          />
        </Icosahedron>
      </Float>

      {/* Fragment 4 : octaèdre gris-bleu */}
      <Float speed={1.5} rotationIntensity={0.9} floatIntensity={1.8}>
        <Icosahedron args={[0.3, 0]} position={[-2.6, 1.6, -1.2]}>
          <meshStandardMaterial
            color="#475569"
            metalness={0.75}
            roughness={0.25}
            flatShading
          />
        </Icosahedron>
      </Float>
    </>
  );
}

/* ============================================================
   Particules — ambiance subtile (Sparkles de drei)
   ============================================================ */
function AmbientParticles() {
  return (
    <Sparkles
      count={80}
      scale={10}
      size={2}
      speed={0.3}
      opacity={0.4}
      color="#94a3b8"
    />
  );
}

/* ============================================================
   Suivi souris — caméra réagit subtilement
   ============================================================ */
function CameraRig() {
  const { camera, pointer } = useThree();

  useFrame(() => {
    camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.025;
    camera.position.y += (pointer.y * 0.4 - camera.position.y) * 0.025;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ============================================================
   Scène principale
   ============================================================ */
function Scene() {
  return (
    <>
      {/* Lumières studio : key + fill + rim + accent rouge */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.4} color="#ffffff" />
      <directionalLight position={[-5, 3, -5]} intensity={0.5} color="#6498d4" />
      <pointLight position={[0, 0, 4]} intensity={0.8} color="#ffffff" />
      {/* Accent rouge subtil */}
      <pointLight position={[3, -2, 2]} intensity={0.4} color="#e31e24" />

      <CentralShape />
      <OrbitingRing />
      <FloatingFragments />
      <AmbientParticles />

      {/* Environnement pour reflets métalliques */}
      <Environment preset="city" />

      <CameraRig />
      <AdaptiveDpr pixelated />
      <PerformanceMonitor />
    </>
  );
}

/* ============================================================
   Export — wrapper Canvas avec gestion perf mobile
   ============================================================ */
export function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
