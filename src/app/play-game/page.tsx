import { GameProvider } from "../providers/Game";
import DisplayRender from "./DisplayRender";

export default function PlayGamePage() {
  return (
    <main className="flex min-h-dvh flex-col flex-1 max-h-dvh overflow-hidden overscroll-none bg-cover bg-no-repeat bg-center bg-main-image-mobile sm:bg-main-image-tablet lg:bg-main-image-desktop">
      <div className="z-10 w-full h-full absolute left-0 top-0 bg-how-to-overlay-gradient opacity-75" />
      <GameProvider>
        <div className="z-30 flex flex-col flex-1 overflow-scroll overscroll-contain scrollbar-none">
          <DisplayRender />
        </div>
      </GameProvider>
    </main>
  );
}
