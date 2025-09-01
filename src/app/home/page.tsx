"use client";

import { AlarmIcon, HeaderIcon } from "@/icon";
import RoomCard from "@/shared/roomcard/RoomCard";
import { Section } from "@/shared/section";
import Footer from "@/widgets/home/Footer";

// 카드 데이터 배열
const ROOM_CARDS = [
  {
    title: "어디로 될지 모르는 모임",
    description: "우리 한상모임 6명은 모두 ‘P’ 입니다",
    status: "모임 3일 전 오픈",
    colorType: "PINK",
    rightIcon: <div className="text-[40px]">✦</div>,
  },
  {
    title: "짠짠짠",
    description: "모두 주량이 막걸리 2병 이상이에요",
    status: "모임 3일 전 오픈",
    colorType: "MINT",
    rightIcon: <div className="text-[40px]">🥂</div>,
  },
  {
    title: "솔로천국 커플지옥",
    description: "우리 한상모임은 6명 모두 솔로?!",
    status: "모임 3일 전 오픈",
    colorType: "BLUE",
    rightIcon: <div className="text-[40px]">💔</div>,
  },
  {
    title: "다양한 막걸리",
    description: "6명 중 5명은 최애 술이 막걸리에요",
    status: "모임 3일 전 오픈",
    colorType: "PINK",
    rightIcon: <div className="text-[40px]">🍶</div>,
  },
  {
    title: "기빨리지만 신나",
    description: "우리 한상모임은 6명 모두 ‘E’ 입니다",
    status: "모임 3일 전 오픈",
    colorType: "PURPLE",
    rightIcon: <div className="text-[40px]">⚡</div>,
  },
  {
    title: "I’m Fine Thank you and you?",
    description: "한국어를 못하는 외국인이 있어요.",
    status: "모임 3일 전 오픈",
    colorType: "YELLOW",
    rightIcon: <div className="text-[40px]">⬡</div>,
  },
  {
    title: "Welcome to KOREA!",
    description: "우리 한상모임엔 외국인이 2명 있어요",
    status: "모임 2일 전 오픈",
    colorType: "CORAL",
    rightIcon: <div className="text-[40px]">◯</div>,
  },
  {
    title: "너 혹시 T 야?",
    description: "우리 한상모임엔 5명이 F지만, T가 1명 있어요",
    status: "모임 1일 전 오픈",
    colorType: "GREEN",
    rightIcon: <div className="text-[40px] font-bold">T</div>,
  },
] as const;

const Page = () => {
  return (
    <div className="bg-[#F8F6F5] flex flex-col">
      <div className="mx-auto w-[375px] min-h-screen bg-white flex flex-col gap-[40px] p-5">
        <div className="flex items-center justify-between">
          <HeaderIcon />
          <AlarmIcon />
        </div>

        <p className="font-semibold text-[24px]">예정된 한상 모임</p>

        <div className="flex flex-col gap-[20px]">
          <Section title="일시">
            <div className="flex items-center justify-between rounded-lg bg-[#F7F7F7] px-4 py-3 text-[16px] font-semibold">
              <span>8월 13일, 오후 7:00</span>
              <span className="text-[#E65F55] font-medium">D-3</span>
            </div>
          </Section>

          <Section title="위치">
            <div className="flex items-center justify-between rounded-lg bg-[#F7F7F7] px-4 py-3">
              <div>
                <p className="text-[16px] font-semibold">광장포차타운</p>
                <p className="text-[14px] text-[#6F6F77] truncate">
                  전북특별자치도 전주시 완산구 거마산로...
                </p>
              </div>
              <button className="text-[#6F6F77] text-[14px] font-medium">
                위치 보기
              </button>
            </div>
          </Section>

          <Section title="내 모임 정보">
            <div className="flex overflow-x-auto gap-[12px]">
              {ROOM_CARDS.map((card, idx) => (
                <RoomCard
                  key={idx}
                  title={card.title}
                  description={card.description}
                  status={card.status}
                  colorType={card.colorType}
                  rightIcon={card.rightIcon}
                />
              ))}
            </div>
          </Section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
