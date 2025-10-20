// 예: DetailClient.tsx 안에서 이미지 리스트도 같이 렌더
"use client";

import { useDetailImageQuery } from "@/api/tourapi/query";
import Image from "next/image";

interface Props {
  contentId: number;
}

const DetailImages: React.FC<Props> = ({ contentId }) => {
  const {
    data: images,
    isLoading,
    error,
  } = useDetailImageQuery(contentId, 1, 30);

  if (isLoading) return <p className="text-gray-500">이미지 불러오는 중…</p>;
  if (error) return <p className="text-red-600">이미지 로드 실패</p>;
  if (!images?.length) return null;

  return (
    <div className="mt-4 flex gap-3 overflow-x-auto">
      {images.map((img, i) => {
        const src = img.smallimageurl || img.originimgurl;
        if (!src) return null;
        return (
          <div
            key={i}
            className="relative h-28 w-40 shrink-0 overflow-hidden rounded-md"
          >
            <Image
              src={src}
              alt={`detail-${i}`}
              fill
              className="object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default DetailImages;
