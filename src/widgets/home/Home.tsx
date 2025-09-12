import { RoomCard } from "@/shared/roomcard";
import { Section } from "@/shared/section";
import { ROOM_CARDS } from "./__mock__/homeMock";
import { HomeHeader } from "@/shared/homeHeader";

const Home = () => {
  return (
    <div className="mx-auto w-[375px]  bg-white flex flex-col gap-[40px] p-5">
      <HomeHeader />

      <p className="font-semibold text-[24px]">예정된 한상 모임</p>

      <div className="flex flex-col gap-[20px]">
        <Section title="일시">
          <div className="flex items-center justify-between rounded-lg bg-[#F7F7F7] px-4 py-3 text-[16px] font-semibold">
            <span>8월 13일, 오후 7:00</span>
            <span className="text-[#E65F55] font-medium">D-3</span>
          </div>
        </Section>

        <Section title="위치">
          <div className="flex items-center justify-between rounded-lg bg-[#F7F7F7] px-4 py-3">
            <div>
              <p className="text-[16px] font-semibold">광장포차타운</p>
              <p className="text-[14px] text-[#6F6F77] truncate">
                전북특별자치도 전주시 완산구 거마산로...
              </p>
            </div>
            <button className="text-[#6F6F77] text-[14px] font-medium">
              위치 보기
            </button>
          </div>
        </Section>

        <Section title="내 모임 정보">
          <div className="flex overflow-x-auto gap-[12px]">
            {ROOM_CARDS.map((card, idx) => (
              <RoomCard
                key={idx}
                title={card.title}
                description={card.description}
                status={card.status}
                colorType={card.colorType}
                rightIcon={card.rightIcon}
              />
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Home;
