"use server";
import DetailPage from "@/widgets/streetmap/DetailPage";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { tourKeys } from "@/api/tourapi/query";
import getQueryClient from "@/shared/query/getQueryClient";
import { fetchDetailCommon2 } from "@/api/tourapi/tourapi";

const CONTENT_ID = 3056499; // 필요 시 params/검색어로 치환 가능

const Page = async () => {
  const qc = getQueryClient();

  await qc.prefetchQuery({
    queryKey: tourKeys.detailCommon(CONTENT_ID),
    queryFn: () => fetchDetailCommon2(CONTENT_ID),
  });

  qc.clear();

  return (
    <div className="flex justify-center w-full h-full">
      <div className="flex flex-col flex-grow gap-[40px]">
        {/* 클라이언트에서 같은 queryKey를 쓰는 useQuery가 즉시 하이드레이션됨 */}
        <HydrationBoundary state={dehydrate(qc)}>
          <DetailPage /* 필요하면 contentId={CONTENT_ID} 전달 */ />
        </HydrationBoundary>
      </div>
    </div>
  );
};

export default Page;
