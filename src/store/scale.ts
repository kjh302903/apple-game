import { create } from "zustand";

export const useScaleStore = create<{
  scale: number;
  setScale: (scale: number) => void;
}>((set) => ({
  scale: 1,
  setScale: (scale) => set({ scale: scale }),
}));
