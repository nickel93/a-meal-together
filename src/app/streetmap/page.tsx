import { HomeHeader } from "@/shared/homeHeader";
import { HomeFooter } from "@/widgets/home";
import StreetMap from "@/widgets/streetmap/StreetMap";

const Page = () => {
  return (
    <div className="flex flex-col">
      <HomeHeader />
      <StreetMap />
      <HomeFooter />
    </div>
  );
};

export default Page;
