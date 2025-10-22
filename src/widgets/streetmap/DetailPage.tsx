/* eslint-disable @next/next/no-img-element */
"use client";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import Navigator from "@/shared/navigator/Navigator";
import ex from "./ex.png";
import { fetchDetailCommon2 } from "@/api/tourapi/tourapi";

const CONTENT_ID = 3056499;

interface TourItem {
  title?: string;
  firstimage: string;
  overview?: string;
  homepage?: string;
}

/** 공통 래퍼 타입 (response/body 어느 쪽이든 대응) */
interface ApiEnvelope<T> {
  response?: { body?: { items?: { item?: T | T[] } } };
  body?: { items?: { item?: T | T[] } };
}

const DetailPage = () => {
  const {
    data: item,
    isLoading,
    error,
  } = useQuery<
    ApiEnvelope<TourItem>, // TQueryFnData: fetchDetailCommon2의 원본 응답
    Error, // TError
    TourItem | null // TData: select가 반환하는 타입
  >({
    queryKey: ["tour", "detailCommon2", CONTENT_ID],
    queryFn: () => fetchDetailCommon2(CONTENT_ID),
    select: (common) => {
      const node =
        common?.response?.body?.items?.item ?? common?.body?.items?.item ?? [];
      const arr = Array.isArray(node) ? node : node ? [node] : [];
      return (arr[0] ?? null) as TourItem | null;
    },
    staleTime: 5 * 60 * 1000,
  });

  const paragraphs = useMemo(() => {
    const text = item?.overview ?? "";
    return text
      .split(/\n+/)
      .map((s) => s.trim())
      .filter(Boolean);
  }, [item?.overview]);

  if (isLoading) {
    return (
      <div className="flex flex-col w-full h-full bg-white">
        <Navigator title={"삼천 2동 막걸리골목"} />
        <p className="mb-3 text-gray-500">불러오는 중…</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-full bg-white">
      <Navigator title={item?.title ?? "삼천 2동 막걸리골목"} />

      <div className="relative w-full h-52 overflow-hidden">
        <img
          src={(item?.firstimage as string) || ex.src}
          alt={item?.title || "전주 막걸리골목"}
        />
      </div>

      <div className="p-4 overflow-y-auto text-sm leading-relaxed text-gray-700">
        {error && <p className="mb-3 text-red-600">{error.message}</p>}

        {!isLoading &&
          !error &&
          paragraphs.map((p, i) => (
            <p key={i} className="mb-3">
              {p}
            </p>
          ))}

        {item?.homepage && (
          <div
            className="mt-4 text-sm text-blue-600 underline"
            dangerouslySetInnerHTML={{ __html: item.homepage }}
          />
        )}
      </div>
    </div>
  );
};

export default DetailPage;
