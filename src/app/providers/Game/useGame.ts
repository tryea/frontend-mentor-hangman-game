import { create } from "zustand";

type GameState = {
  category: null | string;
  setCategory: (category: string) => void;
  health: number;
  wordList: string[];
};

export const useGame = create<GameState>((set) => ({
  category: null,
  setCategory: (category: null | string) => set(() => ({ category: category })),
  health: 8,
  wordList: [],
}));
