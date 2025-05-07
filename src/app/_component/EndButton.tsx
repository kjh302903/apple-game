import useCursorPointer from "@/hooks/useCursorPointer";
import { useAppleStore } from "@/store/apple";
import { useEffectiveSoundStore } from "@/store/effectiveSound";
import { useModalStateStore } from "@/store/modalState";
import { useScoreStore } from "@/store/score";
import { useStartStore } from "@/store/start";
import Konva from "konva";
import React from "react";
import { Group, Rect, Text } from "react-konva";

const EndButton = () => {
  const { pointerCursor, resetCursor } = useCursorPointer();
  const setStart = useStartStore((state) => state.setStart);
  const resetScore = useScoreStore((state) => state.resetScore);
  const closeModal = useModalStateStore((state) => state.closeModal);
  const resetApples = useAppleStore((state) => state.resetApples);
  const play = useEffectiveSoundStore((state) => state.play);

  const handleOnClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
    play("click");
    resetCursor(e);
    setStart("end");
    resetScore();
    resetApples();
    closeModal();
  };
  return (
    <Group
      onMouseOver={pointerCursor}
      onMouseOut={resetCursor}
      onClick={handleOnClick}
    >
      <Rect
        x={220}
        y={310}
        width={220}
        height={50}
        offsetX={-3}
        fill="#f7d774"
      />
      <Text
        text={"게임 종료"}
        fontSize={24}
        x={220}
        y={310}
        width={220}
        height={50}
        align="center"
        verticalAlign="middle"
        offsetX={-3}
        offsetY={-2}
        fill="#fefefe"
      />
    </Group>
  );
};

export default EndButton;
