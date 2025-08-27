import { SurveyStart } from "@/widgets/survey";

const Page = () => {
  return (
    <div className="bg-[#F8F6F5]  gap-[40px] flex flex-col">
      <p className="text-[20px]">가치 한상</p>
      <SurveyStart />
    </div>
  );
};

export default Page;
