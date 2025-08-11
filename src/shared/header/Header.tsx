"use client";

const Header = () => {
  return (
    <div className="h-[54px] px-4 flex justify-between items-center w-full">
      <div className="text-[16.87px] font-semibold text-black leading-[22px]">
        9:41
      </div>

      <div className="flex items-center gap-[6px]">
        <div className="w-[19.05px] h-[11px] bg-black rounded-sm" />

        <div className="w-[17.01px] h-[11px] bg-black rounded-sm" />

        <div className="relative w-[24.81px] h-[11px] border border-black border-opacity-35 rounded-[4.27px]">
          <div className="absolute top-[30%] right-[-5px] w-[1.32px] h-[5px] bg-black opacity-40" />
          <div className="absolute top-[3px] left-[2px] w-[20.84px] h-[5px] bg-black rounded-[2.48px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
