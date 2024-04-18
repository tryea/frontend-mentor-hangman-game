import { create } from "zustand";

import allGames from "@/data/data.json";

export type Categories =
  | "Movies"
  | "TV Shows"
  | "Countries"
  | "Capital Cities"
  | "Animals"
  | "Sports";

export type GameState = {
  category: null | Categories;
  setCategory: (category: Categories) => void;
  health: number;
  wordList: string[];
  currentWord: string | null;
  decreaseHealth: () => void;
  nextGame: () => void;
};

export const useGame = create<GameState>((set) => ({
  category: null,
  setCategory: (category: null | Categories) =>
    set(() => {
      const newState: {
        category: null | Categories;
        wordList: string[];
        health: number;
        currentWord: string | null;
      } = {
        category: category,
        wordList: [],
        health: 8,
        currentWord: null,
      };

      if (category !== null) {
        const wordList = allGames.categories[category].map((val) => val.name);
        newState.wordList = wordList;

        const randomIndex = Math.floor(Math.random() * wordList.length);

        newState.currentWord = wordList[randomIndex];

        newState.wordList = wordList.filter((val) => {
          return val !== wordList[randomIndex];
        });
      }

      return newState;
    }),
  health: 8,
  decreaseHealth: () => {
    set((state) => ({ health: state.health - 1 }));
  },
  nextGame: () => {
    set((state) => {
      const randomIndex = Math.floor(Math.random() * state.wordList.length);
      const word = state.wordList[randomIndex];

      return {
        currentWord: state.wordList[randomIndex],
        health: 8,
        wordList: state.wordList.filter((val) => {
          return val !== word;
        }),
      };
    });
  },
  wordList: [],
  currentWord: null,
}));
