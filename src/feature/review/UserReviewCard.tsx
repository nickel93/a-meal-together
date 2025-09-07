export type UserReviewProps = {
  id: string;
  mood: "good" | "normal" | "bad";
  title: string;
  author: string;
  age: string;
  content: string;
};

const UserReviewCard = ({
  mood,
  title,
  author,
  age,
  content,
}: UserReviewProps) => {
  const moodIcon = {
    good: "😊",
    normal: "😐",
    bad: "😞",
  }[mood];

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-[#E9E9EC] bg-white p-4">
      <div className="flex items-center gap-1 text-[14px]">
        <span>{moodIcon}</span>
        <span className="font-semibold text-[#E65F55]">{title}</span>
      </div>
      <span className="text-[12px] text-[#70747D]">
        {author}, {age}
      </span>
      <p className="text-[13px] leading-snug text-[#333] line-clamp-4">
        {content}
      </p>
    </div>
  );
};

export default UserReviewCard;
