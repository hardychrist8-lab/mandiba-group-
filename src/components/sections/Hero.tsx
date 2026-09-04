/* eslint-disable react-hooks/set-state-in-effect -- Détection WebGL. */
"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { company } from "@/data/site-data";
import { Button } from "@/components/ui/button";

// Scène 3D chargée côté client uniquement
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
  return has;
}

export function Hero() {
  const hasWebGL = useHasWebGL();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mandiba-dark"
      aria-label="Section d'accueil"
    >
      {/* Scène 3D en arrière-plan */}
      {hasWebGL && (
        <div className="absolute inset-0">
          <HeroScene />
        </div>
      )}

      {/* Overlay dégradé pour lisibilité du texte */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0a1929]/40 via-transparent to-[#0a1929]/70 pointer-events-none"
        aria-hidden="true"
      />

      {/* Motif points subtil en arrière-plan */}
      <div
        className="absolute inset-0 pattern-dots opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Contenu */}
      <div className="container-mandiba relative z-10 text-center pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-dark border border-white/15 mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-medium text-white/90 tracking-[0.2em] uppercase">
            {company.signature}
          </span>
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2 leading-none"
        >
          <span className="text-white">MANDIBA</span>{" "}
          <span className="text-accent">GROUP</span>
        </motion.h1>

        {/* Ligne décorative */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-3 my-8"
        >
          <span className="h-px w-12 bg-white/30" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="h-px w-12 bg-white/30" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-white/85 mb-10 leading-relaxed font-light"
        >
          {company.tagline}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="shadow-accent min-w-[240px] bg-accent hover:bg-accent/90 text-white border-0"
          >
            <Link href="#about">
              Découvrir Mandiba Group
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="min-w-[240px] border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white hover:border-white/50 backdrop-blur-sm"
          >
            <Link href="#contact">Nous contacter</Link>
          </Button>
        </motion.div>

        {/* Indicateurs activité (mini stats élégantes) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 flex items-center justify-center gap-8 sm:gap-12 text-white/60"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">2</div>
            <div className="text-xs uppercase tracking-wider mt-1">Pôles</div>
          </div>
          <div className="h-10 w-px bg-white/15" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">8</div>
            <div className="text-xs uppercase tracking-wider mt-1">Services</div>
          </div>
          <div className="h-10 w-px bg-white/15" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">1</div>
            <div className="text-xs uppercase tracking-wider mt-1">Adresse</div>
          </div>
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
        >
          <ArrowDown className="h-6 w-6 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
