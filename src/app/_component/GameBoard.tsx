import React from "react";
import { Stage } from "react-konva";
import BackGroundLayer from "./BackGroundLayer";
import AppleGrid from "./AppleGrid";

const BOARD_WIDTH = 800;
const BOARD_HEIGHT = 485;
const GameBoard = () => {
  return (
    <Stage width={BOARD_WIDTH} height={BOARD_HEIGHT}>
      <BackGroundLayer width={BOARD_WIDTH} height={BOARD_HEIGHT} />
      <AppleGrid />
    </Stage>
  );
};

export default GameBoard;
