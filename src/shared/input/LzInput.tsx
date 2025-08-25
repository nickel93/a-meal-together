"use client";

import { useId } from "react";

type LzInputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  disabled?: boolean;
  className?: string;
  name?: string;
};

export default function LzInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  disabled,
  className = "",
  name,
}: LzInputProps) {
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

      <input
        id={id}
        name={name}
        type={type}
        disabled={disabled}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="
          w-full h-[54px]
          rounded-lg border border-[#E4E4E4]
          bg-white
          px-4
          text-[16px] leading-[22px]
          placeholder-[#A1A1A9]
          outline-none
          focus:border-[#6F6F77]
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      />
    </div>
  );
}
