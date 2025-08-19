import { SurveyQuestionTypeAPI, SurveyResponseAPI } from "@/api/survey/types";
import { SurveyDetail, SurveyType } from "../model/types";
import { getSurveyDetail } from "@/api/survey/survey";

const mapType = (t: SurveyQuestionTypeAPI): SurveyType => {
  switch (t) {
    case "SHORT_ANSWER":
      return "input";
    case "MULTIPLE_CHOICE_SINGLE":
      return "single";
    case "MULTIPLE_CHOICE_MULTI":
      return "multi";
    default:
      return "input";
  }
};

export const toSurveyDetail = (
  res: SurveyResponseAPI,
  index: number
): SurveyDetail => {
  const list = res.data?.questions ?? [];
  const q = list[index];
  if (!q) return { id: "", navi: "", question: "", type: "input", options: [] };

  return {
    id: q.id,
    navi: `Q${index + 1}/${list.length}`,
    question: q.questionText,
    type: mapType(q.type),
    options: q.options ?? [],
  };
};

export async function fetchSurveyQuestion(
  surveyId: number,
  index: number
): Promise<SurveyDetail> {
  const res = await getSurveyDetail(surveyId);
  return toSurveyDetail(res, index);
}
