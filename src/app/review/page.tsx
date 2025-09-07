import { HomeHeader } from "@/shared/homeHeader";
import Footer from "@/widgets/home/Footer";
import MeetingReviewPage from "@/widgets/review/Review";

const Page = () => {
  return (
    <div className="flex justify-center w-full h-full pt-[20px]">
      <div className="flex flex-col flex-grow gap-[40px]">
        <HomeHeader />
        <MeetingReviewPage />
      </div>
      <Footer active="review" />
    </div>
  );
};

export default Page;
