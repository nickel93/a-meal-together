"use client";

import Icon0 from "@/icon/Icon0";
import Icon10 from "@/icon/Icon10";
import Icon30 from "@/icon/Icon30";
import Icon50 from "@/icon/Icon50";
import Icon70 from "@/icon/Icon70";
import Icon90 from "@/icon/Icon90";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const SurveyMatching = () => {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    let animationFrameId: number;
    const duration = 3000; // 3초 동안 0 → 100%

    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progressValue = Math.min(
        100,
        Math.round((elapsed / duration) * 100)
      );
      setProgress(progressValue);

      if (progressValue < 100) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        router.push("/join/story");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [progress, router]);

  return (
    <div className="relative flex flex-col w-full  bg-[#E65F55] text-white  h-screen text-center justify-center overflow-hidden">
      <p className="text-[48px] font-bold leading-none mb-2">{progress}%</p>
      <p className="text-[18px] font-medium">‘진짜’ 인연이 될 사람 매칭중</p>

      {progress >= 0 && (
        <div className="absolute top-[20%] left-[20%]">
          <Icon0 />
        </div>
      )}
      {progress >= 10 && (
        <div className="absolute top-[25%] right-[20%]">
          <Icon10 />
        </div>
      )}
      {progress >= 30 && (
        <div className="absolute top-[15%] left-[15%]">
          <Icon30 />
        </div>
      )}
      {progress >= 50 && (
        <div className="absolute bottom-[20%] left-[20%]">
          <Icon50 />
        </div>
      )}
      {progress >= 70 && (
        <div className="absolute bottom-[18%] right-[20%]">
          <Icon70 />
        </div>
      )}
      {progress >= 90 && (
        <div className="absolute bottom-[15%] right-[25%]">
          <Icon90 />
        </div>
      )}
    </div>
  );
};

export default SurveyMatching;
