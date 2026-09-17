/**
 * ============================================================
 * MANDIBA GROUP TRANSPORT — Catalogue véhicules
 * ============================================================
 * Données centralisées des véhicules.
 * Pour ajouter/modifier un véhicule, éditez ce fichier.
 *
 * Type : "location" (à louer) ou "vente" (à vendre)
 * Prix en FCFA.
 * ============================================================
 */

export type VehicleType = "location" | "vente";

export interface Vehicle {
  id: string;
  name: string;
  type: VehicleType;
  price: number; // FCFA
  priceUnit: string; // "/jour" pour location, "" pour vente
  withDriver: boolean; // disponible avec chauffeur
  photos: string[];
  description: string;
  specs: {
    year?: number;
    fuel?: string;
    seats?: number;
    transmission?: string;
  };
}

export const vehicles: Vehicle[] = [
  {
    id: "bestune-t77",
    name: "Bestune T77",
    type: "location",
    price: 50000,
    priceUnit: "/jour",
    withDriver: true,
    photos: [
      "/vehicles/bestune-t77-2.jpg",
      "/vehicles/bestune-t77-4.jpg",
      "/vehicles/bestune-t77-5.jpg",
      "/vehicles/bestune-t77-1.jpg",
      "/vehicles/bestune-t77-3.jpg",
    ],
    description:
      "SUV moderne et spacieux, parfait pour vos déplacements en ville comme sur autoroute. Design élégant et confort optimal. Disponible avec chauffeur.",
    specs: {
      year: 2022,
      seats: 5,
      transmission: "Automatique",
    },
  },
  {
    id: "haval-h6",
    name: "Haval H6",
    type: "location",
    price: 50000,
    priceUnit: "/jour",
    withDriver: true,
    photos: [
      "/vehicles/haval-h6-5.png",
      "/vehicles/haval-h6-1.png",
      "/vehicles/haval-h6-2.png",
      "/vehicles/haval-h6-4.png",
      "/vehicles/haval-h6-3.png",
    ],
    description:
      "SUV élégant et puissant, offrant un excellent rapport qualité-prix. Spacieux, confortable et équipé de technologies modernes. Disponible avec chauffeur.",
    specs: {
      year: 2022,
      seats: 5,
      transmission: "Automatique",
    },
  },
];

/**
 * Formate un prix en FCFA avec séparateurs de milliers.
 */
export function formatPrice(price: number): string {
  return price.toLocaleString("fr-FR") + " FCFA";
}

/**
 * Construit le message WhatsApp pré-rempli pour un véhicule donné.
 */
export function buildWhatsappMessage(vehicle: Vehicle): string {
  const typeLabel = vehicle.type === "location" ? "location" : "vente";
  const chauffeurLabel = vehicle.withDriver ? " avec chauffeur" : "";
  const priceStr =
    formatPrice(vehicle.price) + (vehicle.priceUnit || "");
  return (
    `Bonjour MANDIBA GROUP Transport, je suis intéressé(e) par le véhicule ` +
    `${vehicle.name} disponible en ${typeLabel}${chauffeurLabel} à ${priceStr}. ` +
    `Est-il toujours disponible ?`
  );
}
