"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { company } from "@/data/site-data";
import { Reveal } from "@/lib/reveal";

export function CeoMessage() {
  return (
    <section
      id="direction"
      className="py-20 lg:py-32 bg-background"
      aria-labelledby="ceo-title"
    >
      <div className="container-mandiba">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Photo du PDG */}
          <Reveal className="order-1 lg:order-1">
            <div className="relative mx-auto max-w-md">
              {/* Décor arrière */}
              <div
                className="absolute -inset-4 rounded-3xl bg-mandiba-gradient opacity-10 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-mandiba-lg bg-secondary">
                <Image
                  src={company.ceo.photo}
                  alt={`${company.ceo.name}, ${company.ceo.role}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </Reveal>

          {/* Texte */}
          <div className="order-2 lg:order-2">
            <Reveal>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
                Direction
              </span>
              <h2
                id="ceo-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8"
              >
                Mot du PDG
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative">
                <Quote
                  className="absolute -top-4 -left-2 h-10 w-10 text-primary/20"
                  aria-hidden="true"
                />
                <blockquote className="relative pl-8">
                  <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed italic">
                    {company.ceo.message}
                  </p>
                </blockquote>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 pl-8">
                <p className="text-xl font-bold text-foreground">
                  {company.ceo.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {company.ceo.role}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
