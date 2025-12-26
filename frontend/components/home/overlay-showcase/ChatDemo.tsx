// components/home/overlay-showcase/ChatDemo.tsx
export default function ChatDemo() {
  const chats = [
    { name: "위플랩", text: "오늘은 어떤 게임 하나요?" },
    { name: "오버레이", text: "방송 항상 잘 보고 있습니다!" },
    { name: "멀티플랫폼", text: "밥 맛있게 드세요" },
    { name: "통합채팅", text: "이러다 날 새는거 아닌가요? ㅋㅋ" },
  ];

  return (
    <div className="bg-black/60 backdrop-blur rounded-xl p-3 space-y-2 text-xs text-white">
      {chats.map((c, i) => (
        <div key={i} className="flex gap-2">
          <span className="text-sky-400 font-semibold">{c.name}</span>
          <span>{c.text}</span>
        </div>
      ))}
    </div>
  );
}
