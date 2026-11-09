"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "../LanguageProvider";

const Hyperchill: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t("プロジェクト概要", "Overview")}</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          {t(
            <>
              私は大型イベントの主催・運営、集金システムの構築を担当しました。
            </>,
            <>
              I organized and ran a large event and built the system for collecting admission fees.
            </>
          )}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t("吉祥寺文化祭とは", "About the Kichijoji Culture Festival")}</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          {t(
            <>
              吉祥寺文化祭は、多様なバックグラウンドを持つ人々が集まり、それぞれのカルチャーを共有できる場所を作ることを目標としたイベントです。
            </>,
            <>
              The Kichijoji Culture Festival was created as a place where people from different backgrounds could come together and share their cultures.
            </>
          )}
        </p>
        <div className="relative h-96 w-full rounded-lg overflow-hidden mb-4">
          <Image
            src="/project4-1.jpg"
            alt={t("吉祥寺文化祭イベント", "Kichijoji Culture Festival")}
            fill
            className="object-contain"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t("イベント会場", "Venues")}</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          {t(
            <>
              このイベントは、吉祥寺のバーやライブハウスを三店舗貸し切って開催されました。それぞれの会場が異なるカルチャーを表現し、来場者が自由に移動しながら多様な体験を楽しめる構成となっています。
            </>,
            <>
              We booked three venues in Kichijoji, including bars and live music spaces, for exclusive use during the event. Each had its own mix of music and culture, and visitors could move freely between them.
            </>
          )}
        </p>
        <div className="relative h-96 w-full rounded-lg overflow-hidden mb-4">
          <Image
            src="/project4-2.jpg"
            alt={t("イベント会場", "Event venues")}
            fill
            className="object-contain"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t("タイムテーブル", "Schedule")}</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          {t(
            <>
              タイムテーブルは、同時多発的に興味深いイベントが次々と行われる構成となっていました。来場者は自分の興味に合わせて、複数の会場を自由に移動しながら、多様なカルチャーを体験することができました。
            </>,
            <>
              Events ran throughout the festival, with performances and activities happening at several venues at once. Visitors could follow their interests and move between venues to try something different.
            </>
          )}
        </p>
        <div className="relative h-96 w-full rounded-lg overflow-hidden mb-4">
          <Image
            src="/project4-3.jpg"
            alt={t("タイムテーブル", "Event schedule")}
            fill
            className="object-contain"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t("目玉の企画", "Program highlights")}</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          {t(
            <>
              数あるカルチャーから厳選してお届けした、多彩なプログラムをご紹介します。
            </>,
            <>
              Here are some of the highlights from the program.
            </>
          )}
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-300">DJ</h3>
            <p className="text-gray-300 leading-relaxed mb-2">
          {t(
            <>
              まず注目すべきなのは、多様なジャンルを演奏するDJたちが集結したことです。各会場で異なる音楽が流れ、来場者は自分好みのサウンドを探しながら会場を巡ることができました。
            </>,
            <>
              DJs played a wide range of genres across the venues. With different music in each space, visitors could wander around and find a sound they liked.
            </>
          )}
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
            <h3 className="text-xl font-semibold mb-2 text-purple-300">{t("ブリの解体ショー", "Yellowtail filleting demonstration")}</h3>
            <p className="text-gray-300 leading-relaxed mb-2">
          {t(
            <>
              食文化を体験できる企画として、ブリの解体ショーを開催しました。職人の技を間近で見ることができ、来場者にとって貴重な体験となりました。
            </>,
            <>
              We held a live yellowtail filleting demonstration as part of the food program. Visitors had a rare chance to watch an expert prepare the fish up close.
            </>
          )}
        </p>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4-5.jpg"
                alt={t("ブリの解体ショー", "Yellowtail filleting demonstration")}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-300">{t("ダンス", "Dance")}</h3>
            <p className="text-gray-300 leading-relaxed mb-2">
          {t(
            <>
              様々なスタイルのダンスパフォーマンスが披露され、会場にエネルギーとリズムをもたらしました。
            </>,
            <>
              Dancers performed in a range of styles, bringing rhythm and energy to the venues.
            </>
          )}
        </p>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4-6.jpg"
                alt={t("ダンス", "Dance performance")}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-300">{t("ラップ", "Rap")}</h3>
            <p className="text-gray-300 leading-relaxed mb-2">
          {t(
            <>
              ラッパーたちが独自のリリックとフローで会場を盛り上げ、言葉の力とリズムが融合したパフォーマンスを展開しました。
            </>,
            <>
              Rappers got the crowd going with their own lyrics and flows, combining wordplay with rhythm.
            </>
          )}
        </p>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4-7.jpg"
                alt={t("ラップ", "Rap performance")}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-300">{t("バンド", "Bands")}</h3>
            <p className="text-gray-300 leading-relaxed mb-2">
          {t(
            <>
              ライブハウスでは、複数のバンドが演奏を披露し、生演奏の迫力とエネルギーを来場者に届けました。
            </>,
            <>
              Several bands played at the live music venues, giving visitors a chance to feel the energy of a live performance.
            </>
          )}
        </p>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4-8.jpg"
                alt={t("バンド", "Live band performance")}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-300">{t("クラシック", "Classical music")}</h3>
            <p className="text-gray-300 leading-relaxed mb-2">
          {t(
            <>
              クラシック音楽の演奏も行われ、伝統的な音楽文化が現代的なイベント空間に新しい彩りを加えました。
            </>,
            <>
              Classical performances added a traditional sound to the festival’s contemporary setting.
            </>
          )}
        </p>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4-9.jpg"
                alt={t("クラシック", "Classical music performance")}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-300">{t("ギター", "Guitar")}</h3>
            <p className="text-gray-300 leading-relaxed mb-2">
          {t(
            <>
              ギタリストたちが様々なスタイルで演奏を披露し、弦楽器の多様な可能性を表現しました。
            </>,
            <>
              Guitarists played in a variety of styles, showing just how much the instrument can do.
            </>
          )}
        </p>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4-10.jpg"
                alt={t("ギター", "Guitar performance")}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-300">{t("グラフィティー", "Graffiti")}</h3>
            <p className="text-gray-300 leading-relaxed mb-2">
          {t(
            <>
              ストリートアートの文化を体験できるグラフィティーの展示・実演が行われ、視覚的な表現の力強さを来場者に伝えました。
            </>,
            <>
              Graffiti displays and live demonstrations gave visitors a close look at street art and its visual impact.
            </>
          )}
        </p>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4-11.jpg"
                alt={t("グラフィティー", "Graffiti")}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t("ドレスコード「Re-Formal」", "The Re-Formal dress code")}</h2>
        <div className="relative h-96 w-full rounded-lg overflow-hidden mb-4">
          <Image
            src="/project4-12.jpg"
            alt={t("ドレスコード Re-Formal", "Re-Formal dress code")}
            fill
            className="object-contain"
          />
        </div>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-200">
            {t("「ファッションは、服の中にだけ存在するのではない。それは空にあり、街角にあり、私たちがどう生きるかという流儀そのものなのだ。」", "“Fashion is not confined to clothes. It is in the sky, on the street, and in the way we live.”")}<br />
            <span className="text-sm mt-2 block">{t("—— ココ・シャネル", "— Coco Chanel")}</span>
          </blockquote>
          <p>
          {t(
            <>
              今回のイベントでは、ドレスコードとして Re-Formal を提唱しました。
            </>,
            <>
              We called the dress code for the event Re-Formal.
            </>
          )}
        </p>
          <p>
          {t(
            <>
              これは、従来の「場に合わせて個を控える正装」ではなく、自分自身の内側にある気品や情熱を、装いによって表現するという新しい正装のかたちを意味します。
            </>,
            <>
              The idea was to rethink formalwear: instead of dressing to blend in with the occasion, people could express their own sense of elegance and passion through what they wore.
            </>
          )}
        </p>
          <p>
          {t(
            <>
              決まった型や正解はなく、音楽や空間、その日のコンディションも含めて、あなたが選び取るスタイルそのものが &quot;Formal&quot; になる——それが Re-Formal です。
            </>,
            <>
              There was no set style and no right answer. Your choice of clothes, shaped by the music, the space, and how you felt that day, was your own version of formal. That was Re-Formal.
            </>
          )}
        </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t("開発したアプリケーション", "The event app")}</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          {t(
            <>
              私はこのイベントの開催・運営にあたって、Webアプリケーションを一から設計・開発しました。吉祥寺の三会場にまたがるイベントを「一つの脳」として捉え、来場者一人ひとりをニューロン（神経細胞）、カルチャーの交換を細胞の発火と見立てることで、会場全体をリアルタイムに可視化するシステムです。
            </>,
            <>
              I designed and built a web app from scratch to support the event. The idea was to picture the three venues as a single brain: each visitor was a neuron, and each cultural exchange was a neuron firing. The app turned that idea into a live view of activity across the event.
            </>
          )}
        </p>

        <h3 className="text-xl font-semibold mb-3 text-purple-300 mt-6">{t("アプリを作ったきっかけ", "Why I built it")}</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          {t(
            <>
              吉祥寺文化祭は三会場同時進行で行われるイベントであり、どの会場が今盛り上がっているのかが来場者には見えにくいという課題がありました。それぞれのカルチャーを持ち寄る個々を神経細胞と見立て、カルチャーの交換を細胞の発火と見なすことで、会場を一つの「生きた脳」として可視化できると考えました。このアイデアを実現するため、リアルタイムで来場者の分布と会話を把握できるアプリを開発しました。
            </>,
            <>
              With three venues running at once, visitors could not easily tell which venue was liveliest at any given moment. I imagined the event as a living brain, with people as neurons and cultural exchanges as those neurons firing. To put that idea into practice, I built an app that showed where people were and what they were talking about in real time.
            </>
          )}
        </p>

        <h3 className="text-xl font-semibold mb-3 text-purple-300 mt-6">{t("機能① 来場者の会場分布をリアルタイムで把握", "1. Live visitor counts")}</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          {t(
            <>
              参加者はアプリに自分のアカウントを登録し、現在いる会場を選択することで、三会場それぞれの来場者数がリアルタイムで一覧表示されます。EOS BASEMENT・MOVEMENT・ASTROの各会場に何人いるかを一目で確認できました。
            </>,
            <>
              After creating an account, visitors selected their current venue in the app. Live visitor counts for EOS BASEMENT, MOVEMENT, and ASTRO made it easy to see how many people were at each location.
            </>
          )}
        </p>
        <div className="flex justify-center mb-6">
          <div className="relative w-64 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/project4-app1.png"
              alt={t("来場者会場分布画面", "Live visitor counts for each venue")}
              width={256}
              height={554}
              className="w-full"
            />
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3 text-purple-300 mt-6">{t("機能② 会場ごとの来場者一覧", "2. Who is at each venue")}</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          {t(
            <>
              会場名をタップすると、その会場にいる参加者のプロフィールが一覧で表示されます。アイコンや名前、アカウント名が表示されるため、「あの人は今どこにいるか」をその場で確認でき、友人との合流や新たな出会いのきっかけを生みました。
            </>,
            <>
              Tapping a venue opened a list of the people there, with their profile pictures, names, and usernames. Visitors could check where their friends were, meet up, or find someone new to talk to.
            </>
          )}
        </p>
        <div className="flex justify-center mb-6">
          <div className="relative w-64 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/project4-app2.png"
              alt={t("会場別来場者一覧画面", "List of visitors at a venue")}
              width={256}
              height={554}
              className="w-full"
            />
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3 text-purple-300 mt-6">{t("機能③ 会場の会話をAIがリアルタイム要約", "3. Live AI summaries of conversations")}</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          {t(
            <>
              もう一人の開発者が各会場にマイクを設置し、来場者の会話音声をリアルタイムで収集。AIがその内容を自動で要約し、アプリ上に配信するシステムと連携しました。会場の「今の空気」をテキストで感じ取ることができ、どの会場が面白い話題で盛り上がっているかをアプリから確認できます。
            </>,
            <>
              Another developer placed microphones at each venue and built a system that collected conversation audio in real time. I connected the app to that system so it could display AI-generated summaries. Visitors could get a sense of the atmosphere at each venue and see where interesting conversations were happening.
            </>
          )}
        </p>
        <div className="flex justify-center mb-6">
          <div className="relative w-64 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/project4-app3.png"
              alt={t("AI会話要約画面", "AI conversation summaries")}
              width={256}
              height={554}
              className="w-full"
            />
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3 text-purple-300 mt-6">{t("機能④ PayPayによる集金システム", "4. Admission payments with PayPay")}</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          {t(
            <>
              入場料の徴収はPayPayと連携した集金システムで行いました。来場者はアプリ上から支払いを完了でき、運営側はリアルタイムで入金状況を確認できる仕組みを構築しました。これにより現金管理の手間を省き、スムーズな入場フローを実現しました。
            </>,
            <>
              I built a payment system connected to PayPay for collecting admission fees. Visitors could pay through the app, while the organizers could check payment status in real time. This reduced cash handling and made entry quicker.
            </>
          )}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t("スチル", "Event photos")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-1.JPG"
              alt={t("イベントスチル1", "Event photo 1")}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-2.JPG"
              alt={t("イベントスチル2", "Event photo 2")}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-3.JPG"
              alt={t("イベントスチル3", "Event photo 3")}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-6.JPG"
              alt={t("イベントスチル6", "Event photo 6")}
              fill
              className="object-cover"
            />
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4b-4.JPG"
                alt={t("イベントスチル4", "Event photo 4")}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4b-5.JPG"
                alt={t("イベントスチル5", "Event photo 5")}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4b-7.JPG"
                alt={t("イベントスチル7", "Event photo 7")}
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
                  alt={t("イベントスチル8", "Event photo 8")}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <Image
                  src="/project4b-10.JPG"
                  alt={t("イベントスチル10", "Event photo 10")}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative h-[528px] w-full rounded-lg overflow-hidden">
              <Image
                src="/project4b-9.JPG"
                alt={t("イベントスチル9", "Event photo 9")}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative h-96 w-full rounded-lg overflow-hidden md:col-span-2">
            <Image
              src="/project4b-12.JPG"
              alt={t("イベントスチル12", "Event photo 12")}
              fill
              className="object-cover"
            />
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4b-13.JPG"
                alt={t("イベントスチル13", "Event photo 13")}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4b-14.JPG"
                alt={t("イベントスチル14", "Event photo 14")}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/project4b-16.JPG"
                alt={t("イベントスチル16", "Event photo 16")}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-17.JPG"
              alt={t("イベントスチル17", "Event photo 17")}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-18.JPG"
              alt={t("イベントスチル18", "Event photo 18")}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-19.JPG"
              alt={t("イベントスチル19", "Event photo 19")}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-20.JPG"
              alt={t("イベントスチル20", "Event photo 20")}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-21.JPG"
              alt={t("イベントスチル21", "Event photo 21")}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-22.JPG"
              alt={t("イベントスチル22", "Event photo 22")}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-23.JPG"
              alt={t("イベントスチル23", "Event photo 23")}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-24.JPG"
              alt={t("イベントスチル24", "Event photo 24")}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-25.JPG"
              alt={t("イベントスチル25", "Event photo 25")}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/project4b-26.JPG"
              alt={t("イベントスチル26", "Event photo 26")}
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
