import UserReviewCard from "./UserReviewCard";

interface Reviews {
  id: string;
  mood: "good" | "normal" | "bad";
  title: string;
  author: string;
  age: string;
  content: string;
}

type UserReviewListProps = {
  reviews: Reviews[];
};

const UserReviewList = ({ reviews }: UserReviewListProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-semibold text-[16px]">가치한상 사용자 후기</h3>
      <div className="grid grid-cols-2 gap-3">
        {reviews.map((review) => (
          <UserReviewCard key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
};

export default UserReviewList;
