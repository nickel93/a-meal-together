"use client";

import { useRouter } from "next/navigation";

const KaKaoButton = () => {
  const router = useRouter();
  return (
    <button
      className="flex items-center justify-center w-[335px] h-[48px] px-4 py-3 gap-1 rounded-[8px] bg-[#FEE501]"
      onClick={() => router.push("/onboarding")}
    >
      <span className="text-[16px] leading-[24px] font-bold text-[#2D2E32]">
        카카오로 로그인
      </span>

      <div className="w-[24px] h-[24px] hidden" />
    </button>
  );
};

export default KaKaoButton;
