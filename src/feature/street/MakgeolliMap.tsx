"use client";
import dealMap from "./dealMap.png";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Shop = {
  id: number;
  name: string;
  x: string; // 퍼센트 단위
  y: string;
};

const shops: Shop[] = [
  { id: 1, name: "옛촌막걸리", x: "80%", y: "20%" },
  { id: 2, name: "전주막걸리", x: "70%", y: "35%" },
  { id: 3, name: "용진집막걸리", x: "72%", y: "45%" },
  { id: 4, name: "북막걸리", x: "68%", y: "52%" },
  { id: 5, name: "물레방아막걸리", x: "72%", y: "60%" },
  { id: 6, name: "곡주마을", x: "65%", y: "70%" },
  { id: 7, name: "남도집", x: "40%", y: "40%" },
  { id: 8, name: "두여인생막걸리", x: "35%", y: "55%" },
];

const MapPin = ({ className = "w-6 h-6 text-[#E65F55]" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 20.41"
    fill="currentColor"
    className={className}
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 5.25 8 12.41 8 12.41S16 13.25 16 8c0-4.42-3.58-8-8-8zm0 11.25a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5z" />
  </svg>
);

const MakgeolliMap = () => {
  const [selected, setSelected] = useState<Shop | null>(null);
  const router = useRouter();

  return (
    <div className="relative w-full h-full bg-[#F8F6F5]">
      {/* 지도 */}
      <div className="relative w-full h-[500px]">
        <Image
          src={dealMap}
          alt="streetmap"
          fill
          className="object-cover rounded-lg"
        />

        {/* 전주 막걸리 골목 알아보기 버튼 */}
        <button
          onClick={() => router.push("/detail")}
          className="absolute top-[10px] left-[20px] flex items-center gap-1 rounded bg-black/50 px-2 py-1 text-white text-sm"
        >
          전주 막걸리 골목 알아보기
        </button>

        {/* 마커 + 라벨 */}
        {shops.map((shop) => (
          <button
            key={shop.id}
            onClick={() => setSelected(shop)}
            className="absolute cursor-pointer flex items-center -translate-y-full"
            style={{ left: shop.x, top: shop.y }}
          >
            <MapPin />
            <span className=" text-sm font-semibold leading-[18px] text-black  rounded px-1">
              {shop.name}
            </span>
          </button>
        ))}
      </div>

      {/* 상세 카드 */}
      {selected && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[335px] rounded-lg bg-white p-3 flex flex-col gap-2 shadow-[0_4px_4px_rgba(0,0,0,0.12)]">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-semibold">{selected.name}</h2>
            <button
              onClick={() => setSelected(null)}
              className="text-sm text-gray-500"
            >
              닫기
            </button>
          </div>
          <p className="text-sm text-gray-600">전주시 완산구 거마산로</p>
          <p className="text-sm">영업시간: 15:00 ~ 22:50</p>
        </div>
      )}
    </div>
  );
};

export default MakgeolliMap;
