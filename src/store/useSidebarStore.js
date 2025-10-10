import { create } from "zustand";

export const useSidebarStore = create((set) => ({
  optionSelected: "Inicio",
  isOpen: false,
  setOptionSelected: (option) => set({optionSelected: option})
//   toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
//   closeSidebar: () => set({ isOpen: false }),
//   openSidebar: () => set({ isOpen: true }),
}));
