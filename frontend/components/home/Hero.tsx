// components/home/Hero.tsx
import Link from "next/link";
import OverlayShowcase from "./overlay-showcase/OverlayShowcase";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-white">
      {/* 배경 장식 (위플랩 느낌 핵심 포인트) */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl" />
      <div className="absolute top-32 -left-24 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <div className="space-y-8">
          <span className="inline-block px-4 py-1 rounded-full bg-sky-100 text-sky-600 text-sm font-semibold">
            TtingLive 전용 방송 도구
          </span>

          <h1 className="text-5xl leading-tight font-extrabold text-slate-900">
            띵라이브 방송자를 위한
            <br />
            <span className="text-sky-500">오버레이 & 인터랙션</span> 도구
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            OBS Browser Source만 추가하면 끝.
            <br />
            별도 설치 없이 바로 사용하는
            <br />
            방송 전용 오버레이 솔루션
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="
                px-8 py-4
                rounded-full
                bg-sky-500
                hover:bg-sky-400
                text-white
                font-semibold
                shadow-lg
                transition
              "
            >
              대시보드 시작하기
            </Link>

            <span className="text-sm text-slate-500 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-400" />
              무료 · 설치 불필요
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <OverlayShowcase />

          {/* 살짝 떠 있는 카드 느낌 */}
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg border border-sky-100 px-5 py-3 text-sm">
            실시간 반응 · 즉시 반영
          </div>
        </div>
      </div>
    </section>
  );
}
