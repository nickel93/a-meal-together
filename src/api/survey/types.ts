// src/types/survey.api.ts
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

export type AnswerValue =
  | { type: "SHORT_ANSWER"; value: string }
  | { type: "MULTIPLE_CHOICE_SINGLE"; value: string } // 선택지 value
  | { type: "MULTIPLE_CHOICE_MULTI"; value: string[] }; // 다중 선택

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

export type SurveyAnswerSubmit = {
  questionId: number;
  answerText?: string; // 주관식
  selectedOptionId?: number; // 단일선택 (id 쓸 때)
  selectedOptionIds?: number[]; // 다중선택 (id들)
  ratingValue?: number;
  selectedOptionText?: string; // 단일선택 (텍스트로 보낼 때)
  selectedOptionTexts?: string[]; // 다중선택 (텍스트로 보낼 때)
};

export type SurveySubmitRequest = {
  surveyId: number;
  responseId?: number;
  answers: SurveyAnswerSubmit[];
  responderName?: string;
  responderEmail?: string;
  responderPhone?: string;
  ipAddress?: string;
  userAgent?: string;
  draft?: boolean; // 임시저장 여부
};
