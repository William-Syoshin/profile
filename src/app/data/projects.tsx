import React, { ComponentType } from "react";
import RobotSoccer from "../components/projects/RobotSoccer";
import AIMovie from "../components/projects/AIMovie";
import Hyperchill from "../components/projects/Hyperchill";
import QUTProgram from "../components/projects/QUTProgram";

const PreparingProject: ComponentType = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          準備中
        </h2>
        <p className="text-gray-300 leading-relaxed">
          現在、新しいプロジェクトを準備中です。
        </p>
      </section>
    </div>
  );
};

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  technologies: string[];
  component: ComponentType;
}

export const projects: Project[] = [
  {
    id: "project1",
    title: "ロボットサッカー",
    description: "五月祭でロボットサッカーに挑戦しました！",
    thumbnail: "/project1-1.jpg",
    link: "/projects/project1",
    technologies: ["電子工作", "五月祭"],
    component: RobotSoccer,
  },
  {
    id: "project3",
    title: "清澄白河",
    description: "AIを活用したムービープロジェクト",
    thumbnail: "/project3.jpg",
    link: "/projects/project3",
    technologies: ["AI", "映像処理"],
    component: AIMovie,
  },
  {
    id: "hyperchill",
    title: "吉祥寺文化祭",
    description: "吉祥寺文化祭プロジェクト",
    thumbnail: "/project4-title.JPG",
    link: "/projects/hyperchill",
    technologies: ["イベント主催", "システム開発"],
    component: Hyperchill,
  },
  {
    id: "qut",
    title: "工学部海外派遣プログラム",
    description: "オーストラリア・QUTで一ヶ月強、英語で工学を学び現地学生と交流",
    thumbnail: "/qut-15.jpg",
    link: "/projects/qut",
    technologies: ["海外留学", "工学", "QUT", "オーストラリア"],
    component: QUTProgram,
  },
  {
    id: "project2",
    title: "準備中",
    description: "準備中",
    thumbnail: "/project2.jpg",
    link: "/projects/project2",
    technologies: [],
    component: PreparingProject,
  },
];
