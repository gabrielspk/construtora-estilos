import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import logoHeader from "../assets/brand/logo/construtora_estilos_logo.svg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = ["Sobre", "Serviços", "Obras", "Clientes", "Contato"];
  const logo = (
    <img
      src={logoHeader}
      alt="Construtora Estilos"
      className="h-20 w-auto max-w-[220px] rounded-md object-contain sm:h-24 sm:max-w-[260px] lg:max-w-[280px]"
    />
  );

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/60 border-b border-slate-100" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        {logo}

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}
              className={`text-sm font-medium transition-colors ${scrolled ? "text-slate-600 hover:text-[#003067]" : "text-white/80 hover:text-white"}`}>
              {link}
            </a>
          ))}
        </nav>

        <a href="#contato"
          className={`hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${scrolled ? "bg-[#003067] text-white shadow-lg shadow-[#003067]/20" : "bg-white text-[#003067] shadow-xl shadow-black/10"}`}>
          Fale conosco <ArrowUpRight size={15} />
        </a>

        <button className={`md:hidden ${scrolled ? "text-[#003067]" : "text-white"}`} onClick={() => setOpen(true)}>
          <Menu size={22} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 bg-[#003067] flex flex-col p-8">
            <div className="flex items-center justify-between mb-16">
              {logo}
              <button className="text-white/70 hover:text-white" onClick={() => setOpen(false)}><X size={24} /></button>
            </div>
            <div className="grid gap-2">
              {links.map((link, i) => (
                <motion.a key={link} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}
                  onClick={() => setOpen(false)} href={`#${link.toLowerCase()}`}
                  className="group flex items-center justify-between py-5 border-b border-white/10 text-2xl font-bold text-white">
                  {link}
                  <ArrowRight size={20} className="text-white/30 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
            <a href="#contato" onClick={() => setOpen(false)}
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#003067]">
              Entrar em contato <ArrowRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
