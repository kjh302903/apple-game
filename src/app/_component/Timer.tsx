import useGameTimer from "@/hooks/useGameTimer";
import React from "react";
import { Text } from "react-konva";

const Timer = () => {
  const timeLeft = useGameTimer();
  return (
    <Text
      text={timeLeft.toString()}
      align="right"
      verticalAlign="middle"
      x={785}
      y={532.5}
      offsetY={-1}
      fontSize={24}
      fill="#f87f2e"
      width={55}
    />
  );
};

export default Timer;
