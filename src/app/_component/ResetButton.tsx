import React from "react";
import useCursorPointer from "@/hooks/useCursorPointer";
import Konva from "konva";
import { useScoreStore } from "@/store/score";
import { useModalStateStore } from "@/store/modalState";
import { useAppleStore } from "@/store/apple";
import { useTimeStore } from "@/store/time";
import { useStartStore } from "@/store/start";
import StrokeButton from "./common/StrokeButton";
import { useBGMStore } from "@/store/bgm";
import { useEffectiveSoundStore } from "@/store/effectiveSound";
import { useScaleStore } from "@/store/scale";
import { ORANGE_COLOR } from "@/constants/board";

const ResetButton = () => {
  const resetScore = useScoreStore((state) => state.resetScore);
  const { resetCursor } = useCursorPointer();
  const closeModal = useModalStateStore((state) => state.closeModal);
  const resetApples = useAppleStore((state) => state.resetApples);
  const resetTime = useTimeStore((state) => state.resetTime);
  const setStart = useStartStore((state) => state.setStart);

  const reset = useBGMStore((state) => state.reset);
  const play = useEffectiveSoundStore((state) => state.play);

  const isMobile = useScaleStore((state) => state.isMobile);

  const handleOnClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
    play("click");
    resetCursor(e);
    resetScore();
    resetApples(isMobile);
    resetTime();
    setStart("start");
    closeModal();

    reset();
  };

  return (
    <StrokeButton
      x={isMobile ? 30 : 45}
      y={isMobile ? 575 : 452.5}
      width={isMobile ? 50 : 60}
      height={isMobile ? 20 : 25}
      color={ORANGE_COLOR} // 테두리 색 (더 연한 노랑)
      strokeWidth={2.5}
      offsetY={-1}
      text={"RESET"}
      onClick={handleOnClick}
    />
  );
};

export default ResetButton;
