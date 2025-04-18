import { useStartStore } from "@/store/start";
import { useTimeStore } from "@/store/time";
import { useEffect } from "react";

const useGameTimer = () => {
  const timeLeft = useTimeStore((state) => state.timeLeft);
  const decrement = useTimeStore((state) => state.decrement);
  const reset = useTimeStore((state) => state.reset);
  const isStart = useStartStore((state) => state.isStart);

  useEffect(() => {
    if (isStart) {
      reset();
      const interval = setInterval(() => {
        decrement();
      }, 1000);
      return () => clearInterval(interval);
    } else {
      reset();
    }
  }, [isStart]);

  return timeLeft;
};

export default useGameTimer;
