// src/api/crud/surveys.ts
import { apiRequest } from "../client";
import { endpoints } from "../endpoints";
import { SurveyParticipateRequest, SurveyResponseAPI } from "./types";

export const submitSurvey = (
  surveyId: number,
  data: SurveyParticipateRequest
) =>
  apiRequest<SurveyResponseAPI>(endpoints.surveys.submit(surveyId), {
    method: "POST",
    body: JSON.stringify(data),
  });

export const saveSurveyDraft = (data: SurveyParticipateRequest) =>
  apiRequest<SurveyResponseAPI>(endpoints.surveys.saveDraft, {
    method: "POST",
    body: JSON.stringify(data),
  });

export const getSurveyDraft = (surveyId: number, responseId?: number) => {
  const query = responseId ? `?responseId=${responseId}` : "";
  return apiRequest<SurveyResponseAPI>(
    `${endpoints.surveys.getDraft(surveyId)}${query}`
  );
};

export const getSurveyDetail = (id: number) =>
  apiRequest<SurveyResponseAPI>(endpoints.surveys.getDetail(id));
