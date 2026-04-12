// components/Footer.tsx
/**
 * Tila Digitals — Footer (2026)
 * Ultra Advanced Minimal Version
 * Sophisticated gradient • Scroll animations • Micro-interactions
 */

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Umbrella,
  ArrowUpRight,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0.85, 1], [0.6, 1]);
  const y = useTransform(scrollYProgress, [0.85, 1], [40, 0]);

  return (
    <motion.footer
      className="relative border-t border-white/10 overflow-hidden pt-20"
      style={{
        fontFamily: "'Nokia Pure', 'Nokia', 'Nokia Sans', sans-serif",
        background: `
          linear-gradient(
            180deg, 
            transparent 0%, 
            rgba(10, 10, 10, 0.7) 20%, 
            #0a0a0a 45%, 
            #000000 70%, 
            #020c0a 100%
          )
        `,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_30%,#05291f_0%,transparent_60%)] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(at_bottom_right,#05291f_0%,transparent_70%)] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          {/* Brand Column */}
          <motion.div className="md:col-span-5" style={{ opacity, y }}>
            <div className="flex items-center gap-2.5 mb-6">
              <Umbrella
                size={28}
                className="text-emerald-400"
                strokeWidth={1.4}
              />
              <span className="text-2xl tracking-tighter text-white font-semibold">
                Tila<span className="text-emerald-400">Digitals</span>
              </span>
            </div>

            <p className="text-white/50 text-[15px] leading-relaxed max-w-md">
              {t("footer.description") ||
                "We craft digital experiences that don't just perform — they dominate."}
            </p>

            <div className="mt-8 flex gap-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 flex items-center justify-center border border-white/10 hover:border-emerald-500/30 text-white/40 hover:text-emerald-400 transition-all"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-white text-xs font-medium mb-6 tracking-[0.5px] uppercase">
              Company
            </h4>
            <div className="space-y-3">
              {["About Us", "Our Process", "Careers", "Contact"].map(
                (item, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="block text-white/40 hover:text-white text-[15px] transition-colors group"
                    whileHover={{ x: 4 }}
                  >
                    {item}
                    <span className="inline-block w-0 group-hover:w-2 h-px bg-emerald-400 ml-2 align-middle transition-all" />
                  </motion.a>
                ),
              )}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <h4 className="text-white text-xs font-medium mb-6 tracking-[0.5px] uppercase">
              Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-[15px]">
              {[
                "Social Media Management",
                "Content Creation",
                "Video Production",
                "Digital Strategy",
                "Brand Systems",
                "Campaign Management",
              ].map((service, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="text-white/40 hover:text-white transition-colors"
                  whileHover={{ x: 4 }}
                >
                  {service}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Advanced Bar */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/30 font-mono">
          <div>© {currentYear} Tila Digitals. All rights reserved.</div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Legal
            </a>
          </div>

          <div className="flex items-center gap-2 text-emerald-400/70">
            Built with precision in Addis Ababa
            <ArrowUpRight size={14} />
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
