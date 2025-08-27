"use client";

import { signIn } from "next-auth/react";

const KaKaoButton = () => {
  const handleLogin = () => {
    // 로그인 후 이동할 곳 지정 (기본은 callbacks.redirect에서 처리)
    signIn("kakao", { callbackUrl: "/onboarding" });
  };

  return (
    <button
      onClick={handleLogin}
      className="flex items-center justify-center w-[335px] h-[48px] px-4 py-3 gap-1 rounded-[8px] bg-[#FEE501]"
    >
      <span className="text-[16px] leading-[24px] font-bold text-[#2D2E32]">
        카카오로 로그인
      </span>
      <div className="w-[24px] h-[24px] hidden" />
    </button>
  );
};

export default KaKaoButton;
