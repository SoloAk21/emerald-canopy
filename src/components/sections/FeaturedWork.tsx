// src/components/sections/FeaturedWork.tsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PROJECTS } from "@/constants/projects";

export default function FeaturedWork() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useLanguage();

  return (
    <section ref={ref} id="featured-work" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-5xl lg:text-7xl font-semibold tracking-[-0.03em] text-gradient animate-gradient">
            {t("featured.title") || "Featured Work"}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group border border-white/10 hover:border-white/30 transition-all overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 text-[10px] font-mono tracking-widest border border-white/20">
                  {project.year}
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-6 bg-emerald-400" />
                  <span className="uppercase text-xs tracking-widest text-white/50">
                    {t(project.categoryKey)}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold mb-8 leading-tight">
                  {t(project.titleKey)}
                </h3>

                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                  {project.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="text-xl font-semibold text-white">
                        {m.value}
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-white/40">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all">
                <ArrowUpRight size={20} className="text-emerald-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
