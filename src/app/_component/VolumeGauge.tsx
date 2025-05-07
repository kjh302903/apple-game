import useCursorPointer from "@/hooks/useCursorPointer";
import { useBGMStore } from "@/store/bgm";
import { useVolumeStore } from "@/store/volume";
import Konva from "konva";
import React, { useEffect, useRef } from "react";
import { Group, Image, Rect } from "react-konva";
import useImage from "use-image";

const VolumeGauge = () => {
  const [onImage] = useImage("/images/music_on.svg");
  const [offImage] = useImage("/images/music_off.svg");

  const { pointerCursor, resetCursor } = useCursorPointer();
  const volume = useVolumeStore((state) => state.volume);
  const setVolume = useVolumeStore((state) => state.setVolume);
  const gaugeX = 600;
  const gaugeWidth = 100;
  const isDragging = useRef(false);
  const prevVolumeRef = useRef(1);

  const handleOnClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
    updateVolume(e);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if (!isDragging.current) return;
    updateVolume(e);
  };

  const updateVolume = (e: Konva.KonvaEventObject<MouseEvent>) => {
    const mouseX = e.evt.offsetX;
    const v = Math.min(1, Math.max(0, (mouseX - gaugeX) / gaugeWidth));
    setVolume(v);
  };

  const handleIconClick = () => {
    if (volume > 0) {
      prevVolumeRef.current = volume;
      setVolume(0);
    } else {
      setVolume(prevVolumeRef.current || 1);
    }
  };

  useEffect(() => {
    const handleWindowMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener("mouseup", handleWindowMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleWindowMouseUp);
    };
  }, []);

  useEffect(() => {
    const audio = useBGMStore.getState().audio;
    if (audio) {
      audio.volume = volume;
    }
  }, [volume]);

  return (
    <Group>
      <Image
        image={volume ? onImage : offImage}
        x={565}
        y={450}
        width={30}
        height={30}
        alt="volume_icon"
        onClick={handleIconClick}
        onMouseOver={pointerCursor}
        onMouseOut={resetCursor}
      />
      <Group
        onClick={handleOnClick}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseOver={pointerCursor}
        onMouseOut={resetCursor}
      >
        <Rect
          x={gaugeX}
          y={460}
          width={gaugeWidth}
          height={10}
          stroke="#f87f2e"
          strokeWidth={2}
          cornerRadius={3}
        />
        <Rect
          x={gaugeX}
          y={460}
          width={gaugeWidth * volume}
          height={10}
          fill="#f87f2e"
          cornerRadius={3}
        />
      </Group>
    </Group>
  );
};

export default VolumeGauge;
