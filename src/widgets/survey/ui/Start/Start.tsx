"use client";
import { SurveyButton } from "@/feature/survey";
import SurveyHeader from "./Header";
import SurveyMain from "./Main";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const SurveyStart = () => {
  const { push } = useRouter();
  const { data: session } = useSession();
  console.log("session", session);
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
