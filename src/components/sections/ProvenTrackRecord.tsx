// src/components/sections/ProvenTrackRecord.tsx
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CLIENT_LOGOS, TESTIMONIAL } from "@/constants/clients";

export default function ProvenTrackRecord() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useLanguage();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setItemsPerView(w < 640 ? 2 : w < 1024 ? 3 : 4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(CLIENT_LOGOS.length / itemsPerView);
  const maxIndex = totalSlides - 1;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  useEffect(() => {
    if (!isAutoPlaying || isHovered || !isInView) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, nextSlide, isInView]);

  const getVisibleLogos = () => {
    const start = currentIndex * itemsPerView;
    return CLIENT_LOGOS.slice(start, start + itemsPerView);
  };

  return (
    <section ref={ref} id="track-record" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl sm:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.95] text-gradient animate-gradient">
            {t("trackrecord.title") || "Proven Track Record"}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Logo Carousel */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex justify-between items-center mb-6">
              <div className="uppercase tracking-widest text-xs text-emerald-400/80">
                Trusted by industry leaders
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="text-white/60 hover:text-emerald-400"
                >
                  {isAutoPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <button
                  onClick={prevSlide}
                  className="text-white/60 hover:text-emerald-400"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="text-white/60 hover:text-emerald-400"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden h-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-6 absolute inset-0"
                >
                  {getVisibleLogos().map((logo) => (
                    <div
                      key={logo.id}
                      className="flex items-center justify-center h-full"
                    >
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="h-9 brightness-0 invert opacity-60 hover:opacity-100 transition-all"
                      />
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="border-l-2 border-emerald-500/40 pl-8"
          >
            <p className="text-white/80 italic text-lg leading-relaxed">
              "{TESTIMONIAL.text}"
            </p>
            <div className="mt-6">
              <div className="font-semibold">{TESTIMONIAL.author}</div>
              <div className="text-white/40 text-sm">{TESTIMONIAL.title}</div>
            </div>
          </motion.div>
        </div>

        <motion.div className="mt-20 text-center">
          <h4 className="text-2xl font-semibold mb-3">
            {t("trackrecord.cta")}
          </h4>
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold"
          >
            Become a partner <ArrowRight />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
