import { useAppleStore } from "@/store/apple";
import { useBGMStore } from "@/store/bgm";
import { useEffectiveSoundStore } from "@/store/effectiveSound";
import { useScaleStore } from "@/store/scale";
import { useScoreStore } from "@/store/score";
import { useStartStore } from "@/store/start";
import { useTimeStore } from "@/store/time";
import Konva from "konva";
import useCursorPointer from "./useCursorPointer";

export const useResetGame = () => {
  const resetScore = useScoreStore((state) => state.resetScore);
  const resetApples = useAppleStore((state) => state.resetApples);
  const resetTime = useTimeStore((state) => state.resetTime);
  const setStart = useStartStore((state) => state.setStart);
  const resetBGM = useBGMStore((state) => state.reset);
  const play = useEffectiveSoundStore((state) => state.play);
  const { resetCursor } = useCursorPointer();

  const isMobile = useScaleStore((state) => state.isMobile);

  const resetGame = (e: Konva.KonvaEventObject<MouseEvent>) => {
    play("click");
    resetScore();
    resetApples(isMobile);
    resetTime();
    setStart("start");
    resetBGM();
    resetCursor(e);
  };

  return resetGame;
};
