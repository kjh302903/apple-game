import { useStartStore } from "@/store/start";
import { useTimeStore } from "@/store/time";
import { useEffect, useRef } from "react";

const useGameTimer = () => {
  const timeLeft = useTimeStore((state) => state.timeLeft);
  const decrement = useTimeStore((state) => state.decrement);
  const reset = useTimeStore((state) => state.resetTime);
  const startState = useStartStore((state) => state.startState);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (startState === "start") {
      reset();
      intervalRef.current = setInterval(() => {
        decrement();
      }, 1000);
    } else {
      reset();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startState, reset, decrement]);

  // timeLeft가 0이 되면 타이머 멈춤
  useEffect(() => {
    if (timeLeft === 0 && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [timeLeft]);

  return timeLeft;
};

export default useGameTimer;
