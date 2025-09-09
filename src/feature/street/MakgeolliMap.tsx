"use client";
import dealMap from "./dealMap.png";
import { useState } from "react";
import Image from "next/image";

type Shop = {
  id: number;
  name: string;
  x: string; // % 단위
  y: string;
};

const shops: Shop[] = [
  { id: 1, name: "용진집막걸리", x: "60%", y: "40%" },
  { id: 2, name: "북막걸리", x: "65%", y: "55%" },
  { id: 3, name: "옛촌막걸리", x: "50%", y: "65%" },
];

const MapPin = ({ className = "w-6 h-6 text-red-500" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
      clipRule="evenodd"
    />
  </svg>
);

const MakgeolliMap = () => {
  const [selected, setSelected] = useState<Shop | null>(null);

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

        {/* 마커 + 라벨 */}
        {shops.map((shop) => (
          <button
            key={shop.id}
            onClick={() => setSelected(shop)}
            className="absolute cursor-pointer flex items-center gap-1 -translate-y-full"
            style={{ left: shop.x, top: shop.y }}
          >
            <MapPin />
            <span className=" px-1 py-0.5 text-xs font-semibold text-black">
              {shop.name}
            </span>
          </button>
        ))}
      </div>

      {/* 가게 상세 카드 */}
      {selected && (
        <div className="absolute bottom-0 left-0 w-full rounded-t-2xl bg-white p-4 shadow-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">{selected.name}</h2>
            <button onClick={() => setSelected(null)}>닫기</button>
          </div>
          <p className="text-sm text-gray-600">전주시 완산구 거마산로</p>
          <p className="mt-1 text-sm">영업시간: 15:00 ~ 22:50</p>
        </div>
      )}
    </div>
  );
};

export default MakgeolliMap;
