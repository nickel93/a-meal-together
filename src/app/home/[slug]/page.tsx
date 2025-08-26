import { notFound } from "next/navigation";
import {
  Charging,
  HomeHeader,
  HomeJoin,
  HomeSchedule,
  HomeStory,
} from "@/widgets/home";
import { HeaderIcon } from "@/icon";

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

  console.log("slug", slug);

  const Component =
    slug === "story"
      ? HomeStory
      : slug === "schedule"
      ? HomeSchedule
      : slug === "join"
      ? HomeJoin
      : slug === "charging"
      ? Charging
      : null;

  if (!Component) notFound();

  return (
    <div className="gap-[40px] flex flex-col h-full">
      {(slug === "join" || slug === "story") && (
        <HomeHeader>
          <HeaderIcon />
        </HomeHeader>
      )}
      <Component />
    </div>
  );
}
