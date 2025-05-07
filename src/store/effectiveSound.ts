import { create } from "zustand";

export const useEffectiveSoundStore = create<{
  isSoundOn: boolean;
  clickSound: HTMLAudioElement;
  popSound: HTMLAudioElement;
  setSound: () => void;
  playClick: () => void;
  playPop: () => void;
}>((set, get) => {
  const clickSound = new Audio("/sounds/click.mp3");
  const popSound = new Audio("/sounds/pop.mp3");
  return {
    isSoundOn: true,
    clickSound,
    popSound,
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
    playPop: () => {
      const isSoundOn = get().isSoundOn;

      if (!isSoundOn) return;

      const sound = get().popSound;
      sound.currentTime = 0;
      sound.play();
    },
  };
});
