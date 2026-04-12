// components/Testimonials.tsx
/**
 * Tila Digitals — Client Testimonials
 * Ultra Clean • No Glow • Nokia Font Only • font-light & font-bold Only
 */

import React from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  {
    quoteKey: "testimonial.ethio.quote",
    nameKey: "testimonial.ethio.name",
    roleKey: "testimonial.ethio.role",
    rating: 5,
  },
  {
    quoteKey: "testimonial.lumora.quote",
    nameKey: "testimonial.lumora.name",
    roleKey: "testimonial.lumora.role",
    rating: 5,
  },
  {
    quoteKey: "testimonial.nexus.quote",
    nameKey: "testimonial.nexus.name",
    roleKey: "testimonial.nexus.role",
    rating: 5,
  },
];

export default function Testimonials() {
  const { t } = useLanguage();
  const sectionRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relativeoverflow-hidden py-8 sm:py-10 md:py-12 lg:py-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-[-0.03em]"
            style={{ fontFamily: "'Nokia', system-ui, sans-serif" }}
          >
            <span className="relative z-10 bg-gradient-to-r from-white via-emerald-300 to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
              {t("testimonial.title") || "Client Voices"}
            </span>
          </h1>

          <p
            className="mt-2 text-white/60 text-base max-w-xl mx-auto leading-relaxed font-light"
            style={{ fontFamily: "'Nokia', system-ui, sans-serif" }}
          >
            {t("testimonial.subtitle") ||
              "Real results from brands that chose excellence"}
          </p>
        </motion.div>

        {/* Testimonials Grid - Pure & Clean */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1 + i * 0.08,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="group relative"
            >
              <div className="relative pl-6">
                {/* Quote Icon */}
                <Quote
                  size={48}
                  className="absolute -left-1 top-0 text-emerald-500/10 transition-colors duration-300"
                  strokeWidth={0.8}
                />

                {/* Quote Text */}
                <p
                  className="text-[13px] sm:text-[14px] leading-[1.55] text-white/70 tracking-tight font-light"
                  style={{ fontFamily: "'Nokia', system-ui, sans-serif" }}
                >
                  “{t(testimonial.quoteKey)}”
                </p>

                {/* Footer */}
                <div className="flex items-center gap-3">
                  {/* Stars */}
                  <div className="flex gap-[2px]">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        size={11}
                        className="fill-emerald-400 text-emerald-400"
                        strokeWidth={1}
                      />
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px flex-1 bg-white/10" />

                  {/* Author Info */}
                  <div className="text-right">
                    <div
                      className="text-white text-[13px] tracking-tight font-bold"
                      style={{ fontFamily: "'Nokia', system-ui, sans-serif" }}
                    >
                      {t(testimonial.nameKey)}
                    </div>
                    <div
                      className="text-[10px] text-white/40 tracking-wide font-light"
                      style={{ fontFamily: "'Nokia', system-ui, sans-serif" }}
                    >
                      {t(testimonial.roleKey)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
