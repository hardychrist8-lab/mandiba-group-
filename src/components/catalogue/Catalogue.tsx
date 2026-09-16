/* eslint-disable react-hooks/set-state-in-effect -- réinitialisation
   légitime de l'état recherche/filtre à la fermeture du catalogue. */
"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
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
  const [search, setSearch] = useState("");

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

  // Réinitialise la recherche quand on ferme
  useEffect(() => {
    if (!isOpen) {
      setSearch("");
      setFilter("all");
    }
  }, [isOpen]);

  // Filtrage combiné : type + recherche
  const filteredVehicles = useMemo(() => {
    let result = vehicles;
    if (filter !== "all") {
      result = result.filter((v) => v.type === filter);
    }
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter(
        (v) =>
          v.name.toLowerCase().includes(q) ||
          v.description.toLowerCase().includes(q)
      );
    }
    return result;
  }, [filter, search]);

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
          {/* En-tête compact (bleu foncé) */}
          <div className="bg-mandiba-dark relative overflow-hidden">
            <div
              className="absolute inset-0 pattern-dots opacity-30 pointer-events-none"
              aria-hidden="true"
            />
            <div className="container-mandiba relative py-5 lg:py-7">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <span className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-accent mb-1">
                    Catalogue
                  </span>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                    Notre flotte de véhicules
                  </h1>
                </div>
                <button
                  type="button"
                  onClick={closeCatalogue}
                  className="shrink-0 h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full glass-dark border border-white/15 text-white hover:bg-white/10 transition-colors"
                  aria-label="Fermer le catalogue"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Barre outils : recherche + filtres */}
          <div className="container-mandiba py-4 lg:py-5 border-b border-border">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Recherche */}
              <div className="relative flex-1 sm:max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Rechercher un véhicule..."
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground"
                  aria-label="Rechercher un véhicule"
                />
              </div>

              {/* Filtres */}
              <div className="flex items-center gap-2 flex-wrap">
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
                      className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 ${
                        filter === f.key
                          ? "bg-primary text-white shadow-mandiba"
                          : "bg-secondary text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
                      }`}
                    >
                      {f.label}
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full ${
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
            </div>
          </div>

          {/* Contenu : grille ou détail */}
          <div className="container-mandiba py-5 lg:py-6 max-h-[calc(100vh-220px)] overflow-y-auto">
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
                  {/* Compteur résultats */}
                  <p className="text-xs text-muted-foreground mb-4">
                    {filteredVehicles.length} véhicule
                    {filteredVehicles.length > 1 ? "s" : ""} trouvé
                    {filteredVehicles.length > 1 ? "s" : ""}
                    {search.trim() && (
                      <>
                        {" "}
                        pour «{" "}
                        <span className="font-medium text-foreground">
                          {search}
                        </span>
                        »
                      </>
                    )}
                  </p>

                  {/* Grille — cartes compactes */}
                  <motion.div
                    layout
                    className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5"
                  >
                    <AnimatePresence mode="popLayout">
                      {filteredVehicles.map((vehicle) => (
                        <VehicleCard key={vehicle.id} vehicle={vehicle} />
                      ))}
                    </AnimatePresence>
                  </motion.div>

                  {/* Message si aucun véhicule */}
                  {filteredVehicles.length === 0 && (
                    <div className="text-center py-12 text-muted-foreground">
                      <Search className="h-10 w-10 mx-auto mb-3 opacity-30" />
                      <p className="text-base font-medium">
                        Aucun véhicule trouvé
                      </p>
                      <p className="text-sm mt-1">
                        Essayez un autre mot-clé ou changez de filtre.
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
