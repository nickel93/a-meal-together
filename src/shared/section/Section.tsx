"use client";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ title, children, className }: SectionProps) => {
  return (
    <section className={twMerge("flex flex-col gap-2 w-full", className)}>
      <h2 className="text-[14px] font-semibold text-[#333333]">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
