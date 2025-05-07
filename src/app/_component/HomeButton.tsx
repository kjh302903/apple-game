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

const HomeButton = () => {
  const color = "#f87f2e";
  const { resetCursor } = useCursorPointer();
  const setStart = useStartStore((state) => state.setStart);
  const resetScore = useScoreStore((state) => state.resetScore);
  const closeModal = useModalStateStore((state) => state.closeModal);
  const resetApples = useAppleStore((state) => state.resetApples);
  const stop = useBGMStore((state) => state.stop);
  const play = useEffectiveSoundStore((state) => state.play);

  const handleOnClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
    play("click");
    resetCursor(e);
    setStart("end");
    resetScore();
    resetApples();
    closeModal();

    stop();
  };
  return (
    <StrokeButton
      x={115}
      y={452.5}
      width={60}
      height={25}
      color={color} // 테두리 색 (더 연한 노랑)
      strokeWidth={2.5}
      offsetY={-1}
      text={"HOME"}
      onClick={handleOnClick}
    />
  );
};

export default HomeButton;
