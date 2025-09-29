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
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchSurveyQuestion } from "../../lib/helper";
import {
  SurveyResponseAPI,
  SurveySubmitRequest,
  //SurveyAnswerSubmit,
} from "@/api/survey/types";
import { submitSurveyAnswers } from "@/api/survey/survey";

interface Draft {
  selectedIndexes?: number[]; // 0-based
  inputValue?: string;
}

const Survey = () => {
  const [count, setCount] = useState(0);
  const [drafts, setDrafts] = useState<Record<number, Draft>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const { data } = useQuery<SurveyResponseAPI>({
    queryKey: ["survey", 1],
    queryFn: () => fetchSurveyQuestion(1),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const { isError, error } = useMutation({
    mutationFn: (req: SurveySubmitRequest) =>
      submitSurveyAnswers(req.surveyId, req),
  });

  if (!data) return null;

  //const surveyId = data.data.id ?? 1;
  const questions = data.data.questions;
  const total = questions.length;

  const current = questions[count];
  const type: "single" | "multi" | "input" =
    current.type === "SINGLE_CHOICE"
      ? "single"
      : current.type === "MULTIPLE_CHOICE"
      ? "multi"
      : "input";

  const options = Array.isArray(current.options) ? current.options : [];
  const selectedIndexes = drafts[current.id]?.selectedIndexes ?? [];
  const inputValue = drafts[current.id]?.inputValue ?? "";

  const isDisabled =
    type === "input" ? inputValue.trim() === "" : selectedIndexes.length === 0;

  // const buildRequest = (): SurveySubmitRequest => {
  //   const answers: SurveyAnswerSubmit[] = questions.map((q) => {
  //     const qType: "single" | "multi" | "input" =
  //       q.type === "SINGLE_CHOICE"
  //         ? "single"
  //         : q.type === "MULTIPLE_CHOICE"
  //         ? "multi"
  //         : "input";

  //     const optList = Array.isArray(q.options) ? q.options : [];
  //     const d = drafts[q.id] ?? { selectedIndexes: [], inputValue: "" };

  //     if (qType === "input") {
  //       const text = (d.inputValue ?? "").trim();
  //       return {
  //         questionId: q.id,
  //         answerText: text || "", // 없으면 ""
  //         selectedOptionId: q.id || 0, // 없으면 0
  //         selectedOptionIds: [], // 없으면 []
  //         ratingValue: 0, // 없으면 0
  //         selectedOptionText: "", // 없으면 ""
  //         selectedOptionTexts: [], // 없으면 []
  //       };
  //     }

  //     if (qType === "single") {
  //       const idx = (d.selectedIndexes ?? [])[0] ?? -1;
  //       const id1 = idx >= 0 ? idx + 1 : 0; // 없으면 0
  //       const text = idx >= 0 ? optList[idx] ?? "" : ""; // 없으면 ""
  //       return {
  //         questionId: q.id,
  //         answerText: "",
  //         selectedOptionId: q.id || 0, // 없으면 0
  //         selectedOptionIds: [],
  //         ratingValue: 0,
  //         selectedOptionText: text,
  //         selectedOptionTexts: [],
  //       };
  //     }

  //     // multi
  //     const pickedIdx = d.selectedIndexes ?? [];
  //     const ids = pickedIdx.length ? pickedIdx.map((i) => i + 1) : []; // 없으면 []
  //     const texts = pickedIdx.length
  //       ? (pickedIdx.map((i) => optList[i]).filter(Boolean) as string[])
  //       : [];
  //     return {
  //       questionId: q.id,
  //       answerText: "",
  //       selectedOptionId: 0,
  //       selectedOptionIds: ids,
  //       ratingValue: 0,
  //       selectedOptionText: "",
  //       selectedOptionTexts: texts,
  //     };
  //   });

  //   return {
  //     surveyId, // 예: 1 (없으면 0도 허용)
  //     responseId: 1, // 예시 값. 없으면 0로 유지 가능
  //     answers,
  //   };
  // };

  // 제출

  if (isSuccess) return <SurveyMatching />;

  return (
    <div className="flex flex-col flex-grow items-center gap-4 ">
      <SurveySelector
        onClick={() => setCount((prev) => (prev === 0 ? 0 : prev - 1))}
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
            setDrafts((prev) => ({
              ...prev,
              [current.id]: {
                ...(prev[current.id] ?? {}),
                selectedIndexes: [index],
              },
            }));
          } else {
            setDrafts((prev) => {
              const cur = prev[current.id]?.selectedIndexes ?? [];
              const next = cur.includes(index)
                ? cur.filter((i) => i !== index)
                : [...cur, index];
              return {
                ...prev,
                [current.id]: {
                  ...(prev[current.id] ?? {}),
                  selectedIndexes: next,
                },
              };
            });
          }
        }}
        onInputChange={(val: string) =>
          setDrafts((prev) => ({
            ...prev,
            [current.id]: { ...(prev[current.id] ?? {}), inputValue: val },
          }))
        }
        inputValue={inputValue}
        inputPlaceholder="자유 입력"
      />

      {isError && (
        <p className="text-sm text-red-500">
          제출에 실패했어요.{" "}
          {error instanceof Error ? error.message : "다시 시도해 주세요."}
        </p>
      )}

      <SurveyButton
        disabled={isDisabled}
        onClick={() => {
          const isLast = count === total - 1;
          if (isLast) {
            setIsSuccess(true); // 제출 성공 상태로 변경
            return;
          }
          setCount((prev) => prev + 1);
        }}
      />
    </div>
  );
};

export default Survey;
