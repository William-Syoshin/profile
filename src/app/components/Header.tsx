import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-transparent fixed top-0 left-0 z-50">
      {/* 左側：ホームボタン */}
      <Link
        href="/"
        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full font-bold shadow hover:opacity-80 transition-opacity"
      >
        ホーム
      </Link>
      {/* 右側：メニュー */}
      <nav className="flex items-center gap-6">
        <Link
          href="/minigame"
          className="text-white hover:text-purple-400 font-semibold transition-colors"
        >
          ミニゲーム
        </Link>
        <Link
          href="/contact"
          className="text-white hover:text-purple-400 font-semibold transition-colors"
        >
          連絡
        </Link>
      </nav>
    </header>
  );
};

export default Header;
