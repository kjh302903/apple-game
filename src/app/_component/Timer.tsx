import useGameTimer from "@/hooks/useGameTimer";
import React from "react";
import { Text } from "react-konva";

const Timer = () => {
  const timeLeft = useGameTimer();
  return (
    <Text
      text={timeLeft.toString()}
      align="center"
      verticalAlign="middle"
      x={800}
      y={532.5}
      offsetY={-1}
      fontSize={24}
      fill="#f87f2e"
    />
  );
};

export default Timer;
