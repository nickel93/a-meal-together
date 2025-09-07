"use client";
import { KaKaoButton } from "@/feature/join";
import { useRouter } from "next/navigation";

const HomeFooter = () => {
  const router = useRouter();
  return (
    <div className="w-full px-5 py-0 flex flex-col items-center gap-3">
      <div className="flex justify-center items-center px-3 py-[5px] gap-[10px] w-[134px] h-[26px] border border-[#E65F55] rounded-full">
        <span className="text-[#E65F55] text-[12px] leading-[16px] font-semibold">
          5초만에 빠른 회원가입
        </span>
      </div>

      <KaKaoButton />

      <button
        onClick={() => router.push("/login")}
        className={`
        w-[335px] h-[48px]
        flex items-center justify-center
        rounded-[8px] border border-[#E4E4E4]
        bg-white text-[16px] font-semibold text-black
        px-4 py-3
      `}
      >
        다른 방법으로 로그인
      </button>

      <p className="w-[335px] text-center text-[12px] leading-[16px] font-medium text-[#70747D]">
        로그인하여 더 많은 기능을 이용해보세요!
      </p>
    </div>
  );
};
export default HomeFooter;
