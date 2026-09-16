"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Fuel,
  Users,
  Settings2,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";
import { type Vehicle, formatPrice } from "@/data/vehicles";
import { useCatalogue } from "@/lib/catalogue-store";
import { ContactPopup } from "./ContactPopup";

export function VehicleDetail({ vehicle }: { vehicle: Vehicle }) {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const selectVehicle = useCatalogue((s) => s.selectVehicle);
  const showContact = useCatalogue((s) => s.showContact);
  const setShowContact = useCatalogue((s) => s.setShowContact);

  const total = vehicle.photos.length;

  const nextPhoto = useCallback(
    () => setCurrentPhoto((p) => (p + 1) % total),
    [total]
  );
  const prevPhoto = useCallback(
    () => setCurrentPhoto((p) => (p - 1 + total) % total),
    [total]
  );

  // Navigation clavier
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [nextPhoto, prevPhoto]);

  const typeLabel = vehicle.type === "location" ? "Location" : "Vente";

  const specs = [
    { icon: Calendar, label: "Année", value: vehicle.specs.year },
    { icon: Fuel, label: "Carburant", value: vehicle.specs.fuel },
    { icon: Users, label: "Places", value: vehicle.specs.seats },
    { icon: Settings2, label: "Boîte", value: vehicle.specs.transmission },
  ].filter((s) => s.value);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-full"
    >
      {/* Barre retour */}
      <button
        type="button"
        onClick={() => selectVehicle(null)}
        className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-4 self-start"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour au catalogue
      </button>

      {/* Carrousel photos — taille réduite (max-w + ratio plus court) */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-secondary shadow-mandiba mb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhoto}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={vehicle.photos[currentPhoto]}
              alt={`${vehicle.name} — photo ${currentPhoto + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 70vw"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Flèches */}
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={prevPhoto}
              className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full glass-dark text-white hover:bg-black/60 transition-colors"
              aria-label="Photo précédente"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={nextPhoto}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full glass-dark text-white hover:bg-black/60 transition-colors"
              aria-label="Photo suivante"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Compteur */}
        <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full glass-dark text-white text-xs font-medium">
          {currentPhoto + 1} / {total}
        </div>
      </div>

      {/* Points de navigation */}
      {total > 1 && (
        <div className="flex items-center justify-center gap-2 mb-6">
          {vehicle.photos.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentPhoto(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentPhoto
                  ? "w-8 bg-primary"
                  : "w-2 bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Photo ${i + 1}`}
            />
          ))}
        </div>
      )}
      </div>

      {/* Infos */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              {vehicle.name}
            </h2>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                vehicle.type === "location"
                  ? "bg-primary/10 text-primary"
                  : "bg-accent/10 text-accent"
              }`}
            >
              {typeLabel}
            </span>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            {vehicle.description}
          </p>
        </div>
        <div className="shrink-0 text-right">
          <div className="text-3xl font-bold text-primary">
            {formatPrice(vehicle.price)}
          </div>
          {vehicle.priceUnit && (
            <div className="text-sm text-muted-foreground">
              {vehicle.priceUnit}
            </div>
          )}
        </div>
      </div>

      {/* Caractéristiques */}
      {specs.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="flex flex-col items-center text-center p-4 rounded-xl bg-secondary/50 border border-border"
            >
              <spec.icon className="h-5 w-5 text-primary mb-2" />
              <span className="text-xs text-muted-foreground uppercase tracking-wide">
                {spec.label}
              </span>
              <span className="font-semibold text-foreground text-sm">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Bouton contact */}
      <div className="mt-auto">
        <button
          type="button"
          onClick={() => setShowContact(true)}
          className="w-full flex items-center justify-center gap-2 p-4 rounded-xl bg-accent text-white font-semibold shadow-accent hover:bg-accent/90 transition-colors"
        >
          <MessageCircle className="h-5 w-5" />
          Nous contacter pour ce véhicule
        </button>
      </div>

      {/* Popup contact */}
      <AnimatePresence>
        {showContact && <ContactPopup vehicle={vehicle} />}
      </AnimatePresence>
    </motion.div>
  );
}
