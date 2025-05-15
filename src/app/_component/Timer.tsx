import { ORANGE_COLOR } from "@/constants/board";
import useGameTimer from "@/hooks/useGameTimer";
import { useBGMStore } from "@/store/bgm";
import { useEffectiveSoundStore } from "@/store/effectiveSound";
import { useModalStateStore } from "@/store/modalState";
import { useScaleStore } from "@/store/scale";
import { useStartStore } from "@/store/start";
import React, { useEffect } from "react";
import { Group, Rect } from "react-konva";

const Timer = () => {
  const timeLeft = useGameTimer();
  const openModal = useModalStateStore((state) => state.openModal);
  const setStart = useStartStore((state) => state.setStart);
  const stop = useBGMStore((state) => state.stop);
  const play = useEffectiveSoundStore((state) => state.play);

  const isMobile = useScaleStore((state) => state.isMobile);

  const totalHeight = 360;
  const totalTime = 120;

  useEffect(() => {
    if (timeLeft === 0) {
      play("gameover");
      openModal();
      setStart("pending");
      stop();
    }
  }, [timeLeft, openModal]);

  const gaugeHeight = (timeLeft / totalTime) * totalHeight;
  const baseY = isMobile ? 120 : 62.5;
  const adjustedY = baseY + (totalHeight - gaugeHeight);

  return (
    <Group>
      <Rect
        x={isMobile ? 320 : 715}
        y={baseY}
        width={10}
        height={totalHeight}
        stroke={ORANGE_COLOR}
        strokeWidth={2}
        cornerRadius={3}
      />
      <Rect
        x={isMobile ? 320 : 715}
        y={adjustedY}
        width={10}
        height={gaugeHeight}
        fill={ORANGE_COLOR}
        cornerRadius={3}
      />
    </Group>
  );
};

export default Timer;
