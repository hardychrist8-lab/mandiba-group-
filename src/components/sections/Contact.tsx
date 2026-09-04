"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { company } from "@/data/site-data";
import { Reveal } from "@/lib/reveal";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-mandiba-light"
      aria-labelledby="contact-title"
    >
      <div className="container-mandiba">
        {/* En-tête */}
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Contact
          </span>
          <h2
            id="contact-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Parlons de votre projet
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Une question, un besoin ? Contactez notre équipe par téléphone ou
            par email.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Téléphones — cliquables */}
          <Reveal delay={0}>
            <article className="h-full p-8 rounded-2xl bg-card border border-border hover:shadow-mandiba transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Téléphone</h3>
              </div>
              <ul className="space-y-3">
                {company.phones.map((phone) => (
                  <li key={phone.tel}>
                    <a
                      href={`tel:${phone.tel}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors group"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-xs text-muted-foreground uppercase tracking-wide">
                          {phone.label}
                        </span>
                        <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {phone.number}
                        </span>
                      </span>
                      <Phone className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                Cliquez sur un numéro pour appeler directement.
              </p>
            </article>
          </Reveal>

          {/* Email — cliquable */}
          <Reveal delay={0.15}>
            <article className="h-full p-8 rounded-2xl bg-card border border-border hover:shadow-mandiba transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Email</h3>
              </div>
              <a
                href={`mailto:${company.email}`}
                className="block p-4 rounded-lg hover:bg-secondary transition-colors group"
              >
                <span className="block text-lg font-semibold text-foreground group-hover:text-primary transition-colors break-all">
                  {company.email}
                </span>
              </a>
              <p className="mt-4 text-xs text-muted-foreground">
                Cliquez sur l'email pour ouvrir votre messagerie.
              </p>
              <div className="mt-6">
                <Button asChild className="w-full">
                  <a href={`mailto:${company.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Écrire un email
                  </a>
                </Button>
              </div>
            </article>
          </Reveal>

          {/* Adresse */}
          <Reveal delay={0.3}>
            <article className="h-full p-8 rounded-2xl bg-card border border-border hover:shadow-mandiba transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Adresse</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                {company.address.full}
              </p>
              <a
                href="#localisation"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
              >
                Voir sur la carte
                <MapPin className="h-4 w-4" />
              </a>
            </article>
          </Reveal>

          {/* Horaires */}
          <Reveal delay={0.45}>
            <article className="h-full p-8 rounded-2xl bg-card border border-border hover:shadow-mandiba transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Horaires</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                {company.hours.days}
              </p>
              <p className="text-2xl font-bold text-primary mt-2">
                {company.hours.short}
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
