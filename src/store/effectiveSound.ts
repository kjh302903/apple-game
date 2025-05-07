import { create } from "zustand";

type SoundKey = "click" | "pop" | "gameover" | "gamecomplete";

export const useEffectiveSoundStore = create<{
  isSoundOn: boolean;
  sounds: Partial<Record<SoundKey, HTMLAudioElement>>;
  setSound: () => void;
  play: (key: string) => void;
  preload: () => void;
}>((set, get) => ({
  isSoundOn: true,
  sounds: {},
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
  preload: () => {
    const loadedSounds: Partial<Record<SoundKey, HTMLAudioElement>> = {
      click: new Audio("/sounds/click.mp3"),
      pop: new Audio("/sounds/pop.mp3"),
      gameover: new Audio("/sounds/game-over.mp3"),
      gamecomplete: new Audio("/sounds/game-complete.mp3"),
    };
    set({ sounds: loadedSounds });
  },
}));
