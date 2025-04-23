import useGameTimer from "@/hooks/useGameTimer";
import { useModalStateStore } from "@/store/modalState";
import { useStartStore } from "@/store/start";
import React, { useEffect } from "react";
import { Text } from "react-konva";

const Timer = () => {
  const timeLeft = useGameTimer();
  const openModal = useModalStateStore((state) => state.openModal);
  const setStart = useStartStore((state) => state.setStart);

  useEffect(() => {
    if (timeLeft === 0) {
      openModal();
      setStart("pending");
    }
  }, [timeLeft, openModal]);
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
