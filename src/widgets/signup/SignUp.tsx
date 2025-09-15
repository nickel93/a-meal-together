"use client";

import { signup } from "@/api/member/member";
import { LzButton } from "@/shared/button";
import { LzInput } from "@/shared/input";
import Navigator from "@/shared/navigator/Navigator";
import { LzSelect } from "@/shared/select";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState<"" | "M" | "F">("");
  const [birth, setBirth] = useState(""); // yyyy-mm-dd
  const [phone, setPhone] = useState(""); // 010-0000-0000
  const { push } = useRouter();
  const canSubmit = useMemo(
    () => name.trim() && gender && birth.trim() && phone.trim(),
    [name, gender, birth, phone]
  );
  const { data } = useSession();

  const formatBirth = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 8); // 숫자만, 최대 8자리
    if (digits.length <= 4) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 4)}-${digits.slice(4)}`;
    return `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6)}`;
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11); // 숫자만, 최대 11자리
    if (digits.length <= 3) return digits;
    if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    try {
      await signup({
        name,
        phoneNumber: phone,
        gender: gender === "M" ? "MALE" : "FEMALE",
        birthday: birth,
        oauthId: data?.user?.name || "",
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
      className="h-screen bg-white flex flex-col flex-grow"
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
        placeholder="YYYY-MM-DD"
        value={birth}
        onChange={(e) => setBirth(formatBirth(e.target.value))}
        maxLength={10} // yyyy-mm-dd → 최대 10자
      />

      <LzInput
        label="전화번호"
        type="tel"
        inputMode="numeric"
        placeholder="010-0000-0000"
        value={phone}
        onChange={(e) => setPhone(formatPhone(e.target.value))}
        maxLength={13} // 010-0000-0000 → 최대 13자
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
