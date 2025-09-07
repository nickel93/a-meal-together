"use client";

import Image from "next/image";
import dealMap from "./dealMap.png";

const StreetMap = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="font-semibold size-[24px] leading-[24px]">
        <p>마음 맞는 인연들과 즐길 수 있는</p>
        <p>전주 막걸리골목을 소개합니다</p>
      </div>
      <Image
        src={dealMap}
        alt="streetmap"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default StreetMap;
