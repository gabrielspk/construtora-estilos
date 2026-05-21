import { motion } from "framer-motion";
import { Award, CheckCircle2, Globe, Sparkles, Zap } from "lucide-react";
import { ease, fadeUp, stagger } from "../utils/animations";

export default function About() {
  const pillars = [
    { icon: Award, title: "Missão", text: "Entregar obras sólidas, funcionais e alinhadas ao melhor custo-benefício para nossos clientes.", color: "bg-blue-50 text-[#008ece]" },
    { icon: Globe, title: "Visão", text: "Ser referência nacional em construções de galpões de alto padrão.", color: "bg-slate-50 text-[#003067]" },
    { icon: Zap, title: "Valores", text: "Respeito, transparência, qualidade, segurança e compromisso com cada projeto entregue.", color: "bg-amber-50 text-amber-600" },
  ];

  return (
    <section id="sobre" className="bg-white px-5 py-28 lg:px-10 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left column */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#008ece]/20 bg-[#008ece]/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#003067] mb-6">
                <Sparkles size={13} className="text-[#008ece]" /> Sobre a empresa
              </span>
              <h2 className="text-4xl font-black tracking-tight text-[#003067] md:text-5xl lg:text-[52px] leading-[1.05]">
                Excelência na construção de galpões de alto desempenho.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-500">
                A Construtora Estilos atua no desenvolvimento e execução de galpões corporativos, industriais e comerciais, entregando soluções inteligentes para empresas que buscam segurança, qualidade e eficiência.
              </p>
            </motion.div>

            {/* Differentials */}
            <motion.div variants={fadeUp} className="mt-10 space-y-3">
              {[
                "Equipe técnica altamente especializada",
                "Gestão integrada do projeto à entrega",
                "Materiais certificados e de primeira linha",
                "Suporte pós-obra e garantia estrutural",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#008ece] flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-600">{item}</span>
                </div>
              ))}
            </motion.div>


          </motion.div>

          {/* Right column – image + badge */}
          <motion.div initial={{ opacity: 0, scale: 0.94, x: 30 }} whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease }} className="relative">
            {/* Decorative elements */}
            <div className="absolute -right-8 -top-8 h-72 w-72 rounded-full bg-[#008ece]/10 blur-3xl" />
            <div className="absolute -left-8 -bottom-8 h-48 w-48 rounded-full bg-[#003067]/8 blur-2xl" />

            {/* Main image */}
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-slate-300/50">
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85"
                alt="Equipe Construtora Estilos" className="h-[560px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003067]/40 to-transparent" />
            </div>

            {/* Floating badge – experience */}
            <div className="absolute -bottom-6 -left-6 rounded-3xl bg-white p-7 shadow-2xl shadow-slate-200/80 border border-slate-100">
              <div className="text-5xl font-black text-[#003067]">19<span className="text-[#008ece]">+</span></div>
              <div className="mt-1 text-sm font-semibold text-slate-500">Anos de<br />experiência</div>
            </div>

            {/* Floating badge – projects */}
            <div className="absolute -top-4 -right-4 rounded-2xl bg-[#003067] px-5 py-4 shadow-xl">
              <div className="text-2xl font-black text-white">200<span className="text-[#008ece]">+</span></div>
              <div className="text-xs font-medium text-white/60 mt-0.5">Obras entregues</div>
            </div>
          </motion.div>
        </div>

        {/* Mission / Vision / Values */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          className="mt-20 grid gap-5 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text, color }) => (
            <motion.div key={title} variants={fadeUp}
              className="group rounded-[1.75rem] border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/60">
              <div className={`h-12 w-12 rounded-2xl ${color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-bold text-[#003067]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
