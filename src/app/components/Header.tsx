"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <header className="w-full flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-black/80 backdrop-blur-md fixed top-0 left-0 z-50">
      {/* 左側：ホームボタン */}
      <Link
        href="/"
        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full font-bold shadow hover:opacity-80 transition-opacity"
      >
        {t("ホーム", "Home")}
      </Link>
      {/* 右側：メニュー */}
      <nav aria-label={t("メインメニュー", "Main navigation")} className="order-3 flex w-full items-center justify-end gap-6 sm:order-none sm:ml-auto sm:w-auto">
        <Link
          href="/minigame"
          className="text-white hover:text-purple-400 font-semibold transition-colors"
        >
          {t("ミニゲーム", "Minigame")}
        </Link>
        <Link
          href="/contact"
          className="text-white hover:text-purple-400 font-semibold transition-colors"
        >
          {t("連絡", "Contact")}
        </Link>
      </nav>
      <div role="group" aria-label={t("表示言語", "Language")} className="flex shrink-0 rounded-full border border-purple-400/50 bg-black/40 p-1 sm:ml-3">
        {([{ code: "ja", label: "日本語" }, { code: "en", label: "English" }] as const).map(({ code, label }) => (
          <button
            key={code}
            type="button"
            lang={code}
            aria-pressed={language === code}
            onClick={() => setLanguage(code)}
            className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${language === code ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow" : "text-gray-300 hover:bg-purple-500/20 hover:text-white"}`}
          >
            {label}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
