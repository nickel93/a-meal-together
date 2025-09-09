"use client";

import { HomeIcon, LookAroundIcon, SettingIcon, TalkIcon } from "@/icon";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const menu = [
  { key: "home", label: "홈", icon: HomeIcon },
  { key: "review", label: "모임후기", icon: TalkIcon },
  { key: "streetmap", label: "둘러보기", icon: LookAroundIcon },
  { key: "mypage", label: "마이페이지", icon: SettingIcon },
];

interface FooterProps {
  active?: string;
}

const Footer = (props: FooterProps) => {
  const { active: initialActive = "home" } = props;
  const [active, setActive] = useState(initialActive);
  const router = useRouter();

  useEffect(() => {
    setActive((prev) => (initialActive ? initialActive : prev));
  }, [initialActive]);

  return (
    <footer className="fixed bottom-0  w-full max-w-[375px] h-[95px] border-t border-[#E4E4E4] bg-white">
      <nav className="flex justify-around items-center h-full">
        {menu.map(({ key, label, icon: Icon }) => {
          const isActive = active === key;
          return (
            <button
              key={key}
              onClick={() => {
                setActive(key);
                router.push(`/${key}`);
              }}
              className="flex flex-col items-center justify-center gap-1 cursor-pointer"
            >
              <Icon color={isActive ? "#E65F55" : undefined} />
              <span
                className={`text-[12px] font-medium ${
                  isActive ? "text-[#E65F55]" : "text-[#9CA3AF]"
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </nav>
    </footer>
  );
};

export default Footer;
