export const endpoints = {
  healthCheck: "/healthCheck",
  member: {
    signup: `/api/v1/member/signup`,
    getById: (memberId: number) => `/api/v1/member/${memberId}`,
    myInfo: "/api/v1/member/myInfo",
    backdoorLogin: "/api/backdoor-login",
    join: "/api/v1/member/join", // 모임 참여
    leave: (memberId: number) => `/api/v1/member/${memberId}`, // 멤버 탈퇴
    listByRoom: (roomId: number) => `/api/v1/room/${roomId}/members`, // 특정 방의 멤버 목록
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
