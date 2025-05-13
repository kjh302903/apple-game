import React from "react";
import { Group, Image, Rect, Text } from "react-konva";
import useImage from "use-image";
import { useScoreStore } from "@/store/score";
import EndButton from "./EndButton";
import {
  BOARD_MARGIN,
  GAME_HEIGHT,
  GAME_WIDTH,
  M_BOARD_MARGIN,
  M_GAME_HEIGHT,
  M_GAME_WIDTH,
} from "@/constants/board";
import { useScaleStore } from "@/store/scale";

const ResultModal = () => {
  const [image] = useImage("/images/apple.png");
  const score = useScoreStore((state) => state.score);

  const isMobile = useScaleStore((state) => state.isMobile);

  return (
    <Group
      x={isMobile ? M_BOARD_MARGIN : BOARD_MARGIN}
      y={isMobile ? M_BOARD_MARGIN : BOARD_MARGIN}
    >
      {/* 배경 투명 레이어 */}
      <Rect
        width={isMobile ? M_GAME_WIDTH : GAME_WIDTH}
        height={isMobile ? M_GAME_HEIGHT : GAME_HEIGHT}
      />
      <Image
        image={image}
        x={isMobile ? 10 : 200}
        y={0}
        width={260}
        height={260}
        alt="결과 모달 사과 이미지"
      />
      <Text
        text={"Score"}
        fontSize={44}
        x={isMobile ? 10 : 200}
        y={0}
        width={260}
        height={260}
        align="center"
        verticalAlign="middle"
        offsetX={-5}
        fill="#fefefe"
      />
      <Text
        text={score.toString()}
        fontSize={48}
        x={isMobile ? 10 : 200}
        y={50}
        width={260}
        height={260}
        align="center"
        verticalAlign="middle"
        offsetX={-3}
        offsetY={-5}
        fill="#fefefe"
      />
      <EndButton />
    </Group>
  );
};

export default ResultModal;
