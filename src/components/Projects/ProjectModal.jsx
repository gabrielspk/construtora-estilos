import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Factory,
  MapPin,
  X,
} from "lucide-react";
import { ease } from "../../utils/animations";

export default function ProjectModal({ project, onClose }) {
  const [imgIdx, setImgIdx] = useState(0);
  const images = project?.images?.length ? project.images : project?.cover ? [project.cover] : [];
  const hasImages = images.length > 0;

  const next = useCallback(() => {
    if (hasImages) setImgIdx((value) => (value + 1) % images.length);
  }, [hasImages, images.length]);

  const prev = useCallback(() => {
    if (hasImages) {
      setImgIdx((value) => (value - 1 + images.length) % images.length);
    }
  }, [hasImages, images.length]);

  useEffect(() => {
    if (!project) return;

    const scrollY = window.scrollY;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyStyles = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
    };

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyStyles.overflow;
      document.body.style.position = previousBodyStyles.position;
      document.body.style.top = previousBodyStyles.top;
      document.body.style.width = previousBodyStyles.width;
      window.scrollTo(0, scrollY);
    };
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const handler = (event) => {
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, onClose, prev, project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/85 p-3 backdrop-blur-md sm:p-4"
          onClick={(event) => event.target === event.currentTarget && onClose()}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease }}
            className="relative flex h-[calc(100svh-1.5rem)] max-h-[calc(100svh-1.5rem)] w-full max-w-6xl flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-2xl sm:rounded-[2rem] lg:h-auto lg:max-h-[92vh] lg:rounded-[2.5rem]"
          >
            <button
              onClick={onClose}
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#003067] shadow-lg backdrop-blur transition-colors hover:bg-white sm:right-5 sm:top-5"
              aria-label="Fechar obra"
            >
              <X size={18} />
            </button>

            <div className="grid min-h-0 flex-1 overflow-y-auto overscroll-contain lg:grid-cols-[1fr_380px] lg:overflow-hidden">
              <div className="relative h-[280px] min-h-[280px] overflow-hidden bg-[#003067] sm:h-[340px] sm:min-h-[340px] lg:h-auto lg:min-h-[420px]">
                {hasImages ? (
                  <>
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={images[imgIdx]}
                        src={images[imgIdx]}
                        alt={project.name}
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.4 }}
                        className="h-full w-full object-cover"
                      />
                    </AnimatePresence>

                    {images.length > 1 && (
                      <>
                        <button
                          onClick={prev}
                          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#003067] shadow-xl backdrop-blur transition-all hover:scale-105 hover:bg-white sm:left-4 sm:h-12 sm:w-12"
                          aria-label="Imagem anterior"
                        >
                          <ChevronLeft size={22} />
                        </button>
                        <button
                          onClick={next}
                          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#003067] shadow-xl backdrop-blur transition-all hover:scale-105 hover:bg-white sm:right-4 sm:h-12 sm:w-12"
                          aria-label="Próxima imagem"
                        >
                          <ChevronRight size={22} />
                        </button>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
                          {imgIdx + 1} / {images.length}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="flex h-full min-h-[280px] items-center justify-center p-8 text-center text-sm font-semibold text-white/80 sm:min-h-[340px] lg:min-h-[420px]">
                    Nenhuma imagem cadastrada para esta obra.
                  </div>
                )}
              </div>

              <aside className="flex min-w-0 flex-col bg-white p-5 sm:p-6 lg:min-h-0 lg:overflow-y-auto lg:p-8">
                <span className={`mb-4 self-start rounded-full px-3 py-1.5 text-xs font-bold sm:mb-6 ${getCategoryInfoClass(project.category)}`}>
                  {project.category}
                </span>

                <h2 className="text-xl font-black leading-tight text-[#003067] sm:text-2xl">{project.name}</h2>

                <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:gap-3">
                  {[
                    { label: "Localização", value: project.location, Icon: MapPin },
                    { label: "Ano", value: project.year, Icon: CalendarDays },
                    { label: "Área", value: project.area, Icon: Building2 },
                    { label: "Categoria", value: project.category, Icon: Factory },
                  ].map(({ label, value, Icon }) => (
                    <div key={label} className="min-w-0 rounded-2xl bg-slate-50 p-3 sm:p-4">
                      <div className="mb-1.5 flex items-center gap-1.5 text-xs text-slate-400">
                        <Icon size={12} /> {label}
                      </div>
                      <div className="break-words text-xs font-bold text-[#003067] sm:text-sm">{value}</div>
                    </div>
                  ))}
                </div>

                <p className="mt-5 flex-1 text-sm leading-6 text-slate-500 sm:mt-6 sm:leading-7">{project.description}</p>

                {images.length > 1 && (
                  <div className="mt-6 flex gap-2.5 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
                    {images.map((img, index) => (
                      <button
                        key={img}
                        onClick={() => setImgIdx(index)}
                        className={`w-24 shrink-0 overflow-hidden rounded-xl border-2 transition-all lg:w-auto ${index === imgIdx ? "scale-95 border-[#008ece] shadow-lg shadow-[#008ece]/20" : "border-transparent hover:border-slate-200"}`}
                      >
                        <img src={img} alt="" className="h-14 w-full object-cover sm:h-16" />
                      </button>
                    ))}
                  </div>
                )}
              </aside>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function getCategoryInfoClass(category) {
  const categories = {
    Fotovoltaico: "bg-amber-100 text-amber-700",
    Comercial: "bg-emerald-100 text-emerald-700",
    Industrial: "bg-slate-100 text-slate-700",
  };

  return categories[category] ?? "bg-blue-100 text-blue-700";
}
