"use client";

import { useState } from "react";
import { ScheduleCard } from "@/feature/join";
import { BottleIcon, BottlesIcon, PotsIcon } from "@/icon";
import LzCheckbox from "@/shared/checkbox/LzCheckbox";
import { twMerge } from "tailwind-merge";
import Navigator from "@/shared/navigator/Navigator";
import { useRouter } from "next/navigation";
import { LzButton } from "@/shared/button";

type DrinkKey = "2plus" | "1bottle" | "2cups";

interface DrinkCardProps {
  icon: React.ReactNode;
  label: string;
  checked: boolean;
  onSelect: () => void;
}

const DrinkCard = ({ icon, label, checked, onSelect }: DrinkCardProps) => {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      onClick={onSelect}
      className="relative aspect-[1/1.1] rounded-lg bg-white flex flex-col items-center justify-end"
    >
      {/* 체크 배지 */}
      <div className="absolute left-2 top-2">
        <LzCheckbox checked={checked} onChange={onSelect} asBadge />
      </div>

      {/* 아이콘 & 라벨 */}
      <div className="mt-6">{icon}</div>
      <p className="mt-2 mb-3 text-[12px] leading-4 font-pretendard font-semibold text-black">
        {label}
      </p>
    </button>
  );
};

const Schedule = () => {
  const [selected, setSelected] = useState<DrinkKey>("2plus");
  const router = useRouter();

  return (
    <div
      className={twMerge(
        "mx-auto w-[375px] min-h-screen bg-white",
        "pt-[54px] px-[20px]",
        "flex flex-col gap-[20px]"
      )}
    >
      <Navigator title="한상모임" />

      <ScheduleCard title="일시">
        <div className="h-[64px] rounded-xl border border-[#E4E4E4] bg-[#F7F7F7] px-4 flex items-center justify-between">
          <span className="truncate font-pretendard font-semibold text-[18px] leading-[26px]">
            8월 12일, 오후 7:00
          </span>
          <button
            type="button"
            className="text-[16px] leading-[22px] text-[#6F6F77]"
          >
            일정 변경
          </button>
        </div>
      </ScheduleCard>

      <ScheduleCard title="내 언어">
        <div className="h-[64px] rounded-xl border border-[#E4E4E4] bg-[#F7F7F7] px-4 flex items-center justify-between">
          <span className="text-[16px] leading-[22px]">한국어</span>
          <button
            type="button"
            className="text-[16px] leading-[22px] text-[#6F6F77]"
          >
            언어 수정
          </button>
        </div>
      </ScheduleCard>

      <section className="flex flex-col gap-3">
        <h2 className="text-[16px] leading-[22px] font-pretendard font-semibold">
          내 주량 선택
        </h2>

        <div role="radiogroup" className="grid grid-cols-3 gap-4">
          <DrinkCard
            icon={<BottlesIcon />}
            label="막걸리 2병 이상"
            checked={selected === "2plus"}
            onSelect={() => setSelected("2plus")}
          />
          <DrinkCard
            icon={<BottleIcon />}
            label="막걸리 1병"
            checked={selected === "1bottle"}
            onSelect={() => setSelected("1bottle")}
          />
          <DrinkCard
            icon={<PotsIcon />}
            label="막걸리 2잔↓"
            checked={selected === "2cups"}
            onSelect={() => setSelected("2cups")}
          />
        </div>
      </section>

      <div className="mt-auto pb-[24px]">
        <LzButton onClick={() => router.push("/join/charging")}>
          선택 완료
        </LzButton>
      </div>
    </div>
  );
};

export default Schedule;
