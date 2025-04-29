import { create } from "zustand";

export const useBGMStore = create<{
  audio: HTMLAudioElement | null;
  init: () => void;
  play: () => void;
  stop: () => void;
  reset: () => void;
}>((set, get) => ({
  audio: null,
  init: () => {
    const currentAudio = get().audio;
    if (!currentAudio) {
      const audio = new Audio("/sounds/game-bgm.mp3");
      audio.loop = true;
      audio.volume = 0.3;
      set({ audio: audio });
    }
  },
  play: () => {
    const { audio, init } = get();
    if (!audio) {
      init();
    }
    get()
      .audio?.play()
      .catch((e) => console.warn("BGM play error:", e));
  },
  stop: () => {
    const { audio } = get();
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  },
  reset: () => {
    get().stop();
    get().play();
  },
}));
