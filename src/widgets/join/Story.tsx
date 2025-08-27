"use client";

import { LzButton } from "@/shared/button";
import { useRouter } from "next/navigation";

const JoinStory = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-start justify-between h-full">
      <div className="flex flex-col gap-[40px]">
        <div>
          <p className="font-pretendard font-semibold text-[24px] leading-[36px] tracking-[0] text-[#000]">
            전주 한상차림처럼,
            <br />
            정성과 신뢰가 차려지는 모임
          </p>
        </div>

        <div>
          <p className="font-pretendard text-[16px] leading-[24px] tracking-[0] text-[#333333]">
            전주 한상차림은 단순히 맛있는 음식을 넘어,
            <br />
            한 사람 한 사람을 귀하게 대접하는
            <br />
            환대 문화가 담겨 있습니다.
          </p>
          <p className="mt-4 font-pretendard text-[16px] leading-[24px] tracking-[0] text-[#333333]">
            가치한상은 전주의 문화를 토대로,
            <br />
            ‘함께 먹는 즐거움’과 ‘진심 어린 만남’을 지향합니다.
          </p>
          <p className="mt-4 font-pretendard text-[16px] leading-[24px] tracking-[0] text-[#333333]">
            정성으로 차린 자리엔, 진짜 사람이 앉습니다.
          </p>
        </div>
      </div>

      <LzButton
        onClick={() => {
          // Handle button click, e.g., navigate to a different page
          router.push("/join/table");
        }}
      >
        확인
      </LzButton>
    </div>
  );
};
export default JoinStory;
