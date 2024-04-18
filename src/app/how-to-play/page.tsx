import Image from "next/image";
import Link from "next/link";

export default function HowToPlayPage() {
  const instructions = [
    {
      number: "01",
      name: "Choose a category",
      content:
        "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
    },
    {
      number: "02",
      name: "Guess letters",
      content:
        "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it's wrong, you lose some health, which empties after eight incorrect guesses.",
    },
    {
      number: "03",
      name: "Win or lose",
      content:
        "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it's wrong, you lose some health, which empties after eight incorrect guesses.",
    },
  ];
  return (
    <main className="flex min-h-dvh flex-col flex-1 max-h-dvh overflow-hidden overscroll-none bg-cover bg-no-repeat bg-center bg-main-image-mobile sm:bg-main-image-tablet lg:bg-main-image-desktop">
      <div className="z-10 w-full h-full absolute left-0 top-0 bg-how-to-overlay-gradient opacity-75" />
      <div className="z-30 flex flex-col flex-1 overflow-scroll overscroll-contain px-[25px] sm:pl-[40px] sm:pr-[48px] lg:pl-[112px] lg:pr-[116px] scrollbar-none">
        <div className="relative w-full h-[58px] sm:h-[125px] lg:h-[163px] flex flex-row mt-[32px] sm:mt-[61px] lg:mt-[80px] justify-between items-center">
          <button
            type="button"
            className="bg-pink-gradient w-[40px] h-[40px] sm:w-[64px] sm:h-[64px] lg:w-[94px] lg:h-[94px] rounded-full flex items-center justify-center"
          >
            <Link
              href={"/"}
              className="relative w-[18px] h-[18px] sm:w-[28px] sm:h-[28px] lg:w-[41px] lg:h-[38px]"
            >
              <Image src={"/images/icon-back.svg"} fill alt="back-icon" />
            </Link>
          </button>
          <div className="w-[185px] h-[58px] sm:w-[343px] sm:h-[125px] lg:w-[448px] lg:h-[163px] relative sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
            <Image src={"/images/HowtoPlay.svg"} fill alt="How to play text" />
          </div>
        </div>

        <div className="mt-[79px] mb-[59px] lg:mt-[64px] lg:mb-[167px] flex flex-col gap-6 sm:mt-[100px] sm:mb-[98px] sm:gap-8 lg:flex-row ">
          {instructions.map(({ number, name, content }) => {
            return (
              <div
                key={number}
                className="w-full p-8 sm:p-10 lg:px-12 lg:py-[60px] bg-white rounded-[20px] lg:rounded-[40px] instruction-card-grid sm:instruction-card-grid-tablet lg:instruction-card-grid-desktop"
              >
                <div
                  style={{ gridArea: "number" }}
                  className="sm:flex sm:justify-center sm:items-center"
                >
                  <p className="text-blue text-[24px] leading-[1.2] tracking-[0.05em] sm:text-[88px] ">
                    {number}
                  </p>
                </div>

                <div style={{ gridArea: "name" }}>
                  <p className="text-dark_navy text-[24px] leading-[1.2] tracking-[0.05em] sm:text-[40px] lg:text-heading-m lg:text-center">
                    {name}
                  </p>
                </div>
                <div style={{ gridArea: "content" }}>
                  <p className=" text-ube text-[16px] leading-[1.2] tracking-[0.05em] sm:text-[20px] lg:text-center lg:text-body">
                    {content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
