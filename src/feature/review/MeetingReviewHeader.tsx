"use client";

const MeetingReviewHeader = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold text-[18px]">지난 모임은 어떠셨나요?</h2>
      <p className="text-[14px] text-[#70747D]">
        모임 후기를 작성하고 크레딧을 받아가세요!
      </p>
      <div className="flex items-center justify-between rounded-lg bg-[#F7F7F7] px-4 py-3 text-[14px]">
        <span>8월 12일, 오후 7:00</span>
        <span className="text-[#E65F55] font-medium">작성 기한 3일 남음</span>
      </div>
    </div>
  );
};

export default MeetingReviewHeader;
