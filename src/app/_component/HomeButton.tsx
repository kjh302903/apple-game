import useCursorPointer from "@/hooks/useCursorPointer";
import { useAppleStore } from "@/store/apple";
import { useModalStateStore } from "@/store/modalState";
import { useScoreStore } from "@/store/score";
import { useStartStore } from "@/store/start";
import Konva from "konva";
import React from "react";
import StrokeButton from "./common/StrokeButton";

const HomeButton = () => {
  const color = "#f87f2e";
  const { resetCursor } = useCursorPointer();
  const setStart = useStartStore((state) => state.setStart);
  const resetScore = useScoreStore((state) => state.resetScore);
  const closeModal = useModalStateStore((state) => state.closeModal);
  const resetApples = useAppleStore((state) => state.resetApples);

  const handleOnClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
    const clickSound = new Audio("/sounds/click.mp3");

    clickSound.currentTime = 0;
    clickSound.play();
    resetCursor(e);
    setStart("end");
    resetScore();
    resetApples();
    closeModal();
  };
  return (
    <StrokeButton
      x={125}
      y={532.5}
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
