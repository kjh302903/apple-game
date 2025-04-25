import useCursorPointer from "@/hooks/useCursorPointer";
import Konva from "konva";
import React from "react";
import { Group, Rect, Text } from "react-konva";

interface Props {
  x: number;
  y: number;
  width: number;
  height: number;
  offsetX?: number;
  offsetY?: number;
  text: string;
  color: string;
  strokeWidth: number;
  onClick: (e: Konva.KonvaEventObject<MouseEvent>) => void;
}

const StrokeButton = ({
  x,
  y,
  width,
  height,
  offsetX,
  offsetY,
  text,
  color,
  strokeWidth,
  onClick,
}: Props) => {
  const { pointerCursor, resetCursor } = useCursorPointer();
  return (
    <Group
      x={x}
      y={y}
      onClick={onClick}
      onMouseOver={pointerCursor}
      onMouseOut={resetCursor}
    >
      <Rect
        width={width}
        height={height}
        stroke={color} // 테두리 색 (더 연한 노랑)
        strokeWidth={strokeWidth}
      />
      <Text
        text={text}
        align="center"
        verticalAlign="middle"
        width={width}
        height={height}
        offsetY={offsetY}
        fill={color}
      />
    </Group>
  );
};

export default StrokeButton;
