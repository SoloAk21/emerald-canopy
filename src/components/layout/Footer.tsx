// src/components/layout/Footer.tsx
import { motion } from "framer-motion";
import {
  Umbrella,
  ArrowUpRight,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 pt-20 pb-12 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <Umbrella size={32} className="text-emerald-400" />
              <span className="text-3xl font-semibold tracking-tight">
                Tila<span className="text-emerald-400">Digitals</span>
              </span>
            </div>
            <p className="text-white/60 max-w-md">
              {t("footer.description") ||
                "We craft digital experiences that don't just perform — they dominate."}
            </p>

            <div className="flex gap-6 mt-10">
              {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="text-white/40 hover:text-emerald-400"
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="uppercase text-xs tracking-widest mb-6 text-white/60">
              Company
            </h4>
            {["About Us", "Our Process", "Careers", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="block py-2 text-white/60 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="md:col-span-4">
            <h4 className="uppercase text-xs tracking-widest mb-6 text-white/60">
              Services
            </h4>
            <div className="grid grid-cols-2 gap-y-3 text-white/60">
              {[
                "Social Media Management",
                "Content Creation",
                "Video Production",
                "Digital Strategy",
                "Brand Systems",
                "Campaign Management",
              ].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-mono">
          <div>© {year} Tila Digitals. All rights reserved.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white/70">
              Privacy
            </a>
            <a href="#" className="hover:text-white/70">
              Terms
            </a>
            <a href="#" className="hover:text-white/70">
              Legal
            </a>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            Built with precision in Addis Ababa <ArrowUpRight size={14} />
          </div>
        </div>
      </div>
    </footer>
  );
}
