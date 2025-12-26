// components/home/overlay-showcase/SubtitleDemo.tsx
export default function SubtitleDemo() {
  const list = [
    { rank: "1등", name: "위플랩", amount: "10,000" },
    { rank: "2등", name: "후원", amount: "5,000" },
    { rank: "3등", name: "자막", amount: "2,500" },
    { rank: "4등", name: "오버레이", amount: "500" },
  ];

  return (
    <div className="bg-white/90 rounded-xl p-3 text-xs space-y-2">
      {list.map((i) => (
        <div key={i.rank} className="flex justify-between">
          <span className="font-semibold">{i.rank}</span>
          <span>{i.name}</span>
          <span className="font-bold text-sky-500">{i.amount}</span>
        </div>
      ))}
    </div>
  );
}
