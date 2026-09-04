"use client";

import dynamic from "next/dynamic";
import { MapPin, Clock } from "lucide-react";
import { company } from "@/data/site-data";
import { Reveal } from "@/lib/reveal";

// Carte Leaflet chargée côté client uniquement (Leaflet utilise window)
const MapInner = dynamic(
  () => import("@/components/sections/MapInner").then((m) => m.MapInner),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full flex items-center justify-center text-muted-foreground text-sm">
        Chargement de la carte…
      </div>
    ),
  }
);

export function Location() {
  return (
    <section
      id="localisation"
      className="py-20 lg:py-32 bg-background"
      aria-labelledby="location-title"
    >
      <div className="container-mandiba">
        {/* En-tête */}
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Localisation
          </span>
          <h2
            id="location-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Nous trouver
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {company.address.short}
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Carte */}
          <Reveal className="lg:col-span-3" delay={0}>
            <div className="h-[360px] lg:h-full min-h-[360px] rounded-2xl overflow-hidden border border-border shadow-mandiba bg-secondary">
              <MapInner />
            </div>
          </Reveal>

          {/* Informations */}
          <Reveal className="lg:col-span-2" delay={0.15}>
            <div className="h-full flex flex-col gap-6">
              {/* Adresse */}
              <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-11 w-11 rounded-xl bg-primary/10 text-primary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Adresse</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {company.address.full}
                    </p>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-11 w-11 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Horaires</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {company.hours.days}
                      <br />
                      {company.hours.short}
                    </p>
                  </div>
                </div>
              </div>

              {/* Note */}
              <p className="text-xs text-muted-foreground px-2">
                Coordonnées approximatives du quartier. L'adresse exacte sera
                utilisée pour un positionnement précis ultérieurement.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
