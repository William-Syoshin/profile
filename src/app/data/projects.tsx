import type { ComponentType } from "react";
import type { Language } from "../components/LanguageProvider";
import PreparingProject from "../components/projects/PreparingProject";
import RobotSoccer from "../components/projects/RobotSoccer";
import AIMovie from "../components/projects/AIMovie";
import Hyperchill from "../components/projects/Hyperchill";
import QUTProgram from "../components/projects/QUTProgram";
import KisekaeCamera from "../components/projects/KisekaeCamera";

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
    description: "百人規模のイベントを主催しました！",
    thumbnail: "/project4-title.JPG",
    link: "/projects/hyperchill",
    technologies: ["イベント主催", "システム開発"],
    component: Hyperchill,
  },
  {
    id: "qut",
    title: "工学部海外派遣プログラム",
    description: "オーストラリアのQUTで海外留学",
    thumbnail: "/qut-15.jpg",
    link: "/projects/qut",
    technologies: ["海外留学"],
    component: QUTProgram,
  },
  {
    id: "kisekae",
    title: "AI着せ替えカメラ",
    description: "五月祭でAI着せ替えカメラに挑戦しました！",
    thumbnail: "/kisekae-thumbnail.jpg",
    link: "/projects/kisekae",
    technologies: ["AI", "五月祭", "コンピュータビジョン"],
    component: KisekaeCamera,
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


const englishProjects: Record<string, Pick<Project, "title" | "description" | "technologies">> = {
  project1: {
    title: "Robot Soccer",
    description: "I helped build a robot soccer exhibit for the University of Tokyo’s May Festival.",
    technologies: ["Electronics", "May Festival"],
  },
  project3: {
    title: "Kiyosumi-Shirakawa",
    description: "A film made with AI.",
    technologies: ["AI", "Video processing"],
  },
  hyperchill: {
    title: "Kichijoji Culture Festival",
    description: "I organized an event for around 100 people.",
    technologies: ["Event organizing", "Software development"],
  },
  qut: {
    title: "Engineering Study Abroad Program",
    description: "I studied at Queensland University of Technology in Australia.",
    technologies: ["Study abroad"],
  },
  kisekae: {
    title: "AI Virtual Try-On Camera",
    description: "I worked on an AI virtual try-on camera for the May Festival.",
    technologies: ["AI", "May Festival", "Computer vision"],
  },
  project2: {
    title: "Coming Soon",
    description: "Details coming soon.",
    technologies: [],
  },
};

export function getProjects(language: Language): Project[] {
  return language === "ja" ? projects : projects.map(project => ({
    ...project,
    ...englishProjects[project.id],
  }));
}
