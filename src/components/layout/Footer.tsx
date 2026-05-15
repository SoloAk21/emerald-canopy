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

  const companyLinks = [
    { key: "footer.about", label: "About Us" },
    { key: "footer.process", label: "Our Process" },
    { key: "footer.careers", label: "Careers" },
    { key: "footer.contact", label: "Contact" },
  ];

  const serviceLinks = [
    { key: "footer.s1", label: "Social Media Management" },
    { key: "footer.s2", label: "Content Creation" },
    { key: "footer.s3", label: "Video Production" },
    { key: "footer.s6", label: "Digital Strategy" },
    { key: "footer.s5", label: "Brand Systems" },
    { key: "footer.s4", label: "Campaign Management" },
  ];

  return (
    <footer className="border-t border-white/10 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 md:pb-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          {/* Brand Section - spans full width on mobile, 2 cols on tablet, 5 cols on desktop */}
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Umbrella size={28} className="text-emerald-400 sm:size-32" />
              <span className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Tila<span className="text-emerald-400">Digitals</span>
              </span>
            </div>
            <p className="text-white/60 text-sm sm:text-base max-w-md">
              {t("footer.description")}
            </p>

            {/* Social Links */}
            <div className="flex gap-4 sm:gap-6 mt-6 sm:mt-10">
              {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white/40 hover:text-emerald-400 transition-colors"
                >
                  <Icon size={20} className="sm:size-[22px]" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="sm:col-span-1 lg:col-span-3">
            <h4 className="uppercase text-xs tracking-widest mb-4 sm:mb-6 text-white/60 font-medium">
              {t("footer.company") || "Company"}
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {companyLinks.map((item) => (
                <li key={item.key}>
                  <a
                    href="#"
                    className="block py-1 text-sm sm:text-base text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {t(item.key) || item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="sm:col-span-1 lg:col-span-4">
            <h4 className="uppercase text-xs tracking-widest mb-4 sm:mb-6 text-white/60 font-medium">
              {t("footer.services") || "Services"}
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:gap-y-3">
              {serviceLinks.map((service) => (
                <a
                  key={service.key}
                  href="#"
                  className="text-sm sm:text-base text-white/60 hover:text-white transition-colors duration-200"
                >
                  {t(service.key) || service.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40 font-mono">
          {/* Copyright */}
          <div className="text-center sm:text-left order-2 sm:order-1">
            © {year} Tila Digitals. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex gap-4 sm:gap-6 order-1 sm:order-2">
            <a href="#" className="hover:text-white/70 transition-colors">
              {t("footer.privacy") || "Privacy"}
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              {t("footer.terms") || "Terms"}
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              {t("footer.legal") || "Legal"}
            </a>
          </div>

          {/* Built With */}
          <div className="flex items-center gap-1.5 sm:gap-2 order-3">
            <span className="hidden xs:inline">
              {t("footer.built_by") || "Built with precision in Addis Ababa"}
            </span>
            <span className="xs:hidden">Built in Addis Ababa</span>
            <ArrowUpRight size={12} className="sm:size-[14px]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
