import { useGame } from "@/app/providers/Game";
import { useEffect, useState } from "react";

export default function HealthBar() {
  const { health } = useGame();

  const [healthClass, setHealthClass] = useState("w-full");

  useEffect(() => {
    const percentage = (health / 8) * 100;
    setHealthClass(`w-[${percentage}%]`);
  }, [health]);
  return (
    <div className="w-[57px] h-[16px] sm:w-[160px] sm:h-[31px] lg:w-[240px] lg:h-[31px] bg-white rounded-full p-1 sm:px-[11px] sm:py-[9px]">
      <div
        className={`bg-dark_navy h-full ${healthClass} rounded-full`}
        style={{ width: `${(health / 8) * 100}%` }}
      />
    </div>
  );
}
