import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { services } from "../data/services";
import { fadeUp, stagger } from "../utils/animations";

export default function Services() {
  return (
    <section id="serviços" className="bg-slate-50 px-5 py-28 lg:px-10 lg:py-36 relative overflow-hidden">
      {/* bg decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#008ece]/4 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 mb-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#008ece]/20 bg-[#008ece]/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#003067] mb-6">
              <Sparkles size={13} className="text-[#008ece]" /> Serviços
            </span>
            <h2 className="text-4xl font-black tracking-tight text-[#003067] md:text-5xl">
              Soluções completas para<br />construir, ampliar e modernizar.
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="max-w-xs text-sm leading-7 text-slate-500 lg:text-right">
            Do planejamento à entrega, cada projeto recebe atenção técnica, acabamento profissional e gestão orientada a resultado.
          </motion.p>
        </div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <motion.article key={title} variants={fadeUp}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/60 cursor-default">
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#008ece]/0 to-[#003067]/0 transition-all duration-500 group-hover:from-[#008ece]/5 group-hover:to-[#003067]/5" />

              <div className="relative">
                <div className="h-14 w-14 rounded-2xl bg-[#003067] flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#008ece] group-hover:scale-110">
                  <Icon size={26} />
                </div>
                <h3 className="mt-7 text-xl font-bold text-[#003067]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-500">{text}</p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#008ece] to-[#003067] transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
