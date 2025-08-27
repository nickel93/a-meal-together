import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SurveyMatching = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/join/story");
    }, 3000); // 3초 후에 /survey/start로 이동

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [router]);

  return (
    <div className="flex flex-col justify-center items-center bg-[#E65F55] text-white w-full h-screen text-center">
      <p className="text-[48px] font-bold leading-none mb-2">98%</p>
      <p className="text-[18px] font-medium">‘진짜’ 인연이 될 사람 매칭중</p>
    </div>
  );
};

export default SurveyMatching;
