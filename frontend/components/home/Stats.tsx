// components/home/Stats.tsx
export default function Stats() {
  const tags = [
    "통합채팅",
    "테마스킨",
    "후원알림",
    "후원자막",
    "목표치그래프",
    "룰렛",
    "시그니처사운드",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <h2 className="text-3xl font-extrabold text-slate-900">
          방송 크리에이터를 위한{" "}
          <span className="text-sky-500">올인원 오버레이 솔루션</span>
        </h2>

        <p className="text-slate-600 leading-relaxed">
          별도 회원가입 없이 아이디 입력만으로 여러 플랫폼을 연동할 수 있으며,
          <br />
          채팅창, 후원 알림, 목표치 등 실시간 방송에 필요한
          <br />
          통합 오버레이 기능을 제공합니다.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full bg-sky-50 text-sky-600 text-sm font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
