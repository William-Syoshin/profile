"use client";

import Link from "next/link";
import { getProjects } from "../data/projects";
import NeonBackground from "./NeonBackground";
import { useLanguage } from "./LanguageProvider";

export default function ProjectDetail({ id }: { id: string }) {
  const { language, t } = useLanguage();
  const project = getProjects(language).find(item => item.id === id);

  if (!project) {
    return (
      <div className="min-h-screen text-white relative">
        <NeonBackground />
        <main className="max-w-4xl mx-auto relative z-10 p-8 pt-24">
          <Link href="/" className="text-purple-400 hover:text-purple-300 mb-8 inline-block text-xl font-semibold hover:scale-105 transition-transform">
            {t("← ホームに戻る", "← Back home")}
          </Link>
          <h1 className="text-3xl font-bold mb-4">
            {t("プロジェクトが見つかりません", "Project Not Found")}
          </h1>
          <p>{t(
            "指定されたプロジェクトは存在しないか、削除された可能性があります。",
            "This project doesn’t exist or may have been removed."
          )}</p>
        </main>
      </div>
    );
  }

  const ProjectComponent = project.component;
  return (
    <div className="min-h-screen text-white relative">
      <NeonBackground />
      <main className="max-w-4xl mx-auto relative z-10 p-8 pt-24">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <ProjectComponent />
      </main>
    </div>
  );
}
