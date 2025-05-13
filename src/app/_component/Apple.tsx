import { useScaleStore } from "@/store/scale";
import React from "react";
import { Group, Image, Text } from "react-konva";

interface Props {
  x: number;
  y: number;
  size: number;
  value: number;
  version: number;
  image: HTMLImageElement | undefined;
  selected: boolean;
}

const Apple = React.memo(
  ({ x, y, size, value, version, image, selected }: Props) => {
    const isMobile = useScaleStore((state) => state.isMobile);

    return image ? (
      <Group x={x} y={y}>
        <Image
          image={image}
          x={0}
          y={0}
          width={size}
          height={size}
          shadowColor={selected ? "dodgerblue" : undefined}
          shadowBlur={selected ? 10 : 0}
          alt="사과 이미지"
        />
        <Text
          text={value.toString()}
          fontSize={isMobile ? 14 : 16}
          x={0}
          y={0}
          width={size}
          height={size}
          align="center"
          verticalAlign="middle"
          offsetX={-0.5}
          offsetY={-3.5}
          fill="#fefefe"
        />
      </Group>
    ) : null;
  },
  (prev, next) =>
    prev.selected === next.selected && prev.version === next.version
);

Apple.displayName = "Apple";

export default Apple;
