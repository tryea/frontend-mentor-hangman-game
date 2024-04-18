"use client";

import Image from "next/image";
import { useGame } from "../providers/Game";
import { useEffect, useId, useState } from "react";
import HealthBar from "@/components/HealthBar";
import GameModal from "@/components/GameModal";

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export default function HangmanGamePage() {
  const {
    category,
    currentWord,
    decreaseHealth,
    showMenuModal,
    openModal,
    changeStatusGame,
    selectedCharacter,
    setSelectedCharacter,
  } = useGame();

  useEffect(() => {
    const win = currentWord!.split("").every((val) => {
      if (val === " ") {
        return true;
      }

      return selectedCharacter.includes(val.toUpperCase());
    });

    if (win) {
      changeStatusGame("Win");
      openModal();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCharacter, currentWord]);
  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="relative w-full flex flex-row justify-between items-center h-[48px] sm:h-[64px] lg:h-[163px] mt-[46px] sm:mt-[61px] lg:mt-[60px]">
          <div className="flex flex-row gap-4 sm:gap-8 lg:gap-[57px] h-full items-center">
            <button
              type="button"
              onClick={() => {
                openModal();
                changeStatusGame("Paused");
              }}
              className="bg-pink-gradient w-[40px] h-[40px] sm:w-[64px] sm:h-[64px] lg:w-[94px] lg:h-[94px] rounded-full flex items-center justify-center"
            >
              <div className="relative w-[16.17px] h-[13.62px] sm:w-[25.87px] sm:h-[21.79px] lg:w-[38px] lg:h-[32px]">
                <Image src={"/images/icon-menu.svg"} fill alt="menu-icon" />
              </div>
            </button>
            <p className="block text-white text-[40px] sm:text-[48px] lg:text-[88px] leading-[1.2] tracking-[0.05em] ">
              {category}
            </p>
          </div>
          <div className="flex flex-row gap-4 sm:gap-10 h-full items-center">
            <HealthBar />
            <div className="relative w-[26.16px] h-[24px] sm:w-[53.33px] sm:h-[48.93px] lg:w-[53.33px] lg:h-[48.93px]">
              <Image src={"/images/icon-heart.svg"} fill alt="heart" />
            </div>
          </div>
        </div>

        <div className="flex flex-1 max-h-full overflow-hidden flex-col mt-[56px] mb-8 sm:mt-28 sm:mb-28 lg:mb-14 lg:mt-4 gap-8">
          <div className="flex flex-1 flex-row flex-wrap gap-3">
            {currentWord!.split("").map((char, idx) => {
              if (char === " ") {
                return (
                  <div
                    key={`space-${Math.random()}`}
                    className={`bg-transparent hover:bg-blue-hover min-w-[40px] min-h-fit max-h-[66px] flex items-center justify-center rounded-[12px]`}
                  />
                );
              }

              return (
                <div
                  key={`${char}-${Math.random()}`}
                  className={`bg-blue uppercase hover:bg-blue-hover min-w-[40px] min-h-fit max-h-[66px] flex items-center justify-center rounded-[12px] text-white text-[40px] leading-[1.2] tracking-[0.05em] shadow-main_how_to_shadow ${
                    selectedCharacter.includes(char.toUpperCase())
                      ? "opacity-100"
                      : "opacity-25"
                  }`}
                >
                  {selectedCharacter.includes(char.toUpperCase()) ? char : " "}
                </div>
              );
            })}
          </div>
          <div className="flex flex-row flex-wrap gap-y-8 gap-x-1 max-h-[216px]">
            {characters.map((char) => {
              return (
                <button
                  key={char}
                  disabled={selectedCharacter.includes(char.toUpperCase())}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedCharacter(char);

                    if (
                      !currentWord!.toUpperCase()!.includes(char.toUpperCase())
                    ) {
                      decreaseHealth();
                    }
                  }}
                  className="bg-white disabled:opacity-25 w-[28.89px] h-[56px] flex items-center justify-center rounded-[8px] text-dark_navy text-[24px] leading-[1.5] tracking-[0.02em]"
                >
                  {char}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      {showMenuModal && <GameModal />}
    </>
  );
}
