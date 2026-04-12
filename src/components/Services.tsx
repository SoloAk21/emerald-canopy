import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Shield,
  TrendingUp,
  Zap,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  {
    id: "shield",
    icon: Shield,
    titleKey: "services.shield.title",
    descKey: "services.shield.desc",
    accent: "emerald",
    iconBg: "from-emerald-500/20 to-emerald-600/10",
    features: [
      "services.shield.f1",
      "services.shield.f2",
      "services.shield.f3",
    ],
  },
  {
    id: "growth",
    icon: TrendingUp,
    titleKey: "services.growth.title",
    descKey: "services.growth.desc",
    accent: "blue",
    iconBg: "from-blue-500/20 to-blue-600/10",
    features: [
      "services.growth.f1",
      "services.growth.f2",
      "services.growth.f3",
    ],
  },
  {
    id: "viral",
    icon: Zap,
    titleKey: "services.viral.title",
    descKey: "services.viral.desc",
    accent: "amber",
    iconBg: "from-amber-500/20 to-amber-600/10",
    features: ["services.viral.f1", "services.viral.f2", "services.viral.f3"],
  },
];

export default function Services() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28"
      style={{ fontFamily: "'Nokia Pure', 'Nokia', 'Nokia Sans', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-[-0.03em]">
            <span className="relative z-10 bg-gradient-to-r from-white via-emerald-300 to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
              {t("services.title")}
            </span>
          </h1>
          <p className="mt-2 text-white/60 text-base max-w-xl mx-auto leading-relaxed">
            {t("services.subtitle") ||
              "Enterprise-grade digital solutions powered by cutting-edge technology"}
          </p>
        </motion.div>

        {/* Services Grid - 3 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className="relative h-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 overflow-hidden">
                  {/* Micro gradient glow layer */}
                  <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-emerald-300/20 to-white/10 opacity-20 blur-[10px] pointer-events-none" />
                  <div className="p-3 sm:p-4 md:p-5 lg:p-7 h-full flex flex-col relative z-10">
                    {/* Icon + Title */}
                    <div className="flex flex-col items-start gap-2 mb-3 sm:mb-4">
                      <div
                        className={`inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gradient-to-br ${service.iconBg} border border-white/10`}
                      >
                        <Icon
                          size={16}
                          className={`transition-all duration-300 sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5 ${
                            service.accent === "emerald"
                              ? "text-emerald-400 group-hover:text-emerald-300"
                              : service.accent === "blue"
                                ? "text-blue-400 group-hover:text-blue-300"
                                : "text-amber-400 group-hover:text-amber-300"
                          }`}
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3 className="text-xs sm:text-sm md:text-base lg:text-xl font-semibold tracking-tight text-white leading-tight">
                        {t(service.titleKey)}
                      </h3>
                    </div>

                    {/* Description - hidden on very small, visible on tablet+ */}
                    <p className="hidden sm:block text-[10px] sm:text-xs md:text-sm text-white/50 leading-relaxed mb-3 sm:mb-4 lg:mb-5">
                      {t(service.descKey)}
                    </p>

                    {/* Features */}
                    <div className="space-y-1 sm:space-y-1.5 md:space-y-2 mt-auto">
                      {service.features.map((featureKey, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] md:text-xs text-white/50 group-hover:text-white/70 transition-colors"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.3 + index * 0.1 + idx * 0.05 }}
                        >
                          <ChevronRight
                            size={10}
                            className={`flex-shrink-0 ${
                              service.accent === "emerald"
                                ? "text-emerald-400"
                                : service.accent === "blue"
                                  ? "text-blue-400"
                                  : "text-amber-400"
                            }`}
                          />
                          <span className="line-clamp-1">{t(featureKey)}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <div>
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-3">
              {t("services.cta") || "Ready to transform your digital presence?"}
            </h4>
            <p className="text-white/40 text-xs sm:text-sm mb-4 sm:mb-6">
              Join 500+ businesses already scaling with Tila Digitals
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-black text-xs sm:text-base font-medium hover:bg-emerald-50 transition-colors"
              style={{
                fontFamily: "'Nokia Pure', 'Nokia', 'Nokia Sans', sans-serif",
              }}
            >
              {t("services.cta_btn") || "Explore all services"}
              <ArrowRight size={14} className="sm:w-4 sm:h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
