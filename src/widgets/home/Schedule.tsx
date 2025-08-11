import { ScheduleCard } from "@/feature/home";

const Schedule = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Schedule</h1>
      {[
        {
          title: "일시",
          description: "8월 12일, 오후 7:00",
          buttonText: "참여하기",
        },
        { title: "내언어", description: "한국어", buttonText: "언어 선택" },
      ].map((item, index) => (
        <ScheduleCard key={index} title={item.title}>
          <div className="flex justify-between">
            <p>{item.description}</p>
            <p>{item.buttonText}</p>
          </div>
        </ScheduleCard>
      ))}
    </div>
  );
};

export default Schedule;
