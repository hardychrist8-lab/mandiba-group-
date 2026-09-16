"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { type Vehicle, formatPrice } from "@/data/vehicles";
import { useCatalogue } from "@/lib/catalogue-store";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const selectVehicle = useCatalogue((s) => s.selectVehicle);

  const typeLabel = vehicle.type === "location" ? "Location" : "Vente";

  return (
    <motion.button
      type="button"
      onClick={() => selectVehicle(vehicle.id)}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group relative text-left rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-mandiba-lg transition-all duration-300 hover:-translate-y-1"
    >
      {/* Photo principale */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <Image
          src={vehicle.photos[0]}
          alt={vehicle.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Badge type */}
        <div className="absolute top-3 left-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
              vehicle.type === "location"
                ? "bg-primary/90 text-white"
                : "bg-accent/90 text-white"
            }`}
          >
            {typeLabel}
          </span>
        </div>
      </div>

      {/* Infos */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
          {vehicle.name}
        </h3>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
          <MapPin className="h-3 w-3" />
          <span>Abidjan</span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <span className="block text-xl font-bold text-primary">
              {formatPrice(vehicle.price)}
            </span>
            {vehicle.priceUnit && (
              <span className="text-xs text-muted-foreground">
                {vehicle.priceUnit}
              </span>
            )}
          </div>
          <span className="text-sm font-medium text-primary group-hover:gap-2 transition-all flex items-center gap-1">
            Voir détails
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </motion.button>
  );
}
