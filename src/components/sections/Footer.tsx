"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { company, nav, legalLinks } from "@/data/site-data";

export function Footer() {
  return (
    <footer
      className="mt-auto bg-mandiba-darker text-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Pied de page
      </h2>

      <div className="container-mandiba py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Colonne 1 — Entreprise */}
          <div>
            <Link
              href="#hero"
              className="flex items-center gap-3 mb-4"
              aria-label={`${company.name} — ${company.signature}`}
            >
              <div className="relative h-10 w-10 shrink-0">
                <Image
                  src={company.logo}
                  alt={`Logo ${company.name}`}
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <div className="leading-none">
                <div className="font-bold text-base">{company.name}</div>
                <div className="text-[11px] text-white/60 mt-1">
                  {company.signature}
                </div>
              </div>
            </Link>
            <p className="text-sm text-white/55 leading-relaxed">
              {company.description}
            </p>
          </div>

          {/* Colonne 2 — Navigation */}
          <nav aria-label="Navigation footer">
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Colonne 3 — Contact (simplifié : juste phones + email) */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Nous contacter
            </h3>
            <ul className="space-y-3">
              {/* Téléphones */}
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-white/40 mt-0.5 shrink-0" />
                <div className="space-y-1">
                  {company.phones.map((phone) => (
                    <a
                      key={phone.tel}
                      href={`tel:${phone.tel}`}
                      className="block text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {phone.number}
                    </a>
                  ))}
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-white/40 mt-0.5 shrink-0" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm text-white/60 hover:text-white transition-colors break-all"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bas du footer — compact */}
      <div className="border-t border-white/10">
        <div className="container-mandiba py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">
            © {company.year} {company.name} — Tous droits réservés.
          </p>
          <ul className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs text-white/40 hover:text-white/70 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
