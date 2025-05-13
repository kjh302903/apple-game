import React from "react";
import { Layer, Text } from "react-konva";
import StartButton from "./StartButton";
import { useScaleStore } from "@/store/scale";

const IntroLayer = () => {
  const isMobile = useScaleStore((state) => state.isMobile);
  return (
    <Layer>
      <Text
        text="Apple Game"
        align="center"
        verticalAlign="middle"
        x={isMobile ? 80 : 240}
        y={isMobile ? 80 : 30}
        width={isMobile ? 180 : 260}
        height={isMobile ? 40 : 160}
        fontSize={isMobile ? 32 : 46}
        fill="#f87f2e"
      />
      <StartButton x={isMobile ? 90 : 290} y={isMobile ? 230 : 210} />
    </Layer>
  );
};

export default IntroLayer;
