"use client";

interface QuestionProps {
  question: string[];
  selectedIndexes: number[];
  onSelect: (index: number) => void;
}

const Question = ({ question, onSelect, selectedIndexes }: QuestionProps) => {
  const handleClick = (index: number) => {
    onSelect(index);
  };

  return (
    <div className="flex flex-col gap-[4px] mb-4">
      {question.map((option, index) => {
        const isSelected = selectedIndexes.includes(index);

        return (
          <button
            key={index}
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
