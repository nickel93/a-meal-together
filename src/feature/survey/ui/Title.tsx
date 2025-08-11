const SurveyTitle = ({ title }: { title: string }) => {
  return (
    <div className="text-left w-[335px] mb-4">
      <p className="font-bold">{title}</p>
    </div>
  );
};

export default SurveyTitle;
