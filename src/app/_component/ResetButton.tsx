import React from "react";
import { Group, Rect, Text } from "react-konva";
import useCursorPointer from "@/hooks/useCursorPointer";
import { useStartStore } from "@/store/start";
import Konva from "konva";
import { useScoreStore } from "@/store/score";

const ResetButton = () => {
  const color = "#f87f2e";
  const setStart = useStartStore((state) => state.setStart);
  const resetScore = useScoreStore((state) => state.resetScore);
  const { pointerCursor, resetCursor } = useCursorPointer();

  const handleOnClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
    resetCursor(e);
    setStart(false);
    resetScore();
  };

  return (
    <Group
      x={50}
      y={532.5}
      onClick={handleOnClick}
      onMouseOver={pointerCursor}
      onMouseOut={resetCursor}
    >
      <Rect
        width={60}
        height={25}
        stroke={color} // 테두리 색 (더 연한 노랑)
        strokeWidth={2.5}
      />
      <Text
        text="RESET"
        align="center"
        verticalAlign="middle"
        width={60}
        height={25}
        offsetY={-1}
        fill={color}
      />
    </Group>
  );
};

export default ResetButton;
