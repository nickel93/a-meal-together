import Footer from "@/widgets/home/Footer";
import MyPageScreen from "@/widgets/mypage/MyPageScreen";

const Page = () => {
  return (
    <div className="flex justify-center w-full h-full pt-[20px]">
      <div className="flex flex-col flex-grow gap-[40px]">
        <MyPageScreen />
      </div>
      <Footer active="mypage" />
    </div>
  );
};

export default Page;
