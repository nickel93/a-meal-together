// app/api/tour/detail/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const contentId = searchParams.get("contentId") ?? "3056499";

  const base = "https://apis.data.go.kr/B551011/KorService2/detailCommon2";
  const qs = new URLSearchParams({
    MobileOS: "web",
    MobileApp: "test",
    _type: "json",
    contentId,
  });
  const upstreamUrl = `${base}?${qs.toString()}&serviceKey=${
    process.env.TOUR_API_KEY
  }`; // 인코딩된 키를 그대로 붙임

  const r = await fetch(upstreamUrl, { cache: "no-store" });
  const body = await r.text();
  return new NextResponse(body, {
    status: r.status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      // CORS는 내 서버에서 ‘하나의 값’만:
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Methods": "GET,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Methods": "GET,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
