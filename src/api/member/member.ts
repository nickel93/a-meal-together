// src/api/crud/members.ts
import { apiRequest } from "../client";
import { endpoints } from "../endpoints";

export const getMemberById = (memberId: number) =>
  apiRequest(endpoints.member.getById(memberId));

export const getMyInfo = () => apiRequest(endpoints.member.myInfo);
