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

export default useScene;
