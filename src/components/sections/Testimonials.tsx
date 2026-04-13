// src/components/sections/Testimonials.tsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { TESTIMONIALS } from "@/constants/testimonials";

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="relative py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-5xl lg:text-7xl font-semibold tracking-[-0.03em] text-gradient animate-gradient">
            {t("testimonial.title") || "Client Voices"}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8"
            >
              <Quote
                size={48}
                className="absolute -left-2 top-0 text-emerald-500/10"
                strokeWidth={0.8}
              />

              <p className="text-white/80 leading-relaxed text-[15px]">
                “{t(testimonial.quoteKey)}”
              </p>

              <div className="mt-8 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">
                    {t(testimonial.nameKey)}
                  </div>
                  <div className="text-xs text-white/40">
                    {t(testimonial.roleKey)}
                  </div>
                </div>

                <div className="flex gap-px">
                  {Array.from({ length: testimonial.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={14}
                      className="fill-emerald-400 text-emerald-400"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
