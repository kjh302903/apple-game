import {
  BOARD_MARGIN,
  GAME_HEIGHT,
  GAME_WIDTH,
  M_BOARD_MARGIN,
  M_GAME_HEIGHT,
  M_GAME_WIDTH,
} from "@/constants/board";
import React from "react";
import { Layer, Rect } from "react-konva";
import VolumeGauge from "./VolumeGauge";
import EffectiveSound from "./EffectiveSound";
import { useScaleStore } from "@/store/scale";

interface Props {
  width: number;
  height: number;
}

const BackGroundLayer = ({ width, height }: Props) => {
  const isMobile = useScaleStore((state) => state.isMobile);
  return (
    <Layer>
      <Rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill="#f9e79f"
        cornerRadius={isMobile ? 10 : 20}
      />
      <Rect
        x={isMobile ? M_BOARD_MARGIN : BOARD_MARGIN}
        y={isMobile ? M_BOARD_MARGIN : BOARD_MARGIN}
        width={isMobile ? M_GAME_WIDTH : GAME_WIDTH}
        height={isMobile ? M_GAME_HEIGHT : GAME_HEIGHT}
        fill="#fdf7b6"
      />
      <EffectiveSound />
      <VolumeGauge />
    </Layer>
  );
};

export default BackGroundLayer;
