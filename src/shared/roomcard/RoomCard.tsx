"use client";

import { twMerge } from "tailwind-merge";

const ROOM_CARD_COLORS = {
  BLUE: "#B2EDFF",
  MINT: "#9EFFE7",
  PINK: "#FFE1F1",
  PURPLE: "#E1B2FF",
  YELLOW: "#FFF9C7",
  CORAL: "#FFD7D4",
  GREEN: "#C7FFCA",
} as const;

interface RoomCardProps {
  title: string;
  description: string;
  status: string;
  colorType?: keyof typeof ROOM_CARD_COLORS;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
}

const RoomCard = ({
  title,
  description,
  status,
  colorType = "BLUE",
  rightIcon,
  onClick,
}: RoomCardProps) => {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        "relative flex flex-col justify-between rounded-lg",
        "w-[312px] h-[120px] p-4 gap-2 cursor-pointer text-black flex-shrink-0"
      )}
      style={{ backgroundColor: ROOM_CARD_COLORS[colorType] }}
    >
      {/* 제목 & 설명 */}
      <div className="flex flex-col gap-2 pr-12">
        <h2 className="text-[16px] font-bold leading-5">{title}</h2>
        <p className="text-[14px] leading-4 opacity-90">{description}</p>
      </div>

      {/* 상태 뱃지 */}
      <div>
        <span className="inline-block px-3 py-1 text-[12px] rounded-md bg-white text-black font-medium">
          {status}
        </span>
      </div>

      {/* 오른쪽 장식 아이콘 */}
      {rightIcon && (
        <div className="absolute right-4 bottom-4 opacity-80">{rightIcon}</div>
      )}
    </div>
  );
};

export default RoomCard;
