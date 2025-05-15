import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  M_BOARD_HEIGHT,
  M_BOARD_WIDTH,
  ORANGE_COLOR,
} from "@/constants/board";
import { useScaleStore } from "@/store/scale";
import React from "react";
import { Group, Rect, Text } from "react-konva";
import ResizeModalButton from "./ResizeModalButton";

const ResizeWarningModal = () => {
  const isMobile = useScaleStore((state) => state.isMobile);
  const modalWidth = 280;
  const modalHeight = 160;
  const boardWidth = isMobile ? M_BOARD_WIDTH : BOARD_WIDTH;
  const boardHeight = isMobile ? M_BOARD_HEIGHT : BOARD_HEIGHT;
  return (
    <Group>
      {/* Dimmed background */}
      <Rect
        x={0}
        y={0}
        width={boardWidth}
        height={boardHeight}
        fill="black"
        opacity={0.5}
        listening={true}
      />
      {/* Modal box */}
      <Group
        x={(boardWidth - modalWidth) / 2}
        y={(boardHeight - modalHeight) / 2}
      >
        <Rect
          width={modalWidth}
          height={modalHeight}
          fill={"#f9e79f"}
          cornerRadius={12}
          shadowBlur={10}
        />
        <Text
          text="창 크기가 변경되어 게임이 초기화됩니다."
          x={20}
          y={20}
          width={modalWidth - 40}
          fontSize={16}
          fill={ORANGE_COLOR}
        />
        {/* Buttons */}
        <ResizeModalButton x={(modalWidth - 80) / 2} y={120} />
      </Group>
    </Group>
  );
};

export default ResizeWarningModal;
