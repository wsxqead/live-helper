// components/dashboard/DashboardSidebar.tsx
import Link from "next/link";

const menus = [
  { label: "대시보드", href: "/dashboard" },
  { label: "채팅", href: "/dashboard/overlay/chat" },
  { label: "후원 알림", href: "/dashboard/overlay/alert" },
  { label: "후원 자막", href: "/dashboard/overlay/subtitle" },
  { label: "목표 그래프", href: "/dashboard/overlay/goal" },
  { label: "전광판", href: "/dashboard/overlay/board" },
  { label: "룰렛", href: "/dashboard/widgets/roulette" },
  { label: "리액션", href: "/dashboard/widgets/reaction" },
  { label: "투표", href: "/dashboard/widgets/vote" },
  { label: "설정", href: "/dashboard/settings" },
];

export default function DashboardSidebar() {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 p-4">
      <div className="text-xl font-extrabold mb-6">LiveHelper</div>

      <nav className="space-y-1">
        {menus.map((m) => (
          <Link
            key={m.href}
            href={m.href}
            className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100"
          >
            {m.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
