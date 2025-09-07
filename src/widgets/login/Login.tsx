"use client";

import { LzButton } from "@/shared/button";
import { LzInput } from "@/shared/input";
import Navigator from "@/shared/navigator/Navigator";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { getMemberById } from "@/api/member/member";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: () => getMemberById(Number(login)), // 아이디를 숫자로 변환해서 호출
    onSuccess: (data) => {
      if (data) {
        router.push("/onbornding");
      }
    },
    onError: (error) => {
      alert(error.message ?? "로그인 실패");
    },
  });

  const handleSubmit = () => {
    mutate();
  };

  return (
    <div className=" bg-white flex flex-col flex-grow gap-[20px]">
      <Navigator title="아이디로 로그인" />

      <LzInput
        label="아이디"
        type="text"
        inputMode="numeric"
        placeholder="아이디 입력"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />

      <LzInput
        label="비밀번호"
        type="password"
        inputMode="text"
        placeholder="비밀번호 입력(영문, 숫자 포함, 8~20자리 이내)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <LzButton
        type="button"
        disabled={!login || !password || isPending}
        onClick={handleSubmit}
      >
        {isPending ? "확인 중..." : "다음"}
      </LzButton>
    </div>
  );
};

export default Login;
