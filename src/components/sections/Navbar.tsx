"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { company, nav } from "@/data/site-data";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloque le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-border/60 shadow-mandiba"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-mandiba flex items-center justify-between h-16 lg:h-20"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <Link
          href="#hero"
          className="flex items-center gap-3 group"
          aria-label={`${company.name} — ${company.signature}`}
        >
          <div className="relative h-10 w-10 lg:h-12 lg:w-12 shrink-0">
            <Image
              src={company.logo}
              alt={`Logo ${company.name}`}
              fill
              className="object-contain"
              sizes="48px"
              priority
            />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-bold text-base lg:text-lg text-primary tracking-tight">
              {company.name}
            </span>
            <span className="text-[11px] lg:text-xs text-muted-foreground font-medium">
              {company.signature}
            </span>
          </div>
        </Link>

        {/* Menu desktop */}
        <ul className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <div className="hidden lg:block">
          <Button asChild size="sm" className="shadow-mandiba">
            <Link href="#contact">
              <Phone className="mr-2 h-4 w-4" />
              Nous contacter
            </Link>
          </Button>
        </div>

        {/* Bouton hamburger mobile */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-md text-primary hover:bg-secondary transition-colors"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Menu mobile plein écran */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 top-16 bg-background z-40 flex flex-col"
          >
            <ul className="flex flex-col p-6 gap-2">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 px-4 text-lg font-medium text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors border-b border-border/40"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto p-6">
              <Button asChild className="w-full" size="lg">
                <Link href="#contact" onClick={() => setMobileOpen(false)}>
                  <Phone className="mr-2 h-5 w-5" />
                  Nous contacter
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
