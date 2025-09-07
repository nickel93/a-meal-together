"use client";

import ReviewHeader from "@/feature/review/write/ReviewHeader";
import ReviewInfo from "@/feature/review/write/ReviewInfo";
import ReviewSatisfaction from "@/feature/review/write/ReviewSatisfaction";
import ReviewSubmitButton from "@/feature/review/write/ReviewSubmitButton";
import ReviewTextarea from "@/feature/review/write/ReviewTextarea";
import { useState } from "react";

const ReviewWritePage = () => {
  const [satisfaction, setSatisfaction] = useState<string>("만족해요");
  const [content, setContent] = useState<string>("");

  return (
    <div className="flex flex-col h-screen gap-[20px]">
      <ReviewHeader />

      <div className="flex flex-col gap-6 flex-1">
        <ReviewInfo />
        <ReviewSatisfaction value={satisfaction} onChange={setSatisfaction} />
        <ReviewTextarea value={content} onChange={setContent} />
      </div>

      <ReviewSubmitButton />
    </div>
  );
};

export default ReviewWritePage;
