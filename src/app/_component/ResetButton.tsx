import useCursorPointer from "@/hooks/useCursorPointer";
import React from "react";
import { Group, Rect, Text } from "react-konva";

const ResetButton = () => {
  const color = "#f87f2e";
  return (
    <Group x={50} y={532.5}>
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
