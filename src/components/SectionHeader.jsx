import { Sparkles } from "lucide-react";

export default function SectionHeader({ eyebrow, title, description, center = false, light = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span
        className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] ${
          light
            ? "border border-white/15 bg-white/10 text-cyan-100"
            : "border border-[#008ECE]/20 bg-[#008ECE]/10 text-[#008ECE]"
        }`}
      >
        <Sparkles className="h-4 w-4" />
        {eyebrow}
      </span>

      <h2
        className={`text-3xl font-black tracking-tight md:text-5xl ${
          light ? "text-white" : "text-[#003067]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-8 md:text-lg ${
            light ? "text-white/70" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}