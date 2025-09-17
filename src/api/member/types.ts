// types.ts

export type Gender = "MALE" | "FEMALE";
export type OAuthProvider = "KAKAO" | "APPLE" | "GOOGLE";

export interface SignupRequest {
  name: string;
  phoneNumber: string;
  gender: Gender;
  birthday: string; // YYYY-MM-DD
  oauthId: string;
  oauthType: OAuthProvider;
}

export interface SignupResponse {
  id: number;
  name: string;
  phoneNumber: string;
  gender: Gender;
  birthday: string;
}

/** ✅ 일반 회원가입(아이디/비번) 요청 */
export interface BackdoorSignupRequest {
  username: string;
  password: string;
}

/** ✅ 일반 로그인 요청 */
export interface BackdoorLoginRequest {
  username: string;
  password: string;
}
