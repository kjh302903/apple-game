import { useBGMStore } from "@/store/bgm";
import { useEffectiveSoundStore } from "@/store/effectiveSound";
import { useModalStateStore } from "@/store/modalState";
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
