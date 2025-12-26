// components/home/FeatureGrid.tsx
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "실시간 채팅",
    desc: "방송 화면에 자연스럽게 녹아드는 채팅 오버레이",
  },
  {
    title: "실시간 알림",
    desc: "후원 및 이벤트 발생 시 즉시 반응하는 알림 연출",
  },
  {
    title: "후원 스트림",
    desc: "후원 내역과 순위를 자막 형태로 표시",
  },
  {
    title: "진행 목표",
    desc: "후원·참여 목표를 그래프로 시각화",
  },

  {
    title: "참여형 룰렛",
    desc: "시청자가 직접 참여하는 랜덤 이벤트 연출",
  },
  {
    title: "리액션 이모트",
    desc: "채팅·후원에 반응하는 이모티콘 효과",
  },
  {
    title: "엔딩 시퀀스",
    desc: "방송 종료 시 자동 재생되는 마무리 화면",
  },
  {
    title: "하이라이트 보드",
    desc: "중요 메시지를 화면에 고정 표시",
  },

  {
    title: "실시간 투표",
    desc: "시청자가 직접 참여하는 선택형 투표 기능",
  },
  {
    title: "사운드 트리거",
    desc: "이벤트에 반응하는 전용 사운드 연출",
  },
  {
    title: "이벤트 관리",
    desc: "후원 및 참여 이벤트 흐름을 한눈에 관리",
  },
  {
    title: "방송 자동화",
    desc: "방송 중 반복 작업을 자동으로 처리",
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-1 rounded-full bg-sky-100 text-sky-600 text-sm font-semibold">
            주요 기능
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">
            방송에 필요한 모든 연출을 한 곳에서
          </h2>
          <p className="text-slate-500">
            별도 도구 없이 LiveHelper 하나로 방송 화면을 완성하세요.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <FeatureCard key={f.title} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
