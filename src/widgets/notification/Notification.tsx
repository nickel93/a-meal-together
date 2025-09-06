import { NotificationList } from "@/feature/Notification";
import { NotificationType } from "@/feature/Notification/model/type";

const sampleData: NotificationType[] = [
  {
    id: "1",
    category: "모임원 매칭 완료",
    message: "모임원이 모두 모였어요! 모임 정보는 3일 전부터 공개돼요.",
    time: "2:23",
  },
  {
    id: "2",
    category: "모임카드 공개",
    message: "모임 3일 전! 모임 정보 카드를 확인해 보세요.",
    time: "2일전",
  },
  {
    id: "3",
    category: "모임카드 공개",
    message: "모임 3일 전! 모임 정보 카드를 확인해 보세요.",
    time: "2일전",
  },
];

const Notification = () => {
  return (
    <div>
      <NotificationList notifications={sampleData} />
    </div>
  );
};

export default Notification;
