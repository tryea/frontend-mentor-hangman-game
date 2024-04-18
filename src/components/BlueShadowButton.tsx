import { cn } from "@/utils/cn";
import { ReactNode } from "react";

export default function BlueShadowButton({
  children,
  className = "",
  onClick = () => {},
}: {
  children: ReactNode;
  className?: HTMLButtonElement["className"];
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        `bg-blue hover:bg-blue-hover w-full h-[62px] flex items-center justify-center rounded-full text-white heading-s shadow-main_how_to_shadow`,
        className
      )}
    >
      {children}
    </button>
  );
}
