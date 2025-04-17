import Konva from "konva";
import { Group, Image, Text } from "react-konva";
import useImage from "use-image";

interface Props {
  x: number;
  y: number;
  onClick: () => void;
}

const StartButton = ({ x, y, onClick }: Props) => {
  const [image] = useImage("/images/apple.png");

  const handleMouseOver = (e: Konva.KonvaEventObject<MouseEvent>) => {
    const stageContainer = e.target.getStage()?.container();
    if (stageContainer) {
      stageContainer.style.cursor = "pointer";
    }
  };

  const handleMouseOut = (e: Konva.KonvaEventObject<MouseEvent>) => {
    const stageContainer = e.target.getStage()?.container();
    if (stageContainer) {
      stageContainer.style.cursor = "default";
    }
  };

  const handleOnClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
    const stageContainer = e.target.getStage()?.container();
    if (stageContainer) {
      stageContainer.style.cursor = "default";
    }
    onClick();
  };

  return image ? (
    <Group
      x={x}
      y={y}
      onClick={handleOnClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Image image={image} width={160} height={160} alt="시작 버튼" />
      <Text
        text="PLAY"
        align="center"
        verticalAlign="middle"
        width={160}
        height={160}
        offsetX={-3}
        offsetY={-15}
        fontSize={24}
        fill="white"
      />
    </Group>
  ) : null;
};

export default StartButton;
