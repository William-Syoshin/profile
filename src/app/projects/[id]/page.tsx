import { projects } from "../../data/projects";
import ProjectDetail from "../../components/ProjectDetail";
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

export default function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  return <ProjectDetail id={params.id} />;
}
