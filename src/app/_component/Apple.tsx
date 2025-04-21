import React from "react";
import { Group, Image, Text } from "react-konva";
import useImage from "use-image";

interface Props {
  x: number;
  y: number;
  value: number;
  selected: boolean;
}

const Apple = React.memo(({ x, y, value, selected }: Props) => {
  console.log(
    `🍎 렌더링된 사과: ${value} , xy : ${x}, ${y}| 선택됨: ${selected}`
  );
  const [image] = useImage("/images/apple.png");
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
});

Apple.displayName = "Apple";

export default Apple;
