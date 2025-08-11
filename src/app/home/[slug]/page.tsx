import { notFound } from "next/navigation";
import { HomeJoin, HomeSchedule, HomeStory } from "@/widgets/home";

type Slug = "story" | "schedule" | "join";

export const dynamicParams = false;

export function generateStaticParams(): { slug: Slug }[] {
  return [{ slug: "story" }, { slug: "schedule" }, { slug: "join" }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: Slug }>;
}) {
  const { slug } = await params;

  const Component =
    slug === "story"
      ? HomeStory
      : slug === "schedule"
      ? HomeSchedule
      : slug === "join"
      ? HomeJoin
      : null;

  if (!Component) notFound();

  return (
    <div className="bg-[#F8F6F5] px-[20px] h-full pt-[54px] gap-[40px] flex flex-col">
      <Component />
    </div>
  );
}
