export interface SignupRequest {
  name: string;
  phoneNumber: string;
  gender: "MALE" | "FEMALE";
  birthday: string; // YYYY-MM-DD
  oauthId: string;
  oauthType: string;
}

export interface SignupResponse {
  id: number;
  name: string;
  phoneNumber: string;
  gender: "MALE" | "FEMALE";
  birthday: string;
  // 필요한 응답 필드 추가
}
