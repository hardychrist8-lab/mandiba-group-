/* eslint-disable react-hooks/set-state-in-effect -- Détection de capacité
   navigateur (WebGL) : setState dans useEffect est légitime ici. */
"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Shield, Truck } from "lucide-react";
import Link from "next/link";
import { company } from "@/data/site-data";
import { Button } from "@/components/ui/button";

// Scène 3D chargée côté client uniquement (Three.js utilise WebGL/window)
const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((m) => m.HeroScene),
  { ssr: false }
);

// Détection WebGL pour fallback
function useHasWebGL() {
  const [has, setHas] = useState<boolean | null>(null);
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setHas(!!gl);
    } catch {
      setHas(false);
    }
  }, []);
  // null pendant la première frame (SSR) → on n'affiche pas la 3D tant qu'on n'est pas sûr
  return has;
}

export function Hero() {
  const hasWebGL = useHasWebGL();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mandiba-gradient-soft"
      aria-label="Section d'accueil"
    >
      {/* Scène 3D en arrière-plan */}
      {hasWebGL && (
        <div className="absolute inset-0">
          <HeroScene />
        </div>
      )}

      {/* Overlay dégradé pour la lisibilité du texte */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/60 pointer-events-none"
        aria-hidden="true"
      />

      {/* Contenu texte */}
      <div className="container-mandiba relative z-10 text-center pt-20">
        {/* Badge activités */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/60 mb-8"
        >
          <Shield className="h-4 w-4 text-primary" />
          <span className="text-xs font-medium text-foreground/80">
            Transport
          </span>
          <span className="h-3 w-px bg-border" />
          <Truck className="h-4 w-4 text-primary" />
          <span className="text-xs font-medium text-foreground/80">
            Assurances
          </span>
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary mb-4"
        >
          {company.name}
        </motion.h1>

        {/* Signature */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl font-light text-foreground/80 mb-8 tracking-wide"
        >
          {company.signature}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-foreground/80 mb-10 leading-relaxed"
        >
          {company.tagline}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="shadow-mandiba-lg min-w-[220px]">
            <Link href="#about">
              Découvrir Mandiba Group
              <ArrowDown className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="min-w-[220px] bg-white/50"
          >
            <Link href="#contact">Nous contacter</Link>
          </Button>
        </motion.div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="h-10 w-6 rounded-full border-2 border-primary/40 flex items-start justify-center p-1.5"
        >
          <div className="h-2 w-1 rounded-full bg-primary/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
