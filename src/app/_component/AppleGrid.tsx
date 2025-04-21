"use client";

import React, { useMemo, useRef, useState } from "react";
import { generateGridApples } from "@/utils/generateGridApples";
import Apple from "./Apple";
import { Group, Rect } from "react-konva";
import { Rect as KonvaRect } from "konva/lib/shapes/Rect";
import { KonvaEventObject } from "konva/lib/Node";
import useImage from "use-image";

const APPLE_SIZE = 40;
const COLS = 17;
const ROWS = 10;
const APPLE_COUNT = COLS * ROWS;
const OFF_SET = 60;
const DRAG_AREA = {
  x: 40,
  y: 40,
  width: 800,
  height: 485,
};

const AppleGrid = () => {
  const [apples, setApples] = useState(() =>
    generateGridApples(APPLE_COUNT, COLS, APPLE_SIZE + 5, OFF_SET, OFF_SET)
  );

  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const dragBoxRef = useRef<KonvaRect>(null);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const selectedIdSet = useMemo(() => new Set(selectedIds), [selectedIds]);

  const [image] = useImage("/images/apple.png");

  const isInside = (
    apple: { x: number; y: number },
    selection: { x: number; y: number; width: number; height: number }
  ) => {
    const centerX = apple.x + APPLE_SIZE / 2;
    const centerY = apple.y + APPLE_SIZE / 2;
    return (
      centerX >= selection.x &&
      centerX <= selection.x + selection.width &&
      centerY >= selection.y &&
      centerY <= selection.y + selection.height
    );
  };

  const handleMouseDown = (e: KonvaEventObject<PointerEvent>) => {
    const pos = e.target.getStage()?.getPointerPosition();
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

    const pos = e.target.getStage()?.getPointerPosition();
    if (!pos) return;

    const x = Math.min(pos.x, dragStart.current.x);
    const y = Math.min(pos.y, dragStart.current.y);
    const width = Math.abs(pos.x - dragStart.current.x);
    const height = Math.abs(pos.y - dragStart.current.y);

    const box = { x, y, width, height };
    dragBoxRef.current.setAttrs(box);

    const selected = apples
      .filter((apple) => isInside(apple, box))
      .map((a) => a.id);
    setSelectedIds(selected);
  };

  const handleMouseUp = () => {
    dragStart.current = null;
    if (dragBoxRef.current) {
      dragBoxRef.current.visible(false);
      const box = dragBoxRef.current.getClientRect(); // 위치 + 크기 계산
      const selected = apples.filter((apple) => isInside(apple, box));
      const total = selected.reduce((sum, apple) => sum + apple.value, 0);

      if (total === 10) {
        // 합이 10이면 제거
        const selectedIdsToRemove = new Set(selected.map((a) => a.id));
        setApples((prev) => prev.filter((a) => !selectedIdsToRemove.has(a.id)));
      }

      setSelectedIds([]);
    }
  };

  if (!image) return null;

  return (
    <Group>
      {apples.map((apple) => (
        <Apple
          key={apple.id}
          x={apple.x}
          y={apple.y}
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
