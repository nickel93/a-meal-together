"use client";

interface NotificationItemProps {
  id: string;
  category: string;
  message: string;
  time: string;
  isNew?: boolean;
}

const NotificationItem = ({
  category,
  message,
  time,
}: NotificationItemProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-[14px] text-[#70747D]">
        <span className="flex items-center gap-1">
          <span className="text-[#E65F55]">✨</span>
          {category}
        </span>
        <span>{time}</span>
      </div>
      <p className="font-semibold text-[15px] leading-snug">{message}</p>
    </div>
  );
};

export default NotificationItem;
