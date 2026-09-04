"use client";

import { transportServices } from "@/data/site-data";
import { Icon } from "@/lib/icon";
import { Reveal } from "@/lib/reveal";

export function Transport() {
  return (
    <section
      id="transport"
      className="py-20 lg:py-32 bg-mandiba-light"
      aria-labelledby="transport-title"
    >
      <div className="container-mandiba">
        {/* En-tête */}
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Transport
          </span>
          <h2
            id="transport-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Des solutions de mobilité adaptées
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Location, vente et gestion de véhicules : un accompagnement complet
            pour vos besoins de transport.
          </p>
        </Reveal>

        {/* Grille des 3 services */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {transportServices.map((service, i) => (
            <Reveal key={service.name} delay={i * 0.15}>
              <article className="group h-full p-8 lg:p-10 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-mandiba-lg hover:-translate-y-1 transition-all duration-300 text-center">
                {/* Icône */}
                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 text-primary mb-6 mx-auto group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all">
                  <Icon name={service.icon} className="h-8 w-8" />
                </div>

                {/* Titre */}
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Note discrète */}
        <Reveal delay={0.4} className="text-center mt-12">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Pour en savoir plus sur nos services de transport et vérifier la
            disponibilité, contactez notre équipe.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
