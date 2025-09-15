// src/widgets/mypage/MyPageRow.tsx
"use client";

type RowProps = {
  label: string;
  onClick?: () => void;
};

const ChevronRight = ({ className = "w-5 h-5 text-black" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M9 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function MyPageRow({ label, onClick }: RowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex justify-between items-center w-[335px] h-[54px] rounded-[8px] border border-[#E4E4E4] px-[16px]"
    >
      <span className="text-[16px] font-semibold text-black">{label}</span>
      <ChevronRight />
    </button>
  );
}
