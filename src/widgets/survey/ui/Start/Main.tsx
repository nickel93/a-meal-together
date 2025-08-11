const SurveyMain = () => {
  const surverList = [
    {
      title: "전주 한상 모임 참여 의사",
      description: "여러분과 잘 맞을 모임원을 직접 선정해 드려요.",
    },
    {
      title: "전주에서만 즐길 수 있는 특별한 한상",
      description: "즐거운 모임을 위해 모임, 식당 정보를 모두 제공해요.",
    },
    {
      title: "노쇼 걱정 없는 즐거운 모임",
      description: "보증금으로 노쇼는 사라지고, 모임의 밀도는 높아져요.",
    },
  ];

  return (
    <main className="flex flex-col items-center  gap-[16px]">
      {surverList.map((item, index) => (
        <SurveyCardItem
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </main>
  );
};

export default SurveyMain;

interface SurveyCardItemProps {
  title: string;
  description: string;
}

const SurveyCardItem = ({ title, description }: SurveyCardItemProps) => {
  return (
    <div className="w-[335px] p-[16px] rounded-[8px] bg-white flex flex-col gap-[12px]">
      <h2 className="text-[16px] leading-[22px] font-semibold text-[#000000]">
        {title}
      </h2>
      <p className="text-[14px] leading-[18px] font-normal text-[#333333]">
        {description}
      </p>
    </div>
  );
};
