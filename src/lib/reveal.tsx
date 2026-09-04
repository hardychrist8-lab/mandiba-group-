/**
 * Composant Reveal — animation scroll-reveal avec GSAP ScrollTrigger.
 *
 * Usage :
 * <Reveal as="h2" delay={0.1} y={40}>Contenu animé</Reveal>
 *
 * Respecte prefers-reduced-motion (GSAP géré via matchMedia).
 */
"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/hooks/use-isomorphic-layout-effect";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
}

export function Reveal({
  children,
  as,
  className,
  delay = 0,
  y = 40,
  duration = 0.8,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const Tag = (as ?? "div") as ElementType;

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Accessibilité : si l'utilisateur réduit les animations
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          el,
          { opacity: 0, y },
          {
            opacity: 1,
            y: 0,
            duration,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: once
                ? "play none none none"
                : "play reverse play reverse",
            },
          }
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(el, { opacity: 1, y: 0 });
      });
    }, el);

    return () => ctx.revert();
  }, [delay, y, duration, once]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
