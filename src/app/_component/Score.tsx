import { useScoreStore } from "@/store/score";
import React from "react";
import { Group, Text } from "react-konva";

const Score = () => {
  const score = useScoreStore((state) => state.score);
  return (
    <Group>
      <Text
        text={`Score : `}
        align="center"
        verticalAlign="middle"
        x={580}
        y={10}
        offsetY={-1}
        fontSize={24}
        fill="#f87f2e"
      />
      <Text
        text={score.toString()}
        align="right"
        verticalAlign="middle"
        x={645}
        y={10}
        offsetY={-2}
        fontSize={24}
        fill="#f87f2e"
        width={55}
      />
    </Group>
  );
};

export default Score;
