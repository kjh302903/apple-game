// store/apple.ts
import { create } from "zustand";
import { generateGridApples } from "@/utils/generateGridApples";
import { Apple } from "@/types/apple";
import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  M_BOARD_HEIGHT,
  M_BOARD_WIDTH,
} from "@/constants/board";

export const APPLE_SIZE = 32;
export const M_APPLE_SIZE = 25;

const getAppleConfig = (isMobile: boolean) => {
  const cols = isMobile ? 10 : 17;
  const rows = isMobile ? 17 : 10;
  const size = isMobile ? M_APPLE_SIZE : APPLE_SIZE;
  const count = cols * rows;
  const boardWidth = isMobile ? M_BOARD_WIDTH : BOARD_WIDTH;
  const boardHeight = isMobile ? M_BOARD_HEIGHT : BOARD_HEIGHT;
  const gap = isMobile ? 1.5 : 3;

  const offsetX = (boardWidth - (size * cols + gap * (cols - 1))) / 2;
  const offsetY = (boardHeight - (size * rows + gap * (rows - 1))) / 2;

  return { cols, rows, size, count, offsetX, offsetY, gap };
};

export const useAppleStore = create<{
  apples: Apple[];
  version: number;
  setApples: (isMobile: boolean) => void;
  resetApples: (isMobile: boolean) => void;
  removeApplesById: (ids: Set<number>) => void;
}>((set) => ({
  apples: [],
  setApples: (isMobile) => {
    const { cols, size, count, offsetX, offsetY, gap } =
      getAppleConfig(isMobile);

    set({
      apples: generateGridApples(count, cols, size + gap, offsetX, offsetY),
    });
  },
  version: 0,
  resetApples: (isMobile) => {
    const { cols, size, count, offsetX, offsetY, gap } =
      getAppleConfig(isMobile);
    set((state) => ({
      apples: generateGridApples(count, cols, size + gap, offsetX, offsetY),
      version: state.version + 1,
    }));
  },
  removeApplesById: (ids) =>
    set((state) => ({
      apples: state.apples.filter((a) => !ids.has(a.id)),
    })),
}));
