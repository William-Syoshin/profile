import React from "react";
import Image from "next/image";

const AIMovie: React.FC = () => {
  return (
    <div className="space-y-8">
      <section>
        <div className="mt-6">
          <a
            href="https://youtu.be/BbGHZ0w3r4E"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative h-96 w-full rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
          >
            <Image
              src="/project3-8.jpg"
              alt="動画サムネイル"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black bg-opacity-50 rounded-full p-4">
                <svg
                  className="w-16 h-16 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </section>
      <section>
        <h1 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          WaytoAGI コンペティション参加
        </h1>
        <p className="text-gray-300 leading-relaxed mb-4">
          先日東京で開催された中国のAIコンペティションである、WaytoAGIにて、神思远監督のプロジェクトに参加させていただきました！
        </p>

        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          神思远監督について
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          1983年生まれ、北京在住の現代アーティスト。ファッションフォトグラファーとしてのキャリアを経て、2016年より独立アーティストとして活動を本格化。写真、映像、グラフィックデザイン、テキストを横断しながら、「日常の感情」を視覚的に記録・再構築する独自のスタイルを確立する。
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          代表作に、花をモチーフに感情の揺らぎと個人的記憶を綴った写真集《卑鄙的花》（2020）、映像インスタレーションと立体物を組み合わせた個展《荒糖》（2020）など。
        </p>
        <div className="flex gap-4 mt-6">
          <a
            href="https://www.instagram.com/whoosee?igsh=cml6Yms4Z3V2MXo4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 py-2 rounded-full font-semibold transition-colors"
          >
            Instagram
          </a>
        </div>
      </section>

      <section>
        <h1 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          AIが創り出す、写真からの物語
        </h1>
        <div className="relative h-96 w-full rounded-lg overflow-hidden">
          <Image
            src="/project3-1.jpg"
            alt="プロジェクト画像"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-gray-300 leading-relaxed mb-4">
          この度、神思远グループはすべてAIを用いて全て写真から生成した短編映画を制作しました。この試みは、単なる技術デモンストレーションに留まらず、AIが持つクリエイティブな可能性を追求したものです。
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          制作の舞台裏
        </h2>
        <div className="relative h-96 w-full rounded-lg overflow-hidden">
          <Image
            src="/project3-2.jpg"
            alt="プロジェクト画像"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-gray-300 leading-relaxed">
          また、私自身のLoRA（Low-Rank
          Adaptation）を制作しました。LoRAとは自身のモデルのことです。このモデルを使用することで、実際に行なっていない動作も生成することができます。
        </p>
        <div className="relative h-96 w-full rounded-lg overflow-hidden">
          <Image
            src="/project3-3.jpg"
            alt="プロジェクト画像"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-gray-300 leading-relaxed mt-4">
          本作品は、一枚一枚の写真からAIが生成した画像を繋ぎ合わせることで制作されました。使用したのは、画像生成AIのComfyUIです。写真からAIが風景やオブジェクトを学習し、新たな画像を創り出すことで、現実と非現実が融合した独自の映像世界が生まれました。
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          スチル
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className="relative h-96 w-full rounded-lg overflow-hidden">
            <Image
              src="/project3-4.jpg"
              alt="プロジェクト画像"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative h-96 w-full rounded-lg overflow-hidden">
            <Image
              src="/project3-5.jpg"
              alt="プロジェクト画像"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative h-96 w-full rounded-lg overflow-hidden">
            <Image
              src="/project3-6.jpg"
              alt="プロジェクト画像"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative h-96 w-full rounded-lg overflow-hidden">
            <Image
              src="/project3-7.jpg"
              alt="プロジェクト画像"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIMovie;
