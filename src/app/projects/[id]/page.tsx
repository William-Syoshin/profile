import Link from "next/link";
import { projects } from "../../data/projects";
import NeonBackground from "../../components/NeonBackground";
import { Metadata } from "next";

// このファイル内でのみ使用するため、`export` は不要です
type Props = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

// メタデータ生成は非同期の可能性があるため `async` のまま
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return {
      title: "プロジェクトが見つかりません | 周宇辰のポートフォリオ",
    };
  }

  return {
    title: `${project.title} | 周宇辰のポートフォリオ`,
    description: project.description, // descriptionも追加するとSEOに効果的です
  };
}

// (推奨) ビルド時に静的なパスを生成します
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// ページコンポーネントの async を削除
export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);

  // プロジェクトが見つからない場合の表示 (早期リターン)
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
        <div className="prose prose-invert max-w-none">
          {/* h1やpなどのタグはProjectComponent内で定義されている想定です。
              もしそうでない場合は、ここでスタイルを適用します。
            */}
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <ProjectComponent />
        </div>
      </div>
    </div>
  );
}
