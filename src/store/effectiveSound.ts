import { create } from "zustand";

export const useEffectiveSoundStore = create<{
  isSoundOn: boolean;
  clickSound: HTMLAudioElement;
  setSound: () => void;
  playClick: () => void;
}>((set, get) => {
  const clickSound = new Audio("/sounds/click.mp3");

  return {
    isSoundOn: true,
    clickSound,
    setSound: () =>
      set((state) => ({
        isSoundOn: !state.isSoundOn,
      })),
    playClick: () => {
      const isSoundOn = get().isSoundOn;

      if (!isSoundOn) return;

      const sound = get().clickSound;
      sound.currentTime = 0;
      sound.play();
    },
  };
});
