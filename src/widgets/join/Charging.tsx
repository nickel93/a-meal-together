"use client";

import { LzButton } from "@/shared/button";
import Navigator from "@/shared/navigator/Navigator";
import { useRouter, useSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { useMutation } from "@tanstack/react-query";
import { attendRoom } from "@/api/room/room";

const JoinCharging = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const roomId = searchParams.get("id") ?? "";
  const language = searchParams.get("language") ?? "ko";
  const count = searchParams.get("count") ?? "";
  const money = searchParams.get("money") ?? "";

  const mutation = useMutation({
    mutationFn: () =>
      attendRoom({
        oauthId: "7912",
        calRoomId: roomId,
        language,
        count,
        money,
      }),
    onSuccess: () => {
      alert("참석 및 결제가 완료되었습니다 🎉");
      router.push("/home");
    },
    onError: () => {
      alert("참석 신청/결제에 실패했습니다 ❌");
    },
  });

  return (
    <div
      className={twMerge(
        "mx-auto w-[375px]  bg-white",
        "flex flex-col gap-[20px]"
      )}
    >
      <Navigator onClick={() => router.back()} title="보증금 결제" />

      <h1 className="text-[20px] leading-[28px] font-pretendard font-semibold">
        보증금 결제를 진행해 주세요.
      </h1>

      <div className="flex justify-between items-center h-[54px] px-4 rounded-xl border border-[#E4E4E4] bg-[#F7F7F7]">
        <span className="text-[16px] font-pretendard font-semibold">
          보증금
        </span>
        <span className="text-[18px] font-pretendard font-semibold">
          {Number(money).toLocaleString()}원
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

      <LzButton onClick={() => mutation.mutate()} disabled={mutation.isPending}>
        {mutation.isPending ? "결제 중..." : "결제하기"}
      </LzButton>
    </div>
  );
};

export default JoinCharging;
