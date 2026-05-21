import { motion } from "framer-motion";

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:border-[#008ECE]/40 hover:shadow-2xl hover:shadow-slate-200"
    >
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#003067] text-white transition group-hover:bg-[#008ECE]">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="mt-6 text-xl font-black text-[#003067]">{title}</h3>

      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
    </motion.article>
  );
}