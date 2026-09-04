"use client";

import { Eye, Target } from "lucide-react";
import { about, company } from "@/data/site-data";
import { Reveal } from "@/lib/reveal";

export function About() {
  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-background"
      aria-labelledby="about-title"
    >
      <div className="container-mandiba">
        {/* En-tête de section */}
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            À propos
          </span>
          <h2
            id="about-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            {about.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {about.intro}
          </p>
        </Reveal>

        {/* Corps — 2 paragraphes */}
        <div className="max-w-3xl mx-auto space-y-6 mb-16">
          {about.body.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="text-base lg:text-lg text-foreground/80 leading-relaxed">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Vision + Mission */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <Reveal delay={0}>
            <article className="group h-full p-8 lg:p-10 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 hover:shadow-mandiba transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                  {about.vision.title}
                </h3>
              </div>
              <p className="text-foreground/75 leading-relaxed">
                {about.vision.text}
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.15}>
            <article className="group h-full p-8 lg:p-10 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 hover:shadow-mandiba transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                  {about.mission.title}
                </h3>
              </div>
              <p className="text-foreground/75 leading-relaxed">
                {about.mission.text}
              </p>
            </article>
          </Reveal>
        </div>

        {/* Localisation discrète */}
        <Reveal delay={0.2} className="text-center mt-16">
          <p className="text-sm text-muted-foreground">
            Basée à{" "}
            <span className="font-medium text-foreground">
              {company.address.full}
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
