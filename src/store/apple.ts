// store/apple.ts
import { create } from "zustand";
import { generateGridApples } from "@/utils/generateGridApples";
import { Apple } from "@/types/apple";

const APPLE_SIZE = 40;
const COLS = 17;
const ROWS = 10;
const APPLE_COUNT = COLS * ROWS;
const OFFSET = 60;

export const useAppleStore = create<{
  apples: Apple[];
  version: number;
  resetApples: () => void;
  removeApplesById: (ids: Set<number>) => void;
}>((set) => ({
  apples: generateGridApples(APPLE_COUNT, COLS, APPLE_SIZE + 5, OFFSET, OFFSET),
  version: 0,
  resetApples: () =>
    set((state) => ({
      apples: generateGridApples(
        APPLE_COUNT,
        COLS,
        APPLE_SIZE + 5,
        OFFSET,
        OFFSET
      ),
      version: state.version + 1,
    })),
  removeApplesById: (ids) =>
    set((state) => ({
      apples: state.apples.filter((a) => !ids.has(a.id)),
    })),
}));
