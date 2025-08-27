"use client";

import { twMerge } from "tailwind-merge";

type OneMobileTitleProps = React.HTMLAttributes<HTMLParagraphElement>;

const JoinHeader = ({ className, ...rest }: OneMobileTitleProps) => {
  return (
    <p
      className={twMerge(
        "font-pretendard font-normal",
        "text-[20px] leading-[1] tracking-[0]",
        "text-[#000000]",
        className
      )}
      {...rest}
    />
  );
};

export default JoinHeader;
