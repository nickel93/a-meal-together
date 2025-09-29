// api/tour.ts
const BASE = "https://apis.data.go.kr/B551011/KorService2";
const SERVICE_KEY = process.env.NEXT_PUBLIC_TOUR_API_KEY || ""; // 테스트용

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
    serviceKey: SERVICE_KEY,
  })}`;
  const res = await fetch(url);
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
    serviceKey: SERVICE_KEY,
  })}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json(); // 원본 JSON 그대로 반환
}
