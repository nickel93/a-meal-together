"use client";

import { ComponentPropsWithoutRef, useId } from "react";

const baseField =
  "h-[54px] w-full rounded-lg border bg-white px-4 outline-none";
const placeholderClass = "placeholder:text-[#A1A1A9]";
const labelClass =
  "font-pretendard font-semibold text-[16px] leading-[22px] text-[#222]";

export interface LzInputProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
  /** true면 테두리만 빨간색, 문자열이면 메시지도 표시 */
  error?: boolean | string;
}

const LzInput = ({ label, className, error, id, ...props }: LzInputProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const hasError = Boolean(error);
  const errorMsg = typeof error === "string" ? error : undefined;

  return (
    <div className="mb-5 flex flex-col gap-1">
      <label htmlFor={inputId} className={labelClass}>
        {label}
      </label>
      <input
        id={inputId}
        {...props}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${inputId}-error` : undefined}
        className={`${baseField} ${placeholderClass} ${
          hasError ? "border-[#E65F55]" : "border-[#E4E4E4]"
        } ${className ?? ""}`}
      />
      {errorMsg && (
        <p id={`${inputId}-error`} className="mt-1 text-[12px] text-[#E65F55]">
          {errorMsg}
        </p>
      )}
    </div>
  );
};

export default LzInput;
