"use client";

import { signup } from "@/api/member/member";
import { LzButton } from "@/shared/button";
import { LzInput } from "@/shared/input";
import Navigator from "@/shared/navigator/Navigator";
import { LzSelect } from "@/shared/select";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState<"" | "M" | "F">("");
  const [birth, setBirth] = useState("");
  const [phone, setPhone] = useState("");
  const { push } = useRouter();
  const canSubmit = useMemo(
    () => name.trim() && gender && birth.trim() && phone.trim(),
    [name, gender, birth, phone]
  );

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    try {
      await signup({
        name,
        phoneNumber: phone,
        gender: gender === "M" ? "MALE" : "FEMALE",
        birthday: birth,
        oauthId: "7912",
        oauthType: "KAKAO",
      });
      console.log("회원가입 성공");
    } catch (err) {
      console.error("회원가입 실패", err);
    } finally {
      push("/survey");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="min-h-screen bg-white flex flex-col flex-grow"
    >
      <div className="mb-6 text-center">
        <Navigator title="회원가입" />
      </div>

      <div className="mb-8 font-semibold text-[24px] leading-[36px] text-black">
        가치한상 이용을 위해
        <br />
        개인정보를 입력해 주세요.
      </div>

      <LzInput
        label="이름"
        type="text"
        placeholder="이름 입력"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <LzSelect
        label="성별"
        value={gender}
        onChange={(e) => setGender(e.target.value as "M" | "F" | "")}
      >
        <option value="">성별 선택</option>
        <option value="M">남성</option>
        <option value="F">여성</option>
      </LzSelect>

      <LzInput
        label="출생연도"
        type="text"
        inputMode="numeric"
        placeholder="출생연도 선택"
        value={birth}
        onChange={(e) => setBirth(e.target.value)}
      />

      <LzInput
        label="전화번호"
        type="tel"
        inputMode="numeric"
        placeholder="전화번호 입력('-' 제외하고 숫자만 입력)"
        value={phone}
        onChange={(e) => {
          const v = e.target.value;
          setPhone(v);
        }}
      />

      <div className="mt-auto">
        <LzButton type="submit" disabled={!canSubmit}>
          다음
        </LzButton>
      </div>
    </form>
  );
};

export default SignUp;
