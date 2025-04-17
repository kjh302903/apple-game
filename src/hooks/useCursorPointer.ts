import Konva from "konva";

const useCursorPointer = () => {
  const pointerCursor = (e: Konva.KonvaEventObject<MouseEvent>) => {
    const stageContainer = e.target.getStage()?.container();
    if (stageContainer) {
      stageContainer.style.cursor = "pointer";
    }
  };

  const resetCursor = (e: Konva.KonvaEventObject<MouseEvent>) => {
    const stageContainer = e.target.getStage()?.container();
    if (stageContainer) {
      stageContainer.style.cursor = "default";
    }
  };

  return {
    pointerCursor,
    resetCursor,
  };
};

export default useCursorPointer;
