"use client";

import { twMerge } from "tailwind-merge";

interface HomeJoinCardProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  description?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  selected?: boolean;
}

function HomeJoinCard({
  title,
  description,
  fullWidth = true,
  disabled = false,
  leftIcon,
  rightIcon,
  className,
  selected = false,
  ...props
}: HomeJoinCardProps) {
  return (
    <button
      type="button"
      aria-disabled={disabled}
      disabled={disabled}
      className={twMerge(
        "min-h-[54px] py-4 px-4",
        fullWidth ? "w-full" : "w-[335px]",
        "inline-flex items-center justify-between gap-3",
        "rounded-lg border",
        "bg-[#F7F7F7] border-[#E4E4E4]",
        "text-left",
        disabled && "opacity-50 cursor-not-allowed",
        selected && "border-[#E65F55] bg-[#FFF0F0]",
        className
      )}
      {...props}
    >
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}

      <span className="flex min-w-0 flex-col gap-1">
        <span className="truncate font-pretendard font-semibold text-[16px] leading-[22px] text-[#000000]">
          {title}
        </span>
        {description && (
          <span className="truncate text-[14px] leading-[20px] text-[#6F6F77]">
            {description}
          </span>
        )}
      </span>

      {rightIcon ? (
        <span className="shrink-0">{rightIcon}</span>
      ) : (
        <span className="w-5" aria-hidden />
      )}
    </button>
  );
}

export default HomeJoinCard;
