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
            className="block relative h-64 w-full rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
          >
            <Image
              src="/project3-8-.jpg"
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
          WaytoAGI グローバルAIカンファレンス 2025 参加
        </h1>

        <h2 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          WaytoAGI とは
        </h2>
        <div className="relative h-80 w-full rounded-lg overflow-hidden mb-4">
          <Image
            src="/project2-agi.jpg"
            alt="WaytoAGI 2周年記念イベント"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-gray-300 leading-relaxed mb-4">
          WaytoAGIは中国最大の生成AIコミュニティです。AIファンや研究者、クリエイターが一堂に会する場として成長を続け、2周年を迎えた節目に初の国際イベントを東京で開催しました。
        </p>

        <h2 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          当日の様子
        </h2>
        <div className="relative h-80 w-full rounded-lg overflow-hidden mb-4">
          <Image
            src="/project2-agi1.jpg"
            alt="WaytoAGI カンファレンス 広告"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative h-80 w-full rounded-lg overflow-hidden mb-4">
          <Image
            src="/project2-agi2.jpg"
            alt="桜美林大学 新宿キャンパス"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-gray-300 leading-relaxed mb-4">
          2025年6月7〜8日、桜美林大学新宿キャンパス 創新館を貸し切って開催。新宿から徒歩圏内の大久保・百人町という国際色豊かなエリアにあるこのキャンパスに、AI研究者・映像ディレクター・スタートアップなど世界各地から多数の登壇者と参加者が集結しました。
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          セッションは主に中国語・英語で進行し、複数の教室に大型LEDウォールが設置されるなど、中国のカンファレンスならではの圧倒的なスケールで展開。Snoop DoggのMV監督を務めたYves Dalviez氏やComfyUI専門家など、AI×クリエイティブの最前線を担う登壇者による講演が行われました。
        </p>
        <div className="relative h-80 w-full rounded-lg overflow-hidden mb-4">
          <Image
            src="/project2-agi3.jpg"
            alt="WaytoAGI 協賛会社一覧"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-gray-300 leading-relaxed mb-4">
          多数の企業が協賛し、1Fロビーにはスポンサーバナーや出展ブースが立ち並びました。
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          そのような場に、私たちはAIによる映像制作という形で参加しました。北京を拠点に活動するアーティスト・神思远監督のプロジェクトに加わり、AIを用いて写真から映像を生成するという手法で、この国際カンファレンスに作品を送り出しました。
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
          全映像を「写真」だけから創る
        </h1>
        <div className="relative h-96 w-full rounded-lg overflow-hidden">
          <Image
            src="/project3-1-.jpg"
            alt="プロジェクト画像"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-gray-300 leading-relaxed mb-4 mt-4">
          本作品の最大の特徴は、<strong className="text-white">映像の一コマも動画素材を使用していない</strong>という点です。作中に登場する全ての映像は、静止画（写真）のみを出発点として生成されています。
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          神思远監督が撮影した写真をAIに学習させ、そこから動きのある映像フレームを生成。それらを繋ぎ合わせることで、まるで実際に撮影したかのような映像体験を作り出しています。写真から映像へ——この変換プロセス全体をAIが担っている点が、本作の核心にあります。
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          制作の舞台裏
        </h2>
        <div className="relative h-96 w-full rounded-lg overflow-hidden">
          <Image
            src="/project3-2-.jpg"
            alt="プロジェクト画像"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-gray-300 leading-relaxed mt-4 mb-4">
          映像生成ツールには<strong className="text-white">ComfyUI</strong>を使用しました。写真からAIが風景・人物・オブジェクトを学習し、新たな画像フレームを次々と生成。現実と非現実が融合した独自の映像世界が、一枚の写真から広がっていきます。
        </p>
        <div className="relative h-96 w-full rounded-lg overflow-hidden">
          <Image
            src="/project3-3-.jpg"
            alt="プロジェクト画像"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-gray-300 leading-relaxed mt-4">
          さらに、私自身の<strong className="text-white">LoRA（Low-Rank Adaptation）モデル</strong>を独自に制作しました。自分の姿や動きを学習させたこのパーソナルモデルにより、実際には行っていない動作や場所にいる映像も、写真ベースでリアルに生成することが可能になっています。
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          スチル
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project3-4-.jpg"
              alt="プロジェクト画像"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project3-5-.jpg"
              alt="プロジェクト画像"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project3-6-.jpg"
              alt="プロジェクト画像"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project3-7-.jpg"
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
