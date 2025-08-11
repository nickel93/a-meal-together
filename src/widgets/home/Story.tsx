"use client";

import { LzButton } from "@/shared/button";
import { useRouter } from "next/navigation";

const HomeStory = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-between p-6">
      <div className="flex flex-col items-start  gap-[20px]">
        <div>
          <p className="font-semibold text-[24px] leading-[36px] tracking-[0]">
            전주 한상차림처럼, 정성과 신뢰가 차려지는 모임
          </p>
        </div>

        <div>
          <p>
            가치한상은 전주 한상차림의 정성과 신뢰를 바탕으로, 함께 먹고 즐기는
            모임을 제공합니다. 우리의 목표는 사람들이 모여 소통하고, 새로운
            경험을 나누는 것입니다.
          </p>
        </div>
      </div>
      <LzButton
        onClick={() => {
          // Handle button click, e.g., navigate to a different page
          router.push("/home/join");
        }}
      >
        확인
      </LzButton>
    </div>
  );
};
export default HomeStory;
