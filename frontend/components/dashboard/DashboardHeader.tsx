// components/dashboard/DashboardHeader.tsx
export default function DashboardHeader() {
  return (
    <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6">
      <div className="text-sm text-slate-600">대시보드</div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-slate-500">SJ_L</span>
        <button className="px-3 py-1 rounded-md bg-slate-100 text-sm">
          로그아웃
        </button>
      </div>
    </header>
  );
}
