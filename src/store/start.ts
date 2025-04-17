import { create } from "zustand";

export const useStartStore = create<{
  isStart: boolean;
  setStart: (start: boolean) => void;
}>((set) => ({
  isStart: false,
  setStart: (start: boolean) => set(() => ({ isStart: start })),
}));
