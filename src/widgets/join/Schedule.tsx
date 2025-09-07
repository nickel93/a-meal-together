"use client";

import { useState } from "react";
import { ScheduleCard } from "@/feature/join";
import { BottleIcon, BottlesIcon, PotsIcon } from "@/icon";
import LzCheckbox from "@/shared/checkbox/LzCheckbox";
import { twMerge } from "tailwind-merge";
import Navigator from "@/shared/navigator/Navigator";
import { useRouter, useSearchParams } from "next/navigation";
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
      className="relative  w-[156px] rounded-lg bg-white flex flex-col items-center justify-end "
    >
      <div>{icon}</div>
      <p className="mt-2 mb-3 text-[12px] leading-4 font-pretendard font-semibold text-black">
        {label}
      </p>
      <div className="absolute top-0 right-0">
        <LzCheckbox checked={checked} onChange={onSelect} asBadge />
      </div>
    </button>
  );
};

const Schedule = () => {
  const [selected, setSelected] = useState<DrinkKey>("2plus");
  const router = useRouter();
  const searchParams = useSearchParams();

  const roomId = searchParams.get("id");
  const roomTitle = searchParams.get("title"); // ✅ query에서 title 가져오기

  return (
    <div
      className={twMerge(
        "mx-auto w-[375px]  bg-white",
        "flex flex-col gap-[20px] h-full"
      )}
    >
      <Navigator title="한상모임" />

      <ScheduleCard title="일시">
        <div className="h-[54px] rounded-xl border border-[#E4E4E4] bg-[#F7F7F7] px-4 flex items-center justify-between">
          <span className="truncate font-pretendard font-semibold text-[18px] leading-[26px]">
            {roomTitle ?? "일정 정보 없음"} {/* ✅ title 대체 */}
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
        <div className="h-[54px] rounded-xl border border-[#E4E4E4] bg-[#F7F7F7] px-4 flex items-center justify-between">
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

        <div role="radiogroup" className="flex gap-4 h-[156px]">
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

      <div className="mt-auto w-full">
        <LzButton
          onClick={() => {
            if (!roomId) {
              alert("room id가 없습니다.");
              return;
            }
            const query = `id=${roomId}&title=${encodeURIComponent(
              roomTitle ?? ""
            )}&language=ko&count=${selected}&money=100000`; // 임시 보증금
            router.push(`/join/charging?${query}`);
          }}
        >
          선택 완료
        </LzButton>
      </div>
    </div>
  );
};

export default Schedule;
