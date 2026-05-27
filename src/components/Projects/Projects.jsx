import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { projectCategories, projects } from "../../data/projects";
import { fadeUp } from "../../utils/animations";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("Todos");

  const filtered =
    filter === "Todos" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="obras" className="bg-white px-5 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 mb-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#008ece]/20 bg-[#008ece]/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#003067] mb-6">
              <Sparkles size={13} className="text-[#008ece]" /> Portfólio de obras
            </span>
            <h2 className="text-4xl font-black tracking-tight text-[#003067] md:text-5xl">
              Galeria de obras realizadas<br />com excelência
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-500 max-w-xl">
              Cada projeto representa nosso comprometimento com qualidade, prazo e resultado superior. Clique em uma obra para explorar a galeria completa.
            </p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10">
          {projectCategories.map((category) => (
            <button key={category} onClick={() => setFilter(category)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${filter === category ? "bg-[#003067] text-white shadow-lg shadow-[#003067]/20" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={setSelected} />
          ))}
        </motion.div>
      </div>

      <ProjectModal key={selected?.id ?? "empty"} project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
