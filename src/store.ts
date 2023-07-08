import { create } from "zustand";

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
};

const useGameStore = create<GameStore>((set) => {
  const playableGameList = [];
  const selectedGameList = [];
  var i = 0;
  for (i = 0; i < 10; i++) {
    playableGameList.push({
      url: "",
      title: "",
      description: "",
      thumbnail: "",
    });
  }
  for (i = 0; i < 5; i++) {
    selectedGameList.push({
      url: "",
      title: `${i}`,
      description: "",
      thumbnail: "",
    });
  }
  const swap = (arr: any[], index1: number, index2: number) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };

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
        currentGameIdx: (state.currentGameIdx - 1) % state.playableGameListLen,
      })),
    updatePlayableGameList: (games: Game[]) =>
      set((state) => ({
        playableGameList: games,
        playableGameListLen: games.length,
      })),
  };
});

export default useScene;

export { useGameStore };

export type { Game };
