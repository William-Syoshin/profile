"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getProjects } from "../data/projects";
import { useLanguage } from "./LanguageProvider";

export default function LocalizedMetadata() {
  const pathname = usePathname();
  const { language, t } = useLanguage();

  useEffect(() => {
    const siteTitle = t("周宇辰のポートフォリオ", "Shu Ushin | Portfolio");
    let title = siteTitle;
    let description = t(
      "周宇辰の自己紹介、経歴、制作したプロジェクトを紹介するポートフォリオです。",
      "Shu Ushin’s portfolio: a little about me, my background, and my projects."
    );
    if (pathname.startsWith("/projects/")) {
      const project = getProjects(language).find(item => item.link === pathname);
      title = `${project?.title ?? t("プロジェクトが見つかりません", "Project Not Found")} | ${siteTitle}`;
      if (project) description = project.description;
    } else if (pathname === "/contact") {
      title = `${t("お問い合わせ", "Contact")} | ${siteTitle}`;
    } else if (pathname === "/minigame") {
      title = `${t("ミニゲーム", "Minigame")} | ${siteTitle}`;
    }
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [language, pathname, t]);

  return null;
}
