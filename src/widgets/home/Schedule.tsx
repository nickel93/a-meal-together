"use client";

import { useState } from "react";
import { ScheduleCard } from "@/feature/home";
import { BottleIcon, BottlesIcon, PotsIcon } from "@/icon";
import LzCheckbox from "@/shared/checkbox/LzCheckbox";
import { twMerge } from "tailwind-merge";

interface DrinkCardProps {
  icon: React.ReactNode;
  label: string;
  defaultChecked?: boolean;
}

const DrinkCard = ({ icon, label, defaultChecked }: DrinkCardProps) => {
  const [checked, setChecked] = useState(!!defaultChecked);

  return (
    <div className="relative aspect-[1/1.1] height-[156px] rounded-lg border border-[#E4E4E4] bg-white flex flex-col items-center justify-end">
      <LzCheckbox defaultChecked={checked} onChange={setChecked} asBadge />
      <div className="mt-1">{icon}</div>
      <p className="mt-2 text-[12px] leading-4 font-pretendard font-semibold text-black">
        {label}
      </p>
    </div>
  );
};

const Schedule = () => {
  return (
    <div
      className={twMerge(
        "mx-auto w-[375px] min-h-screen bg-white",
        "pt-[54px] px-[20px]",
        "flex flex-col gap-[20px]"
      )}
    >
      <h1 className="text-[18px] leading-[26px] font-pretendard font-semibold">
        한상모임
      </h1>

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
        <div className="grid grid-cols-3 gap-4">
          <DrinkCard
            icon={<BottlesIcon />}
            label="막걸리 2병 이상"
            defaultChecked
          />
          <DrinkCard icon={<BottleIcon />} label="막걸리 1병" />
          <DrinkCard icon={<PotsIcon />} label="막걸리 2잔↓" />
        </div>
      </section>

      <div className="mt-auto pb-[24px]">
        <button className="w-full h-[64px] rounded-xl bg-[#E35F57] text-white text-[18px] leading-[26px] font-pretendard font-semibold">
          선택 완료
        </button>
      </div>
    </div>
  );
};

export default Schedule;
