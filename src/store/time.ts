import { create } from "zustand";

interface TimerState {
  timeLeft: number;
  resetTime: () => void;
  decrement: () => void;
}

export const useTimeStore = create<TimerState>((set) => ({
  timeLeft: 120,
  resetTime: () => set({ timeLeft: 120 }),
  decrement: () =>
    set((state) => ({
      timeLeft: state.timeLeft - 1,
    })),
}));
