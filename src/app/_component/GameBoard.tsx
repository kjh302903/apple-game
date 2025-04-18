"use client";

import React from "react";
import { Stage } from "react-konva";
import BackGroundLayer from "./BackGroundLayer";
import { useStartStore } from "@/store/start";
import IntroLayer from "./IntroLayer";
import GameLayer from "./GameLayer";

const BOARD_WIDTH = 880;
const BOARD_HEIGHT = 565;
const GameBoard = () => {
  const isStart = useStartStore((state) => state.isStart);

  return (
    <Stage width={BOARD_WIDTH} height={BOARD_HEIGHT}>
      <BackGroundLayer width={BOARD_WIDTH} height={BOARD_HEIGHT} />
      {isStart ? <GameLayer /> : <IntroLayer />}
    </Stage>
  );
};

export default GameBoard;
