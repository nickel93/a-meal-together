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

const Survey = () => {
  const total = SURVEY_QUESTION.length;
  const [count, setCount] = useState(0);

  if (count >= total) {
    return <SurveyMatching />;
  }

  const current = SURVEY_QUESTION[count];

  return (
    <div className="flex flex-col items-center gap-4 bg-[#F8F6F5] h-full">
      <SurveySelector title={current.navi} />
      <SurveyCount now={count + 1} total={total} />
      <SurveyTitle title={current.question} />
      <Question
        type={current.type}
        question={current.options ? [...current.options] : []}
      />
      <SurveyButton onClick={() => setCount((prev) => prev + 1)} />
    </div>
  );
};

export default Survey;
