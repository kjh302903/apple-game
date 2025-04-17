import React from "react";
import { Layer, Text } from "react-konva";
import StartButton from "./StartButton";

const IntroLayer = () => {
  return (
    <Layer>
      <Text
        text="Apple Game"
        align="center"
        verticalAlign="middle"
        x={240}
        width={320}
        height={160}
        fontSize={46}
        fill="white"
      />
      <StartButton x={320} y={200} />
    </Layer>
  );
};

export default IntroLayer;
