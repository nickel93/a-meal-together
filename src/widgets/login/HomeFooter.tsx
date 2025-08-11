import { KaKaoButton } from "@/feature/home";

const HomeFooter = () => {
  return (
    <div className="w-full px-5 py-0 flex flex-col items-center gap-3 h-[114px]">
      <div className="flex justify-center items-center px-3 py-[5px] gap-[10px] w-[134px] h-[26px] border border-[#E65F55] rounded-full">
        <span className="text-[#E65F55] text-[12px] leading-[16px] font-semibold">
          5초만에 빠른 회원가입
        </span>
      </div>

      <KaKaoButton />

      {/* 안내 문구 */}
      <p className="w-[335px] text-center text-[12px] leading-[16px] font-medium text-[#70747D]">
        로그인하여 더 많은 기능을 이용해보세요!
      </p>
    </div>
  );
};
export default HomeFooter;
