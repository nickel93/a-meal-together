import { apiRequest } from "../client";
import { endpoints } from "../endpoints";
import { SignupRequest, SignupResponse } from "./types";

export const getMemberById = (memberId: number) =>
  apiRequest(endpoints.member.getById(memberId));

export const getMyInfo = () => apiRequest(endpoints.member.myInfo);

export const signup = (data: SignupRequest) =>
  apiRequest<SignupResponse>(endpoints.member.signup, {
    method: "POST",
    body: JSON.stringify(data),
  });

export const putLogin = (username: string, password: string) => {
  apiRequest<SignupResponse>(endpoints.member.backdoorLogin, {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
};
