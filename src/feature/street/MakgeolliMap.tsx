"use client";
import dealMap from "./dealMap.png";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Shop = {
  id: number;
  name: string;
  x: string;
  y: string;
};

const shops: Shop[] = [
  { id: 1, name: "옛촌막걸리", y: "29%", x: "58.1%" },
  { id: 2, name: "전주막걸리", y: "40.6%", x: "50.7%" },
  { id: 3, name: "용진집막걸리", y: "45.6%", x: "47.2%" },
  { id: 4, name: "복막걸리", y: "51%", x: "42.7%" },
  { id: 5, name: "물레방아막걸리", y: "56.2%", x: "38.9%" },
  { id: 6, name: "곡주마을", y: "62%", x: "35.2%" },
  { id: 7, name: "남도집", y: "50.4%", x: "21.1%" },
  { id: 8, name: "두여인생막걸리", y: "56.2%", x: "4.3%" },
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
    <div className="relative w-full h-full bg-[#F8F6F5] overflow-hidden">
      <div className="relative w-[465px] h-[608px]">
        <Image
          src={dealMap}
          alt="streetmap"
          fill
          className="object-cover rounded-lg"
        />

        {/* 전주 막걸리 골목 알아보기 버튼 */}
        <button
          onClick={() => router.push("/streetmap/detail")}
          className="absolute cursor-pointer top-[10px] left-[20px] flex items-center gap-1 rounded bg-black/50 px-2 py-1 text-white text-sm"
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
