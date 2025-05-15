"use client";

import React, { useEffect, useRef } from "react";
import { Stage } from "react-konva";
import BackGroundLayer from "./BackGroundLayer";
import { useStartStore } from "@/store/start";
import IntroLayer from "./IntroLayer";
import GameLayer from "./GameLayer";
import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  M_BOARD_HEIGHT,
  M_BOARD_WIDTH,
  MARGIN_RATIO,
} from "@/constants/board";
import { useScaleStore } from "@/store/scale";
import { useResizeModalStateStore } from "@/store/resizeModalState";

const GameBoard = () => {
  const startState = useStartStore((state) => state.startState);
  const scale = useScaleStore((state) => state.scale);
  const setScale = useScaleStore((state) => state.setScale);
  const isMobile = useScaleStore((state) => state.isMobile);
  const setMobile = useScaleStore((state) => state.setMobile);
  const openResizeModal = useResizeModalStateStore((state) => state.openModal);

  const startRef = useRef(startState);

  // 최신 상태 추적
  useEffect(() => {
    startRef.current = startState;
  }, [startState]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isMobile = width <= 540;
      const newScale = Math.min(1, width / BOARD_WIDTH);

      setMobile(isMobile);
      setScale(newScale);

      // 실제 resize 시점의 상태 확인
      if (startRef.current === "start") {
        openResizeModal();
      }
    };

    handleResize(); // 초기 설정
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Stage
      width={isMobile ? M_BOARD_WIDTH : BOARD_WIDTH * scale * MARGIN_RATIO}
      height={isMobile ? M_BOARD_HEIGHT : BOARD_HEIGHT * scale * MARGIN_RATIO}
      scaleX={isMobile ? 1 : scale * MARGIN_RATIO}
      scaleY={isMobile ? 1 : scale * MARGIN_RATIO}
    >
      <BackGroundLayer
        width={isMobile ? M_BOARD_WIDTH : BOARD_WIDTH}
        height={isMobile ? M_BOARD_HEIGHT : BOARD_HEIGHT}
      />
      {(startState === "start" || startState === "pending") && <GameLayer />}
      {startState === "end" && <IntroLayer />}
    </Stage>
  );
};

export default GameBoard;
