import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { clients } from "../data/clients";
import { fadeUp, stagger } from "../utils/animations";

export default function Clients() {
  return (
    <section id="clientes" className="relative bg-[#003067] px-5 py-28 lg:px-10 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#008ece]/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/70 mb-6">
            <Sparkles size={13} className="text-[#008ece]" /> Clientes e parceiros
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Relações construídas com<br />confiança e entrega.
          </h2>
          <p className="mt-5 text-base text-white/50 max-w-xl mx-auto leading-8">
            Alguns de nossos clientes que confiam na Construtora Estilos para executar seus projetos com excelência e pontualidade.
          </p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {clients.map((client) => (
  <motion.div
    key={client.name}
    variants={fadeUp}
    className="group flex h-36 items-center justify-center rounded-2xl border border-white/10 bg-white/6 px-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/12">
    <img
      src={client.logo}
      alt={`Logo ${client.name}`}
      className="max-h-24 w-auto object-contain opacity-100 transition-all duration-300 md:opacity-85 md:saturate-[0.85] md:group-hover:scale-105 md:group-hover:opacity-100 md:group-hover:saturate-100 md:group-hover:drop-shadow-[0_12px_28px_rgba(0,142,206,0.35)]"
    />
  </motion.div>
))}
        </motion.div>
      </div>
    </section>
  );
}