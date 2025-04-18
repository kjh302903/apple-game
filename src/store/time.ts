import { create } from "zustand";

interface TimerState {
  timeLeft: number;
  reset: () => void;
  decrement: () => void;
}

export const useTimeStore = create<TimerState>((set) => ({
  timeLeft: 120,
  reset: () => set({ timeLeft: 120 }),
  decrement: () =>
    set((state) => ({
      timeLeft: state.timeLeft - 1,
    })),
}));
