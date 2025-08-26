"use client";

import {
  SurveyButton,
  SurveyCount,
  SurveyMatching,
  SurveySelector,
  SurveyTitle,
} from "@/feature/survey";
import { SURVEY_QUESTION } from "../../model/const";
import { useState } from "react";
import Question from "@/feature/survey/ui/Question";
import { useQuery } from "@tanstack/react-query";
import type { SurveyDetail } from "../../model/types";
import { fetchSurveyQuestion } from "../../lib/helper";

const Survey = () => {
  const total = SURVEY_QUESTION.length;
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const [count, setCount] = useState(0);

  const { data: list = SURVEY_QUESTION as SurveyDetail[] } = useQuery<
    SurveyDetail[]
  >({
    queryKey: ["survey", 1, count],
    queryFn: () => fetchSurveyQuestion(1, count),
    placeholderData: () => SURVEY_QUESTION as SurveyDetail[],
    staleTime: 60_000,
    gcTime: 1_000_000,
  });

  if (count >= total) return <SurveyMatching />;

  const current = list[count] ?? SURVEY_QUESTION[count];

  const type: "single" | "multi" | "input" =
    current.type === "single" || current.type === "multi"
      ? current.type
      : "input";

  const options = Array.isArray(current.options) ? current.options : [];

  return (
    <div className="flex flex-col items-center gap-4  h-full">
      <SurveySelector title={current.navi ?? `Q${count + 1}/${list.length}`} />
      <SurveyCount now={count + 1} total={total} />
      <SurveyTitle title={current.question ?? ""} />
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
        question={[...options]}
      />
      <SurveyButton onClick={() => setCount((prev) => prev + 1)} />
    </div>
  );
};

export default Survey;
