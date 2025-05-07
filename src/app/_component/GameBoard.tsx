"use client";

import React from "react";
import { Stage } from "react-konva";
import BackGroundLayer from "./BackGroundLayer";
import { useStartStore } from "@/store/start";
import IntroLayer from "./IntroLayer";
import GameLayer from "./GameLayer";
import { BOARD_HEIGHT, BOARD_WIDTH } from "@/constants/board";

const GameBoard = () => {
  const startState = useStartStore((state) => state.startState);

  return (
    <Stage width={BOARD_WIDTH} height={BOARD_HEIGHT}>
      <BackGroundLayer width={BOARD_WIDTH} height={BOARD_HEIGHT} />
      {(startState === "start" || startState === "pending") && <GameLayer />}
      {startState === "end" && <IntroLayer />}
    </Stage>
  );
};

export default GameBoard;
