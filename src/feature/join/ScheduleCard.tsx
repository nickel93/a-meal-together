"use client";

import { PropsWithChildren, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ScheduleCardProps extends PropsWithChildren {
  title: string;
  titleRight?: ReactNode;
  className?: string;
}

const ScheduleCard = (props: ScheduleCardProps) => {
  const { title, titleRight, className, children } = props;
  return (
    <section
      className={twMerge(
        "w-full h-min-[54px]",
        "flex flex-col gap-3",
        className
      )}
    >
      <header className="flex items-center justify-between">
        <h2 className="font-pretendard font-semibold text-[16px] leading-[22px] text-black">
          {title}
        </h2>
        {titleRight && <div className="shrink-0">{titleRight}</div>}
      </header>

      {children}
    </section>
  );
};
export default ScheduleCard;
