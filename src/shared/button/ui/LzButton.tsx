"use client";

import React from "react";

interface LzButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  onSubmit?: (e: React.FormEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
}

const LzButton = ({
  children,
  onClick,
  onSubmit,
  disabled = false,
  type = "button",
}: LzButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={disabled}
      className={`flex items-center justify-center w-full h-[48px] px-[16px] py-[12px] gap-[4px] rounded-[8px] text-white text-base font-semibold
        ${disabled ? "bg-[#D1D5DC] cursor-not-allowed" : "bg-[#E65F55]"}
      `}
    >
      {children}
    </button>
  );
};

export default LzButton;
