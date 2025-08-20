"use client";
import { useState } from "react";

interface QuestionProps {
  question: string[];
  type: "single" | "multi" | "input";
}

const Question = ({ question, type }: QuestionProps) => {
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

  const handleClick = (index: number) => {
    if (type === "single") {
      setSelectedIndexes([index]);
    } else {
      setSelectedIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    }
  };

  return (
    <div className="flex flex-col gap-[4px] mb-4">
      {question.map((option, index) => {
        const isSelected = selectedIndexes.includes(index);

        return (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`flex w-[335px] items-center px-[16px] py-[16px] rounded-[8px] bg-white text-base text-gray-700
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
