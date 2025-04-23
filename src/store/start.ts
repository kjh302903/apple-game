import { create } from "zustand";

export const useStartStore = create<{
  startState: string;
  setStart: (state: string) => void;
}>((set) => ({
  startState: "end",
  setStart: (state: string) => set(() => ({ startState: state })),
}));
