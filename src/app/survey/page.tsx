import { Survey } from "@/widgets/survey";

const Page = () => {
  return (
    <div className="flex justify-center  flex-grow w-full h-full">
      <div className="flex flex-col gap-[40px]  flex-grow">
        <Survey />
      </div>
    </div>
  );
};

export default Page;
