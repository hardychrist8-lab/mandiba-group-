"use client";

import Link from "next/link";
import { ArrowRight, Shield, Truck } from "lucide-react";
import { activities } from "@/data/site-data";
import { Icon } from "@/lib/icon";
import { Reveal } from "@/lib/reveal";

export function Activities() {
  return (
    <section
      id="activites"
      className="py-20 lg:py-32 bg-mandiba-light relative overflow-hidden"
      aria-labelledby="activities-title"
    >
      {/* Motif grille subtil */}
      <div
        className="absolute inset-0 pattern-grid opacity-50 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-mandiba relative">
        {/* En-tête */}
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            Nos activités
          </span>
          <h2
            id="activities-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Deux pôles, une même exigence
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            MANDIBA GROUP réunit le transport et les assurances pour offrir des
            solutions complètes à ses clients.
          </p>
        </Reveal>

        {/* Deux cartes premium (sans illustrations) */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {activities.map((activity, i) => (
            <Reveal key={activity.id} delay={i * 0.15}>
              <Link
                href={`#${activity.id}`}
                className="group relative block h-full p-8 lg:p-10 rounded-2xl bg-card border border-border overflow-hidden hover:shadow-mandiba-lg transition-all duration-500 hover:-translate-y-1"
              >
                {/* Accent latéral rouge au survol */}
                <div
                  className="absolute left-0 top-0 h-full w-1 bg-accent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500"
                  aria-hidden="true"
                />

                {/* Décor géométrique subtil en arrière-plan */}
                <div
                  className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 group-hover:bg-accent/5 transition-colors duration-500"
                  aria-hidden="true"
                />
                <div
                  className="absolute -right-4 -bottom-4 h-20 w-20 rounded-full border-2 border-border/60 group-hover:border-accent/30 transition-colors duration-500"
                  aria-hidden="true"
                />

                {/* Contenu */}
                <div className="relative">
                  {/* Icône + titre */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-primary text-primary-foreground shadow-mandiba group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      {activity.id === "assurances" ? (
                        <Shield className="h-7 w-7" />
                      ) : (
                        <Truck className="h-7 w-7" />
                      )}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                      {activity.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {activity.description}
                  </p>

                  {/* Liste des services */}
                  <ul className="space-y-3 mb-8">
                    {activity.services.map((service) => (
                      <li
                        key={service.name}
                        className="flex items-center gap-3 text-foreground/80"
                      >
                        <span className="flex items-center justify-center h-7 w-7 rounded-md bg-secondary text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                          <Icon name={service.icon} className="h-4 w-4" />
                        </span>
                        <span className="text-sm lg:text-base font-medium">
                          {service.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Lien */}
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:text-accent group-hover:gap-3 transition-all">
                    En savoir plus
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
