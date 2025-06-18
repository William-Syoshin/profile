import Link from "next/link";
import { projects } from "../../data/projects";
import NeonBackground from "../../components/NeonBackground";
import { Metadata } from "next";

// メタデータ生成関数：引数に直接型を定義
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return {
      title: "プロジェクトが見つかりません | 周宇辰のポートフォリオ",
    };
  }

  return {
    title: `${project.title} | 周宇辰のポートフォリオ`,
    description: project.description,
  };
}

// 静的パス生成関数
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// ページコンポーネント：引数に直接型を定義
export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen text-white relative">
        <NeonBackground />
        <div className="max-w-4xl mx-auto relative z-10 p-8">
          <Link
            href="/"
            className="text-purple-400 hover:text-purple-300 mb-8 inline-block text-xl font-semibold hover:scale-105 transition-transform"
          >
            ← Back
          </Link>
          <h1 className="text-3xl font-bold mb-4">
            プロジェクトが見つかりません
          </h1>
        </div>
      </div>
    );
  }

  const ProjectComponent = project.component;

  return (
    <div className="min-h-screen text-white relative">
      <NeonBackground />
      <div className="max-w-4xl mx-auto relative z-10 p-8">
        <Link
          href="/"
          className="text-purple-400 hover:text-purple-300 mb-8 inline-block text-xl font-semibold hover:scale-105 transition-transform"
        >
          ← Back
        </Link>
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <ProjectComponent />
      </div>
    </div>
  );
}
