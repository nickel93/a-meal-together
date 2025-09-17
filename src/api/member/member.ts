import { apiRequest } from "../client";
import { endpoints } from "../endpoints";
import { SignupRequest, SignupResponse } from "./types";

export const getMemberById = (memberId: number) =>
  apiRequest(endpoints.member.getById(memberId));

export const getMyInfo = () => apiRequest(endpoints.member.myInfo);

// OAuth 기반 회원가입
export const signup = (data: SignupRequest) =>
  apiRequest<SignupResponse>(endpoints.member.signup, {
    method: "POST",
    body: JSON.stringify(data),
  });

// ✅ 일반 회원가입 (아이디/비밀번호) - /backdoor-signup
export const backdoorSignup = (username: string, password: string) =>
  apiRequest<void>(endpoints.home.backdoorSignup, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

// ✅ 일반 로그인 - /api/backdoor-login
export const backdoorLogin = (username: string, password: string) =>
  apiRequest<void>(endpoints.member.backdoorLogin, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

// (호환용) 기존 함수명 유지
export const putLogin = (username: string, password: string) =>
  backdoorLogin(username, password);
