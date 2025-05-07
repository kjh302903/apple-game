import { create } from "zustand";

export const useVolumeStore = create<{
  volume: number;
  setVolume: (v: number) => void;
}>((set) => ({
  volume: 0.3,
  setVolume: (v) => set({ volume: v }),
}));
