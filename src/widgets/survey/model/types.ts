export type SurveyType = "input" | "single" | "multi";

export interface SurveyDetail {
  id: string | number; // 질문 ID
  navi: string; // "Q{now}/{total}" 같은 네비 표기
  question: string; // 질문 본문
  type: SurveyType; // 렌더링용 타입
  options?: string[]; // 선택지
}
