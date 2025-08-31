import { HeaderIcon } from "@/icon";
import { SurveyStart } from "@/widgets/survey";
import { Suspense } from "react";

const Page = () => {
  return (
    <div className="bg-[#fff]  gap-[40px] flex flex-col flex-grow">
      <Suspense>
        <HeaderIcon />
        <SurveyStart />
      </Suspense>
    </div>
  );
};

export default Page;
