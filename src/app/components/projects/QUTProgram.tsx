import React from "react";
import Image from "next/image";

const Img = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
    <Image src={src} alt={alt} fill className="object-contain rounded-lg" />
  </div>
);

const QUTProgram: React.FC = () => {
  return (
    <div className="space-y-12">

      {/* プロジェクト概要 */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          プロジェクト概要
        </h2>
        <div className="max-w-2xl mx-auto mb-6">
          <Img src="/qut-15.jpg" alt="工学部海外派遣プログラム 集合写真" />
        </div>
        <p className="text-gray-300 leading-relaxed mb-3">
          東京大学工学部の海外派遣プログラムに参加し、一ヶ月強にわたってオーストラリア・ブリスベンのQueensland University of Technology（QUT）に滞在しました。
        </p>
        <p className="text-gray-300 leading-relaxed mb-3">
          このプログラムは、英語で工学を学びながら現地学生と交流することを目的としたものです。授業・課外活動・ボランティアなど、様々な角度からオーストラリアの大学文化を体験しました。
        </p>
        <p className="text-gray-300 leading-relaxed">
          海外の大学で異なる教育カリキュラムに触れ、刺激的な一ヶ月でした。
        </p>
      </section>

      {/* キャンパスと自然環境 */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          QUTキャンパスと豊かな自然
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          QUTのキャンパスはブリスベン市内に位置し、壮大な自然に囲まれていて美しい。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <Img src="/qut-1.JPG" alt="QUTキャンパス外観" />
            <p className="text-gray-400 text-sm mt-2 text-center">QUTキャンパス外観</p>
          </div>
          <div>
            <Img src="/qut-2.JPG" alt="壮大な自然環境" />
            <p className="text-gray-400 text-sm mt-2 text-center">壮大な自然に囲まれた美しい環境</p>
          </div>
        </div>
      </section>

      {/* 授業・学術活動 */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          授業・学術活動
        </h2>

        <div className="space-y-10">

          {/* 現地学生と同じ授業 */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">現地学生と同じ授業を受ける</h3>
            <div className="max-w-2xl mx-auto mb-4">
              <Img src="/qut-3.JPG" alt="QUTの授業" />
            </div>
            <p className="text-gray-300 leading-relaxed mb-3">
              海外の大学生に混じって、まったく同じ授業を英語で受けました。電磁気学などの理論的な授業では、日本で学んだ内容でも英語という障壁があり、改めて基礎を問い直す機会になりました。
            </p>
            <p className="text-gray-300 leading-relaxed">
              言語の壁がある中でも、工学の普遍性——数式や図が世界共通であること——を実感しました。
            </p>
          </div>

          {/* QUT Motorsports Lab */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">QUT Motorsports Lab 訪問</h3>
            <div className="max-w-2xl mx-auto mb-4">
              <Img src="/qut-4.JPG" alt="QUT Motorsports Lab" />
            </div>
            <p className="text-gray-300 leading-relaxed mb-3">
              QUT Motorsportsは、学生が主体となってフォーミュラカーを設計・製作・走行させる機械系の課外活動サークルです。エンジン、シャーシ、電装系まですべて学生の手で作り上げており、工学の総合力が問われる活動です。
            </p>
            <p className="text-gray-300 leading-relaxed">
              実際にラボを見学し、現役メンバーから設計や製作プロセスについて話を聞きました。
            </p>
          </div>

          {/* BMW + QUT Design Academy Tour */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">BMW × QUT Design Academy Tour</h3>
            <div className="max-w-2xl mx-auto mb-4">
              <Img src="/qut-5.JPG" alt="BMW QUT Design Academy Tour" />
            </div>
            <p className="text-gray-300 leading-relaxed mb-3">
              BMWとQUTが連携するデザインアカデミーのラボツアーに参加しました。企業と大学が一緒に工学の課題に取り組む現場を直接見ることができました。
            </p>
            <p className="text-gray-300 leading-relaxed">
              現地学生とともに、工学のあり方や産業界との関わりについて議論しました。
            </p>
          </div>

          {/* AI & ML Society */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">AI & ML Society との交流</h3>
            <div className="max-w-2xl mx-auto mb-4">
              <Img src="/qut-6.png" alt="AI & ML Society" />
            </div>
            <p className="text-gray-300 leading-relaxed mb-3">
              QUTの課外活動サークル「AI & ML Society」のイベントに参加しました。このサークルは、AIや機械学習に興味を持つ情報系学生が集まり、勉強会やハッカソンを通じて実践的なスキルを磨く場です。
            </p>
            <p className="text-gray-300 leading-relaxed">
              現地学生と最新のAI技術や機械学習の応用事例について議論する中で、海外の学生が主体的に学んでいる様子を間近で見ることができました。
            </p>
            <p className="text-gray-400 text-sm mt-3">
              参考：
              <a
                href="https://www.qut.edu.au/about/faculty-of-science/insights/club-spotlight-ai-and-ml-society"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline ml-1"
              >
                QUT AI & ML Society Club Spotlight
              </a>
            </p>
          </div>

          {/* The Precinct */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">The Precinct — ブリスベンのインキュベーションセンター</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {["/qut-12.jpeg", "/qut-13.jpeg"].map((src, i) => (
                <div key={i} className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <Image src={src} alt={`The Precinct ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
            <p className="text-gray-300 leading-relaxed mb-3">
              ブリスベンのVC主導で整備されたインキュベーションセンター「The Precinct」を訪問しました。数十社のベンチャー企業が一つの施設に集結しており、スタートアップのエコシステムが凝縮された空間です。
            </p>
            <p className="text-gray-300 leading-relaxed">
              各社のブースを巡りながら、創業者や現役エンジニアと直接話す機会がありました。工学の知識が実際のプロダクトや事業にどう繋がっているか、その現場を生で見られたことは大きな刺激になりました。
            </p>
          </div>

        </div>
      </section>

      {/* 課外活動・気づき */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          海外大学の教育文化から学んだこと
        </h2>
        <div className="max-w-2xl mx-auto mb-6">
          <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <Image src="/qut-17.JPG" alt="海外大学の教育文化" fill className="object-cover" />
          </div>
        </div>
        <p className="text-gray-300 leading-relaxed mb-4">
          総じて、海外の大学では学科の勉強だけでなく、課外活動に重みが置かれているように感じた。
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          Motorsports Lab、BMW Design Academy、AI & ML Societyなど、どのサークル・課外活動も「実際に手を動かす」ことへのこだわりが強くて、授業で学んだ理論をプロダクトや活動に落とし込む文化が根付いていました。
        </p>
        <p className="text-gray-300 leading-relaxed">
          日本の大学教育と比較しながら、「理論と実践のバランス」「課外活動の位置づけ」「自律的な学びのスタイル」について深く考える機会になりました。
        </p>
      </section>

      {/* ボランティア活動 */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          地域ボランティア — 炊き出し活動
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          現地の教会で行われた炊き出しボランティアに参加しました。様々な世代の人々が集まり、言葉の壁を超えて人と繋がれることを実感しました。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["/qut-7.JPG", "/qut-8.JPG", "/qut-9.JPG"].map((src, i) => (
            <div key={i} className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image src={src} alt={`炊き出しボランティア${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* ホームステイ・交流 */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          ホームステイ・ルームメイトとの交流
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          プログラム期間中はホームステイ先で生活し、現地の家族との日常的な交流を通じて、オーストラリアの文化や生活スタイルを知ることができました。また、同じ宿舎のルームメイトとも親しくなり、異なる国の学生の視点を日々吸収しました。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image src="/qut-10.jpg" alt="ホストファミリーとの写真" fill className="object-cover" />
            </div>
            <p className="text-gray-400 text-sm mt-2 text-center">ホストファミリーとの一枚</p>
          </div>
          <div>
            <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image src="/qut-11.JPG" alt="ルームメイトとの写真" fill className="object-cover" />
            </div>
            <p className="text-gray-400 text-sm mt-2 text-center">ルームメイトとの一枚</p>
          </div>
        </div>
      </section>

      {/* 修了・まとめ */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          修了・集合写真
        </h2>

        <div className="space-y-8">

          {/* 卒業証書 */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">修了証書の授与</h3>
            <div className="max-w-2xl mx-auto mb-4">
              <Img src="/qut-14.jpg" alt="修了証書授与" />
            </div>
            <p className="text-gray-300 leading-relaxed">
              一ヶ月強のプログラムを修了し、修了証書を授与されました。授業・課外活動・ボランティアを通じた充実した日々の証です。
            </p>
          </div>

          {/* 集合写真 */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">集合写真</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Img src="/qut-15.jpg" alt="集合写真1" />
              <Img src="/qut-16.jpg" alt="集合写真2" />
            </div>
            <p className="text-gray-400 text-sm mt-2 text-center">東京大学チームのメンバーと</p>
          </div>

        </div>
      </section>

      {/* まとめ動画 */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          ブリスベン滞在まとめ動画
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          一ヶ月強のブリスベンでの生活をまとめた動画です。授業・課外活動・観光・人との出会いなど、様々な瞬間が詰まっています。
        </p>
        <div className="w-full rounded-lg overflow-hidden bg-black">
          <video
            controls
            className="w-full"
            style={{ maxHeight: "480px" }}
          >
            <source src="/qut-video.mp4" type="video/mp4" />
            お使いのブラウザは動画再生に対応していません。
          </video>
        </div>
      </section>

      {/* 総括 */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          総括
        </h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          異なる文化的バックグラウンドを持つ様々な学生たちと交流できたことが、このプログラムで得た最大の財産です。多様な国の学生との対話は、自分の当たり前を問い直すきっかけをたくさん与えてくれました。
        </p>
        <p className="text-gray-300 leading-relaxed mb-3">
          海外の大学では、異なる教育カリキュラムのもとで、理論と実践が結びついた学びが展開されていました。その刺激は帰国後の自分の学び方にも影響を与えています。
        </p>
        <p className="text-gray-300 leading-relaxed">
          工学を学ぶ意味、課外活動の重要性、そして応用力の価値——一ヶ月強という短い期間ながら、これらについて深く考えた経験でした。
        </p>
      </section>

    </div>
  );
};

export default QUTProgram;
