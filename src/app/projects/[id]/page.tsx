import Link from "next/link";
import { projects } from "../../data/projects";
import NeonBackground from "../../components/NeonBackground";
import { Metadata } from "next";

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

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen text-white relative">
        <NeonBackground />
        <div className="max-w-4xl mx-auto relative z-10 p-8 pt-24">
          <Link
            href="/"
            className="text-purple-400 hover:text-purple-300 mb-8 inline-block text-xl font-semibold hover:scale-105 transition-transform"
          >
            ← ホームに戻る
          </Link>
          <h1 className="text-3xl font-bold mb-4">
            プロジェクトが見つかりません
          </h1>
          <p>
            指定されたプロジェクトは存在しないか、削除された可能性があります。
          </p>
        </div>
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
