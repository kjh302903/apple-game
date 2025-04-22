import React from "react";
import { Layer } from "react-konva";
import AppleGrid from "./AppleGrid";
import ResetButton from "./ResetButton";
import Timer from "./Timer";
import Score from "./Score";

const GameLayer = () => {
  return (
    <Layer>
      <AppleGrid />
      <Score />
      <ResetButton />
      <Timer />
    </Layer>
  );
};

export default GameLayer;
