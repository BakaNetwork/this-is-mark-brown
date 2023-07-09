import { create } from "zustand";

type Rank = {
  map: Map<string, number[]>;
  updateMap: (map: Map<string, number[]>) => void;
};

const useRank = create<Rank>((set) => ({
  map: new Map<string, number[]>(),
  updateMap: (map: Map<string, number[]>) => set({ map: map }),
}));

export default useRank;
