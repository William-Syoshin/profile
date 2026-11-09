"use client";

import React from "react";
import { useLanguage } from "../LanguageProvider";

const PreparingProject: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="space-y-8">
      <section>
        <p className="text-gray-300 leading-relaxed">
          {t("現在、新しいプロジェクトを準備中です。", "I’m working on a new project. More details soon.")}
        </p>
      </section>
    </div>
  );
};

export default PreparingProject;
