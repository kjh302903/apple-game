import { create } from "zustand";

export const useModalStateStore = create<{
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
