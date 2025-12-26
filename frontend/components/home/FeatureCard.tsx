// components/home/FeatureCard.tsx
export default function FeatureCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div
      className="
        group
        rounded-2xl
        bg-white
        border border-slate-200
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1
        transition
        overflow-hidden
      "
    >
      {/* Preview Area */}
      <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-sm text-slate-500">
        {title} 미리보기
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>

        <div className="pt-2">
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-sky-600 group-hover:text-sky-500 transition">
            자세히 보기 →
          </span>
        </div>
      </div>
    </div>
  );
}
