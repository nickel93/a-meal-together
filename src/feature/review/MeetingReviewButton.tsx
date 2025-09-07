"use client";

import { useRouter } from "next/navigation";

const MeetingReviewButton = () => {
  const router = useRouter();
  return (
    <button
      className="w-full rounded-lg bg-[#E65F55] py-3 text-white font-semibold text-[16px]"
      onClick={() => router.push("/review/write")}
    >
      모임 후기 작성하기
    </button>
  );
};

export default MeetingReviewButton;
