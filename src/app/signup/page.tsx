import { SignUp } from "@/widgets/signup";

const Page = () => {
  return (
    <div className="flex justify-center w-full h-full">
      <div className="flex flex-col flex-grow gap-[40px]">
        <SignUp />
      </div>
    </div>
  );
};

export default Page;
