import useCursorPointer from "@/hooks/useCursorPointer";
import { useStartStore } from "@/store/start";
import Konva from "konva";
import { Group, Image, Text } from "react-konva";
import useImage from "use-image";

interface Props {
  x: number;
  y: number;
}

const StartButton = ({ x, y }: Props) => {
  const [image] = useImage("/images/apple.png");
  const setStart = useStartStore((state) => state.setStart);
  const { pointerCursor, resetCursor } = useCursorPointer();

  const handleOnClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
    const clickSound = new Audio("/sounds/click.mp3");

    clickSound.currentTime = 0;
    clickSound.play();
    resetCursor(e);
    setStart("start");
  };

  return image ? (
    <Group
      x={x}
      y={y}
      onClick={handleOnClick}
      onMouseOver={pointerCursor}
      onMouseOut={resetCursor}
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
