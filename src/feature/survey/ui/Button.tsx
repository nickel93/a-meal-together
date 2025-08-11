"use client";

interface SurveyButtonProps {
  onClick: VoidFunction;
  disabled?: boolean;
}

const SurveyButton = ({ onClick, disabled = false }: SurveyButtonProps) => {
  return (
    <div className="mt-auto pb-[51px]">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`flex items-center justify-center w-[335px] h-[48px] px-[16px] py-[12px] gap-[4px] rounded-[8px] text-white text-base font-semibold
        ${disabled ? "bg-[#D1D5DC] cursor-not-allowed" : "bg-[#E65F55]"}
      `}
      >
        다음
      </button>
    </div>
  );
};

export default SurveyButton;
