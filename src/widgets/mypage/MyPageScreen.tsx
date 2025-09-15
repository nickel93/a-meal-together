"use client";

import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import MyPageRow from "./MyPageRow";

export default function MyPageScreen() {
  const router = useRouter();
  const { data } = useSession();

  const name = data?.user?.name ?? "사용자";
  // Type assertion to include 'id' property
  const userId =
    (data && (data.user as typeof data.user & { id?: string })?.id) ??
    "123232342343424";

  return (
    <div className="mx-auto w-[375px]  bg-white flex flex-col">
      {/* 타이틀 */}
      <div className="pt-[12px] pb-[8px]">
        <h1 className="text-center text-[16px] font-semibold">마이페이지</h1>
      </div>

      {/* 본문 */}
      <div className="mt-[54px] px-[20px] flex flex-col gap-[20px] items-center">
        {/* 프로필 */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-[96px] h-[96px] rounded-full bg-[#F5F5F5] border border-[#E4E4E4]" />
          <div className="text-[18px] font-semibold text-black">{name}</div>
          <div className="text-[14px] text-[#6F6F77]">{userId}</div>

          <button
            type="button"
            onClick={() => signOut({ callbackUrl: "/" })}
            className="mt-2 h-[36px] px-4 rounded-[8px] border border-[#E4E4E4] text-[14px] font-semibold"
          >
            로그아웃
          </button>
        </div>

        <div className="flex flex-col gap-[12px] items-center">
          <MyPageRow
            label="작성한 설문"
            onClick={() => router.push("/mypage/surveys")}
          />
          <MyPageRow
            label="참여한 모임 후기"
            onClick={() => router.push("/mypage/reviews")}
          />
        </div>
      </div>

      {/* 하단 탭 여백 */}
      <div className="mt-auto h-[80px]" />
    </div>
  );
}
