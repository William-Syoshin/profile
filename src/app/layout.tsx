import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans"; // ← この行を追加
import { GeistMono } from "geist/font/mono"; // ← この行を追加
import "./globals.css";
import Header from "./components/Header";
import { LanguageProvider } from "./components/LanguageProvider";
import LocalizedMetadata from "./components/LocalizedMetadata";

export const metadata: Metadata = {
  title: "周宇辰のポートフォリオ", // あなたのサイトのタイトルに合わせてください
  description: "周宇辰の自己紹介、経歴、制作したプロジェクトを紹介するポートフォリオです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${GeistSans.variable} ${GeistMono.variable}`} // ← classNameをこのように変更
    >
      <body>
        <LanguageProvider>
          <LocalizedMetadata />
          <Header />
          <div className="pt-28 sm:pt-20">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
