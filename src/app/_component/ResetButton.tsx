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

const ResetButton = () => {
  const color = "#f87f2e";
  const resetScore = useScoreStore((state) => state.resetScore);
  const { resetCursor } = useCursorPointer();
  const closeModal = useModalStateStore((state) => state.closeModal);
  const resetApples = useAppleStore((state) => state.resetApples);
  const resetTime = useTimeStore((state) => state.resetTime);
  const setStart = useStartStore((state) => state.setStart);

  const reset = useBGMStore((state) => state.reset);

  const handleOnClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
    const clickSound = new Audio("/sounds/click.mp3");

    clickSound.currentTime = 0;
    clickSound.play();
    resetCursor(e);
    resetScore();
    resetApples();
    resetTime();
    setStart("start");
    closeModal();

    reset();
  };

  return (
    <StrokeButton
      x={45}
      y={452.5}
      width={60}
      height={25}
      color={color} // 테두리 색 (더 연한 노랑)
      strokeWidth={2.5}
      offsetY={-1}
      text={"RESET"}
      onClick={handleOnClick}
    />
  );
};

export default ResetButton;
