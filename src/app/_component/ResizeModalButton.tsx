import { ORANGE_COLOR } from "@/constants/board";
import useCursorPointer from "@/hooks/useCursorPointer";
import { useResetGame } from "@/hooks/useResetGame";
import { useResizeModalStateStore } from "@/store/resizeModalState";
import Konva from "konva";
import React from "react";
import { Group, Rect, Text } from "react-konva";

interface Props {
  x: number;
  y: number;
}
const ResizeModalButton = ({ x, y }: Props) => {
  const { pointerCursor, resetCursor } = useCursorPointer();
  const resetGame = useResetGame();
  const closeModal = useResizeModalStateStore((state) => state.closeModal);

  const handleOnClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
    resetGame(e);
    closeModal();
  };

  return (
    <Group
      onClick={handleOnClick}
      onMouseOver={pointerCursor}
      onMouseOut={resetCursor}
    >
      <Rect
        x={x}
        y={y}
        width={80}
        height={30}
        fill={ORANGE_COLOR}
        cornerRadius={6}
      />
      <Text
        text="확인"
        x={x}
        y={y}
        width={80}
        height={30}
        align="center"
        verticalAlign="middle"
        fontSize={14}
        fill="white"
      />
    </Group>
  );
};

export default ResizeModalButton;
