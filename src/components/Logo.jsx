import { Building2 } from "lucide-react";

export default function Logo({ dark = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${dark ? "bg-[#003067]" : "bg-white"} shadow`}>
        <Building2 size={20} className={dark ? "text-white" : "text-[#003067]"} />
      </div>
      <div className="leading-tight">
        <p className={`text-[10px] font-bold uppercase tracking-[0.22em] ${dark ? "text-[#003067]/70" : "text-white/70"}`}>Construtora</p>
        <p className={`text-lg font-bold ${dark ? "text-[#003067]" : "text-white"} leading-none`}>Estilos</p>
      </div>
    </div>
  );
}
