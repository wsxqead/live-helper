// app/dashboard/page.tsx
export default function DashboardOverview() {
  const channels = [
    {
      key: "youtube",
      name: "YouTube",
      initial: "YT",
      color: "bg-red-500",
      connected: true,
    },
    {
      key: "chzzk",
      name: "치지직",
      initial: "C",
      color: "bg-green-500",
      connected: false,
    },
    {
      key: "soop",
      name: "숲",
      initial: "S",
      color: "bg-emerald-500",
      connected: false,
    },
    {
      key: "flex",
      name: "플렉스",
      initial: "F",
      color: "bg-sky-500",
      connected: true,
    },
  ];

  const widgets = [
    {
      title: "실시간 채팅",
      desc: "방송 채팅 오버레이",
      path: "/dashboard/overlay/chat",
    },
    {
      title: "실시간 알림",
      desc: "후원·이벤트 알림",
      path: "/dashboard/overlay/alert",
    },
    {
      title: "후원 스트림",
      desc: "후원 자막·랭킹",
      path: "/dashboard/overlay/subtitle",
    },
    {
      title: "진행 목표",
      desc: "후원 목표 그래프",
      path: "/dashboard/overlay/goal",
    },
    {
      title: "참여형 룰렛",
      desc: "시청자 참여 이벤트",
      path: "/dashboard/widgets/roulette",
    },
    {
      title: "실시간 투표",
      desc: "방송 중 투표",
      path: "/dashboard/widgets/vote",
    },
  ];

  return (
    <div className="space-y-10">
      {/* ================= 상단 상태 ================= */}
      <section className="grid md:grid-cols-3 gap-6">
        <StatusCard title="연결된 채널" value="2" sub="YouTube · Twitch" />
        <StatusCard title="활성 오버레이" value="5" sub="현재 방송 적용 중" />
        <StatusCard title="최근 활동" value="12" sub="최근 24시간" />
      </section>

      {/* ================= 채널 연동 ================= */}
      <section className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
        <h2 className="font-bold text-slate-900">채널 연동</h2>

        <div className="flex gap-4">
          {channels.map((c) => (
            <button
              key={c.key}
              className={`
    flex items-center gap-4
    px-5 py-4 rounded-xl border w-56
    transition
    ${
      c.connected
        ? "border-green-300 bg-green-50"
        : "border-slate-200 hover:bg-slate-50"
    }
  `}
            >
              {/* 🔹 로고 영역 */}
              <div
                className={`
      w-10 h-10 rounded-full
      flex items-center justify-center
      text-white font-bold text-sm
      ${c.color}
    `}
              >
                {c.initial}
              </div>

              {/* 🔹 텍스트 영역 */}
              <div className="flex flex-col items-start">
                <span className="font-semibold text-slate-900">{c.name}</span>
                <span
                  className={`text-xs ${
                    c.connected ? "text-green-600" : "text-slate-400"
                  }`}
                >
                  {c.connected ? "연결됨" : "연결하기"}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ================= 업데이트 ================= */}
      <section className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-slate-900">업데이트</h2>
          <button className="text-sm text-sky-600 hover:text-sky-500">
            전체 보기 →
          </button>
        </div>

        <ul className="text-sm text-slate-600 space-y-2">
          <li>• 채팅 필터 기능이 추가되었습니다.</li>
          <li>• 목표 그래프 UI가 개선되었습니다.</li>
          <li>• 알림 애니메이션 성능이 향상되었습니다.</li>
        </ul>
      </section>

      {/* ================= 오버레이 컨트롤 ================= */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900">오버레이 컨트롤</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {widgets.map((w) => (
            <div
              key={w.title}
              className="
                group
                bg-white
                rounded-2xl
                p-5
                shadow-sm
                hover:shadow-lg
                hover:-translate-y-1
                transition
              "
            >
              {/* 미리보기 */}
              <div className="aspect-video rounded-lg bg-slate-900 text-xs text-white flex items-center justify-center mb-4">
                {w.title} 미리보기
              </div>

              <h3 className="font-bold text-slate-900">{w.title}</h3>
              <p className="text-sm text-slate-500">{w.desc}</p>

              <div className="flex gap-2 mt-4">
                <ActionBtn label="URL 복사" />
                <ActionBtn label="미리보기" />
                <ActionBtn label="설정" primary />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ================= 하위 컴포넌트 ================= */

function StatusCard({
  title,
  value,
  sub,
}: {
  title: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <p className="text-sm text-slate-500 mb-1">{title}</p>
      <p className="text-2xl font-extrabold">{value}</p>
      <p className="text-xs text-slate-400 mt-2">{sub}</p>
    </div>
  );
}

function ActionBtn({
  label,
  primary = false,
}: {
  label: string;
  primary?: boolean;
}) {
  return (
    <button
      className={`text-xs px-3 py-1 rounded-md transition ${
        primary
          ? "bg-sky-500 text-white hover:bg-sky-400"
          : "bg-slate-100 hover:bg-slate-200"
      }`}
    >
      {label}
    </button>
  );
}
