"use client";

const LzButton = ({
  children,
  onClick,
  disabled = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
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
