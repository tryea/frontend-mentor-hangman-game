"use client";

import { useGame } from "../providers/Game";
import HangmanGamePage from "./HangmanGamePage";
import SelectCategoryPage from "./SelectCategoryPage";

export default function DisplayRender() {
  const { category } = useGame();

  if (category === null) {
    return <SelectCategoryPage />;
  }

  return <HangmanGamePage />;
}
