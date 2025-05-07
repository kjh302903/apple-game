import { BOARD_MARGIN, GAME_HEIGHT, GAME_WIDTH } from "@/constants/board";
import React from "react";
import { Layer, Rect } from "react-konva";
import VolumeGauge from "./VolumeGauge";
import EffectiveSound from "./EffectiveSound";

interface Props {
  width: number;
  height: number;
}

const BackGroundLayer = ({ width, height }: Props) => {
  return (
    <Layer>
      <Rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill="#f9e79f"
        cornerRadius={20}
      />
      <Rect
        x={BOARD_MARGIN}
        y={BOARD_MARGIN}
        width={GAME_WIDTH}
        height={GAME_HEIGHT}
        fill="#fdf7b6"
      />
      <EffectiveSound />
      <VolumeGauge />
    </Layer>
  );
};

export default BackGroundLayer;
