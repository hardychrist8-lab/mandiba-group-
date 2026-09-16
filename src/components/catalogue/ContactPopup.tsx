"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X } from "lucide-react";
import { type Vehicle, buildWhatsappMessage } from "@/data/vehicles";
import { company } from "@/data/site-data";
import { useCatalogue } from "@/lib/catalogue-store";

export function ContactPopup({ vehicle }: { vehicle: Vehicle }) {
  const setShowContact = useCatalogue((s) => s.setShowContact);

  const whatsappMessage = buildWhatsappMessage(vehicle);
  const whatsappUrl = `${company.whatsapp.link}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={() => setShowContact(false)}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="bg-card rounded-2xl shadow-mandiba-lg max-w-sm w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fermer */}
        <button
          type="button"
          onClick={() => setShowContact(false)}
          className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-full hover:bg-secondary transition-colors"
          aria-label="Fermer"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        {/* Titre */}
        <h3 className="text-xl font-bold text-foreground mb-1">
          Contactez-nous
        </h3>
        <p className="text-sm text-muted-foreground mb-6">
          Pour le véhicule{" "}
          <span className="font-semibold text-foreground">{vehicle.name}</span>
        </p>

        {/* Boutons */}
        <div className="space-y-3">
          {/* Appeler */}
          <a
            href={`tel:${company.phones[2].tel}`}
            className="flex items-center gap-4 p-4 rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors group"
          >
            <div className="flex items-center justify-center h-11 w-11 rounded-full bg-white/15">
              <Phone className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="text-xs uppercase tracking-wide text-white/70">
                Appeler
              </div>
              <div className="font-semibold">{company.phones[2].number}</div>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-[#25D366] text-white hover:bg-[#1ebe5d] transition-colors group"
          >
            <div className="flex items-center justify-center h-11 w-11 rounded-full bg-white/15">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="text-xs uppercase tracking-wide text-white/70">
                WhatsApp
              </div>
              <div className="font-semibold">Envoyer un message</div>
            </div>
          </a>
        </div>

        <p className="text-xs text-muted-foreground mt-4 text-center">
          Message pré-rempli envoyé automatiquement
        </p>
      </motion.div>
    </motion.div>
  );
}
