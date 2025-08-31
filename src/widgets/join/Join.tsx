"use client";

import { getRoomList, Room } from "@/api/room/room";
import { HomeJoinCard } from "@/feature/join";
import { LzButton } from "@/shared/button";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

const JoinTable = () => {
  const router = useRouter();
  const [selected, setSelected] = useState<Room | null>(null); // ✅ Room 객체 자체를 저장

  const { data, isLoading, isError } = useQuery<Room[]>({
    queryKey: ["roomList"],
    queryFn: getRoomList,
  });

  if (isLoading) {
    return <p>불러오는 중...</p>;
  }

  if (isError || !data) {
    return <p>데이터를 불러오지 못했습니다.</p>;
  }

  return (
    <div className="flex flex-col items-start h-full flex-grow">
      <h1 className="text-2xl font-bold mb-4">예정된 한상모임</h1>
      <p className="text-[16px] font-normal text-[#333333] mb-6">
        오직 전주에서 즐기는 특별한 한상! 인연이 될지도 모르는 우연이 기다리고
        있어요.
      </p>

      <div className="flex flex-col gap-4 mb-6 w-full">
        {data.map((item) => (
          <HomeJoinCard
            key={item.id}
            title={item.title}
            description={new Date(item.createdDate).toLocaleString("ko-KR")}
            onClick={() => setSelected(item)}
            selected={item.id === selected?.id}
          />
        ))}
      </div>

      <div className="mt-auto w-full">
        <LzButton
          onClick={() => {
            if (selected) {
              const query = `id=${selected.id}&title=${encodeURIComponent(
                selected.title
              )}`;
              router.push(`/join/schedule?${query}`);
            } else {
              alert("참석할 모임을 선택해주세요.");
            }
          }}
        >
          <span className="text-white">모임 참여하기</span>
        </LzButton>
      </div>
    </div>
  );
};
export default JoinTable;
