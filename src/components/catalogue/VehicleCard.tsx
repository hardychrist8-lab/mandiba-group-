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
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className="group relative text-left rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-mandiba transition-all duration-300 hover:-translate-y-0.5"
    >
      {/* Photo — format plus compact (3/2 au lieu de 4/3) */}
      <div className="relative aspect-[3/2] overflow-hidden bg-secondary">
        <Image
          src={vehicle.photos[0]}
          alt={vehicle.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Badge type */}
        <div className="absolute top-2 left-2">
          <span
            className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold backdrop-blur-sm ${
              vehicle.type === "location"
                ? "bg-primary/90 text-white"
                : "bg-accent/90 text-white"
            }`}
          >
            {typeLabel}
          </span>
        </div>
      </div>

      {/* Infos — plus compactes */}
      <div className="p-3 sm:p-4">
        <h3 className="text-sm sm:text-base font-bold text-foreground mb-0.5 group-hover:text-primary transition-colors line-clamp-1">
          {vehicle.name}
        </h3>
        <div className="flex items-center gap-1 text-[10px] text-muted-foreground mb-2">
          <MapPin className="h-3 w-3" />
          <span>Abidjan</span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <span className="block text-base sm:text-lg font-bold text-primary">
              {formatPrice(vehicle.price)}
            </span>
            {vehicle.priceUnit && (
              <span className="text-[10px] text-muted-foreground">
                {vehicle.priceUnit}
              </span>
            )}
          </div>
          <span className="text-[11px] sm:text-xs font-medium text-primary group-hover:gap-2 transition-all flex items-center gap-1">
            Détails
            <svg
              className="h-3 w-3 sm:h-3.5 sm:w-3.5"
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
