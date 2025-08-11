// src/api/crud/surveys.ts
import { apiRequest } from "../client";
import { endpoints } from "../endpoints";

export interface SurveyParticipateRequest {
  surveyId: number;
  responseId?: number;
  answers: unknown[]; // Replace 'unknown' with a more specific type if available, e.g., Answer[]
  responderName?: string;
  responderEmail?: string;
  responderPhone?: string;
  ipAddress?: string;
  userAgent?: string;
  draft?: boolean;
}

export const submitSurvey = (
  surveyId: number,
  data: SurveyParticipateRequest
) =>
  apiRequest(endpoints.surveys.submit(surveyId), {
    method: "POST",
    body: JSON.stringify(data),
  });

export const saveSurveyDraft = (data: unknown) =>
  apiRequest(endpoints.surveys.saveDraft, {
    method: "POST",
    body: JSON.stringify(data),
  });

export const getSurveyDraft = (surveyId: number, responseId?: number) => {
  const query = responseId ? `?responseId=${responseId}` : "";
  return apiRequest(`${endpoints.surveys.getDraft(surveyId)}${query}`);
};

export const getSurveyDetail = (id: number) =>
  apiRequest(endpoints.surveys.getDetail(id));
