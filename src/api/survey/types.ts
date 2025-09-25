// src/types/survey.api.ts  (경로는 네 프로젝트에 맞게)
export type SurveyStatus = "DRAFT" | "PUBLISHED" | "CLOSED";
export type SurveyQuestionTypeAPI =
  | "SHORT_ANSWER"
  | "MULTIPLE_CHOICE"
  | "SINGLE_CHOICE";

export interface SurveyQuestionAPI {
  id: number;
  questionText: string;
  type: SurveyQuestionTypeAPI;
  options: string[];
}

export interface SurveyDataAPI {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: SurveyStatus;
  createdAt: string;
  updatedAt: string;
  questions: SurveyQuestionAPI[];
}

export interface SurveyResponseAPI {
  success: boolean;
  message: string;
  data: SurveyDataAPI;
  timestamp: string;
}

/** 기존 Participate(Answer[]) 타입은 그대로 두고 — 다른 API가 쓰면 유지 */
export type AnswerValue =
  | { type: "SHORT_ANSWER"; value: string }
  | { type: "MULTIPLE_CHOICE_SINGLE"; value: string }
  | { type: "MULTIPLE_CHOICE_MULTI"; value: string[] };

export interface Answer {
  questionId: number;
  answer: AnswerValue;
}

export interface SurveyParticipateRequest {
  surveyId: number;
  responseId?: number;
  answers: Answer[];
  responderName?: string;
  responderEmail?: string;
  responderPhone?: string;
  ipAddress?: string;
  userAgent?: string;
  draft?: boolean;
}

/** ✅ 네가 요구한 key/value 구조 */
export type SurveyAnswerSubmit = {
  questionId: number;
  answerText: string | null;
  selectedOptionId: number | null;
  selectedOptionIds: number[] | null;
  ratingValue: number | null;
  selectedOptionText: string | null;
  selectedOptionTexts: string[] | null;
};

export type SurveySubmitRequest = {
  surveyId: number;
  responseId?: number;
  answers: SurveyAnswerSubmit[];
  // 메타 필드 optional — 안 넣으면 JSON에 포함 안 됨
  responderName?: string;
  responderEmail?: string;
  responderPhone?: string;
  ipAddress?: string;
  userAgent?: string;
  draft?: boolean;
};
