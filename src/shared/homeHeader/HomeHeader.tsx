"use client";
import { AlarmIcon, HeaderIcon } from "@/icon";
import { useRouter } from "next/navigation";

const HomeHeader = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between">
      <HeaderIcon />
      <div onClick={() => router.push("/notification")}>
        <AlarmIcon />
      </div>
    </div>
  );
};

export default HomeHeader;
