import { create } from "zustand";

export const useSidebarStore = create((set) => ({
  optionSelected: "Inicio",
  isOpen: false,
  setOptionSelected: (option) => set({optionSelected: option})
}));
