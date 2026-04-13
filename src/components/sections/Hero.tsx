// src/components/sections/Hero.tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroProps {
  onVideoClick: () => void;
}

export default function Hero({ onVideoClick }: HeroProps) {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 100]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen overflow-hidden flex items-center text-white">
      {/* Hero Image - Only visible on lg screens and above */}
      <motion.div style={{ y }} className="absolute inset-0 hidden lg:block">
        <img
          src="/hero-bg.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 max-w-5xl px-6 lg:px-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[2.1rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.95]"
        >
          <span className="text-gradient animate-gradient block whitespace-pre-line">
            {t("hero.title")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-white/80 max-w-xl"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <motion.button
            onClick={() => scrollTo("services")}
            className="px-8 py-4 bg-white text-black font-semibold flex items-center gap-3 hover:bg-emerald-50"
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
          >
            {t("hero.cta_start")} <ArrowRight />
          </motion.button>

          <motion.button
            onClick={() => scrollTo("why-choose-us")}
            className="px-8 py-4 border border-white/30 text-white hover:border-white hover:text-white"
            whileHover={{ scale: 0.98 }}
          >
            {t("hero.cta_more")}
          </motion.button>

          <motion.button
            onClick={onVideoClick}
            className="px-6 py-4 text-white/80 hover:text-white flex items-center gap-2"
            whileHover={{ scale: 0.98 }}
          >
            <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full" />
            </div>
            Watch Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
