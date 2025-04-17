"use client";

import React from "react";
import { Stage } from "react-konva";
import BackGroundLayer from "./BackGroundLayer";
import AppleGrid from "./AppleGrid";
import { useStartStore } from "@/store/start";
import IntroLayer from "./IntroLayer";

const BOARD_WIDTH = 880;
const BOARD_HEIGHT = 565;
const GameBoard = () => {
  const isStart = useStartStore((state) => state.isStart);

  return (
    <Stage width={BOARD_WIDTH} height={BOARD_HEIGHT}>
      <BackGroundLayer width={BOARD_WIDTH} height={BOARD_HEIGHT} />
      {isStart ? <AppleGrid /> : <IntroLayer />}
    </Stage>
  );
};

export default GameBoard;
