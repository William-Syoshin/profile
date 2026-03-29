import React from "react";
import Image from "next/image";

const Hyperchill: React.FC = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          プロジェクト概要
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          私は大型イベントの運営、集金システムの構築を担当しました。
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          吉祥寺文化祭とは
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          吉祥寺文化祭は、多様なバックグラウンドを持つ人々が集まり、それぞれのカルチャーを共有できる場所を作ることを目標としたイベントです。
        </p>
        <div className="relative h-96 w-full rounded-lg overflow-hidden mb-4">
          <Image
            src="/project4-1.jpg"
            alt="吉祥寺文化祭イベント"
            fill
            className="object-contain"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          イベント会場
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          このイベントは、吉祥寺のバーやライブハウスを三店舗貸し切って開催されました。それぞれの会場が異なるカルチャーを表現し、来場者が自由に移動しながら多様な体験を楽しめる構成となっています。
        </p>
        <div className="relative h-96 w-full rounded-lg overflow-hidden mb-4">
          <Image
            src="/project4-2.jpg"
            alt="イベント会場"
            fill
            className="object-contain"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          タイムテーブル
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          タイムテーブルは、同時多発的に興味深いイベントが次々と行われる構成となっていました。来場者は自分の興味に合わせて、複数の会場を自由に移動しながら、多様なカルチャーを体験することができました。
        </p>
        <div className="relative h-96 w-full rounded-lg overflow-hidden mb-4">
          <Image
            src="/project4-3.jpg"
            alt="タイムテーブル"
            fill
            className="object-contain"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          目玉の企画
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          数あるカルチャーから厳選してお届けした、多彩なプログラムをご紹介します。
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-300">DJ</h3>
            <p className="text-gray-300 leading-relaxed mb-2">
              まず注目すべきなのは、多様なジャンルを演奏するDJたちが集結したことです。各会場で異なる音楽が流れ、来場者は自分好みのサウンドを探しながら会場を巡ることができました。
            </p>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4-4.jpg"
                alt="DJ"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-300">ブリの解体ショー</h3>
            <p className="text-gray-300 leading-relaxed mb-2">
              食文化を体験できる企画として、ブリの解体ショーを開催しました。職人の技を間近で見ることができ、来場者にとって貴重な体験となりました。
            </p>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4-5.jpg"
                alt="ブリの解体ショー"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-300">ダンス</h3>
            <p className="text-gray-300 leading-relaxed mb-2">
              様々なスタイルのダンスパフォーマンスが披露され、会場にエネルギーとリズムをもたらしました。
            </p>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4-6.jpg"
                alt="ダンス"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-300">ラップ</h3>
            <p className="text-gray-300 leading-relaxed mb-2">
              ラッパーたちが独自のリリックとフローで会場を盛り上げ、言葉の力とリズムが融合したパフォーマンスを展開しました。
            </p>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4-7.jpg"
                alt="ラップ"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-300">バンド</h3>
            <p className="text-gray-300 leading-relaxed mb-2">
              ライブハウスでは、複数のバンドが演奏を披露し、生演奏の迫力とエネルギーを来場者に届けました。
            </p>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4-8.jpg"
                alt="バンド"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-300">クラシック</h3>
            <p className="text-gray-300 leading-relaxed mb-2">
              クラシック音楽の演奏も行われ、伝統的な音楽文化が現代的なイベント空間に新しい彩りを加えました。
            </p>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4-9.jpg"
                alt="クラシック"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-300">ギター</h3>
            <p className="text-gray-300 leading-relaxed mb-2">
              ギタリストたちが様々なスタイルで演奏を披露し、弦楽器の多様な可能性を表現しました。
            </p>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4-10.jpg"
                alt="ギター"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-300">グラフィティー</h3>
            <p className="text-gray-300 leading-relaxed mb-2">
              ストリートアートの文化を体験できるグラフィティーの展示・実演が行われ、視覚的な表現の力強さを来場者に伝えました。
            </p>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4-11.jpg"
                alt="グラフィティー"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          ドレスコード「Re-Formal」
        </h2>
        <div className="relative h-96 w-full rounded-lg overflow-hidden mb-4">
          <Image
            src="/project4-12.jpg"
            alt="ドレスコード Re-Formal"
            fill
            className="object-contain"
          />
        </div>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-200">
            「ファッションは、服の中にだけ存在するのではない。それは空にあり、街角にあり、私たちがどう生きるかという流儀そのものなのだ。」<br />
            <span className="text-sm mt-2 block">—— ココ・シャネル</span>
          </blockquote>
          <p>
            今回のイベントでは、ドレスコードとして Re-Formal を提唱しました。
          </p>
          <p>
            これは、従来の「場に合わせて個を控える正装」ではなく、自分自身の内側にある気品や情熱を、装いによって表現するという新しい正装のかたちを意味します。
          </p>
          <p>
            決まった型や正解はなく、音楽や空間、その日のコンディションも含めて、あなたが選び取るスタイルそのものが "Formal" になる——それが Re-Formal です。
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          開発したアプリケーション
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          私はこのイベントの開催・運営にあたって、Webアプリケーションを一から設計・開発しました。吉祥寺の三会場にまたがるイベントを「一つの脳」として捉え、来場者一人ひとりをニューロン（神経細胞）、カルチャーの交換を細胞の発火と見立てることで、会場全体をリアルタイムに可視化するシステムです。
        </p>

        <h3 className="text-xl font-semibold mb-3 text-purple-300 mt-6">
          アプリを作ったきっかけ
        </h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          吉祥寺文化祭は三会場同時進行で行われるイベントであり、どの会場が今盛り上がっているのかが来場者には見えにくいという課題がありました。それぞれのカルチャーを持ち寄る個々を神経細胞と見立て、カルチャーの交換を細胞の発火と見なすことで、会場を一つの「生きた脳」として可視化できると考えました。このアイデアを実現するため、リアルタイムで来場者の分布と会話を把握できるアプリを開発しました。
        </p>

        <h3 className="text-xl font-semibold mb-3 text-purple-300 mt-6">
          機能① 来場者の会場分布をリアルタイムで把握
        </h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          参加者はアプリに自分のアカウントを登録し、現在いる会場を選択することで、三会場それぞれの来場者数がリアルタイムで一覧表示されます。EOS BASEMENT・MOVEMENT・ASTROの各会場に何人いるかを一目で確認できました。
        </p>
        <div className="flex justify-center mb-6">
          <div className="relative w-64 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/project4-app1.png"
              alt="来場者会場分布画面"
              width={256}
              height={554}
              className="w-full"
            />
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3 text-purple-300 mt-6">
          機能② 会場ごとの来場者一覧
        </h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          会場名をタップすると、その会場にいる参加者のプロフィールが一覧で表示されます。アイコンや名前、アカウント名が表示されるため、「あの人は今どこにいるか」をその場で確認でき、友人との合流や新たな出会いのきっかけを生みました。
        </p>
        <div className="flex justify-center mb-6">
          <div className="relative w-64 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/project4-app2.png"
              alt="会場別来場者一覧画面"
              width={256}
              height={554}
              className="w-full"
            />
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3 text-purple-300 mt-6">
          機能③ 会場の会話をAIがリアルタイム要約
        </h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          もう一人の開発者が各会場にマイクを設置し、来場者の会話音声をリアルタイムで収集。AIがその内容を自動で要約し、アプリ上に配信するシステムと連携しました。会場の「今の空気」をテキストで感じ取ることができ、どの会場が面白い話題で盛り上がっているかをアプリから確認できます。
        </p>
        <div className="flex justify-center mb-6">
          <div className="relative w-64 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/project4-app3.png"
              alt="AI会話要約画面"
              width={256}
              height={554}
              className="w-full"
            />
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3 text-purple-300 mt-6">
          機能④ PayPayによる集金システム
        </h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          入場料の徴収はPayPayと連携した集金システムで行いました。来場者はアプリ上から支払いを完了でき、運営側はリアルタイムで入金状況を確認できる仕組みを構築しました。これにより現金管理の手間を省き、スムーズな入場フローを実現しました。
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          スチル
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-1.JPG"
              alt="イベントスチル1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-2.JPG"
              alt="イベントスチル2"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-3.JPG"
              alt="イベントスチル3"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-6.JPG"
              alt="イベントスチル6"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4b-4.JPG"
                alt="イベントスチル4"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4b-5.JPG"
                alt="イベントスチル5"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4b-7.JPG"
                alt="イベントスチル7"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <Image
                  src="/project4b-8.JPG"
                  alt="イベントスチル8"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <Image
                  src="/project4b-10.JPG"
                  alt="イベントスチル10"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative h-[528px] w-full rounded-lg overflow-hidden">
              <Image
                src="/project4b-9.JPG"
                alt="イベントスチル9"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative h-96 w-full rounded-lg overflow-hidden md:col-span-2">
            <Image
              src="/project4b-12.JPG"
              alt="イベントスチル12"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4b-13.JPG"
                alt="イベントスチル13"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4b-14.JPG"
                alt="イベントスチル14"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4b-16.JPG"
                alt="イベントスチル16"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-17.JPG"
              alt="イベントスチル17"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-18.JPG"
              alt="イベントスチル18"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-19.JPG"
              alt="イベントスチル19"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-20.JPG"
              alt="イベントスチル20"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-21.JPG"
              alt="イベントスチル21"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-22.JPG"
              alt="イベントスチル22"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-23.JPG"
              alt="イベントスチル23"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-24.JPG"
              alt="イベントスチル24"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-25.JPG"
              alt="イベントスチル25"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-26.JPG"
              alt="イベントスチル26"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hyperchill;
