import React from "react";
import { Group, Image, Rect, Text } from "react-konva";
import useImage from "use-image";
import HomeButton from "./HomeButton";
import { useScoreStore } from "@/store/score";

const ResultModal = () => {
  const [image] = useImage("/images/apple.png");
  const score = useScoreStore((state) => state.score);

  return (
    <Group x={40} y={40}>
      {/* 배경 투명 레이어 */}
      <Rect width={800} height={485} />
      <Image
        image={image}
        x={250}
        y={0}
        width={300}
        height={300}
        alt="결과 모달 사과 이미지"
      />
      <Text
        text={"Score"}
        fontSize={44}
        x={250}
        y={0}
        width={300}
        height={300}
        align="center"
        verticalAlign="middle"
        offsetX={-5}
        fill="#fefefe"
      />
      <Text
        text={score.toString()}
        fontSize={48}
        x={250}
        y={50}
        width={300}
        height={300}
        align="center"
        verticalAlign="middle"
        offsetX={-5}
        offsetY={-5}
        fill="#fefefe"
      />
      <HomeButton />
    </Group>
  );
};

export default ResultModal;
