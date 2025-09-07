type ReviewTextareaProps = {
  value: string;
  onChange: (v: string) => void;
};

const ReviewTextarea = ({ value, onChange }: ReviewTextareaProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[14px] font-medium">후기 작성</p>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="모임 후기를 20자 이상 남겨주시면 다른 사용자들에게도 도움이 됩니다."
        className="w-full h-[270px] resize-none rounded-lg border border-[#E9E9EC] bg-[#FDFDFD] p-3 text-[14px] text-[#333] outline-none"
      />
    </div>
  );
};

export default ReviewTextarea;
