"use client";

import { HomeJoinCard } from "@/feature/home";
import { LzButton } from "@/shared/button";
import { useRouter } from "next/navigation";

const HomeJoin = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-start justify-center h-full">
      <h1 className="text-2xl font-bold mb-4">예정된 한상모임</h1>
      <p className="text-lg mb-6">
        오직 전주에서 즐기는 특별한 한상! 인연이 될지도 모르는 우연이 기다리고
        있어요.
      </p>
      <div>
        {[
          { title: "8월 11일 월요일", description: "오후 7:00" },
          { title: "8월 12일 화요일", description: "오후 7:00" },
          { title: "8월 13일 수요일", description: "오후 7:00" },
          { title: "8월 14일 목요일", description: "오후 7:00" },
        ].map((item, index) => (
          <HomeJoinCard
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <LzButton onClick={() => router.push("/home/schedule")}>
        <span className="text-white">모임 참여하기</span>
      </LzButton>
    </div>
  );
};
export default HomeJoin;
