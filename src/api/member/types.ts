export interface SignupRequest {
  name: string;
  phoneNumber: string;
  gender: "MALE" | "FEMALE";
  birthday: string;
  oauthId: string;
  oauthType: string;
}

export interface SignupResponse {
  id: number;
  name: string;
  phoneNumber: string;
  gender: "MALE" | "FEMALE";
  birthday: string;
}
