// components/Contact.tsx
/**
 * Tila Digitals — Contact Section
 * Advanced Minimalist Design — Clean, Sophisticated, Consistent
 */

import React, { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, MapPin, Phone, Mail, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.15] sm:leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                <span className="block bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent font-bold">
                  {t("contact.title") || "Let's create"}
                </span>
                <span className="block text-white/30 text-base sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-3 font-light">
                  {t("contact.subtitle") || "something extraordinary together"}
                </span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="w-16 sm:w-20 h-px bg-gradient-to-r from-emerald-400 to-transparent mt-2 sm:mt-8"
              />
            </div>

            <p className="text-sm sm:text-base text-white/50 leading-relaxed max-w-md font-light">
              {t("contact.description") ||
                "From strategy to execution — we handle everything from scratch to final delivery. Let's bring your vision to life."}
            </p>

            {/* Contact Info - Tighter spacing */}
            <div className="space-y-4 sm:space-y-5 pt-2">
              {[
                {
                  icon: MapPin,
                  main: "Addis Ababa, Ethiopia",
                  sub: "Bole, Next to Edna Mall",
                  href: null,
                },
                {
                  icon: Mail,
                  main: "hello@tiladigitals.com",
                  sub: null,
                  href: "mailto:hello@tiladigitals.com",
                },
                {
                  icon: Phone,
                  main: "+251 911 234 567",
                  sub: null,
                  href: "tel:+251911234567",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 sm:gap-4 group"
                >
                  <item.icon
                    size={16}
                    className="text-white/30 group-hover:text-emerald-400 transition-colors flex-shrink-0"
                  />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white/50 hover:text-white text-xs sm:text-sm transition-colors font-light truncate"
                    >
                      {item.main}
                    </a>
                  ) : (
                    <div className="min-w-0">
                      <div className="text-white text-xs sm:text-sm font-light truncate">
                        {item.main}
                      </div>
                      <div className="text-white/30 text-[11px] sm:text-xs font-light truncate">
                        {item.sub}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
              <div className="grid grid-cols-2 gap-5 sm:gap-6">
                <div className="border-b border-white/10 focus-within:border-emerald-400 transition-colors">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent px-0 py-2.5 sm:py-3 text-white placeholder:text-white/20 focus:outline-none text-sm font-light"
                    placeholder="Name"
                  />
                </div>
                <div className="border-b border-white/10 focus-within:border-emerald-400 transition-colors">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-transparent px-0 py-2.5 sm:py-3 text-white placeholder:text-white/20 focus:outline-none text-sm font-light"
                    placeholder="Company"
                  />
                </div>
              </div>

              <div className="border-b border-white/10 focus-within:border-emerald-400 transition-colors">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent px-0 py-2.5 sm:py-3 text-white placeholder:text-white/20 focus:outline-none text-sm font-light"
                  placeholder="Email"
                />
              </div>

              <div className="border-b border-white/10 focus-within:border-emerald-400 transition-colors">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full bg-transparent px-0 py-2.5 sm:py-3 text-white placeholder:text-white/20 focus:outline-none resize-none text-sm font-light"
                  placeholder="Message"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center gap-2 overflow-hidden px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed w-fit"
              >
                <div className="absolute inset-0 bg-white transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-zinc-100 group-hover:to-white" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                <span className="relative z-10 text-zinc-950 tracking-[0.1em] sm:tracking-[0.15em] font-medium">
                  {isSubmitting ? "SENDING" : t("contact.send") || "SEND"}
                </span>
                <ArrowUpRight
                  size={14}
                  className="relative z-10 text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
