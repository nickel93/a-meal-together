// src/shared/ui/LzInput.tsx
"use client";

import { ComponentPropsWithoutRef } from "react";

const fieldClass =
  "h-[54px] w-full rounded-lg border border-[#E4E4E4] bg-white px-4 outline-none";
const placeholderClass = "placeholder:text-[#A1A1A9]";
const labelClass =
  "font-pretendard font-semibold text-[16px] leading-[22px] text-[#222]";

export interface LzInputProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
}

const LzInput = ({ label, className, ...props }: LzInputProps) => {
  return (
    <div className="mb-5 flex flex-col gap-1">
      <label className={labelClass}>{label}</label>
      <input
        {...props}
        className={`${fieldClass} ${placeholderClass} ${className ?? ""}`}
      />
    </div>
  );
};

export default LzInput;
