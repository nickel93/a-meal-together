import { SurveyQuestionTypeAPI, SurveyResponseAPI } from "@/api/survey/types";
import { SurveyDetail, SurveyType } from "../model/types";
import { getSurveyDetail } from "@/api/survey/survey";

const mapType = (t: SurveyQuestionTypeAPI): SurveyType => {
  switch (t) {
    case "SINGLE_CHOICE":
      return "single";
    case "MULTIPLE_CHOICE":
      return "multi";
    default:
      return "input";
  }
};


export const toSurveyDetail = (
  res: SurveyResponseAPI,
  index: number
): SurveyDetail[] => {
  const list = res.data?.questions ?? [];
  const q = list[index];
  if (list.length === 0)
    return [{ id: "", navi: "", question: "", type: "input", options: [] }];

  return list.map((q) => ({
    id: q.id,
    navi: `Q${index + 1}/${list.length}`,
    question: q.questionText,
    type: mapType(q.type),
    options: q.options ?? [],
  })) as SurveyDetail[];
};

export async function fetchSurveyQuestion(
  surveyId: number
): Promise<SurveyResponseAPI> {
  const res = await getSurveyDetail(surveyId);
  return res;
}
