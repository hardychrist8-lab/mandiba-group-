/* eslint-disable react-hooks/immutability -- R3F utilise légitimement
   la mutation directe des objets three.js (camera, mesh) dans useFrame,
   c'est le pattern standard et performant recommandé par la lib. */
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
} from "@react-three/drei";
import * as THREE from "three";

/* ============================================================
   Formes géométriques flottantes
   Représentation abstraite : Protection (sphère/icosaèdre)
   + Mobilité (tore/anneau) + Confiance (volume stable).
   ============================================================ */

function FloatingShapes() {
  // Groupe principal animé
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Rotation lente et continue du groupe global
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.08;
    groupRef.current.rotation.x = Math.sin(t * 0.15) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {/* Icosaèdre central — symbolise la protection */}
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
        <Icosahedron args={[1.4, 0]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#0f2b4c"
            metalness={0.7}
            roughness={0.2}
            flatShading
          />
        </Icosahedron>
      </Float>

      {/* Tore — symbolise la mobilité, le mouvement */}
      <Float speed={1.1} rotationIntensity={0.8} floatIntensity={1.5}>
        <Torus args={[0.8, 0.18, 16, 64]} position={[2.6, 0.6, -1]}>
          <meshStandardMaterial
            color="#1e3a5f"
            metalness={0.6}
            roughness={0.3}
          />
        </Torus>
      </Float>

      {/* Petit icosaèdre secondaire */}
      <Float speed={1.7} rotationIntensity={1} floatIntensity={2}>
        <Icosahedron args={[0.5, 0]} position={[-2.8, -0.4, -0.5]}>
          <meshStandardMaterial
            color="#3a6ea5"
            metalness={0.5}
            roughness={0.35}
            flatShading
          />
        </Icosahedron>
      </Float>

      {/* Forme supplémentaire — équilibre composition */}
      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1.8}>
        <Torus args={[0.4, 0.1, 12, 48]} position={[-1.8, 1.8, -1.5]}>
          <meshStandardMaterial
            color="#5a8cc0"
            metalness={0.5}
            roughness={0.4}
          />
        </Torus>
      </Float>
    </group>
  );
}

/* ============================================================
   Particules discrètes — ambiance et profondeur
   ============================================================ */

function Particles({ count = 180 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Distribution sphérique légère
      const r = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.getElapsedTime() * 0.03;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#5a8cc0"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ============================================================
   Suivi souris — la caméra réagit subtilement au mouvement
   ============================================================ */

function CameraRig() {
  const { camera, pointer } = useThree();

  useFrame(() => {
    // Léger décalage de caméra selon la position de la souris.
    camera.position.x += (pointer.x * 0.8 - camera.position.x) * 0.03;
    camera.position.y += (pointer.y * 0.5 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ============================================================
   Scène principale avec fallback de performance
   ============================================================ */

function Scene() {
  return (
    <>
      {/* Lumières douces */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-5, -3, -5]} intensity={0.4} color="#3a6ea5" />
      <pointLight position={[0, 0, 3]} intensity={0.8} color="#5a8cc0" />

      <FloatingShapes />
      <Particles />

      {/* Environnement pour les reflets métalliques */}
      <Environment preset="city" />

      <CameraRig />
      <AdaptiveDpr pixelated />
      <PerformanceMonitor />
    </>
  );
}

/* ============================================================
   Composant exporté — wrapper Canvas
   ============================================================ */

export function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
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
