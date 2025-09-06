import { twMerge } from "tailwind-merge";
import NotificationItem from "./NotificationItem";
import { NotificationType } from "../model/type";

interface NotificationListProps {
  notifications: NotificationType[];
  className?: string;
}

const NotificationList = ({
  notifications,
  className,
}: NotificationListProps) => {
  return (
    <div className={twMerge("flex flex-col gap-6 px-[20px]", className)}>
      <h2 className="font-bold text-[20px]">알림</h2>
      <div className="flex flex-col gap-5">
        {notifications.map((item) => (
          <NotificationItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default NotificationList;
