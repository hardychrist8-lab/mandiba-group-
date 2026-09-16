"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { vehicles, type VehicleType } from "@/data/vehicles";
import { useCatalogue } from "@/lib/catalogue-store";
import { VehicleCard } from "./VehicleCard";
import { VehicleDetail } from "./VehicleDetail";

type Filter = "all" | VehicleType;

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "Tous" },
  { key: "location", label: "Location" },
  { key: "vente", label: "Vente" },
];

export function Catalogue() {
  const isOpen = useCatalogue((s) => s.isOpen);
  const closeCatalogue = useCatalogue((s) => s.closeCatalogue);
  const selectedVehicleId = useCatalogue((s) => s.selectedVehicleId);

  const [filter, setFilter] = useState<Filter>("all");

  // Bloque le scroll du body quand le catalogue est ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Ferme avec Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCatalogue();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCatalogue]);

  const filteredVehicles = useMemo(() => {
    if (filter === "all") return vehicles;
    return vehicles.filter((v) => v.type === filter);
  }, [filter]);

  const selectedVehicle = vehicles.find((v) => v.id === selectedVehicleId);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-background"
        >
          {/* En-tête avec fond bleu */}
          <div className="bg-mandiba-dark relative overflow-hidden">
            {/* Motif points */}
            <div
              className="absolute inset-0 pattern-dots opacity-40 pointer-events-none"
              aria-hidden="true"
            />
            <div className="container-mandiba relative py-8 lg:py-12">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">
                    Catalogue
                  </span>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                    Notre flotte de véhicules
                  </h1>
                  <p className="text-white/70 text-base lg:text-lg max-w-2xl">
                    Découvrez nos véhicules disponibles à la location et à la
                    vente. Cliquez sur un véhicule pour voir les photos et nous
                    contacter.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeCatalogue}
                  className="shrink-0 h-11 w-11 flex items-center justify-center rounded-full glass-dark border border-white/15 text-white hover:bg-white/10 transition-colors"
                  aria-label="Fermer le catalogue"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="container-mandiba py-8 lg:py-12 max-h-[calc(100vh-280px)] overflow-y-auto">
            <AnimatePresence mode="wait">
              {selectedVehicle ? (
                <VehicleDetail key="detail" vehicle={selectedVehicle} />
              ) : (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Filtres */}
                  <div className="flex items-center gap-2 mb-8 pb-6 border-b border-border">
                    {FILTERS.map((f) => {
                      const count =
                        f.key === "all"
                          ? vehicles.length
                          : vehicles.filter((v) => v.type === f.key).length;
                      return (
                        <button
                          key={f.key}
                          type="button"
                          onClick={() => setFilter(f.key)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                            filter === f.key
                              ? "bg-primary text-white shadow-mandiba"
                              : "bg-secondary text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
                          }`}
                        >
                          {f.label}
                          <span
                            className={`text-xs px-1.5 py-0.5 rounded-full ${
                              filter === f.key
                                ? "bg-white/20"
                                : "bg-muted-foreground/10"
                            }`}
                          >
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Grille véhicules */}
                  <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    <AnimatePresence mode="popLayout">
                      {filteredVehicles.map((vehicle) => (
                        <VehicleCard
                          key={vehicle.id}
                          vehicle={vehicle}
                        />
                      ))}
                    </AnimatePresence>
                  </motion.div>

                  {/* Message si aucun véhicule */}
                  {filteredVehicles.length === 0 && (
                    <div className="text-center py-16 text-muted-foreground">
                      <p className="text-lg">
                        Aucun véhicule dans cette catégorie pour le moment.
                      </p>
                      <p className="text-sm mt-2">
                        Revenez bientôt ou contactez-nous directement.
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
