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
        y={30}
        width={260}
        height={160}
        fontSize={46}
        fill="#f87f2e"
      />
      <StartButton x={290} y={210} />
    </Layer>
  );
};

export default IntroLayer;
