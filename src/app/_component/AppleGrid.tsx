"use client";

import React, { useMemo, useRef, useState } from "react";
import Apple from "./Apple";
import { Group, Rect } from "react-konva";
import { Rect as KonvaRect } from "konva/lib/shapes/Rect";
import { KonvaEventObject } from "konva/lib/Node";
import useImage from "use-image";
import { isInside } from "@/utils/isInside";
import { useScoreStore } from "@/store/score";
import { APPLE_SIZE, useAppleStore } from "@/store/apple";
import { BOARD_MARGIN, GAME_HEIGHT, GAME_WIDTH } from "@/constants/board";
import { useEffectiveSoundStore } from "@/store/effectiveSound";
import { useScaleStore } from "@/store/scale";

const DRAG_AREA = {
  x: BOARD_MARGIN,
  y: BOARD_MARGIN,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
};

const AppleGrid = () => {
  const apples = useAppleStore((state) => state.apples);
  const version = useAppleStore((state) => state.version);
  const removeApplesById = useAppleStore((state) => state.removeApplesById);

  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const dragBoxRef = useRef<KonvaRect>(null);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const selectedIdSet = useMemo(() => new Set(selectedIds), [selectedIds]);
  const addScore = useScoreStore((state) => state.addScore);
  const play = useEffectiveSoundStore((state) => state.play);
  const scale = useScaleStore((state) => state.scale);

  const [image] = useImage("/images/apple.png");

  const dragBox = useRef<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);

  const getScaledPointerPosition = (e: KonvaEventObject<PointerEvent>) => {
    const pos = e.target.getStage()?.getPointerPosition();
    if (!pos) return null;
    return {
      x: pos.x / (scale * 0.9),
      y: pos.y / (scale * 0.9),
    };
  };

  const handleMouseDown = (e: KonvaEventObject<PointerEvent>) => {
    const pos = getScaledPointerPosition(e);
    if (!pos) return;

    // 드래그 영역 안에서만 시작
    if (
      pos.x < DRAG_AREA.x ||
      pos.x > DRAG_AREA.x + DRAG_AREA.width ||
      pos.y < DRAG_AREA.y ||
      pos.y > DRAG_AREA.y + DRAG_AREA.height
    )
      return;

    dragStart.current = pos;
    if (dragBoxRef.current) {
      dragBoxRef.current.visible(true);
      dragBoxRef.current.width(0);
      dragBoxRef.current.height(0);
      dragBoxRef.current.x(pos.x);
      dragBoxRef.current.y(pos.y);
    }
  };

  const handleMouseMove = (e: KonvaEventObject<PointerEvent>) => {
    if (!dragStart.current || !dragBoxRef.current) return;

    const pos = getScaledPointerPosition(e);
    if (!pos) return;

    const x = Math.min(pos.x, dragStart.current.x);
    const y = Math.min(pos.y, dragStart.current.y);
    const width = Math.abs(pos.x - dragStart.current.x);
    const height = Math.abs(pos.y - dragStart.current.y);

    const box = { x, y, width, height };

    dragBox.current = box; // 여기 저장!
    dragBoxRef.current.setAttrs(box);

    const selected = apples
      .filter((apple) => isInside(apple, box, APPLE_SIZE))
      .map((a) => a.id);
    setSelectedIds(selected);
  };

  const handleMouseUp = () => {
    dragStart.current = null;
    if (dragBoxRef.current && dragBox.current) {
      dragBoxRef.current.visible(false);
      const selected = apples.filter((apple) =>
        isInside(apple, dragBox.current!, APPLE_SIZE)
      );

      const total = selected.reduce((sum, apple) => sum + apple.value, 0);

      if (total === 10) {
        // 합이 10이면 제거
        play("pop");
        const selectedIdsToRemove = new Set(selected.map((a) => a.id));
        removeApplesById(selectedIdsToRemove);
        addScore(selected.length);
      }

      setSelectedIds([]);
      dragBox.current = null; // 초기화
    }
  };

  if (!image) return null;

  return (
    <Group>
      {apples.map((apple) => (
        <Apple
          key={apple.id}
          version={version}
          x={apple.x}
          y={apple.y}
          size={APPLE_SIZE}
          value={apple.value}
          image={image}
          selected={selectedIdSet.has(apple.id)}
        />
      ))}
      <Rect
        ref={dragBoxRef}
        visible={false}
        stroke="blue"
        strokeWidth={1}
        dash={[4, 4]}
        fill="rgba(0, 0, 255, 0.1)"
      />
      <Rect
        x={DRAG_AREA.x}
        y={DRAG_AREA.y}
        width={DRAG_AREA.width}
        height={DRAG_AREA.height}
        listening={true}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
    </Group>
  );
};

export default AppleGrid;
