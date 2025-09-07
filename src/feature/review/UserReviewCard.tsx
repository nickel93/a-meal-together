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
    <div className="flex flex-col shrink-0 gap-2 rounded-lg border border-[#E9E9EC] bg-[#F7F7F7] p-4 w-[192px] h-[230px]">
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
