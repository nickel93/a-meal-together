// src/api/tourapi/queries.ts
import { QueryClient, useQuery } from "@tanstack/react-query";
import { fetchDetailImage2 } from "./tourapi";

export const tourKeys = {
  detailImage: (id: number | string, page: number, size: number) =>
    ["tour", "detailImage2", id, page, size] as const,
};

export interface DetailImageItem {
  contentid?: string;
  originimgurl?: string; // 원본
  smallimageurl?: string; // 썸네일
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const normalizeDetailImage = (data: any): DetailImageItem[] => {
  const arr =
    data?.response?.body?.items?.item ?? data?.body?.items?.item ?? [];
  return Array.isArray(arr) ? arr : arr ? [arr] : [];
};

export const useDetailImageQuery = (
  contentId: number | string,
  page = 1,
  size = 30
) =>
  useQuery({
    queryKey: tourKeys.detailImage(contentId, page, size),
    queryFn: () => fetchDetailImage2(contentId, page, size),
    select: normalizeDetailImage,
    staleTime: 5 * 60 * 1000,
  });

export const prefetchDetailImage = async (
  qc: QueryClient,
  contentId: number | string,
  page = 1,
  size = 30
) => {
  await qc.prefetchQuery({
    queryKey: tourKeys.detailImage(contentId, page, size),
    queryFn: () => fetchDetailImage2(contentId, page, size),
  });
};
