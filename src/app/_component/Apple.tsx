import React from "react";
import { Group, Image, Text } from "react-konva";

interface Props {
  x: number;
  y: number;
  value: number;
  version: number;
  image: HTMLImageElement | undefined;
  selected: boolean;
}

const Apple = React.memo(
  ({ x, y, value, version, image, selected }: Props) => {
    return image ? (
      <Group x={x} y={y}>
        <Image
          image={image}
          x={0}
          y={0}
          width={40}
          height={40}
          shadowColor={selected ? "dodgerblue" : undefined}
          shadowBlur={selected ? 10 : 0}
          alt="사과 이미지"
        />
        <Text
          text={value.toString()}
          fontSize={20}
          x={0}
          y={0}
          width={40}
          height={40}
          align="center"
          verticalAlign="middle"
          offsetX={-0.5}
          offsetY={-5}
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
