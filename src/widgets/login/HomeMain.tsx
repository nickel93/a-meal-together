"use client";
import { healthCheck } from "@/api/health/health";
import { useEffect, useState } from "react";

const HomeMain = () => {
  const [data, setData] = useState(false);

  console.log("data", data);

  useEffect(() => {
    healthCheck()
      .then(() => setData(true))
      .catch((err) => console.error("Error fetching my info", err));
  }, []);

  return (
    <main className="flex flex-col items-center pt-[120px]">
      <h1 className="font-normal text-[40px]">가치한상</h1>
      <p>‘같이’ 먹고, ‘가치’ 있게 즐기는 한상 모임</p>
    </main>
  );
};

export default HomeMain;
