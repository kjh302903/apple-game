// store/apple.ts
import { create } from "zustand";
import { generateGridApples } from "@/utils/generateGridApples";
import { Apple } from "@/types/apple";

const APPLE_SIZE = 32;
const COLS = 17;
const ROWS = 10;
const APPLE_COUNT = COLS * ROWS;
const OFFSETX = 74;
const OFFSETY = 69;

export const useAppleStore = create<{
  apples: Apple[];
  version: number;
  resetApples: () => void;
  removeApplesById: (ids: Set<number>) => void;
}>((set) => ({
  apples: generateGridApples(
    APPLE_COUNT,
    COLS,
    APPLE_SIZE + 3,
    OFFSETX,
    OFFSETY
  ),
  version: 0,
  resetApples: () =>
    set((state) => ({
      apples: generateGridApples(
        APPLE_COUNT,
        COLS,
        APPLE_SIZE + 3,
        OFFSETX,
        OFFSETY
      ),
      version: state.version + 1,
    })),
  removeApplesById: (ids) =>
    set((state) => ({
      apples: state.apples.filter((a) => !ids.has(a.id)),
    })),
}));
