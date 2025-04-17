import { create } from "zustand";

export const useStartStore = create<{
  isStart: boolean;
  setStart: () => void;
}>((set) => ({
  isStart: false,
  setStart: () => set(() => ({ isStart: true })),
}));
