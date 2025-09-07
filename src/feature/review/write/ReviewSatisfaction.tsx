type ReviewSatisfactionProps = {
  value: string;
  onChange: (v: string) => void;
};

const OPTIONS = ["만족해요", "보통이었어요", "아쉬웠어요"];

const ReviewSatisfaction = ({ value, onChange }: ReviewSatisfactionProps) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[14px] font-medium">
        모임의 전반적인 만족도는 어땠나요?
      </p>
      <div className="flex gap-2">
        {OPTIONS.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`rounded-[8px] border px-4 py-2 text-[14px] h-[42px] ${
              value === option
                ? "bg-[#FFE5E3] border-[#E65F55] text-[#E65F55] font-semibold"
                : "border-[#E9E9EC] text-[#70747D]"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReviewSatisfaction;
