import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroProps {
  onContactClick: () => void;
  onVideoClick: () => void;
}

export default function Hero({ onContactClick, onVideoClick }: HeroProps) {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 80]);

  // Smooth scroll to services section
  const handleStartClick = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Smooth scroll to about/why choose us section
  const handleMoreClick = () => {
    const whyChooseUsSection = document.getElementById("why-choose-us");
    if (whyChooseUsSection) {
      whyChooseUsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden text-white"
      style={{ fontFamily: "'Nokia', system-ui, sans-serif" }}
    >
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 lg:px-20">
        <div className="max-w-5xl">
          {/* Heading with Detailed Lighter Black Shadows */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative text-[2.1rem] sm:text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-[-0.03em] whitespace-pre-line"
          >
            {/* Main Gradient Text */}
            <span className="relative z-20 bg-gradient-to-r from-white via-emerald-300 to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
              {t("hero.title")}
            </span>

            {/* Layer 1: Outer glow shadow - lighter black */}
            <span className="absolute inset-0 z-10 text-transparent [text-shadow:0_0_30px_rgba(0,0,0,0.15),0_0_60px_rgba(0,0,0,0.08),0_0_90px_rgba(0,0,0,0.04)]">
              {t("hero.title")}
            </span>

            {/* Layer 2: Deep blur shadow - lighter black */}
            <span className="absolute inset-0 z-0 blur-[20px] opacity-20 bg-gradient-to-r from-black/30 via-black/20 to-black/30 bg-clip-text text-transparent">
              {t("hero.title")}
            </span>

            {/* Layer 3: Soft spread shadow - very light black */}
            <span className="absolute inset-0 z-0 text-transparent [text-shadow:0_10px_30px_rgba(0,0,0,0.15),0_20px_40px_rgba(0,0,0,0.08)]">
              {t("hero.title")}
            </span>

            {/* Layer 4: Directional shadow - bottom right - light */}
            <span className="absolute inset-0 z-0 translate-x-[3px] translate-y-[3px] text-transparent [text-shadow:0_1px_2px_rgba(0,0,0,0.15)] opacity-60">
              {t("hero.title")}
            </span>

            {/* Layer 5: Directional shadow - bottom left - lighter */}
            <span className="absolute inset-0 z-0 translate-x-[-2px] translate-y-[2px] text-transparent [text-shadow:0_1px_1px_rgba(0,0,0,0.1)] opacity-40">
              {t("hero.title")}
            </span>

            {/* Layer 6: Deep dark shadow for depth - softened */}
            <span className="absolute inset-0 z-0 translate-y-[4px] text-transparent [text-shadow:0_4px_8px_rgba(0,0,0,0.12)] opacity-50">
              {t("hero.title")}
            </span>

            {/* Layer 7: Subtle black shadow from gradient */}
            <span className="absolute inset-0 z-0 blur-[3px] bg-gradient-to-r from-black/20 via-black/10 to-black/20 bg-clip-text text-transparent">
              {t("hero.title")}
            </span>

            {/* Layer 8: Multiple text-shadows combined - lighter black layers */}
            <span
              className="absolute inset-0 z-0 text-transparent"
              style={{
                textShadow: `
                0 1px 0 rgba(0,0,0,0.08),
                0 2px 0 rgba(0,0,0,0.06),
                0 3px 0 rgba(0,0,0,0.04),
                0 4px 0 rgba(0,0,0,0.02),
                0 5px 10px rgba(0,0,0,0.08),
                0 10px 20px rgba(0,0,0,0.06),
                0 15px 30px rgba(0,0,0,0.04),
                0 20px 40px rgba(0,0,0,0.02)
              `,
              }}
            >
              {t("hero.title")}
            </span>

            {/* Layer 9: Soft black glow effect */}
            <span className="absolute inset-0 z-0 blur-[12px] opacity-15 bg-gradient-to-r from-black/40 via-black/20 to-black/40 bg-clip-text text-transparent">
              {t("hero.title")}
            </span>

            {/* Layer 10: Subtle black highlight */}
            <span className="absolute inset-0 z-0 blur-[8px] opacity-10 text-black">
              {t("hero.title")}
            </span>

            {/* Existing decorative layers preserved */}
            <span className="absolute inset-0 blur-[6px] opacity-30 bg-gradient-to-r from-white via-emerald-300 to-white bg-clip-text text-transparent">
              {t("hero.title")}
            </span>
            <span className="absolute inset-0 text-transparent [-webkit-text-stroke:0.8px_rgba(255,255,255,0.25)]">
              {t("hero.title")}
            </span>
            <span className="absolute inset-0 translate-x-[0.5px] translate-y-[0.5px] text-transparent [-webkit-text-stroke:0.6px_rgba(255,255,255,0.18)]" />
            <span className="absolute inset-0 translate-x-[1px] translate-y-[1px] text-transparent [-webkit-text-stroke:0.5px_rgba(255,255,255,0.12)]" />
            <span className="absolute inset-0 translate-x-[1.5px] translate-y-[1.5px] text-transparent [-webkit-text-stroke:0.4px_rgba(255,255,255,0.08)]" />
            <span className="absolute inset-0 translate-x-[2px] translate-y-[2px] text-black/10 blur-[1px]">
              {t("hero.title")}
            </span>
            <span className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent bg-clip-text text-transparent opacity-60">
              {t("hero.title")}
            </span>
          </motion.h1>

          {/* Subtext with lighter shadow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-white/80 text-base max-w-xl leading-relaxed [text-shadow:0_2px_4px_rgba(0,0,0,0.1)]"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex items-center gap-4 flex-wrap"
          >
            {/* Primary CTA - Get Started */}
            <motion.button
              onClick={handleStartClick}
              className="px-6 py-3 bg-white text-black text-sm sm:text-base font-medium flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg"
              style={{ borderRadius: 0 }}
              whileHover={{ scale: 0.97 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.cta_start")}
              <ArrowRight size={16} />
            </motion.button>

            {/* Secondary CTA - Learn More */}
            <motion.button
              onClick={handleMoreClick}
              className="px-6 py-3 border border-white/20 text-sm sm:text-base text-white/70 hover:text-white hover:border-white/40 transition-all duration-200 backdrop-blur-sm"
              style={{ borderRadius: 0 }}
              whileHover={{ scale: 0.97 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.cta_more")}
            </motion.button>

            {/* Video CTA */}
            <motion.button
              onClick={onVideoClick}
              className="px-6 py-3 text-sm sm:text-base text-white/70 hover:text-white transition-all duration-200 flex items-center gap-2 backdrop-blur-sm"
              style={{ borderRadius: 0 }}
              whileHover={{ scale: 0.97 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3L19 12L5 21V3Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              Watch Demo
            </motion.button>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% auto;
        }
        
        /* Additional shadow animation */
        @keyframes shadowPulse {
          0%, 100% {
            filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.08));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.12));
          }
        }
      `}</style>
    </section>
  );
}
