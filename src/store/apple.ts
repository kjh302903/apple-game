// store/apple.ts
import { create } from "zustand";
import { generateGridApples } from "@/utils/generateGridApples";
import { Apple } from "@/types/apple";
import { BOARD_HEIGHT, BOARD_WIDTH } from "@/constants/board";

export const APPLE_SIZE = 32;
const COLS = 17;
const ROWS = 10;
const APPLE_COUNT = COLS * ROWS;
const GAP = 3;
const OFFSETX = (BOARD_WIDTH - (APPLE_SIZE * COLS + GAP * 16)) / 2;
const OFFSETY = (BOARD_HEIGHT - (APPLE_SIZE * ROWS + GAP * 9)) / 2;

export const useAppleStore = create<{
  apples: Apple[];
  version: number;
  resetApples: () => void;
  removeApplesById: (ids: Set<number>) => void;
}>((set) => ({
  apples: generateGridApples(
    APPLE_COUNT,
    COLS,
    APPLE_SIZE + GAP,
    OFFSETX,
    OFFSETY
  ),
  version: 0,
  resetApples: () =>
    set((state) => ({
      apples: generateGridApples(
        APPLE_COUNT,
        COLS,
        APPLE_SIZE + GAP,
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
