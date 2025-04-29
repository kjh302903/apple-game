import useGameTimer from "@/hooks/useGameTimer";
import { useBGMStore } from "@/store/bgm";
import { useModalStateStore } from "@/store/modalState";
import { useStartStore } from "@/store/start";
import React, { useEffect } from "react";
import { Group, Rect } from "react-konva";

const Timer = () => {
  const timeLeft = useGameTimer();
  const openModal = useModalStateStore((state) => state.openModal);
  const setStart = useStartStore((state) => state.setStart);
  const stop = useBGMStore((state) => state.stop);

  const totalHeight = 360;
  const totalTime = 120;

  useEffect(() => {
    if (timeLeft === 0) {
      const overSound = new Audio("/sounds/game-over.mp3");

      overSound.currentTime = 0;
      overSound.play();
      openModal();
      setStart("pending");
      stop();
    }
  }, [timeLeft, openModal]);

  const gaugeHeight = (timeLeft / totalTime) * totalHeight;
  const baseY = 62.5;
  const adjustedY = baseY + (totalHeight - gaugeHeight);

  return (
    <Group>
      <Rect
        x={715}
        y={baseY}
        width={10}
        height={totalHeight}
        stroke="#f87f2e"
        strokeWidth={2}
        cornerRadius={3}
      />
      <Rect
        x={715}
        y={adjustedY}
        width={10}
        height={gaugeHeight}
        fill="#f87f2e"
        cornerRadius={3}
      />
    </Group>
  );
};

export default Timer;
