"use client";
import { SurveyButton } from "@/feature/survey";
import SurveyHeader from "./Header";
import SurveyMain from "./Main";
import { useRouter } from "next/navigation";

const SurveyStart = () => {
  const { push } = useRouter();

  return (
    <>
      <div className="flex flex-col items-start gap-[40px] fle-grow">
        <SurveyHeader />
        <SurveyMain />
        <SurveyButton onClick={() => push("/signup")} />
      </div>
    </>
  );
};

export default SurveyStart;
