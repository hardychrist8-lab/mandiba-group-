/**
 * Zustand store pour gérer l'ouverture/fermeture du catalogue véhicules.
 * Permet à n'importe quel composant d'ouvrir le catalogue.
 */
import { create } from "zustand";

interface CatalogueState {
  isOpen: boolean;
  selectedVehicleId: string | null;
  showContact: boolean;
  openCatalogue: () => void;
  closeCatalogue: () => void;
  selectVehicle: (id: string | null) => void;
  setShowContact: (show: boolean) => void;
}

export const useCatalogue = create<CatalogueState>((set) => ({
  isOpen: false,
  selectedVehicleId: null,
  showContact: false,
  openCatalogue: () => set({ isOpen: true }),
  closeCatalogue: () =>
    set({ isOpen: false, selectedVehicleId: null, showContact: false }),
  selectVehicle: (id) => set({ selectedVehicleId: id, showContact: false }),
  setShowContact: (show) => set({ showContact: show }),
}));
