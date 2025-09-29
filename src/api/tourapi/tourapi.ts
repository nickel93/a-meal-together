// api/tour.ts
const BASE = "https://apis.data.go.kr/B551011/KorService2";
const SERVICE_KEY = process.env.TOUR_API_KEY;

const qs = (obj: Record<string, string | number | undefined>) =>
  new URLSearchParams(
    Object.entries(obj).reduce((a, [k, v]) => {
      if (v !== undefined) a[k] = String(v);
      return a;
    }, {} as Record<string, string>)
  ).toString();

/** 막걸리골목 설명(detailCommon2) */
export async function fetchDetailCommon2(contentId: number | string) {
  const url = `${BASE}/detailCommon2?${qs({
    MobileOS: "WEB",
    MobileApp: "test",
    _type: "json",
    contentId,
    serviceKey:
      "2adkNE6zwTXqrRnQ0nL3iEJgi%2FhGOPRrNzVyxmVsZ59EIygfsGJvx7Ow%2FsU%2F3zgDeJjWHEAJRsTD%2Bo7JHCUUgg%3D%3D",
  })}`;
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json(); // 원본 JSON 그대로 반환
}

/** 막걸리골목 이미지(detailImage2) */
export async function fetchDetailImage2(
  contentId: number | string,
  pageNo: number = 1,
  numOfRows: number = 30
) {
  const url = `${BASE}/detailImage2?${qs({
    MobileOS: "WEB",
    MobileApp: "test",
    _type: "json",
    contentId,
    pageNo,
    numOfRows,
    imageYN: "Y",
    subImageYN: "Y",
    serviceKey:
      "2adkNE6zwTXqrRnQ0nL3iEJgi%2FhGOPRrNzVyxmVsZ59EIygfsGJvx7Ow%2FsU%2F3zgDeJjWHEAJRsTD%2Bo7JHCUUgg%3D%3D",
  })}`;
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json(); // 원본 JSON 그대로 반환
}
