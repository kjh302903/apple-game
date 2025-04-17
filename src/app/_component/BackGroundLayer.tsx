import React from "react";
import { Layer, Rect } from "react-konva";

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
    </Layer>
  );
};

export default BackGroundLayer;
