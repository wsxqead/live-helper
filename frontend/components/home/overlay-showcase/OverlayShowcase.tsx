// components/home/overlay-showcase/OverlayShowcase.tsx
import SubtitleDemo from "./SubtitleDemo";
import GoalDemo from "./GoalDemo";
import ChatDemo from "./ChatDemo";
import AlertDemo from "./AlertDemo";

export default function OverlayShowcase() {
  return (
    <div className="relative rounded-3xl bg-slate-900/90 shadow-2xl p-6 space-y-4 overflow-hidden">
      <SubtitleDemo />
      <GoalDemo />
      <ChatDemo />
      <AlertDemo />
    </div>
  );
}
