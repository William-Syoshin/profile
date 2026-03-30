import Image from "next/image";

const RobotSoccer = () => {
  return (
    <div className="space-y-12">

      {/* プロジェクト概要 */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          プロジェクト概要
        </h2>
        <div className="relative h-72 w-full rounded-lg overflow-hidden mb-6">
          <Image
            src="/project1-first.JPG"
            alt="ロボットサッカー"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-gray-300 leading-relaxed mb-3">
          東京大学の学科企画「五月祭」で、手をかざすだけでロボットを操作できるロボットサッカー展示を作りました。
        </p>
        <p className="text-gray-300 leading-relaxed mb-3">
          TouchDesignerというビジュアルプログラミングツールを使い、カメラで手の動きをリアルタイムに解析。その情報をロボットの動作に変換して、コントローラーなしで直感的に操作できる仕組みを作りました。
        </p>
        <p className="text-gray-300 leading-relaxed">
          私はゴール部の設計と、得点が入ったときの点数集計システムを担当しました。
        </p>
      </section>

      {/* 詳細 */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          詳細
        </h2>

        <div className="space-y-14">

          {/* 機体 */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">機体</h3>
            <div className="relative h-72 w-full rounded-lg overflow-hidden mb-4">
              <Image
                src="/project1-1.jpg"
                alt="ロボット機体"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-3">
              機体の中央にはかなり大きなコンデンサーが乗っています。これに蓄えた電力を一瞬で放出することで強いキックを実現していて、見た目のインパクトもあります。
            </p>
            <p className="text-gray-300 leading-relaxed">
              機体にはドリブラーとキッカーという2つの機構がついていて、移動だけでなく、ボールをキープしたりシュートを打ったりといった動作も再現できます。
            </p>
          </div>

          {/* ハンドジェスチャー操作 */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">ハンドジェスチャー操作</h3>
            <div className="relative h-72 w-full rounded-lg overflow-hidden mb-4">
              <Image
                src="/project1-2.jpg"
                alt="ハンドジェスチャー操作"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-3">
              TouchDesignerがカメラで手の21関節をリアルタイムに認識します。手のひらの傾きで前後左右を操作できるので、何も持たずに手をかざすだけでロボットを動かせます。
            </p>
            <p className="text-gray-300 leading-relaxed">
              ドリブラーとキッカーのペダル・センサー操作と合わせると、手でロボットを走らせながら足でドリブルとシュートを操るという、全身を使った操作になります。
            </p>
          </div>

          {/* ドリブラー */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">ドリブラー</h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              足元のペダルを踏むとドリブラーが起動します。仕組みはシンプルで、ボールと機体が接する部分の真上に小さな車輪を付け、上からボールを押さえつけることで摩擦を発生させています。
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              この摩擦でボールが機体に引き寄せられ続けるため、前後左右に動かしてもボールが離れません。ロボットがボールを吸い付けながら走り回る様子は、見ていてかなり気持ちいいです。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <img
                  src="/dribbler-1.gif"
                  alt="ドリブラー動作 その1"
                  className="w-full rounded-lg"
                />
                <p className="text-gray-400 text-sm mt-2 text-center">ペダルを踏んでドリブラー起動</p>
              </div>
              <div>
                <img
                  src="/dribbler-2.gif"
                  alt="ドリブラー動作 その2"
                  className="w-full rounded-lg"
                />
                <p className="text-gray-400 text-sm mt-2 text-center">移動中もボールをキープし続ける様子</p>
              </div>
            </div>

          </div>

          {/* キッカー */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">キッカー</h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              足にセンサーをつけて、実際にキックのモーションをするとロボットがボールを射出します。ボタンを押すのではなく、自分の体の動きがそのままシュートにつながる仕組みです。
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              この操作感がなかなかおもしろくて、会場では来場者が思わず本気でキックしてしまう場面がたくさんありました。自分とロボットが一体になる感覚が好評でした。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <img
                  src="/kicker-1.gif"
                  alt="キッカー動作 その1"
                  className="w-full rounded-lg"
                />
                <p className="text-gray-400 text-sm mt-2 text-center">キックモーションをセンサーが検知</p>
              </div>
              <div>
                <img
                  src="/kicker-2.gif"
                  alt="キッカー動作 その2"
                  className="w-full rounded-lg"
                />
                <p className="text-gray-400 text-sm mt-2 text-center">機構が作動してボールが飛び出す瞬間</p>
              </div>
            </div>

          </div>

          {/* メンバー */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-300">プロジェクトメンバー</h3>
            <div className="relative h-72 w-full rounded-lg overflow-hidden mb-4">
              <Image
                src="/project1-3.jpg"
                alt="プロジェクトメンバー"
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                <li><span className="text-purple-300 font-medium">高木くん</span>　― プロジェクトリーダー・フィールド部分設計</li>
                <li><span className="text-purple-300 font-medium">山田くん</span>　― 機体製作・キッカー/ドリブラー製作</li>
                <li><span className="text-purple-300 font-medium">中村くん</span>　― 機体製作・TouchDesignerとの連携・キックモーション実装</li>
                <li><span className="text-purple-300 font-medium">私</span>　　　　― 機体製作・ゴール部設計・点数集計システム作成</li>
                <li><span className="text-purple-300 font-medium">太田くん</span>　― TouchDesignerによる関節座標取得システム構築</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 学んだこと */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          学んだこと
        </h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          電子回路や機械設計など、普段のソフトウェア開発とは全然違う領域に初めて触れたプロジェクトでした。それぞれの担当が作ったものを最後に一つの展示として組み合わせていく過程で、全体を見渡すことの大切さを実感しました。
        </p>
        <p className="text-gray-300 leading-relaxed">
          来場者がロボットを操作して楽しんでいる様子を目の前で見られたのが一番うれしかったです。「動くものを作る」達成感は格別でした。
        </p>
      </section>

    </div>
  );
};

export default RobotSoccer;
