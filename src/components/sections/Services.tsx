// src/components/sections/Services.tsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
    accent: "emerald" as const,
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
    accent: "blue" as const,
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
    accent: "amber" as const,
    iconBg: "from-amber-500/20 to-amber-600/10",
    features: ["services.viral.f1", "services.viral.f2", "services.viral.f3"],
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useLanguage();

  return (
    <section ref={ref} id="services" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.95] text-gradient animate-gradient">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            {t("services.subtitle") ||
              "Enterprise-grade digital solutions powered by cutting-edge technology"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative border border-white/10 bg-white/[0.015] hover:bg-white/[0.03] transition-all duration-300 overflow-hidden"
              >
                <div className="p-8 h-full flex flex-col">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.iconBg} mb-6`}
                  >
                    <Icon
                      size={26}
                      className={
                        service.accent === "emerald"
                          ? "text-emerald-400"
                          : service.accent === "blue"
                            ? "text-blue-400"
                            : "text-amber-400"
                      }
                    />
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-white/60 text-[15px] leading-relaxed mb-8">
                    {t(service.descKey)}
                  </p>

                  <div className="mt-auto space-y-3">
                    {service.features.map((key, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-sm text-white/70 group-hover:text-white/90 transition-colors"
                      >
                        <ChevronRight
                          size={18}
                          className="text-emerald-400 flex-shrink-0"
                        />
                        <span>{t(key)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <p className="text-white/50 mb-4">
            Ready to transform your digital presence?
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold hover:bg-emerald-50 transition-colors"
          >
            Explore all services <ArrowRight />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
