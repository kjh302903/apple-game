import React from "react";
import { Layer } from "react-konva";
import AppleGrid from "./AppleGrid";
import ResetButton from "./ResetButton";

const GameLayer = () => {
  return (
    <Layer>
      <AppleGrid />
      <ResetButton />
    </Layer>
  );
};

export default GameLayer;
