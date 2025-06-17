import Image from "next/image";
import NeonBackground from "./components/NeonBackground";
import ProjectGrid from "./components/ProjectGrid";
import { projects } from "./data/projects";

export default function Home() {
  return (
    <div className="min-h-screen text-white relative">
      <NeonBackground />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* プロフィール画像セクション */}
          <div className="flex flex-col items-center mb-12">
            <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              <Image
                src="/profile.jpg"
                alt="プロフィール写真"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              周　宇辰
            </h1>
            <h1 className="text-1xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Shu Ushin
            </h1>
            <p className="text-gray-300">東京大学工学部精密工学科B3</p>
          </div>

          {/* 経歴セクション */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              経歴
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-purple-500/30">
                    <th className="py-3 px-4 text-left text-purple-300">
                      期間
                    </th>
                    <th className="py-3 px-4 text-left text-purple-300">
                      内容
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-purple-500/20 hover:bg-purple-500/10 transition-colors">
                    <td className="py-3 px-4">2023/4</td>
                    <td className="py-3 px-4">東京大学理科二類入学</td>
                  </tr>
                  <tr className="border-b border-purple-500/20 hover:bg-purple-500/10 transition-colors">
                    <td className="py-3 px-4">2024/9</td>
                    <td className="py-3 px-4">東京大学工学部精密工学科進学</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 自己紹介セクション */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed">
              趣味：ギター、日本語ラップ
            </p>
            <p className="text-gray-300 leading-relaxed">
              興味分野：プログラミング、制御工学、電子工作
            </p>
          </div>

          {/* プロジェクトセクション */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Projects
            </h2>
            <ProjectGrid projects={projects} />
          </div>

          {/* SNSリンクセクション */}
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/l_ysergi?igsh=MWdyYmJwNXYwbWxxMQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_20px_rgba(168,85,247,0.7)]"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
