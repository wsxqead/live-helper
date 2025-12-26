// components/home/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-sky-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white font-bold">
            LH
          </div>
          <span className="text-lg font-extrabold tracking-tight text-slate-900">
            LiveHelper
          </span>
        </Link>

        {/* Right: Actions */}
        <nav className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="
              px-5 py-2
              rounded-full
              bg-sky-500
              hover:bg-sky-400
              text-white
              text-sm
              font-semibold
              shadow-sm
              transition
            "
          >
            대시보드 시작
          </Link>
        </nav>
      </div>
    </header>
  );
}
