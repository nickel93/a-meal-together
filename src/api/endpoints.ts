export const endpoints = {
  healthCheck: "/healthCheck",
  member: {
    signup: `/api/v1/member/signup`,
    getById: (memberId: number) => `/api/v1/member/${memberId}`,
    myInfo: "/api/v1/member/myInfo",
  },
  surveys: {
    submit: (surveyId: number) => `/api/surveys/${surveyId}/submit`,
    saveDraft: "/api/surveys/save-draft",
    getDraft: (surveyId: number) => `/api/surveys/${surveyId}/draft`,
    getDetail: (id: number) => `/api/survey/${id}/detail`,
  },
};
