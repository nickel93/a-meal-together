import { SmileIcon, StarIcon } from "@/icon";
import Heart from "@/icon/Heart";
import { ReactNode } from "react";

const SurveyMain = () => {
  const surverList = [
    {
      Icon: <Heart />,
      title: "전주 한상 모임 참여 의사",
      description: "여러분과 잘 맞을 모임원을 직접 선정해 드려요.",
    },
    {
      Icon: <StarIcon />,
      title: "전주에서만 즐길 수 있는 특별한 한상",
      description: "즐거운 모임을 위해 모임, 식당 정보를 모두 제공해요.",
    },
    {
      Icon: <SmileIcon />,
      title: "노쇼 걱정 없는 즐거운 모임",
      description: "보증금으로 노쇼는 사라지고, 모임의 밀도는 높아져요.",
    },
  ];

  return (
    <main className="flex flex-col items-start  gap-[16px]">
      {surverList.map((item, index) => (
        <SurveyCardItem
          key={index}
          title={item.title}
          description={item.description}
          Icon={item.Icon}
        />
      ))}
    </main>
  );
};

export default SurveyMain;

interface SurveyCardItemProps {
  title: string;
  description: string;
  Icon: ReactNode;
}

const SurveyCardItem = ({ title, description, Icon }: SurveyCardItemProps) => {
  return (
    <div className="w-[335px] p-[16px] rounded-[8px] bg-[#F7F7F7] flex flex-col gap-[12px]">
      {Icon}
      <h2 className="text-[16px] leading-[22px] font-semibold text-[#000000]">
        {title}
      </h2>
      <p className="text-[14px] leading-[18px] font-normal text-[#333333]">
        {description}
      </p>
    </div>
  );
};
