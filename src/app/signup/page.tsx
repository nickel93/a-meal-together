import { SignUp } from "@/widgets/signup";

const Page = () => {
  return (
    <div className="flex justify-center h-full">
      <div className="w-[375px] px-[20px] flex flex-col gap-[40px]">
        <SignUp />
      </div>
    </div>
  );
};

export default Page;
