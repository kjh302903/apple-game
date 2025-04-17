"use client";

import React from "react";
import { Layer, Stage, Text } from "react-konva";
import BackGroundLayer from "./BackGroundLayer";
import AppleGrid from "./AppleGrid";
import StartButton from "./StartButton";
import { useStartStore } from "@/store/start";

const BOARD_WIDTH = 800;
const BOARD_HEIGHT = 485;
const GameBoard = () => {
  const isStart = useStartStore((state) => state.isStart);

  return (
    <Stage width={BOARD_WIDTH} height={BOARD_HEIGHT}>
      <BackGroundLayer width={BOARD_WIDTH} height={BOARD_HEIGHT} />
      {isStart ? (
        <AppleGrid />
      ) : (
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
      )}
    </Stage>
  );
};

export default GameBoard;
