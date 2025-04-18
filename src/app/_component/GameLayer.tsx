import React from "react";
import { Layer } from "react-konva";
import AppleGrid from "./AppleGrid";
import ResetButton from "./ResetButton";
import Timer from "./Timer";

const GameLayer = () => {
  return (
    <Layer>
      <AppleGrid />
      <ResetButton />
      <Timer />
    </Layer>
  );
};

export default GameLayer;
