import React from "react";
import Image from "next/image";

const Img = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
  <div>
    <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
      <Image src={src} alt={alt} fill className="object-contain rounded-lg" />
    </div>
    {caption && <p className="text-gray-400 text-sm mt-2 text-center">{caption}</p>}
  </div>
);

const Term = ({ children }: { children: React.ReactNode }) => (
  <span className="text-purple-300 font-medium">{children}</span>
);

const Video = ({ src, title }: { src: string; title: string }) => (
  <div>
    <div className="w-full rounded-lg overflow-hidden bg-black">
      <video controls className="w-full" style={{ maxHeight: "480px" }}>
        <source src={src} type="video/mp4" />
        お使いのブラウザは動画再生に対応していません。
      </video>
    </div>
    <p className="text-gray-400 text-sm mt-2 text-center">{title}</p>
  </div>
);

const KisekaeCamera: React.FC = () => {
  return (
    <div className="space-y-14">

      {/* 動画 */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          紹介動画
        </h2>
        <div className="space-y-8">
          <Video src="/kisekae-video.mp4" title="AI着せ替えカメラ 紹介" />
          <Video src="/seimitsulab-video.mp4" title="精密ラボ 全体紹介" />
        </div>
      </section>

      {/* プロジェクト概要 */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          プロジェクト概要
        </h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          東京大学の学科企画「五月祭」（2025年5月16日・17日）にて展示した、AIを使ったリアルタイムバーチャル着せ替え装置です。カメラに映った人物の姿勢をフレームごとに推定し、学習済みの着衣モデルを用いて任意の服を体に合成・表示します。加えて、Pepper's ghost 方式のホログラム装置で合成映像を立体的に提示しました。
        </p>
        <p className="text-gray-300 leading-relaxed">
          本展示のコア技術である <Term>RTV（Real-Time Virtual Try-On）</Term> は、東京大学 五十嵐研究室からご提供いただきました。実装の基盤となった論文は下部のクレジット欄に記載しています。
        </p>
      </section>

      {/* システムパイプライン概要 */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          システムパイプライン概要
        </h2>
        <div className="mb-6">
          <Img src="/kisekae-pipeline.png" alt="RTVシステムパイプライン図" />
        </div>
        <p className="text-gray-300 leading-relaxed mb-4">
          システム全体は、大きく以下の3段階で動作します。
        </p>
        <div className="space-y-4">
          {[
            {
              step: "1",
              title: "姿勢・体型推定",
              body: "カメラ入力をフレーム単位で受け取り、BEV と SMPL を用いて人物の3D姿勢・体型パラメータを推定する。同時に DensePose で2D身体表面マップを生成し、両者を統合したハイブリッドデータを作る。",
            },
            {
              step: "2",
              title: "着衣外観の予測",
              body: "事前学習済みの着衣モデルが、ハイブリッドデータを入力として受け取り、「このポーズ・体型ならこの服はどのように見えるか」を予測する。しわ・ゆがみ・袖の変形など、姿勢依存の外観変化が考慮される。",
            },
            {
              step: "3",
              title: "映像への合成",
              body: "予測した服の画像を、元のカメラフレームの体の位置に重ね合わせ、最終的な合成映像をリアルタイムで出力する。",
            },
          ].map(({ step, title, body }) => (
            <div key={step} className="flex gap-4 bg-white/5 rounded-xl border border-white/10 p-5">
              <div className="text-purple-400 font-bold text-lg shrink-0 w-6">{step}.</div>
              <div>
                <div className="text-white font-semibold mb-1">{title}</div>
                <div className="text-gray-300 leading-relaxed text-sm">{body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ① 姿勢推定・身体表面検出 */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          ① 姿勢推定・身体表面検出
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-300">BEV / SMPL による3D姿勢推定</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              カメラ入力は映像ストリームではなく、フレーム（静止画）単位で処理されます。各フレームに対し、まず <Term>BEV（Birds-Eye View）</Term> が画面内の人物数と各人物のカメラからの距離を推定します。
            </p>
            <p className="text-gray-300 leading-relaxed">
              次に <Term>SMPL（Skinned Multi-Person Linear Model）</Term> が、BEVの推定結果をもとに各人物の具体的な姿勢と体型をパラメータで表現します。SMPLは人体を24箇所の主要関節からなる3Dメッシュとして定式化しており、各関節の回転角度と体型係数を出力します。これにより、フレームごとに人物の全身3D形状が数値として得られます。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-300">VM画像（Visual Measurement Garment）の生成</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              推定された3DメッシュはカメラLに2D投影され、着衣モデルへの入力として最適化された中間表現に変換されます。これが <Term>VM画像（Visual Measurement Garment）</Term> です。
            </p>
            <p className="text-gray-300 leading-relaxed">
              VM画像は、人物から現在着用している服を除去し、姿勢のみを示す標準的な白T シャツ姿の仮想画像に相当します。実際の服の色・質感・形状に依存しない、体の形と姿勢だけを表す表現にすることで、着衣モデルが汎化して動作できるようになります。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-300">DensePose による2D身体表面マッピング</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              VM画像とは独立に、<Term>DensePose</Term> を用いて2次元画像から身体の各部位（頭部・胴部・上腕・前腕・手・大腿・下腿など）を検出し、画素レベルで「体のどの部位に対応するか」を示すマップを生成します。
            </p>
            <p className="text-gray-300 leading-relaxed">
              DensePoseは3D推定とは独立した経路で動作するため、2つの異なるモダリティから得られた身体情報を相補的に利用できます。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-300">ハイブリッドデータの統合</h3>
            <p className="text-gray-300 leading-relaxed">
              3D由来の VM画像と、2D由来の DensePose パラメータを統合し、より高精度な身体データ（ハイブリッドデータ）を生成します。この統合表現を着衣モデルへの入力とすることで、正面・側面・斜めなど多様な姿勢での服の外観変化を安定して予測できます。
            </p>
          </div>

        </div>
      </section>

      {/* ② 着衣モデルの学習 */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          ② 着衣モデルの学習
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <Img src="/kisekae-fig1.png" alt="学習用動画の収集" caption="Fig. 1 学習用動画の収集" />
          </div>
          <div>
            <Img src="/kisekae-fig2.png" alt="服領域のセグメンテーション" caption="Fig. 2 服領域のセグメンテーション" />
          </div>
        </div>

        <div className="space-y-6">

          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-300">Per-Garment モデルとデータ収集</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              本システムでは服ごとに個別の着衣モデルを学習する <Term>Per-Garment</Term> 方式を採用しています。これにより、着物・パーカーなど素材や形状が大きく異なる服に対しても、それぞれの物理的特性（布の張り・しわ・袖の広がり方）を正確に再現できます。
            </p>
            <p className="text-gray-300 leading-relaxed">
              学習データの収集では、対象の服を実際に着用した状態で360度回転・腕の上下など多様な姿勢変化を動画に撮影します。服のしわやゆがみ・袖の形状が各姿勢で正しく記録されるよう、動きの種類と速度を細かく設計してデータを取得しました。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-300">セグメンテーションとフレーム抽出</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              収集した動画は、まず服領域だけを切り出す<Term>セグメンテーション</Term>処理にかけられます。次に動画を1フレームごとの静止画に分解し、各フレームから「その瞬間の服の外観画像」を取得します。
            </p>
            <p className="text-gray-300 leading-relaxed">
              同時に、各フレームに対して①で説明した BEV/SMPL・DensePose の処理を適用し、「その瞬間の体の姿勢・形状パラメータ」を抽出します。こうして、（体情報, 服外観）のペアデータが大量に得られます。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-300">教師あり学習と時間的一貫性</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              収集したペアデータを用いて、「体情報を入力すると、その姿勢における服の外観を出力する」ネットワークを<Term>教師あり学習</Term>で訓練します。これにより、例えば腕を上げたときに袖がどの方向に伸びるか・体が横を向いたときに服の前面がどう変形するか、といった姿勢依存の外観変化をモデルが暗黙的に学習します。
            </p>
            <p className="text-gray-300 leading-relaxed">
              本システムが採用している RTV 技術の特徴の一つに、<Term>Temporal Consistency（時間的一貫性）</Term> があります。フレームごとに独立して推論するとフリッカー（映像のちらつき）が生じやすいため、連続するフレーム間の一貫性を保つ機構を組み込んでいます。これは特にゆったりした素材の服（Loose-Fitting Garments）で顕著な効果を発揮します。
            </p>
          </div>

        </div>
      </section>

      {/* ③ ホログラム */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          ③ ホログラム（Pepper's Ghost）
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Img src="/kisekae-holoreal.png" alt="Pepper's Ghost 装置の外観" caption="Fig. 3 Pepper's Ghost 装置" />
          <Img src="/kisekae-holoprinciple.png" alt="Pepper's Ghost 光学原理図" caption="Fig. 4 光学原理図" />
        </div>

        <p className="text-gray-300 leading-relaxed mb-4">
          合成映像の提示には、<Term>Pepper's Ghost（ペッパーズ・ゴースト）</Term>と呼ばれる古典的な光学錯視技術を用いました。19世紀に舞台演出として考案された手法ですが、現代のホログラムディスプレイ装置にも広く応用されています。
        </p>

        <p className="text-gray-300 leading-relaxed mb-3">
          スクリーン（iPad）から照射された光が、約45度に傾けた薄いプラスチック板で反射し、その虚像がジオラマ空間に浮かんで見えます。一方、室内灯はジオラマそのものを照らしているため、観察者には「実物のジオラマの空間内にスクリーンの映像が重なって存在している」ように知覚されます。
        </p>
        <p className="text-gray-300 leading-relaxed">
          本展示では、このジオラマ空間に RTV で合成した着せ替え映像を投影することで、観察者が自分の着替えた姿をあたかも小さなジオラマの中に立っているかのように体験できる演出を実現しました。
        </p>
      </section>

      {/* 技術提供クレジット */}
      <section>
        <div className="rounded-xl border border-purple-500/40 bg-purple-900/20 p-6">
          <h2 className="text-xl font-bold mb-4 text-purple-300">
            技術提供：東京大学 五十嵐研究室
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            本展示における RTV（Real-Time Virtual Try-On）技術のすべては、東京大学 五十嵐研究室の五十嵐先生、および同研究室の Zaiqiang Wu さん・I-Chao Shen さんのご好意によってご提供いただきました。実装にあたりご指導・ご協力いただいたことに、深く感謝申し上げます。
          </p>
          <div className="space-y-4 text-sm">
            <div>
              <span className="text-gray-400">五十嵐研究室 HP：</span>
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
              <div className="text-gray-400 mb-2">関連論文：</div>
              <div className="bg-white/5 rounded-lg border border-white/10 p-4 text-gray-300 leading-relaxed">
                Zaiqiang Wu, I-Chao Shen, and Takeo Igarashi,{" "}
                <span className="text-white">"Real-Time Per-Garment Virtual Try-On with Temporal Consistency for Loose-Fitting Garments,"</span>{" "}
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
