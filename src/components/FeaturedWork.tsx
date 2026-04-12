// components/FeaturedWork.tsx
/**
 * Tila Digitals — Featured Work
 * Consistent Minimalist Design — No Cards, No Rounding
 * 3 columns on desktop, 1 on mobile
 */

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    id: 1,
    titleKey: "featured.ethio.title",
    categoryKey: "featured.ethio.category",
    image: "/projects/ethio-telecom.jpeg",
    metrics: [
      { label: "Engagement", value: "+380%" },
      { label: "Reach", value: "2.4M" },
      { label: "ROI", value: "312%" },
    ],
    year: "2024",
  },
  {
    id: 2,
    titleKey: "featured.nexus.title",
    categoryKey: "featured.nexus.category",
    image: "/projects/nexus-bank.jpeg",
    metrics: [
      { label: "Impressions", value: "8.2M" },
      { label: "Conversion", value: "+45%" },
      { label: "Reach", value: "2.4M" },
    ],
    year: "2024",
  },
  {
    id: 3,
    titleKey: "featured.lumora.title",
    categoryKey: "featured.lumora.category",
    image: "/projects/lumora.jpeg",
    metrics: [
      { label: "Growth", value: "312%" },
      { label: "Engagement", value: "4.8%" },
      { label: "Followers", value: "1.1M" },
    ],
    year: "2023",
  },
];

export default function FeaturedWork() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={sectionRef}
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 overflow-hidden "
      style={{ fontFamily: "'Nokia Pure', 'Nokia', 'Nokia Sans', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-[-0.03em]">
            <span className="bg-gradient-to-r from-white via-emerald-300 to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
              {t("featured.title") || "Featured Work"}
            </span>
          </h1>
          <p className="mt-2 text-white/40 text-base max-w-xl mx-auto leading-relaxed">
            {t("featured.subtitle") ||
              "Selected projects that define excellence"}
          </p>
        </motion.div>

        {/* Projects Grid - 3 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              {/* No card — border only */}
              <div className="relative h-full border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  {/* Year tag */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/60 border border-white/10">
                    <span className="text-[9px] font-mono text-white/50 tracking-wider">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-px bg-emerald-400/60" />
                    <span className="text-[9px] font-mono tracking-wider text-white/40 uppercase">
                      {t(project.categoryKey)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-white mb-3 leading-tight">
                    {t(project.titleKey)}
                  </h3>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/10">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-left">
                        <div className="text-sm font-bold text-white">
                          {metric.value}
                        </div>
                        <div className="text-[8px] font-mono text-white/30 uppercase tracking-wider">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
                  <ArrowUpRight
                    size={14}
                    className="text-white/40 group-hover:text-emerald-400"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-transparent text-white/60 text-xs tracking-wide border border-white/20 hover:border-white/40 hover:text-white transition-all duration-300"
          >
            <span>{t("featured.view_all") || "View All Projects"}</span>
            <ArrowUpRight size={12} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
