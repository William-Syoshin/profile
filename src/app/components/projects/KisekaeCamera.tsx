"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "../LanguageProvider";

const Img = ({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) => (
  <div>
    <div
      className="relative w-full rounded-lg overflow-hidden"
      style={{ aspectRatio: "16/9" }}
    >
      <Image src={src} alt={alt} fill className="object-contain rounded-lg" />
    </div>
    {caption && (
      <p className="text-gray-400 text-sm mt-2 text-center">{caption}</p>
    )}
  </div>
);

const Term = ({ children }: { children: React.ReactNode }) => (
  <span className="text-purple-300 font-medium">{children}</span>
);

const Video = ({ src, title }: { src: string; title: string }) => {
  const { t } = useLanguage();
  return (
  <div>
    <div className="w-full rounded-lg overflow-hidden bg-black">
      <video controls className="w-full" style={{ maxHeight: "480px" }}>
        <source src={src} type="video/mp4" />
        {t("お使いのブラウザは動画再生に対応していません。", "Your browser does not support video playback.")}
      </video>
    </div>
    <p className="text-gray-400 text-sm mt-2 text-center">{title}</p>
  </div>
  );
};

const KisekaeCamera: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="space-y-14">
      {/* 動画 */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t("紹介動画", "Videos")}</h2>
        <div className="space-y-8">
          <Video src="/kisekae-video.mp4" title={t("AI着せ替えカメラ 紹介", "AI virtual try-on camera demo")} />
          <Video src="/seimitsulab-video.mp4" title={t("精密ラボ 全体紹介", "An introduction to Seimitsu Lab")} />
        </div>
      </section>

      {/* プロジェクト概要 */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t("プロジェクト概要", "Overview")}</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          {t(
            <>
              東京大学の学科企画「五月祭」（2025年5月16日・17日）にて展示した、AIを使ったリアルタイムバーチャル着せ替え装置です。カメラに映った人物の姿勢をフレームごとに推定し、学習済みの着衣モデルを用いて任意の服を体に合成・表示します。加えて、Pepper&apos;s
          ghost 方式のホログラム装置で合成映像を立体的に提示しました。
            </>,
            <>
              We presented this real-time AI virtual try-on installation as part of our department’s exhibit at the University of Tokyo’s May Festival (Gogatsusai) on May 16–17, 2025. It estimates a person’s pose in each camera frame, then uses a trained garment model to show them wearing a selected outfit. We also used a Pepper’s Ghost display to make the result appear as a three-dimensional scene.
            </>
          )}
        </p>
        <p className="text-gray-300 leading-relaxed">
          {t(
            <>
              本展示のコア技術である <Term>RTV（Real-Time Virtual Try-On）</Term>{" "}
          は、東京大学
          五十嵐研究室からご提供いただきました。実装の基盤となった論文は下部のクレジット欄に記載しています。
            </>,
            <>
              The core technology, <Term>RTV (Real-Time Virtual Try-On)</Term>, was provided by the Igarashi Laboratory at the University of Tokyo. The paper behind the implementation is listed in the credits below.
            </>
          )}
        </p>
      </section>

      {/* システムパイプライン概要 */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t("システムパイプライン概要", "How the system works")}</h2>
        <div className="mb-6">
          <Img src="/kisekae-pipeline.png" alt={t("RTVシステムパイプライン図", "RTV system pipeline")} />
        </div>
        <p className="text-gray-300 leading-relaxed mb-4">
          {t(
            <>
              システム全体は、大きく以下の3段階で動作します。
            </>,
            <>
              The system works in three main stages.
            </>
          )}
        </p>
        <div className="space-y-4">
          {[
            {
              step: "1",
              title: t("姿勢・体型推定", "Pose and body shape estimation"),
              body: t("カメラ入力をフレーム単位で受け取り、BEV と SMPL を用いて人物の3D姿勢・体型パラメータを推定する。同時に DensePose で2D身体表面マップを生成し、両者を統合したハイブリッドデータを作る。", "For each camera frame, BEV and SMPL estimate the person’s 3D pose and body shape. DensePose creates a 2D body surface map in parallel, and the two outputs are combined into a hybrid representation."),
            },
            {
              step: "2",
              title: t("着衣外観の予測", "Predicting garment appearance"),
              body: t("事前学習済みの着衣モデルが、ハイブリッドデータを入力として受け取り、「このポーズ・体型ならこの服はどのように見えるか」を予測する。しわ・ゆがみ・袖の変形など、姿勢依存の外観変化が考慮される。", "A pretrained garment model uses the hybrid data to predict how the selected clothing would look on that body in that pose, including changes in folds, stretching, and sleeve shape."),
            },
            {
              step: "3",
              title: t("映像への合成", "Compositing the video"),
              body: t("予測した服の画像を、元のカメラフレームの体の位置に重ね合わせ、最終的な合成映像をリアルタイムで出力する。", "The predicted garment image is placed over the person’s body in the original camera frame to produce the final video in real time."),
            },
          ].map(({ step, title, body }) => (
            <div
              key={step}
              className="flex gap-4 bg-white/5 rounded-xl border border-white/10 p-5"
            >
              <div className="text-purple-400 font-bold text-lg shrink-0 w-6">
                {step}.
              </div>
              <div>
                <div className="text-white font-semibold mb-1">{title}</div>
                <div className="text-gray-300 leading-relaxed text-sm">
                  {body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ① 姿勢推定・身体表面検出 */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t("① 姿勢推定・身体表面検出", "1. Estimating pose and mapping the body")}</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-300">{t("BEV / SMPL による3D姿勢推定", "3D pose estimation with BEV and SMPL")}</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
          {t(
            <>
              カメラ入力は映像ストリームではなく、フレーム（静止画）単位で処理されます。各フレームに対し、まず{" "}
              <Term>BEV（Birds-Eye View）</Term>{" "}
              が画面内の人物数と各人物のカメラからの距離を推定します。
            </>,
            <>
              The camera input is processed one frame at a time. For each frame, <Term>BEV (Bird’s-Eye View)</Term> first estimates the number of people in view and their distance from the camera.
            </>
          )}
        </p>
            <p className="text-gray-300 leading-relaxed">
          {t(
            <>
              次に <Term>SMPL（Skinned Multi-Person Linear Model）</Term>{" "}
              が、BEVの推定結果をもとに各人物の具体的な姿勢と体型をパラメータで表現します。SMPLは人体を24箇所の主要関節からなる3Dメッシュとして定式化しており、各関節の回転角度と体型係数を出力します。これにより、フレームごとに人物の全身3D形状が数値として得られます。
            </>,
            <>
              <Term>SMPL (Skinned Multi-Person Linear Model)</Term> then uses the BEV estimates to represent each person’s pose and body shape as a set of parameters. It describes the body as a 3D mesh with 24 main joints, using joint rotations and body shape coefficients. This gives us a numerical representation of the whole body in each frame.
            </>
          )}
        </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-300">{t("VM画像（Visual Measurement Garment）の生成", "Generating the VM image")}</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
          {t(
            <>
              推定された3DメッシュはカメラLに2D投影され、着衣モデルへの入力として最適化された中間表現に変換されます。これが{" "}
              <Term>VM画像（Visual Measurement Garment）</Term> です。
            </>,
            <>
              The estimated 3D mesh is projected into the 2D view of camera L and converted into an intermediate representation for the garment model. We refer to this as the <Term>VM image (Visual Measurement Garment)</Term>.
            </>
          )}
        </p>
            <p className="text-gray-300 leading-relaxed">
          {t(
            <>
              VM画像は、人物から現在着用している服を除去し、姿勢のみを示す標準的な白T
              シャツ姿の仮想画像に相当します。実際の服の色・質感・形状に依存しない、体の形と姿勢だけを表す表現にすることで、着衣モデルが汎化して動作できるようになります。
            </>,
            <>
              The VM image represents the person wearing a standard white T-shirt, replacing the clothes they are actually wearing. By describing only body shape and pose, without relying on the original clothing’s color, texture, or shape, it helps the garment model work across different inputs.
            </>
          )}
        </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-300">{t("DensePose による2D身体表面マッピング", "2D body surface mapping with DensePose")}</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
          {t(
            <>
              VM画像とは独立に、<Term>DensePose</Term>{" "}
              を用いて2次元画像から身体の各部位（頭部・胴部・上腕・前腕・手・大腿・下腿など）を検出し、画素レベルで「体のどの部位に対応するか」を示すマップを生成します。
            </>,
            <>
              In a separate process, <Term>DensePose</Term> detects body parts in the 2D image, including the head, torso, upper arms, forearms, hands, thighs, and lower legs. It creates a map that identifies which body part each pixel belongs to.
            </>
          )}
        </p>
            <p className="text-gray-300 leading-relaxed">
          {t(
            <>
              DensePoseは3D推定とは独立した経路で動作するため、2つの異なるモダリティから得られた身体情報を相補的に利用できます。
            </>,
            <>
              Because DensePose runs separately from the 3D estimation process, the system can combine complementary information from the two approaches.
            </>
          )}
        </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-300">{t("ハイブリッドデータの統合", "Combining the body representations")}</h3>
            <p className="text-gray-300 leading-relaxed">
          {t(
            <>
              3D由来の VM画像と、2D由来の DensePose
              パラメータを統合し、より高精度な身体データ（ハイブリッドデータ）を生成します。この統合表現を着衣モデルへの入力とすることで、正面・側面・斜めなど多様な姿勢での服の外観変化を安定して予測できます。
            </>,
            <>
              The VM image from the 3D estimate is combined with the 2D DensePose parameters to create a more accurate hybrid representation of the body. The garment model uses this combined input to predict how clothing looks from the front, side, and intermediate angles.
            </>
          )}
        </p>
          </div>
        </div>
      </section>

      {/* ② 着衣モデルの学習 */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t("② 着衣モデルの学習", "2. Training the garment model")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <Img
              src="/kisekae-fig1.png"
              alt={t("学習用動画の収集", "Recording training videos")}
              caption={t("Fig. 1 学習用動画の収集", "Fig. 1. Recording training videos")}
            />
          </div>
          <div>
            <Img
              src="/kisekae-fig2.png"
              alt={t("服領域のセグメンテーション", "Garment segmentation")}
              caption={t("Fig. 2 服領域のセグメンテーション", "Fig. 2. Garment segmentation")}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-300">{t("Per-Garment モデルとデータ収集", "Per-garment models and data collection")}</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
          {t(
            <>
              本システムでは服ごとに個別の着衣モデルを学習する{" "}
              <Term>Per-Garment</Term>{" "}
              方式を採用しています。これにより、着物・パーカーなど素材や形状が大きく異なる服に対しても、それぞれの物理的特性（布の張り・しわ・袖の広がり方）を正確に再現できます。
            </>,
            <>
              The system uses a <Term>per-garment</Term> approach, training a separate model for each item of clothing. This lets it reproduce differences in fabric tension, folds, and sleeve shape, even for garments as different as a kimono and a hoodie.
            </>
          )}
        </p>
            <p className="text-gray-300 leading-relaxed">
          {t(
            <>
              学習データの収集では、対象の服を実際に着用した状態で360度回転・腕の上下など多様な姿勢変化を動画に撮影します。服のしわやゆがみ・袖の形状が各姿勢で正しく記録されるよう、動きの種類と速度を細かく設計してデータを取得しました。
            </>,
            <>
              To collect training data, we filmed someone wearing each garment while turning through 360 degrees, raising and lowering their arms, and moving through other poses. We carefully planned the movements and their speed to capture the folds, distortions, and sleeve shapes in each pose.
            </>
          )}
        </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-300">{t("セグメンテーションとフレーム抽出", "Segmentation and frame extraction")}</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
          {t(
            <>
              収集した動画は、まず服領域だけを切り出す
              <Term>セグメンテーション</Term>
              処理にかけられます。次に動画を1フレームごとの静止画に分解し、各フレームから「その瞬間の服の外観画像」を取得します。
            </>,
            <>
              The recorded videos first go through <Term>segmentation</Term> to isolate the garment. They are then split into individual frames, giving us an image of how the clothing looks at each moment.
            </>
          )}
        </p>
            <p className="text-gray-300 leading-relaxed">
          {t(
            <>
              同時に、各フレームに対して①で説明した BEV/SMPL・DensePose
              の処理を適用し、「その瞬間の体の姿勢・形状パラメータ」を抽出します。こうして、（体情報,
              服外観）のペアデータが大量に得られます。
            </>,
            <>
              At the same time, the BEV/SMPL and DensePose processes described in step 1 extract body pose and shape parameters from each frame. This produces a large set of paired body data and garment images.
            </>
          )}
        </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-300">{t("教師あり学習と時間的一貫性", "Supervised learning and temporal consistency")}</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
          {t(
            <>
              収集したペアデータを用いて、「体情報を入力すると、その姿勢における服の外観を出力する」ネットワークを
              <Term>教師あり学習</Term>
              で訓練します。これにより、例えば腕を上げたときに袖がどの方向に伸びるか・体が横を向いたときに服の前面がどう変形するか、といった姿勢依存の外観変化をモデルが暗黙的に学習します。
            </>,
            <>
              We use these pairs for <Term>supervised learning</Term>, training a network to predict a garment’s appearance from the body data. It learns how clothing changes with the wearer’s pose, such as the direction a sleeve stretches when an arm is raised or how the front of a garment changes when the body turns sideways.
            </>
          )}
        </p>
            <p className="text-gray-300 leading-relaxed">
          {t(
            <>
              本システムが採用している RTV 技術の特徴の一つに、
              <Term>Temporal Consistency（時間的一貫性）</Term>{" "}
              があります。フレームごとに独立して推論するとフリッカー（映像のちらつき）が生じやすいため、連続するフレーム間の一貫性を保つ機構を組み込んでいます。これは特にゆったりした素材の服（Loose-Fitting
              Garments）で顕著な効果を発揮します。
            </>,
            <>
              One feature of RTV is <Term>temporal consistency</Term>. Predicting each frame independently can cause flickering, so the system includes a mechanism to keep the results consistent between consecutive frames. This is especially helpful for loose-fitting garments.
            </>
          )}
        </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-300">{t("学習例：精密工学科パーカー", "Training example: the department hoodie")}</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
          {t(
            <>
              実際の学習対象として、<Term>東京大学 精密工学科のパーカー</Term>
              を採用しました。学科オリジナルのパーカーという素材・形状の特徴を捉えるため、上述のデータ収集・学習プロセスを経て専用の着衣モデルを構築しています。
            </>,
            <>
              We trained one model on a <Term>hoodie from the University of Tokyo’s Department of Precision Engineering</Term>. Using the data collection and training process described above, we built a dedicated model to capture its particular fabric and shape.
            </>
          )}
        </p>
            <div className="max-w-md mx-auto mb-4">
              <Img
                src="/kisekae-compare-garment.png"
                alt={t("学習に使用した精密工学科パーカー", "Precision Engineering department hoodie used for training")}
                caption={t("このパーカーを学習しました（通称精密パーカー）", "The department hoodie used to train the model")}
              />
            </div>
            <Video
              src="/kisekae-compare-video.mp4"
              title={t("着せ替え前後の比較", "Before and after virtual try-on")}
            />
            <p className="text-gray-300 leading-relaxed mt-3 text-center">
          {t(
            <>
              正面だけでなく、身体を回転させて背面を向けた際にも、パーカーのフードや裾のたるみが姿勢に合わせて自然に変形している様子が確認できます。
            </>,
            <>
              The comparison shows how the hood and the fabric around the hem move naturally with the body, even when the person turns around to show their back.
            </>
          )}
        </p>
          </div>
        </div>
      </section>

      {/* ③ ホログラム */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t("③ ホログラム（Pepper's Ghost）", "3. The Pepper’s Ghost display")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Img
            src="/kisekae-holoreal.png"
            alt={t("Pepper's Ghost 装置の外観", "The Pepper’s Ghost display")}
            caption={t("Fig. 3 Pepper's Ghost 装置", "Fig. 3. The Pepper’s Ghost display")}
          />
          <Img
            src="/kisekae-holoprinciple.png"
            alt={t("Pepper's Ghost 光学原理図", "Diagram of the Pepper’s Ghost optical setup")}
            caption={t("Fig. 4 光学原理図", "Fig. 4. How the optical setup works")}
          />
        </div>

        <p className="text-gray-300 leading-relaxed mb-4">
          {t(
            <>
              合成映像の提示には、
          <Term>Pepper&apos;s Ghost（ペッパーズ・ゴースト）</Term>
          と呼ばれる古典的な光学錯視技術を用いました。19世紀に舞台演出として考案された手法ですが、現代のホログラムディスプレイ装置にも広く応用されています。
            </>,
            <>
              We displayed the generated video using <Term>Pepper’s Ghost</Term>, a classic optical illusion. Originally developed for stage performances in the 19th century, it is also used in many modern displays that create a hologram-like effect.
            </>
          )}
        </p>

        <p className="text-gray-300 leading-relaxed mb-3">
          {t(
            <>
              スクリーン（iPad）から照射された光が、約45度に傾けた薄いプラスチック板で反射し、その虚像がジオラマ空間に浮かんで見えます。一方、室内灯はジオラマそのものを照らしているため、観察者には「実物のジオラマの空間内にスクリーンの映像が重なって存在している」ように知覚されます。
            </>,
            <>
              Light from an iPad screen reflects off a thin plastic sheet tilted at roughly 45 degrees, making a virtual image appear to float inside the diorama. Meanwhile, room lighting illuminates the physical scene. Together, they make the screen image appear to occupy the same space as the diorama.
            </>
          )}
        </p>
        <p className="text-gray-300 leading-relaxed">
          {t(
            <>
              本展示では、このジオラマ空間に RTV
          で合成した着せ替え映像を投影することで、観察者が自分の着替えた姿をあたかも小さなジオラマの中に立っているかのように体験できる演出を実現しました。
            </>,
            <>
              By displaying the RTV try-on video in this setup, we let visitors see themselves in a different outfit, as if they were standing inside the miniature scene.
            </>
          )}
        </p>
      </section>

      {/* 技術提供クレジット */}
      <section>
        <div className="rounded-xl border border-purple-500/40 bg-purple-900/20 p-6">
          <h2 className="text-xl font-bold mb-4 text-purple-300">{t("技術提供：東京大学 五十嵐研究室", "Technology provided by the Igarashi Laboratory, University of Tokyo")}</h2>
          <p className="text-gray-300 leading-relaxed mb-5">
          {t(
            <>
              本展示における RTV（Real-Time Virtual
            Try-On）技術のすべては、東京大学
            五十嵐研究室の五十嵐先生、および同研究室の Zaiqiang Wu さん・I-Chao
            Shen
            さんのご好意によってご提供いただきました。実装にあたりご指導・ご協力いただいたことに、深く感謝申し上げます。
            </>,
            <>
              All RTV (Real-Time Virtual Try-On) technology used in this exhibit was kindly provided by Professor Igarashi, Zaiqiang Wu, and I-Chao Shen of the Igarashi Laboratory at the University of Tokyo. I am grateful for their guidance and help with the implementation.
            </>
          )}
        </p>
          <div className="space-y-4 text-sm">
            <div>
              <span className="text-gray-400">{t("五十嵐研究室 HP：", "Igarashi Laboratory website:")}</span>
              <a
                href="https://www-ui.is.s.u-tokyo.ac.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline ml-1"
              >
                https://www-ui.is.s.u-tokyo.ac.jp/
              </a>
            </div>
            <div>
              <div className="text-gray-400 mb-2">{t("関連論文：", "Related paper:")}</div>
              <div className="bg-white/5 rounded-lg border border-white/10 p-4 text-gray-300 leading-relaxed">
                Zaiqiang Wu, I-Chao Shen, and Takeo Igarashi,{" "}
                <span className="text-white">
                  &quot;Real-Time Per-Garment Virtual Try-On with Temporal
                  Consistency for Loose-Fitting Garments,&quot;
                </span>{" "}
                <em>Computer Graphics Forum</em>, 2025.{" "}
                <a
                  href="https://doi.org/10.1111/cgf.70272"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  DOI: 10.1111/cgf.70272
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KisekaeCamera;
