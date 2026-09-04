"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { company, nav, footerServices, legalLinks } from "@/data/site-data";

export function Footer() {
  return (
    <footer
      className="mt-auto bg-mandiba-gradient text-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Pied de page
      </h2>

      <div className="container-mandiba py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Colonne 1 — Entreprise */}
          <div>
            <Link
              href="#hero"
              className="flex items-center gap-3 mb-5"
              aria-label={`${company.name} — ${company.signature}`}
            >
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  src={company.logo}
                  alt={`Logo ${company.name}`}
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div className="leading-none">
                <div className="font-bold text-lg">{company.name}</div>
                <div className="text-xs text-white/60 mt-1">
                  {company.signature}
                </div>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              {company.description}
            </p>
          </div>

          {/* Colonne 2 — Navigation */}
          <nav aria-label="Navigation footer">
            <h3 className="font-semibold text-white mb-5">Navigation</h3>
            <ul className="space-y-3">
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

          {/* Colonne 3 — Services */}
          <div>
            <h3 className="font-semibold text-white mb-5">Nos services</h3>
            <ul className="space-y-3 grid grid-cols-1">
              {footerServices.map((service) => (
                <li key={service}>
                  <Link
                    href="#assurances"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 — Contact */}
          <div>
            <h3 className="font-semibold text-white mb-5">Nous contacter</h3>
            <ul className="space-y-4">
              {/* Téléphones */}
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-white/50 mt-0.5 shrink-0" />
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
                <Mail className="h-4 w-4 text-white/50 mt-0.5 shrink-0" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm text-white/60 hover:text-white transition-colors break-all"
                >
                  {company.email}
                </a>
              </li>

              {/* Adresse */}
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-white/50 mt-0.5 shrink-0" />
                <span className="text-sm text-white/60 leading-relaxed">
                  {company.address.full}
                </span>
              </li>

              {/* Horaires */}
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-white/50 mt-0.5 shrink-0" />
                <span className="text-sm text-white/60 leading-relaxed">
                  {company.hours.value}
                </span>
              </li>
            </ul>

            {/* Réseaux sociaux : vide par spécification */}
          </div>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="border-t border-white/10">
        <div className="container-mandiba py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 text-center md:text-left">
            © {company.year} {company.name} — Tous droits réservés.
          </p>
          <ul className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs text-white/50 hover:text-white transition-colors"
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
