"use client";

import React, { useMemo } from "react";
import { Layer } from "react-konva";
import { generateGridApples } from "@/utils/generateGridApples";
import Apple from "./Apple";

const APPLE_SIZE = 40;
const COLS = 17;
const ROWS = 10;
const APPLE_COUNT = COLS * ROWS;
const OFF_SET = 20;

const AppleGrid = () => {
  const apples = useMemo(
    () =>
      generateGridApples(APPLE_COUNT, COLS, APPLE_SIZE + 5, OFF_SET, OFF_SET),
    []
  );
  return (
    <Layer>
      {apples.map((apple) => (
        <Apple key={apple.id} x={apple.x} y={apple.y} value={apple.value} />
      ))}
    </Layer>
  );
};

export default AppleGrid;
