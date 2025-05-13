import { useBGMStore } from "@/store/bgm";
import { useEffectiveSoundStore } from "@/store/effectiveSound";
import { useModalStateStore } from "@/store/modalState";
import { useScaleStore } from "@/store/scale";
import { useScoreStore } from "@/store/score";
import { useStartStore } from "@/store/start";
import React, { useEffect } from "react";
import { Group, Text } from "react-konva";

const Score = () => {
  const score = useScoreStore((state) => state.score);
  const openModal = useModalStateStore((state) => state.openModal);
  const setStart = useStartStore((state) => state.setStart);
  const stop = useBGMStore((state) => state.stop);
  const play = useEffectiveSoundStore((state) => state.play);

  const isMobile = useScaleStore((state) => state.isMobile);

  useEffect(() => {
    if (score === 170) {
      play("gamecomplete");
      openModal();
      setStart("pending");
      stop();
    }
  }, [score]);

  return (
    <Group>
      <Text
        text={`Score : `}
        align="center"
        verticalAlign="middle"
        x={isMobile ? 190 : 580}
        y={isMobile ? 5 : 10}
        offsetY={-1}
        fontSize={24}
        fill="#f87f2e"
      />
      <Text
        text={score.toString()}
        align="right"
        verticalAlign="middle"
        x={isMobile ? 255 : 645}
        y={isMobile ? 5 : 10}
        offsetY={-2}
        fontSize={24}
        fill="#f87f2e"
        width={55}
      />
    </Group>
  );
};

export default Score;
