"use client";

interface QuestionProps {
  question: string[];
  selectedIndexes: number[];
  onSelect: (index: number) => void;

  // 🆕 추가 props
  type?: "single" | "multi" | "input"; // 기본: "single"
  onInputChange?: (val: string) => void; // input형에서 값 변경 시 호출
  inputValue?: string; // input형의 현재 값 (부모 state와 연동)
  inputPlaceholder?: string; // input형 placeholder
}

const Question = ({
  question,
  onSelect,
  selectedIndexes,
  type = "single",
  onInputChange,
  inputValue = "",
  inputPlaceholder = "입력해 주세요",
}: QuestionProps) => {
  const handleClick = (index: number) => {
    onSelect(index);
  };

  // 🔀 입력형 분기
  if (type === "input") {
    return (
      <div className="flex flex-col gap-[4px] mb-4 w-[335px]">
        <input
          value={inputValue}
          onChange={(e) => onInputChange?.(e.target.value)}
          placeholder={inputPlaceholder}
          className="w-[335px] px-[16px] py-[16px] rounded-[8px] bg-[#F7F7F7] text-base text-gray-700 font-semibold border-[2px] border-transparent focus:border-[#E65F55] outline-none"
        />
      </div>
    );
  }

  // ✅ 선택형(SINGLE/MULTI)
  return (
    <div className="flex flex-col gap-[4px] mb-4">
      {question.map((option, index) => {
        const isSelected = selectedIndexes.includes(index);

        return (
          <button
            key={index}
            type="button"
            onClick={() => handleClick(index)}
            className={`flex w-[335px] items-center px-[16px] py-[16px] rounded-[8px] bg-[#F7F7F7] text-base text-gray-700 font-semibold
              ${
                isSelected
                  ? "border-[2px] border-[#E65F55]"
                  : "border-[2px] border-transparent"
              }
            `}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Question;
