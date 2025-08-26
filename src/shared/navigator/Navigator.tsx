"use client";
import LeftArrowIcon from "@/icon/LeftArrowIcon";

interface NavigatorProps {
  title: string;
}

const Navigator = (props: NavigatorProps) => {
  const { title } = props;

  return (
    <div className="flex items-center justify-between w-full">
      <button>
        <LeftArrowIcon />
      </button>
      <p className="text-[16px] font-medium text-black">{title}</p>
      <div className="w-6 h-6" />
    </div>
  );
};

export default Navigator;
