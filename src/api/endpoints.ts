export const endpoints = {
  healthCheck: "/healthCheck",
  home: {
    backdoorSignup: "/backdoor-signup", // ← 일반 회원가입(아이디/비번)
  },

  member: {
    signup: `/api/v1/member/signup`,
    getById: (memberId: string) =>
      `/api/v1/member?memberId=${encodeURIComponent(memberId)}`,
    myInfo: "/api/v1/member/myInfo",
    backdoorLogin: "/api/backdoor-login",
    join: "/api/v1/member/join",
    leave: (memberId: number) => `/api/v1/member/${memberId}`,
    listByRoom: (roomId: number) => `/api/v1/room/${roomId}/members`,
  },
  surveys: {
    submit: (surveyId: number) => `/api/surveys/${surveyId}/submit`,
    saveDraft: "/api/surveys/save-draft",
    getDraft: (surveyId: number) => `/api/surveys/${surveyId}/draft`,
    getDetail: (id: number) => `/api/survey/${id}/detail`,
    getTable: (id: number) => `/api/survey/${id}/detail/table`,
  },
  room: {
    list: "/api/v1/room/list",
    attend: "/api/v1/room/member/attend",
  },
};
