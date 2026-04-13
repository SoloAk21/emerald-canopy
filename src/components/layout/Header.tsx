// src/components/layout/Header.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar, ArrowRight } from "lucide-react";
import { Logo } from "../common/Logo";
import LanguageToggle from "../common/LanguageToggle";
import { NAV_LINKS } from "@/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useSectionInView();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const jumpToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerHeight = 88;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerHeight;

    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo({ top: sectionTop, behavior: "instant" as ScrollBehavior });

    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "smooth";
    }, 50);

    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 h-[88px]"
        style={{
          backgroundColor: scrolled ? "rgba(1, 31, 26, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(40px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(52, 211, 153, 0.15)" : "1px solid rgba(255,255,255,0.03)",
        }}
      >
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6 lg:px-8">
          <Logo onClick={() => jumpToSection("services")} />

          <nav className="hidden lg:flex items-center gap-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => jumpToSection(link.id)}
                className={`px-5 py-2 text-sm tracking-wide transition-all ${
                  activeSection === link.id
                    ? "text-emerald-400 font-semibold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {t(link.labelKey)}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <LanguageToggle />
            <motion.button
              onClick={() => jumpToSection("contact")}
              className="hidden lg:flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold text-sm hover:bg-emerald-50 transition-colors"
              whileHover={{ scale: 0.97 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar size={15} />
              {t("cta.strategy_call")}
              <ArrowRight size={15} />
            </motion.button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white/80"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#011F1A] flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center gap-8 text-2xl">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => jumpToSection(link.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-white/90 hover:text-emerald-400"
                >
                  {t(link.labelKey)}
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={() => jumpToSection("contact")}
              className="mt-16 flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold"
              whileHover={{ scale: 0.97 }}
            >
              {t("cta.strategy_call")} <ArrowRight />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}