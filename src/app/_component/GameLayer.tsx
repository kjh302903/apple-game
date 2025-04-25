import React from "react";
import { Layer } from "react-konva";
import AppleGrid from "./AppleGrid";
import ResetButton from "./ResetButton";
import Timer from "./Timer";
import Score from "./Score";
import ResultModal from "./ResultModal";
import { useModalStateStore } from "@/store/modalState";
import HomeButton from "./HomeButton";

const GameLayer = () => {
  const isOpen = useModalStateStore((state) => state.isOpen);
  return (
    <Layer>
      <AppleGrid />
      <Score />
      <ResetButton />
      <HomeButton />
      <Timer />
      {isOpen && <ResultModal />}
    </Layer>
  );
};

export default GameLayer;
