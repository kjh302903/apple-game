import { create } from "zustand";

export const useScoreStore = create<{
  score: number;
  addScore: (score: number) => void;
  resetScore: () => void;
}>((set) => ({
  score: 0,
  addScore: (score: number) => set((state) => ({ score: state.score + score })),
  resetScore: () => set({ score: 0 }),
}));
