import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { stats } from "../data/stats";
import { ease } from "../utils/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#003067] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=90"
          alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#003067] via-[#003067]/90 to-[#008ece]/30" />
      </div>

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#008ece]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-[#003067]/40 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 pt-28 pb-20 lg:px-10 lg:pt-40 w-full">
        <div className="grid lg:grid-cols-[1fr_0.45fr] gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease }}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 backdrop-blur">
              <div className="h-1.5 w-1.5 rounded-full bg-[#008ece] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">Engenharia · Galpões · energia solar</span>
            </motion.div>

            <h1 className="text-5xl font-black tracking-[-0.03em] text-white md:text-7xl lg:text-[82px] leading-[0.95]">
              Construindo<br />
              <span className="text-[#008ece]">soluções,</span><br />
              entregando<br />
              <span className="italic font-light">confiança.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/65 md:text-xl">
              19 anos de excelência na construção de galpões. Do projeto à entrega, com padrão técnico incomparável.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#obras"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#003067] shadow-2xl shadow-black/20 transition-all hover:-translate-y-1 hover:shadow-white/20">
                Ver portifólio completo <ArrowRight size={17} />
              </a>
            </div>
          </motion.div>

          {/* Stats side panel */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8, ease }}
            className="hidden lg:grid gap-4">
            {stats.map(({ value, label }, i) => (
              <motion.div key={label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/6 backdrop-blur p-6 flex items-center gap-5">
                <div className="text-4xl font-black text-[#008ece]">{value}</div>
                <div className="text-sm font-medium text-white/60 leading-snug">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile stats */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-16 grid grid-cols-2 gap-3 lg:hidden">
          {stats.map(({ value, label }) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/6 backdrop-blur p-5">
              <div className="text-3xl font-black text-[#008ece]">{value}</div>
              <div className="text-xs text-white/50 mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-white/30 uppercase tracking-widest">Role para baixo</span>
        <div className="h-10 w-6 rounded-full border border-white/20 flex items-start justify-center p-1.5">
          <motion.div animate={{ y: [0, 14, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-2 w-1.5 rounded-full bg-[#008ece]" />
        </div>
      </motion.div>
    </section>
  );
}
