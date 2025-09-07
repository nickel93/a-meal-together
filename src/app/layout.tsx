import type { Metadata } from "next";
import { SessionProvider } from "@/widgets/provider";
import ReactQueryProvider from "@/widgets/provider/ReactQueryProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "가치 한상",
  description: "dinning together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>

      <body>
        <div className="min-w-[375px] max-w-[375px] h-screen bg-white flex flex-col justify-start items-center mx-auto px-[20px]">
          <SessionProvider>
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </SessionProvider>
        </div>
      </body>
    </html>
  );
}
