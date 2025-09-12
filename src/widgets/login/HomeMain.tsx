"use client";

import Image from "next/image";
import biglogo from "../../icon/image/biglogo.png";

const HomeMain = () => {
  return (
    <main className="flex flex-col items-center pt-[120px]">
      <Image src={biglogo} alt="logo" />
      <p>‘같이’ 먹고, ‘가치’ 있게 즐기는 한상 모임</p>
    </main>
  );
};

export default HomeMain;
