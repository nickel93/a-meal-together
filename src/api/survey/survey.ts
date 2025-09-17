// src/api/crud/surveys.ts
import { apiRequest } from "../client";
import { endpoints } from "../endpoints";
import { SurveyParticipateRequest, SurveyResponseAPI } from "./types";

/** 설문 제출 */
export const submitSurvey = (
  surveyId: number,
  body: SurveyParticipateRequest
) =>
  apiRequest<SurveyResponseAPI>(endpoints.surveys.submit(surveyId), {
    method: "POST",
    body: JSON.stringify(body),
  });

/** 임시 저장 */
export const saveSurveyDraft = (data: SurveyParticipateRequest) =>
  apiRequest<SurveyResponseAPI>(endpoints.surveys.saveDraft, {
    method: "POST",
    body: JSON.stringify(data),
  });

/** 임시 저장 불러오기 */
export const getSurveyDraft = (surveyId: number, responseId?: number) => {
  const query = responseId ? `?responseId=${responseId}` : "";
  return apiRequest<SurveyResponseAPI>(
    `${endpoints.surveys.getDraft(surveyId)}${query}`
  );
};

/** 설문 상세(질문/옵션 등) */
export const getSurveyDetail = (id: number) =>
  apiRequest<SurveyResponseAPI>(endpoints.surveys.getDetail(id));

/** 설문 상세 테이블(집계/표 형태) */
export const getSurveyTable = <T = unknown>(id: number) =>
  apiRequest<T>(endpoints.surveys.getTable(id));

/* ---- 아래는 방 목록 ---- */
export interface Room {
  id: number;
  title: string;
  createdDate: string;
  chatLink: string;
  calRoomStatus: "REQUEST" | "CONFIRMED" | "CANCELLED";
}

export const getRoomList = () => apiRequest<Room[]>(`/api/v1/room/list`);
