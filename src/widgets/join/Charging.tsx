"use client";

import { LzButton } from "@/shared/button";
import { LzInput } from "@/shared/input";
import Navigator from "@/shared/navigator/Navigator";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

const JoinCharging = () => {
  const router = useRouter();

  return (
    <div
      className={twMerge(
        "mx-auto w-[375px] min-h-screen bg-white",
        "pt-[54px] px-[20px]",
        "flex flex-col gap-[20px]"
      )}
    >
      <Navigator title="보증금 결제" />
      <h1 className="text-[20px] leading-[28px] font-pretendard font-semibold">
        보증금 결제를 진행해 주세요.
      </h1>
      <div className="flex justify-between items-center h-[54px] px-4 rounded-xl border border-[#E4E4E4] bg-[#F7F7F7]">
        <span className="text-[16px] font-pretendard font-semibold">
          보증금
        </span>
        <span className="text-[18px] font-pretendard font-semibold">
          100,000원
        </span>
      </div>

      <div className="flex flex-col gap-1 text-[14px] leading-[20px] text-[#6F6F77]">
        <p>*보증금은 식당 이용료로 사용됩니다. (추가 금액은 자체적으로 계산)</p>
        <p>
          *모임 시작전 72시간(3일) 이내에는 환불되지 않습니다. (72시간 이전에는
          100% 환불)
        </p>
      </div>

      <p className="text-[14px] leading-[20px] text-[#6F6F77]">
        결제 시 이용약관에 동의하게 됩니다.
      </p>

      <div className="mt-auto">
        <LzButton onClick={() => router.push("/home")}>결제하기</LzButton>
      </div>
    </div>
  );
};

export default JoinCharging;
