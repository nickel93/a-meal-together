import { HomeHeader } from "@/shared/homeHeader";
import { HomeFooter } from "@/widgets/home";
import StreetMap from "@/widgets/streetmap/StreetMap";

const Page = () => {
  return (
    <div className="flex flex-col gap-[20px] w-full">
      <HomeHeader />
      <StreetMap />
      <HomeFooter active={"streetmap"} />
    </div>
  );
};

export default Page;
