"use client";

import { values } from "@/data/site-data";
import { Icon } from "@/lib/icon";
import { Reveal } from "@/lib/reveal";

export function WhyUs() {
  return (
    <section
      id="pourquoi"
      className="py-20 lg:py-32 bg-mandiba-gradient relative overflow-hidden"
      aria-labelledby="whyus-title"
    >
      {/* Décor */}
      <div
        className="absolute top-0 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-white/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-mandiba relative">
        {/* En-tête */}
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/60 mb-4">
            Pourquoi nous
          </span>
          <h2
            id="whyus-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Pourquoi Mandiba Group ?
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            Des valeurs qui guident chacune de nos actions au quotidien.
          </p>
        </Reveal>

        {/* 4 valeurs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.1}>
              <article className="group h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 text-center">
                {/* Icône */}
                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-white/10 text-white mx-auto mb-6 group-hover:bg-white group-hover:text-primary group-hover:scale-110 transition-all">
                  <Icon name={value.icon} className="h-8 w-8" />
                </div>

                {/* Titre */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
