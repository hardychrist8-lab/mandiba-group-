"use client";

import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { company } from "@/data/site-data";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mandiba-dark"
      aria-label="Section d'accueil"
    >
      {/* Motif diagonal inspiré du logo (très subtil) */}
      <div
        className="absolute inset-0 pattern-mandiba-diagonal opacity-60"
        aria-hidden="true"
      />

      {/* Lueur rouge en bas */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[80%] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(ellipse, #e31e24 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Bandes diagonales décoratives (rappel du logo) */}
      <div
        className="absolute top-0 right-0 h-full w-1/3 opacity-10 pointer-events-none hidden md:block"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/4 right-12 h-40 w-1.5 rotate-[65deg] bg-primary"
        />
        <div
          className="absolute top-1/3 right-20 h-56 w-1.5 rotate-[65deg] bg-white/30"
        />
        <div
          className="absolute top-1/4 right-28 h-40 w-1.5 rotate-[65deg] bg-white/50"
        />
      </div>

      {/* Contenu */}
      <div className="container-mandiba relative z-10 text-center pt-20 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/15 mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-white/90 tracking-wide uppercase">
            {company.signature}
          </span>
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2 leading-none"
        >
          <span className="text-white">MANDIBA</span>{" "}
          <span className="text-primary">GROUP</span>
        </motion.h1>

        {/* Ligne rouge séparatrice */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-1 w-24 mx-auto bg-primary rounded-full my-8 origin-center"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-white/80 mb-10 leading-relaxed font-light"
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
          <Button
            asChild
            size="lg"
            className="shadow-mandiba-red min-w-[240px] bg-primary hover:bg-primary/90 text-white"
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
            className="min-w-[240px] border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white hover:border-white/50"
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
        >
          <ArrowDown className="h-6 w-6 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
