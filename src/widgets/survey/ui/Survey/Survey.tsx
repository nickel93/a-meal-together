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
import { SurveyDetail } from "../../model/types";
import { fetchSurveyQuestion } from "../../lib/helper";

const Survey = () => {
  const total = SURVEY_QUESTION.length;
  const [count, setCount] = useState(0);

  const { data: current } = useQuery<SurveyDetail>({
    queryKey: ["survey", 0, count],
    queryFn: () => fetchSurveyQuestion(1, count),
    placeholderData: () => SURVEY_QUESTION[count] as SurveyDetail,
    gcTime: 1000000,
  });

  if (count >= total) {
    return <SurveyMatching />;
  }

  return (
    <div className="flex flex-col items-center gap-4 bg-[#F8F6F5] h-full">
      <SurveySelector title={current?.navi ?? ""} />
      <SurveyCount now={count + 1} total={total} />
      <SurveyTitle title={current?.question ?? ""} />
      <Question
        type={
          current?.type === "single" || current?.type === "multi"
            ? current.type
            : "single"
        }
        question={current?.options ? [...current.options] : []}
      />
      <SurveyButton onClick={() => setCount((prev) => prev + 1)} />
    </div>
  );
};

export default Survey;
