"use client";

import {
  SurveyButton,
  SurveyCount,
  SurveyMatching,
  SurveySelector,
  SurveyTitle,
} from "@/feature/survey";
import { useState } from "react";
import Question from "@/feature/survey/ui/Question";
import { useQuery } from "@tanstack/react-query";
import { fetchSurveyQuestion } from "../../lib/helper";
import { SurveyResponseAPI } from "@/api/survey/types";

const Survey = () => {
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);

  const { data } = useQuery<SurveyResponseAPI>({
    queryKey: ["survey", 1],
    queryFn: () => fetchSurveyQuestion(1),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  if (!data) return null;

  const total = data.data.questions.length;
  if (count >= total) return <SurveyMatching />;

  const current = data.data.questions[count];

  const type: "single" | "multi" | "input" =
    current.type === "SINGLE_CHOICE"
      ? "single"
      : current.type === "MULTIPLE_CHOICE"
      ? "multi"
      : "input";

  const options = Array.isArray(current.options) ? current.options : [];

  const isDisabled =
    type === "input" ? inputValue.trim() === "" : selectedIndexes.length === 0;

  return (
    <div className="flex flex-col flex-grow items-center gap-4 ">
      <SurveySelector
        onClick={() => {
          setCount((prev) => (prev === 0 ? 0 : prev - 1));
          setSelectedIndexes([]);
          setInputValue("");
        }}
        title={current.questionText}
      />

      <SurveyCount now={count + 1} total={total} />
      <SurveyTitle title={current.questionText ?? ""} />

      <Question
        type={type}
        question={options}
        selectedIndexes={selectedIndexes}
        onSelect={(index) => {
          if (type === "single") {
            setSelectedIndexes([index]);
          } else {
            setSelectedIndexes((prev) =>
              prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
            );
          }
        }}
        onInputChange={(val: string) => setInputValue(val)}
        inputValue={inputValue}
        inputPlaceholder="자유 입력"
      />

      <SurveyButton
        disabled={isDisabled}
        onClick={() => {
          setSelectedIndexes([]);
          setInputValue("");
          setCount((prev) => prev + 1);
        }}
      />
    </div>
  );
};

export default Survey;
