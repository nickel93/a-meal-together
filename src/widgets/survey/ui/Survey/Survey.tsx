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
  const [count, setCount] = useState(0);

  // ✅ 전체 설문 데이터 한 번만 가져오기
  const { data } = useQuery<SurveyResponseAPI>({
    queryKey: ["survey", 1],
    queryFn: () => fetchSurveyQuestion(1), // count 제거
    staleTime: Infinity, // 한 번 가져오면 다시 호출 안 함
    gcTime: Infinity,
  });

  if (!data) {
    return null;
  }

  const total = data.data.questions.length;

  if (count >= total) return <SurveyMatching />;

  const current = data.data.questions[count];

  const type: "single" | "multi" | "input" =
    current.type === "SINGLE_CHOICE"
      ? "single"
      : current.type === "MULTIPLE_CHOICE_MULTI"
      ? "multi"
      : "input";

  const options = Array.isArray(current.options) ? current.options : [];

  return (
    <div className="flex flex-col items-center gap-4 h-full">
      <SurveySelector title={current.questionText} />
      <SurveyCount now={count + 1} total={total} />
      <SurveyTitle title={current.questionText ?? ""} />
      <Question
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
        question={options}
      />
      <SurveyButton
        onClick={() => {
          setSelectedIndexes([]); // 다음 질문 넘어가면 선택 초기화
          setCount((prev) => prev + 1);
        }}
      />
    </div>
  );
};

export default Survey;
