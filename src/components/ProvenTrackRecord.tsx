// components/ProvenTrackRecord.tsx
/**
 * Tila Digitals — Proven Track Record
 * Minimalist & Consistent Design (No Cards, No Rounding)
 * Advanced Auto-Moving Carousel with Pause on Hover
 */

import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

// Client logos data (provided)
const CLIENT_LOGOS = [
  { id: 1, name: "Ethio Telecom", src: "/logos/Ethio_telecom.svg" },
  { id: 2, name: "Nexus", src: "/logos/nexus.svg" },
  { id: 3, name: "Aether", src: "/logos/aether.svg" },
  { id: 4, name: "Lumora", src: "/logos/lumora.svg" },
  { id: 5, name: "Forge", src: "/logos/forge.svg" },
  { id: 6, name: "Vanguard", src: "/logos/vanguard.svg" },
  { id: 7, name: "Helix", src: "/logos/helix.svg" },
  { id: 8, name: "Orbit", src: "/logos/orbit.svg" },
];

// Testimonial quote (provided)
const TESTIMONIAL = {
  text: "Tila Digitals transformed our digital strategy, delivering measurable results that exceeded expectations. Their innovative approach and execution are unmatched.",
  author: "Mekdes Desta",
  title: "CTO, Ethio Telecom",
};

export default function ProvenTrackRecord() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayInterval = useRef<NodeJS.Timeout | null>(null);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(2);
      } else if (width < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(CLIENT_LOGOS.length / itemsPerView);
  const maxIndex = totalSlides - 1;

  // Auto-play logic
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play timer
  useEffect(() => {
    if (isAutoPlaying && !isHovered && isInView) {
      autoPlayInterval.current = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    };
  }, [isAutoPlaying, isHovered, nextSlide, isInView]);

  // Pause on hover
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (autoPlayInterval.current) {
      clearInterval(autoPlayInterval.current);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    if (!isAutoPlaying && autoPlayInterval.current) {
      clearInterval(autoPlayInterval.current);
    }
  };

  const getVisibleLogos = () => {
    const start = currentIndex * itemsPerView;
    const end = start + itemsPerView;
    return CLIENT_LOGOS.slice(start, end);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 overflow-hidden"
      style={{ fontFamily: "'Nokia Pure', 'Nokia', sans-serif" }}
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
              {t("trackrecord.title") || "Proven Track Record"}
            </span>
          </h1>

          <p className="mt-2 text-white/60 text-base max-w-xl mx-auto leading-relaxed">
            {t("trackrecord.subtitle") ||
              "A proven track record of excellence and innovation"}
          </p>
        </motion.div>

        {/* Trust Row: Logos + Quote */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {/* Logo Carousel */}
          <div
            ref={carouselRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="text-xs font-mono tracking-wider text-emerald-400/80 uppercase">
                Trusted by industry leaders
              </div>

              {/* Carousel Controls */}
              <div className="flex gap-3">
                {/* Auto-play toggle */}
                <button
                  onClick={toggleAutoPlay}
                  className="p-1 border border-white/20 text-white/60 hover:border-emerald-400/50 hover:text-emerald-400 transition-all"
                  title={isAutoPlaying ? "Pause" : "Play"}
                >
                  {isAutoPlaying ? <Pause size={14} /> : <Play size={14} />}
                </button>

                {/* Navigation buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="p-1 border border-white/20 text-white/60 hover:border-emerald-400/50 hover:text-emerald-400 transition-all"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-1 border border-white/20 text-white/60 hover:border-emerald-400/50 hover:text-emerald-400 transition-all"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.1, 0.9] }}
                  className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
                >
                  {getVisibleLogos().map((logo, idx) => (
                    <motion.div
                      key={logo.id}
                      className="group"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <div className="flex items-center justify-center h-8 sm:h-10 md:h-12 p-2 sm:p-3 md:p-4 border border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.05] transition-all duration-300">
                        <img
                          src={logo.src}
                          alt={logo.name}
                          className="h-4 sm:h-5 md:h-6 w-auto opacity-50 group-hover:opacity-100 transition-all duration-300 brightness-0 invert"
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex justify-between items-center gap-2">
                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {Array.from({ length: totalSlides }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      className={`transition-all duration-300 h-px ${
                        currentIndex === idx
                          ? "w-8 bg-emerald-400"
                          : "w-4 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                {/* Auto-play progress bar */}
                {isAutoPlaying && !isHovered && (
                  <motion.div
                    className="h-px bg-emerald-400/30"
                    initial={{ width: 0 }}
                    animate={{ width: 40 }}
                    transition={{
                      duration: 4,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="relative">
            <div className="text-xs font-mono tracking-wider text-emerald-400/80 uppercase mb-6">
              Client voice
            </div>
            <motion.div
              className="border-l-2 border-emerald-500/50 pl-4 sm:pl-6"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed italic">
                "{TESTIMONIAL.text}"
              </p>
              <div className="mt-4">
                <div className="text-white font-medium text-sm sm:text-base">
                  {TESTIMONIAL.author}
                </div>
                <div className="text-white/30 text-xs sm:text-sm">
                  {TESTIMONIAL.title}
                </div>
              </div>
            </motion.div>
            <motion.div
              className="absolute -top-6 -right-4 text-7xl sm:text-8xl font-serif text-white/5 select-none"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              "
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-24 text-center"
        >
          <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-3">
            {t("trackrecord.cta") || "Ready to join these industry leaders?"}
          </h4>
          <p className="text-white/40 text-xs sm:text-sm mb-6">
            {t("trackrecord.cta_sub") || "Start your success story today"}
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-black text-sm sm:text-base font-medium hover:bg-emerald-50 transition-colors"
          >
            {t("trackrecord.cta_btn") || "Become a partner"}
            <ArrowRight
              size={14}
              className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
