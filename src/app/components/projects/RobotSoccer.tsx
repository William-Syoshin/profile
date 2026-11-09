"use client";

import Image from "next/image";
import { useLanguage } from "../LanguageProvider";

const RobotSoccer = () => {
  const { t } = useLanguage();
  return (
    <div className="space-y-12">

      {/* プロジェクト概要 */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          {t("プロジェクト概要", "Overview")}
        </h2>
        <div className="relative h-72 w-full rounded-lg overflow-hidden mb-6">
          <Image
            src="/project1-first.JPG"
            alt={t("ロボットサッカー", "Robot soccer")}
            fill
            className="object-contain"
          />
        </div>
        <p className="text-gray-300 leading-relaxed mb-3">
          {t("東京大学の学科企画「五月祭」で、手をかざすだけでロボットを操作できるロボットサッカー展示を作りました。", "For our department’s exhibit at the University of Tokyo’s May Festival (Gogatsusai), we built a robot soccer game that visitors could control with hand gestures.")}
        </p>
        <p className="text-gray-300 leading-relaxed mb-3">
          {t("TouchDesignerというビジュアルプログラミングツールを使い、カメラで手の動きをリアルタイムに解析。その情報をロボットの動作に変換して、コントローラーなしで直感的に操作できる仕組みを作りました。", "We used the visual programming tool TouchDesigner to track hand movements through a camera in real time. Those movements became commands for the robot, so visitors could steer it without holding a controller.")}
        </p>
        <p className="text-gray-300 leading-relaxed">
          {t("私はゴール部の設計と、得点が入ったときの点数集計システムを担当しました。", "I designed the goals and built the system that kept track of the score.")}
        </p>
      </section>

      {/* 詳細 */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          {t("詳細", "How it works")}
        </h2>

        <div className="space-y-14">

          {/* 機体 */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">{t("機体", "The robot")}</h3>
            <div className="relative h-72 w-full rounded-lg overflow-hidden mb-4">
              <Image
                src="/project1-1.jpg"
                alt={t("ロボット機体", "The soccer robot")}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-3">
              {t("機体の中央にはかなり大きなコンデンサーが乗っています。これに蓄えた電力を一瞬で放出することで強いキックを実現していて、見た目のインパクトもあります。", "A rather large capacitor sits in the middle of the robot. It releases its stored energy in a quick burst to deliver a powerful kick, and it certainly stands out.")}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t("機体にはドリブラーとキッカーという2つの機構がついていて、移動だけでなく、ボールをキープしたりシュートを打ったりといった動作も再現できます。", "The robot has two mechanisms: a dribbler and a kicker. These let it keep possession of the ball and take shots as it moves around the field.")}
            </p>
          </div>

          {/* ハンドジェスチャー操作 */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">{t("ハンドジェスチャー操作", "Hand gesture controls")}</h3>
            <div className="relative h-72 w-full rounded-lg overflow-hidden mb-4">
              <Image
                src="/project1-2.jpg"
                alt={t("ハンドジェスチャー操作", "Hand gesture controls")}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-3">
              {t("TouchDesignerがカメラで手の21関節をリアルタイムに認識します。手のひらの傾きで前後左右を操作できるので、何も持たずに手をかざすだけでロボットを動かせます。", "TouchDesigner tracks 21 points on the hand through the camera in real time. Tilting your palm moves the robot forward, backward, left, or right. You just hold out your hand, with no need to hold a controller.")}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t("ドリブラーとキッカーのペダル・センサー操作と合わせると、手でロボットを走らせながら足でドリブルとシュートを操るという、全身を使った操作になります。", "The dribbler and kicker use a pedal and a sensor, so you steer with your hand while using your feet to dribble and shoot. Playing becomes a whole-body activity.")}
            </p>
          </div>

          {/* ドリブラー */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">{t("ドリブラー", "The dribbler")}</h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              {t("足元のペダルを踏むとドリブラーが起動します。仕組みはシンプルで、ボールと機体が接する部分の真上に小さな車輪を付け、上からボールを押さえつけることで摩擦を発生させています。", "Pressing the foot pedal activates the dribbler. A small wheel sits just above where the ball meets the robot and presses down on the ball to create friction.")}
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              {t("この摩擦でボールが機体に引き寄せられ続けるため、前後左右に動かしてもボールが離れません。ロボットがボールを吸い付けながら走り回る様子は、見ていてかなり気持ちいいです。", "That friction keeps pulling the ball toward the robot, holding it in place even when the robot changes direction. It is surprisingly satisfying to watch the robot zip around with the ball seemingly stuck to it.")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <img
                  src="/dribbler-1.gif"
                  alt={t("ドリブラー動作 その1", "Dribbler demonstration, part 1")}
                  className="w-full rounded-lg"
                />
                <p className="text-gray-400 text-sm mt-2 text-center">{t("ペダルを踏んでドリブラー起動", "Pressing the pedal to activate the dribbler")}</p>
              </div>
              <div>
                <img
                  src="/dribbler-2.gif"
                  alt={t("ドリブラー動作 その2", "Dribbler demonstration, part 2")}
                  className="w-full rounded-lg"
                />
                <p className="text-gray-400 text-sm mt-2 text-center">{t("移動中もボールをキープし続ける様子", "Keeping possession while moving")}</p>
              </div>
            </div>

          </div>

          {/* キッカー */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">{t("キッカー", "The kicker")}</h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              {t("足にセンサーをつけて、実際にキックのモーションをするとロボットがボールを射出します。ボタンを押すのではなく、自分の体の動きがそのままシュートにつながる仕組みです。", "A sensor attached to your foot detects a kicking motion and triggers the robot to shoot. Your own kicking motion triggers the shot, without pressing a button.")}
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              {t("この操作感がなかなかおもしろくて、会場では来場者が思わず本気でキックしてしまう場面がたくさんありました。自分とロボットが一体になる感覚が好評でした。", "This made the controls a lot of fun. At the festival, visitors often found themselves kicking as if they were playing for real. People enjoyed how closely the robot responded to their movements.")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <img
                  src="/kicker-1.gif"
                  alt={t("キッカー動作 その1", "Kicker demonstration, part 1")}
                  className="w-full rounded-lg"
                />
                <p className="text-gray-400 text-sm mt-2 text-center">{t("キックモーションをセンサーが検知", "The sensor detects a kicking motion")}</p>
              </div>
              <div>
                <img
                  src="/kicker-2.gif"
                  alt={t("キッカー動作 その2", "Kicker demonstration, part 2")}
                  className="w-full rounded-lg"
                />
                <p className="text-gray-400 text-sm mt-2 text-center">{t("機構が作動してボールが飛び出す瞬間", "The kicker fires and sends the ball flying")}</p>
              </div>
            </div>

          </div>

          {/* メンバー */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">{t("プロジェクトメンバー", "The team")}</h3>
            <div className="relative h-72 w-full rounded-lg overflow-hidden mb-4">
              <Image
                src="/project1-3.jpg"
                alt={t("プロジェクトメンバー", "The team")}
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                <li><span className="text-purple-300 font-medium">{t("高木くん", "Takagi")}</span>{t("　― プロジェクトリーダー・フィールド部分設計", " — Project lead and field design")}</li>
                <li><span className="text-purple-300 font-medium">{t("山田くん", "Yamada")}</span>{t("　― 機体製作・キッカー/ドリブラー製作", " — Robot construction, kicker, and dribbler")}</li>
                <li><span className="text-purple-300 font-medium">{t("中村くん", "Nakamura")}</span>{t("　― 機体製作・TouchDesignerとの連携・キックモーション実装", " — Robot construction, TouchDesigner integration, and kick detection")}</li>
                <li><span className="text-purple-300 font-medium">{t("私", "Shu Ushin")}</span>{t("　　　　― 機体製作・ゴール部設計・点数集計システム作成", " — Robot construction, goal design, and scoring system")}</li>
                <li><span className="text-purple-300 font-medium">{t("太田くん", "Ota")}</span>{t("　― TouchDesignerによる関節座標取得システム構築", " — Hand tracking system in TouchDesigner")}</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 学んだこと */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          {t("学んだこと", "What I learned")}
        </h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          {t("電子回路や機械設計など、普段のソフトウェア開発とは全然違う領域に初めて触れたプロジェクトでした。それぞれの担当が作ったものを最後に一つの展示として組み合わせていく過程で、全体を見渡すことの大切さを実感しました。", "This was my first time working with electronic circuits and mechanical design, both very different from my usual software projects. Bringing everyone’s work together into one exhibit taught me how important it is to understand how all the parts fit together.")}
        </p>
        <p className="text-gray-300 leading-relaxed">
          {t("来場者がロボットを操作して楽しんでいる様子を目の前で見られたのが一番うれしかったです。「動くものを作る」達成感は格別でした。", "The best part was seeing visitors enjoy playing with the robots right in front of us. There was something especially rewarding about building something that could actually move.")}
        </p>
      </section>

    </div>
  );
};

export default RobotSoccer;
