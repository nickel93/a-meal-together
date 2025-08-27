// src/shared/ui/LzSelect.tsx
"use client";

import { ComponentPropsWithoutRef } from "react";

const fieldClass =
  "flex items-center justify-between h-[54px] w-full rounded-lg border border-[#E4E4E4] bg-white px-4 outline-none";
const labelClass =
  "font-pretendard font-semibold text-[16px] leading-[22px] text-[#222]";

export interface LzSelectProps extends ComponentPropsWithoutRef<"select"> {
  label: string;
}

const LzSelect = ({ label, className, children, ...props }: LzSelectProps) => {
  return (
    <div className="mb-5 flex flex-col gap-1">
      <label className={labelClass}>{label}</label>
      <div className="relative">
        <select
          {...props}
          className={`${fieldClass} appearance-none ${className ?? ""}`}
        >
          {children}
        </select>

        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default LzSelect;
