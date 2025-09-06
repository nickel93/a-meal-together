import Notification from "@/widgets/notification";

const Page = () => {
  return (
    <div className="flex justify-center w-full h-full pt-[20px]">
      <div className="flex flex-col flex-grow gap-[40px]">
        <Notification />
      </div>
    </div>
  );
};

export default Page;
