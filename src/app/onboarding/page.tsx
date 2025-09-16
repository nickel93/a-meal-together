import { HeaderLogo } from "@/icon";
import { SurveyStart } from "@/widgets/survey";

const Page = () => {
  return (
    <div className="h-full  gap-[40px] flex flex-col px-[20px]">
      <HeaderLogo />
      <SurveyStart />
    </div>
  );
};

export default Page;
