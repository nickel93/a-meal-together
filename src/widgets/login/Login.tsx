"use client";

import { LzButton } from "@/shared/button";
import { LzInput } from "@/shared/input";
import Navigator from "@/shared/navigator/Navigator";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { putLogin } from "@/api/member/member";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => await putLogin(email, password),
    onSuccess: (data) => {
      console.log("로그인 성공", data);
      router.push("/onboarding");
    },
    onError: (error) => {
      alert(error?.message ?? "로그인 실패");
    },
  });

  const handleSubmit = () => mutate();

  return (
    <div className="bg-white flex flex-col flex-grow gap-[20px]">
      <Navigator title="아이디로 로그인" />

      <LzInput
        label="아이디"
        type="text"
        inputMode="numeric"
        placeholder="아이디 입력"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <LzInput
        label="비밀번호"
        type="password"
        inputMode="text"
        placeholder="비밀번호 입력(영문, 숫자 포함, 8~20자리 이내)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* 회원가입 링크 */}
      <button
        type="button"
        onClick={() => router.push("/signup/local")}
        className="self-start text-[16px] leading-[22px] text-[#333333] underline"
      >
        회원가입
      </button>

      <LzButton
        type="button"
        disabled={!email || !password || isPending}
        onClick={handleSubmit}
      >
        {isPending ? "확인 중..." : "다음"}
      </LzButton>
    </div>
  );
};

export default Login;
