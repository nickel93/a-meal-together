"use client";

import { MakgeolliMap } from "@/feature/street";

const StreetMap = () => {
  return (
    <div className="w-full flex flex-col gap-[20px]">
      <div className="font-semibold  leading-[24px]">
        <p>마음 맞는 인연들과 즐길 수 있는</p>
        <p>전주 막걸리골목을 소개합니다</p>
      </div>
      <MakgeolliMap />
    </div>
  );
};

export default StreetMap;
