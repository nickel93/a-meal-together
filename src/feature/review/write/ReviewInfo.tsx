const ReviewInfo = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[14px] font-medium">일시</p>
      <div className="flex items-center justify-between rounded-lg bg-[#F7F7F7] px-4 py-3 text-[14px]">
        <span>8월 12일, 오후 7:00</span>
        <span className="text-[#70747D]">작성 기한 3일 남음</span>
      </div>
    </div>
  );
};

export default ReviewInfo;
