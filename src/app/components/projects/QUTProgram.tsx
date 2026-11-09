"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "../LanguageProvider";

const Img = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
    <Image src={src} alt={alt} fill className="object-contain rounded-lg" />
  </div>
);

const QUTProgram: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="space-y-12">

      {/* プロジェクト概要 */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          {t("プロジェクト概要", "Overview")}
        </h2>
        <div className="max-w-2xl mx-auto mb-6">
          <Img src="/qut-15.jpg" alt={t("工学部海外派遣プログラム 集合写真", "Group photo from the engineering study abroad program")} />
        </div>
        <p className="text-gray-300 leading-relaxed mb-3">
          {t("東京大学工学部の海外派遣プログラムに参加し、一ヶ月強にわたってオーストラリア・ブリスベンのQueensland University of Technology（QUT）に滞在しました。", "I spent just over a month at Queensland University of Technology (QUT) in Brisbane, Australia, through a study abroad program run by the University of Tokyo’s Faculty of Engineering.")}
        </p>
        <p className="text-gray-300 leading-relaxed mb-3">
          {t("このプログラムは、英語で工学を学びながら現地学生と交流することを目的としたものです。授業・課外活動・ボランティアなど、様々な角度からオーストラリアの大学文化を体験しました。", "The program gives students a chance to study engineering in English and get to know local students. Through classes, student activities, and volunteering, I experienced several sides of university life in Australia.")}
        </p>
        <p className="text-gray-300 leading-relaxed">
          {t("海外の大学で異なる教育カリキュラムに触れ、刺激的な一ヶ月でした。", "It was an exciting month of seeing how engineering is taught at a university overseas.")}
        </p>
      </section>

      {/* キャンパスと自然環境 */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          {t("QUTキャンパスと豊かな自然", "The QUT campus and its surroundings")}
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          {t("QUTのキャンパスはブリスベン市内に位置し、壮大な自然に囲まれていて美しい。", "QUT’s campus is in Brisbane, with beautiful natural surroundings.")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <Img src="/qut-1.JPG" alt={t("QUTキャンパス外観", "The QUT campus")} />
            <p className="text-gray-400 text-sm mt-2 text-center">{t("QUTキャンパス外観", "The QUT campus")}</p>
          </div>
          <div>
            <Img src="/qut-2.JPG" alt={t("壮大な自然環境", "Natural scenery around the campus")} />
            <p className="text-gray-400 text-sm mt-2 text-center">{t("壮大な自然に囲まれた美しい環境", "Beautiful scenery around the campus")}</p>
          </div>
        </div>
      </section>

      {/* 授業・学術活動 */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          {t("授業・学術活動", "Classes and academic activities")}
        </h2>

        <div className="space-y-10">

          {/* 現地学生と同じ授業 */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">{t("現地学生と同じ授業を受ける", "Taking classes alongside local students")}</h3>
            <div className="max-w-2xl mx-auto mb-4">
              <Img src="/qut-3.JPG" alt={t("QUTの授業", "A class at QUT")} />
            </div>
            <p className="text-gray-300 leading-relaxed mb-3">
              {t("海外の大学生に混じって、まったく同じ授業を英語で受けました。電磁気学などの理論的な授業では、日本で学んだ内容でも英語という障壁があり、改めて基礎を問い直す機会になりました。", "I attended regular classes in English alongside QUT students. In theoretical subjects such as electromagnetism, the language barrier made even familiar material challenging. It gave me a reason to revisit the basics.")}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t("言語の壁がある中でも、工学の普遍性——数式や図が世界共通であること——を実感しました。", "Even when the language was difficult, equations and diagrams were familiar. They reminded me how much of engineering we share across languages.")}
            </p>
          </div>

          {/* QUT Motorsports Lab */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">{t("QUT Motorsports Lab 訪問", "Visiting the QUT Motorsports Lab")}</h3>
            <div className="max-w-2xl mx-auto mb-4">
              <Img src="/qut-4.JPG" alt="QUT Motorsports Lab" />
            </div>
            <p className="text-gray-300 leading-relaxed mb-3">
              {t("QUT Motorsportsは、学生が主体となってフォーミュラカーを設計・製作・走行させる機械系の課外活動サークルです。エンジン、シャーシ、電装系まですべて学生の手で作り上げており、工学の総合力が問われる活動です。", "QUT Motorsports is a student team that designs, builds, and drives Formula-style race cars. Students work on everything from the engine and chassis to the electrical systems, drawing on a broad range of engineering skills.")}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t("実際にラボを見学し、現役メンバーから設計や製作プロセスについて話を聞きました。", "I toured the lab and spoke with current members about their design and manufacturing process.")}
            </p>
          </div>

          {/* BMW + QUT Design Academy Tour */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">BMW × QUT Design Academy Tour</h3>
            <div className="max-w-2xl mx-auto mb-4">
              <Img src="/qut-5.JPG" alt="BMW QUT Design Academy Tour" />
            </div>
            <p className="text-gray-300 leading-relaxed mb-3">
              {t("BMWとQUTが連携するデザインアカデミーのラボツアーに参加しました。企業と大学が一緒に工学の課題に取り組む現場を直接見ることができました。", "I joined a lab tour of the Design Academy, a collaboration between BMW and QUT. It was a chance to see a company and a university working together on engineering problems.")}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t("現地学生とともに、工学のあり方や産業界との関わりについて議論しました。", "I also talked with local students about the role of engineering and its relationship with industry.")}
            </p>
          </div>

          {/* AI & ML Society */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">{t("AI & ML Society との交流", "Meeting the AI & ML Society")}</h3>
            <div className="max-w-2xl mx-auto mb-4">
              <Img src="/qut-6.png" alt="AI & ML Society" />
            </div>
            <p className="text-gray-300 leading-relaxed mb-3">
              {t("QUTの課外活動サークル「AI & ML Society」のイベントに参加しました。このサークルは、AIや機械学習に興味を持つ情報系学生が集まり、勉強会やハッカソンを通じて実践的なスキルを磨く場です。", "I attended an event run by QUT’s AI & ML Society. The club brings together computing students interested in AI and machine learning, with study sessions and hackathons where they can develop practical skills.")}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t("現地学生と最新のAI技術や機械学習の応用事例について議論する中で、海外の学生が主体的に学んでいる様子を間近で見ることができました。", "Talking with students about recent AI developments and machine learning applications, I saw how much they were learning through their own initiative.")}
            </p>
            <p className="text-gray-400 text-sm mt-3">
              {t("参考：", "Read more:")}
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
            <h3 className="text-xl font-semibold mb-3 text-purple-300">{t("The Precinct — ブリスベンのインキュベーションセンター", "The Precinct: a startup incubator in Brisbane")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {["/qut-12.jpeg", "/qut-13.jpeg"].map((src, i) => (
                <div key={i} className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <Image src={src} alt={`The Precinct ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
            <p className="text-gray-300 leading-relaxed mb-3">
              {t("ブリスベンのVC主導で整備されたインキュベーションセンター「The Precinct」を訪問しました。数十社のベンチャー企業が一つの施設に集結しており、スタートアップのエコシステムが凝縮された空間です。", "I visited The Precinct, an incubator developed under the leadership of venture capital firms in Brisbane. With dozens of startups sharing one facility, it offered a close look at the city’s startup community.")}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t("各社のブースを巡りながら、創業者や現役エンジニアと直接話す機会がありました。工学の知識が実際のプロダクトや事業にどう繋がっているか、その現場を生で見られたことは大きな刺激になりました。", "As I visited the company booths, I had the chance to speak directly with founders and engineers. Seeing how they turned engineering knowledge into products and businesses gave me plenty to think about.")}
            </p>
          </div>

        </div>
      </section>

      {/* 課外活動・気づき */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          {t("海外大学の教育文化から学んだこと", "What I learned from university life abroad")}
        </h2>
        <div className="max-w-2xl mx-auto mb-6">
          <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <Image src="/qut-17.JPG" alt={t("海外大学の教育文化", "University life at QUT")} fill className="object-cover" />
          </div>
        </div>
        <p className="text-gray-300 leading-relaxed mb-4">
          {t("総じて、海外の大学では学科の勉強だけでなく、課外活動に重みが置かれているように感じた。", "My overall impression was that extracurricular activities carried real weight alongside academic study.")}
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          {t("Motorsports Lab、BMW Design Academy、AI & ML Societyなど、どのサークル・課外活動も「実際に手を動かす」ことへのこだわりが強くて、授業で学んだ理論をプロダクトや活動に落とし込む文化が根付いていました。", "The Motorsports Lab, BMW Design Academy, and AI & ML Society all placed a strong emphasis on hands-on work. Putting classroom theory into practice seemed to be a natural part of how students learned.")}
        </p>
        <p className="text-gray-300 leading-relaxed">
          {t("日本の大学教育と比較しながら、「理論と実践のバランス」「課外活動の位置づけ」「自律的な学びのスタイル」について深く考える機会になりました。", "Comparing this with my experience in Japan made me think about the balance between theory and practice, the place of extracurricular activities, and how students take charge of their own learning.")}
        </p>
      </section>

      {/* ボランティア活動 */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          {t("地域ボランティア — 炊き出し活動", "Volunteering at a community meal")}
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          {t("現地の教会で行われた炊き出しボランティアに参加しました。様々な世代の人々が集まり、言葉の壁を超えて人と繋がれることを実感しました。", "I volunteered at a community meal hosted by a local church. People of all ages came together, and I found that a language barrier did not have to get in the way of connecting with them.")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["/qut-7.JPG", "/qut-8.JPG", "/qut-9.JPG"].map((src, i) => (
            <div key={i} className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image src={src} alt={t(`炊き出しボランティア${i + 1}`, `Volunteering at a community meal ${i + 1}`)} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* ホームステイ・交流 */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          {t("ホームステイ・ルームメイトとの交流", "My host family and roommates")}
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          {t("プログラム期間中はホームステイ先で生活し、現地の家族との日常的な交流を通じて、オーストラリアの文化や生活スタイルを知ることができました。また、同じ宿舎のルームメイトとも親しくなり、異なる国の学生の視点を日々吸収しました。", "I stayed with a host family during the program, learning about Australian culture through everyday life with them. I also became close to my roommates, whose perspectives gave me a glimpse of student life in other countries.")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image src="/qut-10.jpg" alt={t("ホストファミリーとの写真", "With my host family")} fill className="object-cover" />
            </div>
            <p className="text-gray-400 text-sm mt-2 text-center">{t("ホストファミリーとの一枚", "With my host family")}</p>
          </div>
          <div>
            <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image src="/qut-11.JPG" alt={t("ルームメイトとの写真", "With my roommates")} fill className="object-cover" />
            </div>
            <p className="text-gray-400 text-sm mt-2 text-center">{t("ルームメイトとの一枚", "With my roommates")}</p>
          </div>
        </div>
      </section>

      {/* 修了・まとめ */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          {t("修了・集合写真", "Completing the program")}
        </h2>

        <div className="space-y-8">

          {/* 卒業証書 */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">{t("修了証書の授与", "Receiving my certificate")}</h3>
            <div className="max-w-2xl mx-auto mb-4">
              <Img src="/qut-14.jpg" alt={t("修了証書授与", "Receiving my certificate of completion")} />
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t("一ヶ月強のプログラムを修了し、修了証書を授与されました。授業・課外活動・ボランティアを通じた充実した日々の証です。", "After just over a month, I completed the program and received my certificate. It marked the end of a busy month of classes, student activities, and volunteering.")}
            </p>
          </div>

          {/* 集合写真 */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">{t("集合写真", "Group photos")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Img src="/qut-15.jpg" alt={t("集合写真1", "Group photo 1")} />
              <Img src="/qut-16.jpg" alt={t("集合写真2", "Group photo 2")} />
            </div>
            <p className="text-gray-400 text-sm mt-2 text-center">{t("東京大学チームのメンバーと", "With the University of Tokyo group")}</p>
          </div>

        </div>
      </section>

      {/* まとめ動画 */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          {t("ブリスベン滞在まとめ動画", "A video of my time in Brisbane")}
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          {t("一ヶ月強のブリスベンでの生活をまとめた動画です。授業・課外活動・観光・人との出会いなど、様々な瞬間が詰まっています。", "This video brings together moments from just over a month in Brisbane: classes, student activities, sightseeing, and the people I met along the way.")}
        </p>
        <div className="w-full rounded-lg overflow-hidden bg-black">
          <video
            controls
            className="w-full"
            style={{ maxHeight: "480px" }}
          >
            <source src="/qut-video.mp4" type="video/mp4" />
            {t("お使いのブラウザは動画再生に対応していません。", "Your browser does not support video playback.")}
          </video>
        </div>
      </section>

      {/* 総括 */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          {t("総括", "Looking back")}
        </h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          {t("異なる文化的バックグラウンドを持つ様々な学生たちと交流できたことが、このプログラムで得た最大の財産です。多様な国の学生との対話は、自分の当たり前を問い直すきっかけをたくさん与えてくれました。", "The most valuable part of the program was getting to know students from different cultural backgrounds. Our conversations often made me question things I had taken for granted.")}
        </p>
        <p className="text-gray-300 leading-relaxed mb-3">
          {t("海外の大学では、異なる教育カリキュラムのもとで、理論と実践が結びついた学びが展開されていました。その刺激は帰国後の自分の学び方にも影響を与えています。", "At QUT, I saw a different curriculum that brought theory and practice together. That experience has continued to shape the way I study since returning to Japan.")}
        </p>
        <p className="text-gray-300 leading-relaxed">
          {t("工学を学ぶ意味、課外活動の重要性、そして応用力の価値——一ヶ月強という短い期間ながら、これらについて深く考えた経験でした。", "Although the program lasted only a little over a month, it made me think hard about why I study engineering, what I can learn outside class, and how to put that knowledge to use.")}
        </p>
      </section>

    </div>
  );
};

export default QUTProgram;
