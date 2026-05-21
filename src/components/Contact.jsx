import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, Sparkles, Users } from "lucide-react";
import { fadeUp, stagger } from "../utils/animations";

export default function Contact() {
  const whatsappNumber = "551127777240";
  const whatsappMessage = "Olá! Vim pelo site e gostaria de solicitar um orçamento.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const items = [
    { icon: Phone, label: "Telefone", value: "(11) 2777-7240", sub: "Seg–Sex, 8h às 17h" },
    { icon: Mail, label: "E-mail", value: "contato@construtoraestilos.com.br", sub: "Resposta em até 24h" },
    { icon: MapPin, label: "Endereço", value: "Av. Tenente Marques, 1250 Cajamar - SP", sub: "Atendemos todo o estado" },
    { icon: Users, label: "WhatsApp", value: "(11) 2777-7240"},
  ];

  return (
    <section id="contato" className="bg-slate-50 px-5 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#008ece]/20 bg-[#008ece]/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#003067] mb-6">
                <Sparkles size={13} className="text-[#008ece]" /> Contato
              </span>
              <h2 className="text-4xl font-black tracking-tight text-[#003067] md:text-5xl">
                Vamos transformar seu projeto em realidade.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-500">
                Entre em contato para apresentar sua necessidade e receber uma proposta personalizada alinhada ao padrão da sua obra.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#003067] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#003067]/25 transition-all hover:-translate-y-0.5 hover:bg-[#008ece]">
                Chamar no WhatsApp <ArrowRight size={17} />
              </a>
              <a href="mailto:contato@construtoraestilos.com.br"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-[#003067] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#008ece]">
                Enviar e-mail
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4">
            {items.map(({ icon: Icon, label, value, sub }) => (
              <motion.div key={label} variants={fadeUp}
                className="group rounded-[2rem] border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60 hover:border-[#008ece]/30">
                <div className="h-12 w-12 rounded-2xl bg-[#008ece]/10 flex items-center justify-center text-[#008ece] mb-5 transition-transform group-hover:scale-110">
                  <Icon size={22} />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{label}</p>
                <p className="mt-1.5 font-bold text-[#003067]">{value}</p>
                <p className="mt-1 text-xs text-slate-400">{sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
