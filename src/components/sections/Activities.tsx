"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Truck } from "lucide-react";
import { activities } from "@/data/site-data";
import { Reveal } from "@/lib/reveal";

export function Activities() {
  return (
    <section
      id="activites"
      className="py-20 lg:py-32 bg-background"
      aria-labelledby="activities-title"
    >
      <div className="container-mandiba">
        {/* En-tête */}
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
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

        {/* Deux cartes avec images de fond */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {activities.map((activity, i) => (
            <Reveal key={activity.id} delay={i * 0.15}>
              <Link
                href={`#${activity.id}`}
                className="group relative block h-[440px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden shadow-mandiba-lg hover:shadow-mandiba-red transition-all duration-500"
              >
                {/* Image de fond */}
                <Image
                  src={activity.image}
                  alt={`Illustration ${activity.title}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i === 0}
                />

                {/* Overlay dégradé sombre pour lisibilité */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"
                  aria-hidden="true"
                />

                {/* Bordure rouge au survol */}
                <div
                  className="absolute inset-0 rounded-2xl ring-2 ring-primary/0 group-hover:ring-primary/60 transition-all duration-500"
                  aria-hidden="true"
                />

                {/* Contenu */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10 text-white">
                  {/* Icône + titre */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary text-white shadow-mandiba-red">
                      {activity.id === "assurances" ? (
                        <Shield className="h-6 w-6" />
                      ) : (
                        <Truck className="h-6 w-6" />
                      )}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold">
                      {activity.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 leading-relaxed mb-5 text-sm sm:text-base max-w-md">
                    {activity.description}
                  </p>

                  {/* Liste des services */}
                  <ul className="flex flex-wrap gap-2 mb-6">
                    {activity.services.map((service) => (
                      <li
                        key={service.name}
                        className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs sm:text-sm text-white/90"
                      >
                        {service.name}
                      </li>
                    ))}
                  </ul>

                  {/* Lien */}
                  <div className="flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all">
                    En savoir plus
                    <ArrowRight className="h-4 w-4 text-primary" />
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
