// src/widgets/common/Footer.tsx
"use client";

import { StarIcon } from "@/icon";
import { useState } from "react";

const menu = [
  { key: "home", label: "홈", icon: StarIcon },
  { key: "review", label: "모임후기", icon: StarIcon },
  { key: "explore", label: "둘러보기", icon: StarIcon },
  { key: "mypage", label: "마이페이지", icon: StarIcon },
];

const Footer = () => {
  const [active, setActive] = useState("home");

  return (
    <footer className="fixed bottom-0 left-0 w-full max-w-[375px] h-[95px] border-t border-[#E4E4E4] bg-white">
      <nav className="flex justify-around items-center h-full">
        {menu.map(({ key, label, icon: Icon }) => {
          const isActive = active === key;
          return (
            <button
              key={key}
              onClick={() => setActive(key)}
              className="flex flex-col items-center justify-center gap-1"
            >
              <Icon />
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
