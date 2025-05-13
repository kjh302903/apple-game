import { create } from "zustand";

export const useScaleStore = create<{
  scale: number;
  setScale: (scale: number) => void;
  isMobile: boolean;
  setMobile: (isMobile: boolean) => void;
}>((set) => ({
  scale: 1,
  setScale: (scale) => set({ scale: scale }),
  isMobile: false,
  setMobile: (isMobile) => set({ isMobile: isMobile }),
}));
