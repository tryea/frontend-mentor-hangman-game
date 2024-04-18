"use client";

import Image from "next/image";
import Link from "next/link";

import categories from "@/data/categories.json";
import BlueShadowButton from "@/components/BlueShadowButton";
import { cn } from "@/utils/cn";
import { useGame } from "../providers/Game";

export default function SelectCategoryPage() {
  const { setCategory } = useGame();
  return (
    <div className="flex flex-1 flex-col">
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
        <div className="w-[245px] h-[58px] sm:w-[451px] sm:h-[125px] lg:w-[590px] lg:h-[163px] relative sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
          <Image src={"/images/PickaCategory.svg"} fill alt="Pick a Category" />
        </div>
      </div>

      <div
        className={cn(
          "mt-[100px] mb-[80px] sm:mt-[114px] sm:mb-[112px] lg:mt-[155px] lg:mb-[196px]",
          "gap-4 sm:gap-8 lg:gap-x-8 lg:gap-y-[50px]",
          // "flex flex-col lg:flex-row"
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        )}
      >
        {categories.map((category) => {
          return (
            <BlueShadowButton
              key={category}
              onClick={(e) => {
                e.preventDefault();
                setCategory(category);
              }}
              className="rounded-[20px] sm:rounded-[40px] h-[77px] sm:h-[182.67px] lg:h-[190px] text-[24px] sm:text-[48px] uppercase"
            >
              {category}
            </BlueShadowButton>
          );
        })}
      </div>
    </div>
  );
}
