/**
 * Tila Digitals — Header (2026) — INSTANT JUMP NAV
 * Mobile menu now uses the same dark overlay as the main Index page
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Umbrella, Menu, X, Calendar, ArrowRight } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./common/LanguageToggle";

const NAV_LINKS = [
  { key: "Shield", id: "services", labelKey: "nav.shield" },
  { key: "Amplify", id: "track-record", labelKey: "nav.amplify" },
  { key: "Insights", id: "why-choose-us", labelKey: "nav.insights" },
  { key: "Work", id: "featured-work", labelKey: "nav.work" },
  { key: "Connect", id: "contact", labelKey: "nav.connect" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("services");
  const { t } = useLanguage();

  // Active section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4, rootMargin: "-80px 0px -20%" },
    );

    NAV_LINKS.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Header scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // INSTANT JUMP
  const jumpToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerHeight = 88;
    const originalScrollBehavior =
      document.documentElement.style.scrollBehavior;

    document.documentElement.style.scrollBehavior = "auto";

    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sectionTop - headerHeight,
      behavior: "instant" as ScrollBehavior,
    });

    setTimeout(() => {
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
    }, 50);

    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          height: "clamp(68px, 8vw, 88px)",
          backgroundColor: "transparent",
          backdropFilter: scrolled ? "blur(40px) saturate(1.5)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(52, 211, 153, 0.15)"
            : "1px solid rgba(255, 255, 255, 0.03)",
          transition: "all 0.3s ease",
        }}
      >
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(52, 211, 153, 0.4), transparent)",
          }}
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="container mx-auto h-full flex items-center justify-between px-5 lg:px-8">
          <LogoBlock onClick={() => jumpToSection("services")} />

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.key}
                label={t(link.labelKey)}
                isActive={activeSection === link.id}
                onClick={() => jumpToSection(link.id)}
              />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <MinimalButton onClick={() => jumpToSection("contact")} />
            <MobileToggle
              mobileOpen={mobileOpen}
              setMobileOpen={setMobileOpen}
            />
          </div>
        </div>
      </motion.header>

      <MobileMenu
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        t={t}
        jumpToSection={jumpToSection}
      />
    </>
  );
}

/* ====================== Sub Components ====================== */

function LogoBlock({ onClick }: { onClick: () => void }) {
  return (
    <motion.div
      className="flex items-center gap-2 cursor-pointer"
      whileHover={{ opacity: 0.8 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      <Umbrella className="text-emerald-400" size={24} strokeWidth={1.5} />
      <span
        className="text-white font-medium text-lg tracking-tight"
        style={{ fontFamily: "'Nokia', system-ui, sans-serif" }}
      >
        Tila<span className="text-emerald-400">Digitals</span>
      </span>
    </motion.div>
  );
}

function NavLink({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative px-4 py-2 text-sm tracking-wide transition-all duration-200 hover:text-emerald-400 hover:font-bold"
      style={{
        color: isActive ? "#34d399" : "rgba(255, 255, 255, 0.7)",
        fontFamily: "'Nokia', system-ui, sans-serif",
        fontWeight: isActive ? "bold" : "normal",
      }}
    >
      {label}
      <motion.span
        className="absolute bottom-0 left-0 h-[1.5px] bg-emerald-400"
        animate={{ width: isActive ? "100%" : "0%" }}
        transition={{ duration: 0.25 }}
      />
    </button>
  );
}

function MobileToggle({
  mobileOpen,
  setMobileOpen,
}: {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}) {
  return (
    <button
      className="lg:hidden relative w-10 h-10 flex items-center justify-center"
      onClick={() => setMobileOpen(!mobileOpen)}
      aria-label="Toggle menu"
    >
      <AnimatePresence mode="wait">
        {mobileOpen ? (
          <motion.div
            key="x"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <X className="text-emerald-400" size={20} />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Menu className="text-white/70" size={20} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

function MobileMenu({
  mobileOpen,
  setMobileOpen,
  t,
  jumpToSection,
}: {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  t: any;
  jumpToSection: (id: string) => void;
}) {
  return (
    <AnimatePresence>
      {mobileOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center"
          style={{
            backgroundColor: "#011F1A",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <nav className="flex flex-col items-center gap-6">
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.key}
                className="text-2xl font-light tracking-wide text-white/90 hover:text-emerald-400 transition-colors duration-200"
                style={{ fontFamily: "'Nokia', system-ui, sans-serif" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.05, duration: 0.2 }}
                onClick={() => jumpToSection(link.id)}
              >
                {t(link.labelKey)}
              </motion.button>
            ))}
          </nav>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold tracking-wide group"
              style={{
                borderRadius: 0,
                fontFamily: "'Nokia', system-ui, sans-serif",
                backgroundColor: "white",
                color: "#023934",
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
              whileHover={{ scale: 0.97, backgroundColor: "#fafafa" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => jumpToSection("contact")}
            >
              <Calendar size={14} className="text-emerald-500" />
              <span>{t("cta.strategy_call")}</span>
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={14} className="text-emerald-500" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MinimalButton({ onClick }: { onClick: () => void }) {
  const { t } = useLanguage();
  return (
    <motion.button
      className="hidden lg:flex items-center gap-2 px-6 py-2.5 text-sm font-light tracking-wide group"
      style={{
        borderRadius: 0,
        fontFamily: "'Nokia', system-ui, sans-serif",
        backgroundColor: "white",
        color: "#023934",
        border: "1px solid rgba(0, 0, 0, 0.1)",
      }}
      whileHover={{ scale: 0.97, backgroundColor: "#fafafa" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <Calendar size={14} className="text-emerald-500" />
      <span>{t("cta.strategy_call")}</span>
      <motion.div
        initial={{ x: 0 }}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowRight size={14} className="text-emerald-500" />
      </motion.div>
    </motion.button>
  );
}
