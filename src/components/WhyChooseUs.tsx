/**
 * Tila Digitals — Why Choose Us Section
 * Consistent design system — single color accent (emerald)
 * 6 items per row on desktop, 2 per row on mobile
 * Reduced metric text size
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Zap,
  Users,
  BarChart3,
  Clock,
  TrendingUp,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { t } = useLanguage();

  const features = [
    {
      icon: TrendingUp,
      titleKey: "edge.strategy.title",
      descKey: "edge.strategy.desc",
      metricKey: "edge.strategy.m",
    },
    {
      icon: BarChart3,
      titleKey: "edge.results.title",
      descKey: "edge.results.desc",
      metricKey: "edge.results.m",
    },
    {
      icon: Zap,
      titleKey: "edge.execution.title",
      descKey: "edge.execution.desc",
      metricKey: "edge.execution.m",
    },
    {
      icon: Users,
      titleKey: "edge.expertise.title",
      descKey: "edge.expertise.desc",
      metricKey: "edge.expertise.m",
    },
    {
      icon: Shield,
      titleKey: "services.shield.title",
      descKey: "services.shield.desc",
      metricKey: "services.shield.m1_val",
    },
    {
      icon: Clock,
      titleKey: "services.growth.title",
      descKey: "services.growth.desc",
      metricKey: "services.growth.m1_val",
    },
  ];

  // Single accent color — emerald only
  const accentStyles = {
    icon: "text-emerald-400/70 group-hover:text-emerald-300",
    metric: "text-emerald-400/80",
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-8 sm:py-10 md:py-12 lg:py-14"
      style={{ fontFamily: "'Nokia Pure', 'Nokia', 'Nokia Sans', sans-serif" }}
    >
      {/* Background Gradient — minimal */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-[-0.03em]">
            <span className="block mb-2 bg-gradient-to-b from-white via-white to-emerald-300/50 bg-clip-text text-transparent">
              {t("edge.title")}
            </span>
            <span className="bg-emerald-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
              {t("edge.brand")}
            </span>
          </h2>
          <p className="mt-2 text-white/40 text-base max-w-xl mx-auto leading-relaxed">
            {t("trackrecord.subtitle") ||
              "Track record of excellence and innovation"}
          </p>
        </motion.div>

        {/* Features Grid - 6 on desktop, 2 on mobile - NO CARD BACKGROUNDS */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {features.map((feature, idx) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                {/* No background div - direct content */}
                <div className="relative h-full">
                  {/* Icon */}
                  <div className="flex justify-center mb-3">
                    <div className="p-2 rounded-xl bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                      <Icon
                        size={22}
                        className={`transition-all duration-300 ${accentStyles.icon}`}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-sm text-center mb-2 tracking-tight leading-tight">
                    {t(feature.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-white/40 text-[10px] sm:text-xs text-center leading-relaxed mb-3">
                    {t(feature.descKey)}
                  </p>

                  {/* Metric — smaller text size */}
                  <div className="text-center pt-2 border-t border-white/5">
                    <div className="flex items-baseline justify-center gap-0.5">
                      <span
                        className={`text-xs sm:text-sm font-medium ${accentStyles.metric}`}
                      >
                        {t(feature.metricKey)}
                      </span>
                      <span className="text-white/20 text-[9px] sm:text-[10px]">
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        {/* CTA Section — Advanced Creative Design */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative mt-20 sm:mt-24"
        >
          {/* Main container — no rounded corners */}
          <div className="relative bg-white/[0.02] border border-white/10 p-8 sm:p-12 md:p-16">
            {/* Corner brackets — architectural detail */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-white/20" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-white/20" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-white/20" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-white/20" />

            {/* Inner content — side by side layout */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
              {/* Left side — text content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-3">
                  {t("edge.cta")}
                </h3>
                <p className="text-white/40 text-sm sm:text-base max-w-md lg:max-w-none leading-relaxed">
                  {t("edge.cta_sub")}
                </p>
              </div>

              {/* Right side — button */}
              <div className="flex-shrink-0">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3 sm:py-4 bg-emerald-500 text-white font-bold text-sm sm:text-base tracking-wide transition-all duration-300 overflow-hidden"
                >
                  {/* Button text */}
                  <span className="relative z-10">{t("edge.cta_btn")}</span>

                  {/* Animated arrow */}
                  <motion.span
                    className="relative z-10"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  >
                    <ChevronRight size={16} />
                  </motion.span>

                  {/* Creative hover effect — diagonal sweep */}
                  <motion.div
                    className="absolute inset-0 bg-white/15"
                    initial={{ x: "-100%", y: "-100%", rotate: 45 }}
                    whileHover={{ x: 0, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
