"use client";
import { SurveyButton } from "@/feature/survey";
import SurveyHeader from "./Header";
import SurveyMain from "./Main";
import { useRouter } from "next/navigation";

const SurveyStart = () => {
  const { push } = useRouter();

  return (
    <>
      <div className="flex flex-col items-center gap-[40px] h-full">
        <SurveyHeader />
        <SurveyMain />
        <SurveyButton onClick={() => push("/survey")} />
      </div>
    </>
  );
};

export default SurveyStart;
