"use client";
import { RoomCard } from "@/shared/roomcard";
import { Section } from "@/shared/section";
import { HomeHeader } from "@/shared/homeHeader";
import { useQuery } from "@tanstack/react-query";
import { getRoomList, Room } from "@/api/room/room";
import { RoomCardProps } from "@/shared/roomcard/RoomCard";

// ✅ D-Day 계산 함수
const getDDay = (moimDateTime: string) => {
  const today = new Date();
  const target = new Date(moimDateTime);
  const diff = Math.ceil(
    (target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );
  if (diff > 0) return `D-${diff}`;
  if (diff === 0) return "D-Day";
  return `종료됨`;
};

// ✅ calRoomStatus → colorType 매핑
const mapStatusToColor = (
  status: Room["calRoomStatus"]
): RoomCardProps["colorType"] => {
  switch (status) {
    case "CONFIRMED":
      return "GREEN"; // 확정된 모임 → 초록색
    case "REQUEST":
      return "BLUE"; // 요청 중 → 파랑
    case "CANCELLED":
      return "CORAL"; // 취소됨 → 코랄
    case "EMPTY":
    default:
      return "YELLOW"; // 기본값 → 노랑
  }
};

const Home = () => {
  const {
    data: rooms,
    isLoading,
    error,
  } = useQuery<Room[]>({
    queryKey: ["rooms"],
    queryFn: getRoomList,
  });

  return (
    <div className="mx-auto w-[375px] bg-white flex flex-col gap-[40px] p-5">
      <HomeHeader />

      <p className="font-semibold text-[24px]">예정된 한상 모임</p>

      <div className="flex flex-col gap-[20px]">
        {isLoading && <p>불러오는 중...</p>}
        {error && (
          <p className="text-red-500">모임 정보를 불러오지 못했습니다.</p>
        )}

        {rooms && rooms.length > 0 && (
          <>
            <Section title="일시">
              <div className="flex items-center justify-between rounded-lg bg-[#F7F7F7] px-4 py-3 text-[16px] font-semibold">
                <span>
                  {new Date(rooms[0].moimDateTime).toLocaleString("ko-KR", {
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
                <span className="text-[#E65F55] font-medium">
                  {getDDay(rooms[0].moimDateTime)}
                </span>
              </div>
            </Section>

            {/* 위치 */}
            <Section title="위치">
              <div className="flex items-center justify-between rounded-lg bg-[#F7F7F7] px-4 py-3">
                <div>
                  <p className="text-[16px] font-semibold">
                    {rooms[0].storeTitle}
                  </p>
                  <p className="text-[14px] text-[#6F6F77] truncate">
                    {rooms[0].location}
                  </p>
                </div>
                <button className="text-[#6F6F77] text-[14px] font-medium">
                  위치 보기
                </button>
              </div>
            </Section>

            <Section title="내 모임 정보">
              <div className="flex overflow-x-auto gap-[12px]">
                {rooms.map((room) => (
                  <RoomCard
                    key={room.id}
                    title={room.title}
                    description={room.chatLink} // TODO: 필요하면 storeTitle/설명으로 교체
                    status={getDDay(room.moimDateTime)}
                    colorType={mapStatusToColor(room.calRoomStatus)}
                    rightIcon={null}
                  />
                ))}
              </div>
            </Section>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
