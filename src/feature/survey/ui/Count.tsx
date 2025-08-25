const SurveyCount = ({ now, total }: { now: number; total: number }) => {
  return (
    <div className="flex w-[335px] h-[18px]">
      <span className="text-[14px] font-medium text-black">
        {now} / {total}
      </span>
    </div>
  );
};
export default SurveyCount;
