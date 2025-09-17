import LocalSignup from "@/widgets/signup/LocalSignUp";

const Page = () => {
  return (
    <div className="flex justify-center w-full h-full px-[20px]">
      <div className="flex flex-col flex-grow gap-[40px]">
        <LocalSignup />
      </div>
    </div>
  );
};

export default Page;
