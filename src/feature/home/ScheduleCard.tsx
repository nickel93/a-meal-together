"use client";

import { PropsWithChildren, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ScheduleCardProps extends PropsWithChildren {
  title: string;
  /** 제목 오른쪽 액션 버튼/텍스트가 필요할 때 */
  titleRight?: ReactNode;
  className?: string;
}

const ScheduleCard = (props: ScheduleCardProps) => {
  const { title, titleRight, className, children } = props;
  return (
    <section
      className={twMerge(
        // Fill 335px (부모가 375px + 양옆 20px 일 때 자동 w-full = 335px)
        "w-full",
        // 세로 정렬 + gap 12px
        "flex flex-col gap-3", // 0.75rem = 12px
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
