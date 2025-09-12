"use client";
import { AlarmIcon } from "@/icon";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "./logo.png";

const HomeHeader = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between">
      <Image src={logo} alt="logo" />
      <div onClick={() => router.push("/notification")}>
        <AlarmIcon />
      </div>
    </div>
  );
};

export default HomeHeader;
