import { apiRequest } from "../client";
import { endpoints } from "../endpoints";

export interface Room {
  id: number;
  title: string;
  createdDate: string;
  chatLink: string;
  calRoomStatus: "REQUEST" | "CONFIRMED" | "CANCELLED";
}

export const getRoomList = () => apiRequest<Room[]>(endpoints.room.list);

export interface AttendRequest {
  oauthId: string; // 사용자 식별번호
  calRoomId: string; // 방 식별번호
  language: string; // 언어
  count: string; // 주량
  money: string; // 보증금
}

export const attendRoom = (data: AttendRequest) =>
  apiRequest<void>(endpoints.room.attend, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      oauthId: data.oauthId,
      calRoomId: data.calRoomId,
      language: data.language,
      count: data.count,
      money: data.money,
    }),
  });
