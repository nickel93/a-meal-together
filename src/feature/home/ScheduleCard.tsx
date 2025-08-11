"use client";

import { PropsWithChildren } from "react";

interface ScheduleCardProps extends PropsWithChildren {
  title: string;
}

const ScheduleCard = (props: ScheduleCardProps) => {
  const { title, children } = props;
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="bg-color-gray-600">{children}</div>
    </div>
  );
};
export default ScheduleCard;
