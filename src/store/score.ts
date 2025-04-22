import { create } from "zustand";

export const useScoreStore = create<{
  score: number;
  setScore: (score: number) => void;
}>((set) => ({
  score: 0,
  setScore: (score: number) => set((state) => ({ score: state.score + score })),
}));
