import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export default function ProjectCard({ project, onSelect }) {
  return (
    <AnimatePresence>
      <motion.button
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.35 }}
        onClick={() => onSelect(project)}
        className="group relative min-h-[300px] overflow-hidden rounded-[2rem] text-left shadow-xl shadow-slate-200/60 sm:min-h-[360px]"
      >
        <img
          src={project.cover}
          alt={project.name}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#003067]/95 via-[#003067]/40 to-transparent" />

        <div className="absolute top-5 left-5">
          <span className={`rounded-full px-3 py-1 text-xs font-bold backdrop-blur ${getCategoryBadgeClass(project.category)}`}>
            {project.category}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <div className="flex items-center gap-2 text-xs text-white/60 mb-2">
            <MapPin size={12} /> {project.location} · {project.area}
          </div>
          <h3 className="text-xl font-bold leading-tight">{project.name}</h3>
          <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#008ece] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <span>Ver galeria completa</span> <ArrowRight size={14} />
          </div>
        </div>
      </motion.button>
    </AnimatePresence>
  );
}

function getCategoryBadgeClass(category) {
  const categories = {
    Fotovoltaico: "bg-amber-500/90 text-white",
    Comercial: "bg-emerald-500/90 text-white",
    Industrial: "bg-slate-700/90 text-white",
  };

  return categories[category] ?? "bg-[#008ece]/90 text-white";
}
