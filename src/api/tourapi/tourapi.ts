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
//https://apis.data.go.kr/B551011/KorService2/detailCommon2?MobileOS=web&MobileApp=test&contentId=3056499&serviceKey=2adkNE6zwTXqrRnQ0nL3iEJgi%2FhGOPRrNzVyxmVsZ59EIygfsGJvx7Ow%2FsU%2F3zgDeJjWHEAJRsTD%2Bo7JHCUUgg%3D%3D
/** 막걸리골목 설명(detailCommon2) */
export async function fetchDetailCommon2(contentId: number | string) {
  const url = `/api/tour/detail?contentId=${contentId}`;
  const res = await fetch(url); // 불필요한 Content-Type 헤더 제거
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

/** 막걸리골목 이미지(detailImage2) */
export async function fetchDetailImage2(
  contentId: number | string,
  pageNo = 1,
  numOfRows = 30
) {
  const qs = new URLSearchParams({
    MobileOS: "WEB",
    MobileApp: "test",
    _type: "json",
    contentId: String(contentId),
    pageNo: String(pageNo),
    numOfRows: String(numOfRows),
  }).toString();

  const url = `${BASE}/detailImage2?${qs}&serviceKey=${process.env.TOUR_API_KEY}`; // 키는 문자열로 그대로
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
