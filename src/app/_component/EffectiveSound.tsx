import useCursorPointer from "@/hooks/useCursorPointer";
import { useEffectiveSoundStore } from "@/store/effectiveSound";
import React from "react";
import { Image } from "react-konva";
import useImage from "use-image";

const EffectiveSound = () => {
  const [onImage] = useImage("/images/effective_sound_on.svg");
  const [offImage] = useImage("/images/effective_sound_off.svg");

  const { pointerCursor, resetCursor } = useCursorPointer();
  const isSoundOn = useEffectiveSoundStore((state) => state.isSoundOn);
  const setSound = useEffectiveSoundStore((state) => state.setSound);

  const handleOnClick = () => {
    setSound();
  };

  return (
    <Image
      image={isSoundOn ? onImage : offImage}
      x={530}
      y={450}
      width={30}
      height={30}
      alt="volume_icon"
      onClick={handleOnClick}
      onMouseOver={pointerCursor}
      onMouseOut={resetCursor}
    />
  );
};

export default EffectiveSound;
