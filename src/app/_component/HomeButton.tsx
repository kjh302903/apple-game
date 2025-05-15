import useCursorPointer from "@/hooks/useCursorPointer";
import { useAppleStore } from "@/store/apple";
import { useModalStateStore } from "@/store/modalState";
import { useScoreStore } from "@/store/score";
import { useStartStore } from "@/store/start";
import Konva from "konva";
import React from "react";
import StrokeButton from "./common/StrokeButton";
import { useBGMStore } from "@/store/bgm";
import { useEffectiveSoundStore } from "@/store/effectiveSound";
import { useScaleStore } from "@/store/scale";
import { ORANGE_COLOR } from "@/constants/board";

const HomeButton = () => {
  const { resetCursor } = useCursorPointer();
  const setStart = useStartStore((state) => state.setStart);
  const resetScore = useScoreStore((state) => state.resetScore);
  const closeModal = useModalStateStore((state) => state.closeModal);
  const resetApples = useAppleStore((state) => state.resetApples);
  const stop = useBGMStore((state) => state.stop);
  const play = useEffectiveSoundStore((state) => state.play);

  const isMobile = useScaleStore((state) => state.isMobile);

  const handleOnClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
    play("click");
    resetCursor(e);
    setStart("end");
    resetScore();
    resetApples(isMobile);
    closeModal();

    stop();
  };
  return (
    <StrokeButton
      x={isMobile ? 90 : 115}
      y={isMobile ? 575 : 452.5}
      width={isMobile ? 50 : 60}
      height={isMobile ? 20 : 25}
      color={ORANGE_COLOR} // 테두리 색 (더 연한 노랑)
      strokeWidth={2.5}
      offsetY={-1}
      text={"HOME"}
      onClick={handleOnClick}
    />
  );
};

export default HomeButton;
