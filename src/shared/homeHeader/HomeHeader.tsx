"use client";
import { AlarmIcon } from "@/icon";
import HeaderLogo from "@/icon/HeaderLogo";
import { useRouter } from "next/navigation";

const HomeHeader = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between">
      <HeaderLogo />
      <div onClick={() => router.push("/notification")}>
        <AlarmIcon />
      </div>
    </div>
  );
};

export default HomeHeader;
