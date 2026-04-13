import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { WHY_CHOOSE_US_FEATURES } from "@/constants/whyChooseUs";

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useLanguage();

  return (
    <section
      ref={ref}
      id="why-choose-us"
      className="relative py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl lg:text-7xl font-semibold tracking-[-0.03em] leading-none">
            <span className="text-gradient">{t("edge.title")}</span>{" "}
            <span className="text-emerald-500 animate-gradient">
              {t("edge.brand")}
            </span>
          </h2>

          <p className="mt-4 text-white/50 max-w-xl mx-auto text-lg">
            {t("trackrecord.subtitle") ||
              "Track record of excellence and innovation"}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {WHY_CHOOSE_US_FEATURES.map((feature, i) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="group text-center"
              >
                <div className="mx-auto mb-6 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                  <Icon
                    size={26}
                    className="text-emerald-400/70 group-hover:text-emerald-300 transition-colors"
                    strokeWidth={1.6}
                  />
                </div>

                <h3 className="font-semibold text-white mb-3 text-lg tracking-tight">
                  {t(feature.titleKey)}
                </h3>

                <p className="text-sm text-white/60 mb-6 leading-relaxed min-h-[3.5rem]">
                  {t(feature.descKey)}
                </p>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-emerald-400 text-lg font-medium">
                    {t(feature.metricKey)}
                  </span>
                  <span className="text-white/20 text-sm ml-1">+</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mt-24 glass border border-white/10 p-12 md:p-16"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-3">
                {t("edge.cta")}
              </h3>
              <p className="text-white/60 max-w-md">{t("edge.cta_sub")}</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 sm:px-10 py-5 text-sm sm:text-base transition-all rounded-none"
            >
              {t("edge.cta_btn")}
              <ChevronRight
                className="group-hover:translate-x-1 transition-transform"
                size={22}
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
