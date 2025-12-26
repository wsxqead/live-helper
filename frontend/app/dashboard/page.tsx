// app/dashboard/page.tsx
export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      {/* 채널 연결 */}
      <section className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="font-bold mb-4">채널 연결</h2>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded bg-slate-100">
            YouTube 연결
          </button>
          <button className="px-4 py-2 rounded bg-slate-100">
            Twitch 연결
          </button>
        </div>
      </section>

      {/* 업데이트 */}
      <section className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="font-bold mb-4">업데이트</h2>
        <ul className="text-sm text-slate-600 space-y-2">
          <li>• 채팅 필터 기능 추가</li>
          <li>• 목표 그래프 UI 개선</li>
        </ul>
      </section>

      {/* 위젯 그리드 */}
      <section>
        <h2 className="font-bold mb-4">오버레이 위젯</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "채팅",
            "후원 알림",
            "후원 자막",
            "목표 그래프",
            "룰렛",
            "투표",
          ].map((w) => (
            <div key={w} className="bg-white p-4 rounded-xl shadow-sm">
              <div className="aspect-video bg-slate-100 rounded mb-3" />
              <div className="font-semibold">{w}</div>
              <button className="mt-2 text-sm text-sky-600">설정하기 →</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
