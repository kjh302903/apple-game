import { create } from "zustand";

type SoundKey = "click" | "pop" | "gameover" | "gamecomplete";

export const useEffectiveSoundStore = create<{
  isSoundOn: boolean;
  sounds: Record<SoundKey, HTMLAudioElement>;
  setSound: () => void;
  play: (key: SoundKey) => void;
}>((set, get) => ({
  isSoundOn: true,
  sounds: {
    click: new Audio("/sounds/click.mp3"),
    pop: new Audio("/sounds/pop.mp3"),
    gameover: new Audio("/sounds/game-over.mp3"),
    gamecomplete: new Audio("/sounds/game-complete.mp3"),
  },
  setSound: () =>
    set((state) => ({
      isSoundOn: !state.isSoundOn,
    })),
  play: (key) => {
    const { isSoundOn, sounds } = get();

    if (!isSoundOn) return;

    const sound = sounds[key];
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }
  },
}));
