import React from "react";
import { Image } from "react-konva";
import useImage from "use-image";

interface Props {
  x: number;
  y: number;
}

const Apple = ({ x, y }: Props) => {
  const [image] = useImage("/images/apple.png");
  return image ? (
    <Image image={image} x={x} y={y} width={40} height={40} />
  ) : null;
};

export default Apple;
