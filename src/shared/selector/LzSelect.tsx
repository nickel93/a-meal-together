"use client";

import { useId } from "react";

type Option = { label: string; value: string };

type LzSelectProps = {
  label?: string;
  placeholder?: string;
  options: Option[];
  value?: string;
  onChange?: (v: string) => void;
  disabled?: boolean;
  className?: string;
  name?: string;
};

export default function LzSelect({
  label,
  placeholder = "선택",
  options,
  value,
  onChange,
  disabled,
  className = "",
  name,
}: LzSelectProps) {
  const id = useId();

  return (
    <div className={`w-full max-w-[335px] ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-[18px] leading-[26px] font-pretendard font-semibold"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <select
          id={id}
          name={name}
          disabled={disabled}
          value={value ?? ""}
          onChange={(e) => onChange?.(e.target.value)}
          className="
            w-full h-[54px]
            rounded-lg border border-[#E4E4E4]
            bg-white
            px-4 pr-10
            text-[16px] leading-[22px]
            appearance-none
            outline-none
            focus:border-[#6F6F77]
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* 우측 화살표 아이콘 */}
        <svg
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7 9l5 5 5-5"
            stroke="#6F6F77"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
