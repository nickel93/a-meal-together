"use client";

import MeetingReviewButton from "@/feature/review/MeetingReviewButton";
import MeetingReviewHeader from "@/feature/review/MeetingReviewHeader";
import UserReviewList from "@/feature/review/UserReviewList";
import Footer from "../home/Footer";

interface Reviews {
  id: string;
  mood: "good" | "normal" | "bad";
  title: string;
  author: string;
  age: string;
  content: string;
}

const mockReviews: Reviews[] = [
  {
    id: "1",
    mood: "good",
    title: "만족해요",
    author: "ㅇㅇㅇ",
    age: "한국 · 20대",
    content:
      "첫 저녁 식사 모임이 너무 좋았기 때문에 앞으로 또 참석하려고 해요. 알파코팅 진짜 완벽하게 작동했는지 우리 그릇은 서로 잘 맞았고 좀 특별하게 느껴졌어요.",
  },
  {
    id: "2",
    mood: "normal",
    title: "보통이었어요",
    author: "ㅇㅇㅇ",
    age: "한국 · 20대",
    content:
      "첫 저녁 식사 모임이 너무 좋았기 때문에 앞으로 또 참석하려고 해요. 알파코팅 진짜 완벽하게 작동했는지 우리 그릇은 서로 잘 맞았고 좀 특별하게 느껴졌어요.",
  },
  {
    id: "3",
    mood: "normal",
    title: "보통이었어요",
    author: "ㅇㅇㅇ",
    age: "한국 · 20대",
    content:
      "첫 저녁 식사 모임이 너무 좋았기 때문에 앞으로 또 참석하려고 해요. 알파코팅 진짜 완벽하게 작동했는지 우리 그릇은 서로 잘 맞았고 좀 특별하게 느껴졌어요.",
  },
];

const MeetingReviewPage = () => {
  return (
    <div className="flex flex-col gap-6 py-6">
      <MeetingReviewHeader />
      <MeetingReviewButton />
      <UserReviewList reviews={mockReviews} />
    </div>
  );
};

export default MeetingReviewPage;
