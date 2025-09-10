import DetailPage from "@/widgets/streetmap/DetailPage";

const Page = () => {
  return (
    <div className="flex justify-center w-full h-full">
      <div className="flex flex-col flex-grow gap-[40px]">
        <DetailPage />
      </div>
    </div>
  );
};

export default Page;
