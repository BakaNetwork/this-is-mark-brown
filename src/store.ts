import { create } from "zustand";
import { nullGameObject, swap } from "./utils/GameUtils";

type Store = {
  idx: number;
  len: number;
  nextScene: () => void;
  reset: () => void;
  updateLen: (num: number) => void;
};

const useScene = create<Store>((set) => ({
  idx: 0,
  len: 0,
  nextScene: () => set((state) => ({ idx: (state.idx + 1) % state.len })),
  reset: () => set({ idx: 0 }),
  updateLen: (len: number) => set({ len: len }),
}));

type Game = {
  url: string;
  title: string;
  description: string;
  thumbnail: string;
  width: number;
  height: number;
};

type GameStore = {
  currentGameIdx: number;
  playableGameList: Game[];
  selectedGameList: Game[];
  playableGameListLen: number;
  selectedGameListLen: number;
  moveGameLeft: (idx: number) => void;
  moveGameRight: (idx: number) => void;
  nextCurrentGame: () => void;
  prevCurrentGame: () => void;
  updatePlayableGameList: (games: Game[]) => void;
  updateSelectedGameList: (games: Game[]) => void;
};

const useGameStore = create<GameStore>((set) => {
  const playableGameList = [];
  const selectedGameList = [];
  var i = 0;
  for (i = 0; i < 10; i++) {
    playableGameList.push(nullGameObject);
  }
  for (i = 0; i < 5; i++) {
    selectedGameList.push(nullGameObject);
  }

  return {
    currentGameIdx: 0,
    playableGameList,
    selectedGameList,
    playableGameListLen: 10,
    selectedGameListLen: 5,
    moveGameLeft: (idx: number) => {
      set((state) => {
        if (idx <= 0 || idx >= state.selectedGameListLen) return {};
        const list = state.selectedGameList;
        swap(list, idx, idx - 1);
        return {
          selectedGameList: list,
        };
      });
    },
    moveGameRight: (idx: number) => {
      set((state) => {
        if (idx < 0 || idx >= state.selectedGameListLen - 1) return {};
        const list = state.selectedGameList;
        swap(list, idx, idx + 1);
        return {
          selectedGameList: list,
        };
      });
    },
    nextCurrentGame: () =>
      set((state) => ({
        currentGameIdx: (state.currentGameIdx + 1) % state.playableGameListLen,
      })),
    prevCurrentGame: () =>
      set((state) => ({
        currentGameIdx:
          (state.currentGameIdx + state.playableGameListLen - 1) %
          state.playableGameListLen,
      })),
    updatePlayableGameList: (games: Game[]) =>
      set({
        playableGameList: games,
        playableGameListLen: games.length,
      }),
    updateSelectedGameList: (games: Game[]) =>
      set({
        selectedGameList: games,
        selectedGameListLen: games.length,
      }),
  };
});

export default useScene;

export { useGameStore };

export type { Game };
