"use client";

interface HomeJoinCardProps {
  title: string;
  description: string;
}

const HomeJoinCard = (props: HomeJoinCardProps) => {
  const { title, description } = props;
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
  );
};

export default HomeJoinCard;
