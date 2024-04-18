"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import BlueShadowButton from "./BlueShadowButton";
import { useGame } from "@/app/providers/Game";
import { useRouter } from "next/navigation";

export default function GameModal() {
  const { statusGame, closeModal, changeStatusGame, setCategory, nextGame } =
    useGame();
  const router = useRouter();
  return createPortal(
    <div className="absolute top-0 left-0 z-50 min-w-full min-h-dvh flex items-center justify-center">
      <div className="bg-modal-bg-gradient opacity-75 absolute top-0 left-0 w-full h-full" />
      <div className="relative w-[324px] h-[445px] sm:w-[592px] sm:h-[500px] pt-[138px] pb-[64px] px-8 sm:pt-[129px] sm:pb-[51px] sm:px-[166px] rounded-[48px] bg-gradient-1 shadow-main_box_shadow flex flex-col items-center ">
        <div className="absolute w-[263px] h-[130.2px] sm:w-[373.69px] sm:h-[185px] left-[32px] sm:left-[111px] top-[-65.1px] sm:top-[-110px]">
          {statusGame === "Paused" && (
            <Image src={`/images/PausedText.svg`} alt="logo" fill />
          )}
          {statusGame === "Win" && (
            <Image src={`/images/YouWinText.svg`} alt="logo" fill />
          )}
          {statusGame === "Lose" && (
            <Image src={`/images/YouLoseText.svg`} alt="logo" fill />
          )}
        </div>
        <div className="flex flex-col gap-[34px]">
          <BlueShadowButton
            className="uppercase w-[226px]"
            onClick={() => {
              if (statusGame === "Win" || statusGame === "Lose") {
                nextGame();
              }
              changeStatusGame("Played");
              closeModal();
            }}
          >
            CONTINUE
          </BlueShadowButton>
          <BlueShadowButton
            className="uppercase"
            onClick={() => {
              changeStatusGame("Played");
              closeModal();
              setCategory(null);
              router.replace("/play-game");
            }}
          >
            new category
          </BlueShadowButton>
          <div
            onClick={() => {
              router.replace("/");

              changeStatusGame("Played");
              closeModal();
              setCategory(null);
            }}
            className="bg-pink-gradient text-white text-[32px] leading-[1.2] h-[62px] w-[235px] rounded-full uppercase flex items-center justify-center"
          >
            quit game
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
