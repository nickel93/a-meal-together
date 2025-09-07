"use client";
import { LzButton } from "@/shared/button";
import { LzInput } from "@/shared/input";
import Navigator from "@/shared/navigator/Navigator";
import { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="min-h-screen bg-white flex flex-col flex-grow gap-[20px]">
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
        inputMode="numeric"
        placeholder="비밀번호 입력(영문, 숫자 포함, 8~20자리 이내)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <LzButton type="submit" disabled={!login || !password}>
        다음
      </LzButton>
    </div>
  );
};

export default Login;
