import { notFound } from "next/navigation";

import {
  Charging,
  JoinHeader,
  JoinSchedule,
  JoinStory,
  JoinTable,
} from "@/widgets/join";
import { Suspense } from "react";
import { HeaderLogo } from "@/icon";

type Slug = "story" | "schedule" | "table" | "charging";

export const dynamicParams = false;

export function generateStaticParams(): { slug: Slug }[] {
  return [
    { slug: "story" },
    { slug: "schedule" },
    { slug: "table" },
    { slug: "charging" },
  ];
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: Slug }>;
}) {
  const { slug } = await params;

  const Component =
    slug === "story"
      ? JoinStory
      : slug === "schedule"
      ? JoinSchedule
      : slug === "table"
      ? JoinTable
      : slug === "charging"
      ? Charging
      : null;

  if (!Component) notFound();

  return (
    <Suspense>
      <div className="gap-[40px] flex flex-col h-full flex-grow px-[20px]">
        {(slug === "table" || slug === "story") && (
          <JoinHeader>
            <HeaderLogo />
          </JoinHeader>
        )}
        <Component />
      </div>
    </Suspense>
  );
}
