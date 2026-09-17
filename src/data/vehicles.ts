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

// Véhicules d'exemple (placeholders) — à remplacer par les vraies données
export const vehicles: Vehicle[] = [
  {
    id: "toyota-corolla-2019",
    name: "Toyota Corolla 2019",
    type: "location",
    price: 25000,
    priceUnit: "/jour",
    withDriver: true,
    photos: [
      "/vehicles/vehicle-1-ext.jpg",
      "/vehicles/interior-1.jpg",
      "/vehicles/vehicle-1-ext.jpg",
      "/vehicles/interior-1.jpg",
    ],
    description:
      "Berline élégante et confortable, idéale pour vos déplacements professionnels et personnels. Spacieuse et économique.",
    specs: {
      year: 2019,
      fuel: "Essence",
      seats: 5,
      transmission: "Automatique",
    },
  },
  {
    id: "hyundai-tucson-2020",
    name: "Hyundai Tucson 2020",
    type: "location",
    price: 35000,
    priceUnit: "/jour",
    withDriver: true,
    photos: [
      "/vehicles/vehicle-2-ext.jpg",
      "/vehicles/interior-1.jpg",
      "/vehicles/vehicle-2-ext.jpg",
      "/vehicles/interior-1.jpg",
    ],
    description:
      "SUV moderne et spacieux, parfait pour les familles et les longs trajets. Position de conduite élevée et confort optimal.",
    specs: {
      year: 2020,
      fuel: "Diesel",
      seats: 5,
      transmission: "Automatique",
    },
  },
  {
    id: "renault-clio-2018",
    name: "Renault Clio 2018",
    type: "location",
    price: 18000,
    priceUnit: "/jour",
    withDriver: true,
    photos: [
      "/vehicles/vehicle-3-ext.jpg",
      "/vehicles/interior-1.jpg",
      "/vehicles/vehicle-3-ext.jpg",
      "/vehicles/interior-1.jpg",
    ],
    description:
      "Citadine compacte et économique, idéale pour la ville. Facile à garer et faible consommation.",
    specs: {
      year: 2018,
      fuel: "Essence",
      seats: 5,
      transmission: "Manuelle",
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
