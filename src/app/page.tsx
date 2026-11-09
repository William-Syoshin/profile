"use client";

import Image from "next/image";
import NeonBackground from "./components/NeonBackground";
import ProjectGrid from "./components/ProjectGrid";
import { getProjects } from "./data/projects";
import { useLanguage } from "./components/LanguageProvider";

export default function Home() {
  const { t, language } = useLanguage();
  const projects = getProjects(language);
  return (
    <div className="min-h-screen text-white relative">
      <NeonBackground />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* プロフィール画像セクション */}
          <div className="flex flex-col items-center mb-12">
            <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              <Image
                src="/profile.jpg"
                alt={t("プロフィール写真", "Portrait of Shu Ushin")}
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {t("周　宇辰", "Shu Ushin")}
            </h1>
            {language === "ja" && (
              <p className="text-base font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Shu Ushin
              </p>
            )}
            <p className="text-gray-300">{t("東京大学工学部精密工学科B4", "Fourth-year Precision Engineering student at the University of Tokyo")}</p>
          </div>

          {/* 経歴セクション */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {t("経歴", "Education")}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-purple-500/30">
                    <th className="py-3 px-4 text-left text-purple-300">
                      {t("期間", "Date")}
                    </th>
                    <th className="py-3 px-4 text-left text-purple-300">
                      {t("内容", "Milestone")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-purple-500/20 hover:bg-purple-500/10 transition-colors">
                    <td className="py-3 px-4">{t("2023/4", "April 2023")}</td>
                    <td className="py-3 px-4">{t("東京大学理科二類入学", "Enrolled in the Natural Sciences II stream at the University of Tokyo.")}</td>
                  </tr>
                  <tr className="border-b border-purple-500/20 hover:bg-purple-500/10 transition-colors">
                    <td className="py-3 px-4">{t("2024/9", "September 2024")}</td>
                    <td className="py-3 px-4">{t("東京大学工学部精密工学科進学", "Began studying Precision Engineering in the University of Tokyo’s Faculty of Engineering.")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 自己紹介セクション */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t("趣味：ギター、日本語ラップ", "I’m into guitar and Japanese hip-hop.")}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t("興味分野：プログラミング、制御工学、電子工作", "I’m interested in programming, control engineering, and building electronics.")}
            </p>
          </div>

          {/* プロジェクトセクション */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Projects
            </h2>
            <ProjectGrid projects={projects} />
          </div>
        </div>
      </main>
    </div>
  );
}
