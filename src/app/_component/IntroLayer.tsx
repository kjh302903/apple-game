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
        x={285}
        y={10}
        width={320}
        height={160}
        fontSize={46}
        fill="#f87f2e"
      />
      <StartButton x={360} y={200} />
    </Layer>
  );
};

export default IntroLayer;
