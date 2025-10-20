"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import ex from "./ex.png";
import Navigator from "@/shared/navigator/Navigator";
import { fetchDetailCommon2 } from "@/api/tourapi/tourapi";
import DetailImages from "./DetailImages";

const CONTENT_ID = 3056499; // 전주 삼천2동 막걸리골목

type TourItem = {
  title?: string;
  firstimage?: string;
  overview?: string;
  homepage?: string;
};

const DetailPage = () => {
  const [item, setItem] = useState<TourItem | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const run = async () => {
      try {
        const common = await fetchDetailCommon2(CONTENT_ID);
        const got =
          common?.response?.body?.items?.item?.[0] ??
          common?.body?.items?.item?.[0] ??
          null;

        setItem(got);
      } catch (err) {
        console.error("[TourAPI Error]", err);
        setError("요청 실패");
      }
    };
    run();
  }, []);

  // overview의 줄바꿈(\n)을 문단으로 쪼개서 <p>로 렌더링
  const paragraphs = useMemo(() => {
    const text = item?.overview ?? "";
    return text
      .split(/\n+/)
      .map((s) => s.trim())
      .filter(Boolean);
  }, [item?.overview]);

  return (
    <div className="flex flex-col w-full h-full bg-white">
      <Navigator title={"전주 막걸리골목"} />
      {/* <DetailImages contentId={3056499} /> */}

      <div className="relative w-full h-52">
        <Image
          src={ex}
          alt={item?.title || "전주 막걸리골목"}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 overflow-y-auto text-sm leading-relaxed text-gray-700">
        {error && <p className="mb-3 text-red-600">불러오기 실패: {error}</p>}

        {!item && !error && <p className="mb-3 text-gray-500">불러오는 중…</p>}

        {paragraphs.map((p, i) => (
          <p key={i} className="mb-3">
            {p}
          </p>
        ))}

        {/* (선택) 홈페이지만 별도로 보여주고 싶다면 */}
        {item?.homepage && (
          <div
            className="mt-4 text-sm text-blue-600 underline"
            // homepage 필드는 a 태그가 포함되므로 신뢰 가능한 API라는 가정 하에 렌더
            dangerouslySetInnerHTML={{ __html: item.homepage }}
          />
        )}
      </div>
    </div>
  );
};

export default DetailPage;
