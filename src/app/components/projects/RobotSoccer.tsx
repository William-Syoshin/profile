import Image from "next/image";

const RobotSoccer = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          プロジェクト概要
        </h2>
        <p className="text-gray-300 leading-relaxed">
          東京大学五月祭の学科企画において、来場者が直感的にロボットを操作できる展示の制作に携わりました。
        </p>
        <p className="text-gray-300 leading-relaxed">
          本企画では、ビジュアルプログラミングツール「TouchDesigner」を用いて、カメラから取得した手の位置情報をリアルタイムで解析。そのデータをロボットの動作に変換し、シームレスな遠隔操作を実現しました。
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          詳細
        </h2>
        <div className="space-y-4">
          <div>
            <div className="relative h-64 w-full rounded-lg overflow-hidden">
              <Image
                src="/project1-1.jpg"
                alt="プロジェクト画像1"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-300 mt-2">実際の機体の様子</p>
            <p className="text-gray-300 mt-2">
              遠隔のボタンを押せば、キックができる。
            </p>
            <p className="text-gray-300 mt-2 pb-10">
              コンデンサーが大きくてかわいい
            </p>
          </div>
          <div>
            <div className="relative h-64 w-full rounded-lg overflow-hidden">
              <Image
                src="/project1-2.jpg"
                alt="プロジェクト画像2"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-300 mt-2">操作の様子</p>
            <p className="text-gray-300 mt-2 pb-10">
              TouchDesinerを使って手の指の関節を取得して、手をかざすだけで遠隔操作が可能
            </p>
          </div>
          <div>
            <div className="relative h-64 w-full rounded-lg overflow-hidden">
              <Image
                src="/project1-3.jpg"
                alt="プロジェクト画像3"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-300 mt-2">プロジェクトメンバー</p>
          </div>
        </div>
        <p className="text-gray-300 mt-4">
          左から、高木くん（プロジェクトリーダー、フィールド部分設計）、山田くん（機体の製作、キッカー、ドリブラーの製作）、中村くん（機体の製作、TouchDesinerとの連携、キックモーションを実装）、私（ゴール部設計、点数集計システムの作成）、太田くん（TouchDesinerによる間接座標取得システムの構築）
        </p>
      </section>
    </div>
  );
};

export default RobotSoccer;
