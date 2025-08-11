import { Survey } from "@/widgets/survey";

const Page = () => {
  return (
    <div className="bg-[#F8F6F5] flex justify-center h-full">
      <div className="w-[375px] mt-[54px] px-[20px] pt-[20px] flex flex-col gap-[40px]">
        <Survey />
      </div>
    </div>
  );
};

export default Page;
