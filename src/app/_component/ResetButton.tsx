import React from "react";
import Konva from "konva";
import { useModalStateStore } from "@/store/modalState";
import StrokeButton from "./common/StrokeButton";
import { useScaleStore } from "@/store/scale";
import { ORANGE_COLOR } from "@/constants/board";
import { useResetGame } from "@/hooks/useResetGame";

const ResetButton = () => {
  const closeModal = useModalStateStore((state) => state.closeModal);

  const isMobile = useScaleStore((state) => state.isMobile);

  const resetGame = useResetGame();

  const handleOnClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
    resetGame(e);
    closeModal();
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
      onTap={handleOnClick}
    />
  );
};

export default ResetButton;
