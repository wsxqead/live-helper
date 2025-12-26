// components/home/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-12 text-center space-y-3">
        <p className="text-lg font-extrabold text-slate-900">LiveHelper</p>

        <p className="text-sm text-slate-500">
          띵라이브 방송자를 위한 오버레이 & 인터랙션 도구
        </p>

        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} TtingLive. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
