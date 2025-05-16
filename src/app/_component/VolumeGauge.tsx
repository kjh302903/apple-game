import { ORANGE_COLOR } from "@/constants/board";
import useCursorPointer from "@/hooks/useCursorPointer";
import { useBGMStore } from "@/store/bgm";
import { useEffectiveSoundStore } from "@/store/effectiveSound";
import { useScaleStore } from "@/store/scale";
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
  const isDragging = useRef(false);
  const prevVolumeRef = useRef(1);
  const play = useEffectiveSoundStore((state) => state.play);

  const scale = useScaleStore((state) => state.scale);
  const isMobile = useScaleStore((state) => state.isMobile);

  const gaugeX = 600;
  const gaugeWidth = 100;
  const M_gaugeX = 230;
  const M_gaugeWidth = 80;

  const updateVolume = (e: Konva.KonvaEventObject<MouseEvent | TouchEvent>) => {
    const pos = e.target.getStage()?.getPointerPosition();
    if (!pos) return null;
    const mouseX = isMobile ? pos.x : pos.x / (scale * 0.9);

    const v = Math.min(1, Math.max(0, (mouseX - gaugeX) / gaugeWidth));
    const M_v = Math.min(1, Math.max(0, (mouseX - M_gaugeX) / M_gaugeWidth));

    setVolume(isMobile ? M_v : v);
  };

  const handleOnClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
    updateVolume(e);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (
    e: Konva.KonvaEventObject<MouseEvent | TouchEvent>
  ) => {
    if (!isDragging.current) return;
    updateVolume(e);
  };

  const handleIconClick = () => {
    play("click");
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
        x={isMobile ? 205 : 565}
        y={isMobile ? 575 : 450}
        width={isMobile ? 20 : 30}
        height={isMobile ? 20 : 30}
        alt="volume_icon"
        onClick={handleIconClick}
        onMouseOver={pointerCursor}
        onMouseOut={resetCursor}
        onTap={handleIconClick}
      />
      <Group
        onClick={handleOnClick}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseOver={pointerCursor}
        onMouseOut={resetCursor}
        onTap={handleOnClick}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleMouseMove}
      >
        <Rect
          x={isMobile ? M_gaugeX : gaugeX}
          y={isMobile ? 580 : 460}
          width={isMobile ? M_gaugeWidth : gaugeWidth}
          height={10}
          stroke={ORANGE_COLOR}
          strokeWidth={2}
          cornerRadius={3}
        />
        <Rect
          x={isMobile ? M_gaugeX : gaugeX}
          y={isMobile ? 580 : 460}
          width={isMobile ? M_gaugeWidth * volume : gaugeWidth * volume}
          height={10}
          fill={ORANGE_COLOR}
          cornerRadius={3}
        />
      </Group>
    </Group>
  );
};

export default VolumeGauge;
