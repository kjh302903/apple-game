import useCursorPointer from "@/hooks/useCursorPointer";
import { useEffectiveSoundStore } from "@/store/effectiveSound";
import { useScaleStore } from "@/store/scale";
import React from "react";
import { Image } from "react-konva";
import useImage from "use-image";

const EffectiveSound = () => {
  const [onImage] = useImage("/images/effective_sound_on.svg");
  const [offImage] = useImage("/images/effective_sound_off.svg");

  const { pointerCursor, resetCursor } = useCursorPointer();
  const isSoundOn = useEffectiveSoundStore((state) => state.isSoundOn);
  const setSound = useEffectiveSoundStore((state) => state.setSound);
  const play = useEffectiveSoundStore((state) => state.play);
  const isMobile = useScaleStore((state) => state.isMobile);

  const handleOnClick = () => {
    play("click");
    setSound();
  };

  return (
    <Image
      image={isSoundOn ? onImage : offImage}
      x={isMobile ? 185 : 530}
      y={isMobile ? 575 : 450}
      width={isMobile ? 20 : 30}
      height={isMobile ? 20 : 30}
      alt="volume_icon"
      onClick={handleOnClick}
      onMouseOver={pointerCursor}
      onMouseOut={resetCursor}
      onTap={handleOnClick}
    />
  );
};

export default EffectiveSound;
