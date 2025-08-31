"use client";
import LeftArrowIcon from "@/icon/LeftArrowIcon";
import { useRouter } from "next/navigation";

interface NavigatorProps {
  title: string;
  onClick?: () => void;
}

const Navigator = (props: NavigatorProps) => {
  const { onClick, title } = props;

  const router = useRouter();

  return (
    <div className="flex items-center justify-between w-full">
      <button onClick={onClick ? onClick : () => router.back()}>
        <LeftArrowIcon />
      </button>
      <p className="text-[16px] font-medium text-black">{title}</p>
      <div className="w-6 h-6" />
    </div>
  );
};

export default Navigator;
