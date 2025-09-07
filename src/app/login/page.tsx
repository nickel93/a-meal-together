"use server";

import Login from "@/widgets/login/Login";

const Page = () => {
  return (
    <div className="flex justify-center w-full h-full px-[20px]">
      <div className="flex flex-col flex-grow gap-[40px]">
        <Login />
      </div>
    </div>
  );
};

export default Page;
