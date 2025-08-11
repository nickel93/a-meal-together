import { HomeFooter, HomeMain } from "@/widgets/login";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col items-center justify-between text-center">
      <HomeMain />
      <HomeFooter />
    </main>
  );
}
