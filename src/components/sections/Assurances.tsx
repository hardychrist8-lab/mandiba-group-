"use client";

import { assurancesServices } from "@/data/site-data";
import { Icon } from "@/lib/icon";
import { Reveal } from "@/lib/reveal";

export function Assurances() {
  return (
    <section
      id="assurances"
      className="py-20 lg:py-32 bg-background"
      aria-labelledby="assurances-title"
    >
      <div className="container-mandiba">
        {/* En-tête */}
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Assurances
          </span>
          <h2
            id="assurances-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Des protections pour chaque moment
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Une gamme d'assurances pensée pour vous accompagner à chaque étape
            de votre vie.
          </p>
        </Reveal>

        {/* Grille des 5 services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {assurancesServices.map((service, i) => (
            <Reveal key={service.name} delay={i * 0.1}>
              <article className="group h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-mandiba hover:-translate-y-1 transition-all duration-300">
                {/* Icône */}
                <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all">
                  <Icon name={service.icon} className="h-7 w-7" />
                </div>

                {/* Titre */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}

          {/* Carte CTA — ferme la grille sur 5 éléments */}
          <Reveal delay={0.5}>
            <article className="h-full p-8 rounded-2xl bg-mandiba-gradient text-white flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-bold mb-3">
                Besoin d'un conseil ?
              </h3>
              <p className="text-white/80 text-sm mb-6 leading-relaxed">
                Contactez notre équipe pour identifier la solution la mieux
                adaptée à votre situation.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-white text-primary text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                Nous contacter
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
