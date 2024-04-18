import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col flex-1 max-h-dvh overflow-hidden overscroll-none items-center justify-center bg-cover bg-no-repeat bg-center bg-main-image-mobile sm:bg-main-image-tablet lg:bg-main-image-desktop pt-[32.1px] lg:pt-[110px]">
      <div className="overscroll-none relative w-[324px] h-[481px] sm:w-[592px] sm:h-[500px]  pt-[138px] pb-[64px] px-8 sm:pt-[129px] sm:pb-[51px] sm:px-[166px] rounded-[48px] bg-gradient-1 shadow-main_box_shadow flex flex-col items-center ">
        <div className="absolute w-[263px] h-[130.2px] sm:w-[373.69px] sm:h-[185px] left-[32px] sm:left-[111px] top-[-65.1px] sm:top-[-110px]">
          <Image src={`/images/logo.svg`} alt="logo" fill />
        </div>

        <button
          type="button"
          className="bg-pink-gradient w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] shadow-main_play_shadow rounded-full flex items-center justify-center hover:bg-pink-gradient-hover"
        >
          <div className="relative w-[55px] h-[55px] sm:w-[66px] sm:h-[66px] flex items-center justify-center">
            <Image src={`/images/icon-play.svg`} fill alt="play-icon" />
          </div>
        </button>

        <button
          type="button"
          className="mt-[57px] bg-blue hover:bg-blue-hover w-full h-[62px] flex items-center justify-center rounded-full text-white text-heading-s shadow-main_how_to_shadow"
        >
          <Link href={"/how-to-play"}>HOW TO PLAY</Link>
        </button>
      </div>
    </main>
  );
}
