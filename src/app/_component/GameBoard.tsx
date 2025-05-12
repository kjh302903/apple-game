"use client";

import React, { useEffect, useState } from "react";
import { Stage } from "react-konva";
import BackGroundLayer from "./BackGroundLayer";
import { useStartStore } from "@/store/start";
import IntroLayer from "./IntroLayer";
import GameLayer from "./GameLayer";
import { BOARD_HEIGHT, BOARD_WIDTH } from "@/constants/board";
import { useScaleStore } from "@/store/scale";

const GameBoard = () => {
  const startState = useStartStore((state) => state.startState);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : BOARD_WIDTH
  );

  const scale = useScaleStore((state) => state.scale);
  const setScale = useScaleStore((state) => state.setScale);
  const MARGIN_RATIO = 0.9;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setScale(Math.min(1, window.innerWidth / BOARD_WIDTH));
    };
    handleResize(); // 초기 설정
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Stage
      width={BOARD_WIDTH * scale * MARGIN_RATIO}
      height={BOARD_HEIGHT * scale * MARGIN_RATIO}
      scaleX={scale * MARGIN_RATIO}
      scaleY={scale * MARGIN_RATIO}
    >
      <BackGroundLayer width={BOARD_WIDTH} height={BOARD_HEIGHT} />
      {(startState === "start" || startState === "pending") && <GameLayer />}
      {startState === "end" && <IntroLayer />}
    </Stage>
  );
};

export default GameBoard;
