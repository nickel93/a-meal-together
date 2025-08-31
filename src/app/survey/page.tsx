import { Survey } from "@/widgets/survey";

const Page = () => {
  return (
    <div className="flex justify-center h-full w-full ">
      <div className="flex flex-col gap-[40px] flex-grow">
        <Survey />
      </div>
    </div>
  );
};

export default Page;
