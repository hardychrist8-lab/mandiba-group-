"use client";

import Link from "next/link";
import { ArrowRight, Shield, Truck } from "lucide-react";
import { activities } from "@/data/site-data";
import { Reveal } from "@/lib/reveal";

export function Activities() {
  return (
    <section
      id="activites"
      className="relative py-20 lg:py-32 bg-mandiba-gradient overflow-hidden"
      aria-labelledby="activities-title"
    >
      {/* Décor : cercles lumineux discrets */}
      <div
        className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-white/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-white/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-mandiba relative">
        {/* En-tête */}
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/60 mb-4">
            Nos activités
          </span>
          <h2
            id="activities-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Deux pôles, une même exigence
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            MANDIBA GROUP réunit le transport et les assurances pour offrir des
            solutions complètes à ses clients.
          </p>
        </Reveal>

        {/* Deux cartes liées */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {activities.map((activity, i) => (
            <Reveal key={activity.id} delay={i * 0.15}>
              <Link
                href={`#${activity.id}`}
                className="group block h-full p-8 lg:p-10 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                {/* Icône + titre */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-white/10 text-white group-hover:bg-white group-hover:text-primary transition-colors">
                    {activity.id === "assurances" ? (
                      <Shield className="h-7 w-7" />
                    ) : (
                      <Truck className="h-7 w-7" />
                    )}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">
                    {activity.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-white/70 leading-relaxed mb-8">
                  {activity.description}
                </p>

                {/* Liste des services */}
                <ul className="space-y-3 mb-8">
                  {activity.services.map((service) => (
                    <li
                      key={service.name}
                      className="flex items-center gap-3 text-white/80"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                      <span className="text-sm lg:text-base">
                        {service.name}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Lien vers section détaillée */}
                <div className="flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all">
                  En savoir plus
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
