"use client";
import { useEffect } from "react";
import Image from "next/image";
import ex from "./ex.png";
import Navigator from "@/shared/navigator/Navigator";
import { fetchDetailCommon2, fetchDetailImage2 } from "@/api/tourapi/tourapi";

// ✅ 필요: NEXT_PUBLIC_TOUR_API_KEY=.env.local 에 설정

const CONTENT_ID = 3056499; // 전주 삼천2동 막걸리골목

const DetailPage = () => {
  useEffect(() => {
    const run = async () => {
      try {
        const common = await fetchDetailCommon2(CONTENT_ID);
        console.log("[detailCommon2]", common);

        const images = await fetchDetailImage2(CONTENT_ID, 1, 30);
        console.log("[detailImage2]", images);
      } catch (err) {
        console.error("[TourAPI Error]", err);
      }
    };
    run();
  }, []);

  return (
    <div className="flex flex-col w-full h-full bg-white">
      {/* 헤더 */}
      <Navigator title="전주 막걸리골목" />

      <div className="relative w-full h-52">
        <Image src={ex} alt="전주 막걸리골목" fill className="object-cover" />
      </div>

      <div className="p-4 overflow-y-auto text-sm leading-relaxed text-gray-700">
        <p className="mb-3">
          삼천동 막걸리골목은 전주시 완산구 거마산로를 중심으로 조성된 곳으로
          200여 미터 거리에 있는 오래된 막걸릿집이 모여 있다. 전국 최고의 막걸리
          생산지였던 전주에는 삼천동을 비롯한 막걸릿집과 대폿집이 골목마다
          형성되어 있었다.
        </p>
        <p className="mb-3">
          1990년대를 전후해 막걸리가 전통 국민주로 주목받으면서 기존의 삼천동
          골목에 하나둘 막걸릿집들이 모여 삼천동 막걸리골목이 형성되었다.
          전주에서 가장 오랜 전통을 자랑하는 곳으로 이곳은 전주의 명소로 자리
          잡았으며 전주미래유산 으로 지정되기도 했다.
        </p>
        <p className="mb-3">
          삼천동 막걸리골목에는 수십여 개의 막걸릿집이 밀집해 있어서 취향따라
          골라 먹는 재미가 있다. 막걸리 한 주전자만 주문해도 생선구이, 전, 찌개,
          튀김, 삼합 등 20여 가지 넘는 푸짐한 안주가 기본으로 제공된다.
        </p>
        <p className="mb-3">
          흥겨운 막걸릿집 분위기와 한 끼 식사로도 충분한 한상 가득한 안주 인심에
          가족이나 친구, 지인과 부담 없이 즐기기 좋은 정겨운 공간으로 전주
          여행을 준비 중이라면 꼭 가볼 만한 명소로 추천된다.
        </p>
      </div>
    </div>
  );
};

export default DetailPage;
