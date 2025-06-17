import React, { ComponentType } from "react";
import RobotSoccer from "../components/projects/RobotSoccer";

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
    thumbnail: "/project1.jpg",
    link: "/projects/project1",
    technologies: ["電子工作", "五月祭"],
    component: RobotSoccer,
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
