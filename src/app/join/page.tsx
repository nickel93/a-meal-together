import HeaderLogo from "@/icon/HeaderLogo";
import { SurveyStart } from "@/widgets/survey";
import { Suspense } from "react";

const Page = () => {
  return (
    <div className="bg-[#fff]  gap-[40px] flex flex-col flex-grow px-[20px]">
      <Suspense>
        <HeaderLogo />
        <SurveyStart />
      </Suspense>
    </div>
  );
};

export default Page;
