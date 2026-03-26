/**
 * Tila Digitals — 2026 Hyper-Detailed Fixed Header/Navbar
 * 
 * Features:
 * - Transparent → emerald-950/90 on scroll (>30px threshold)
 * - Holographic bottom border glow on scroll
 * - Magnetic CTA button with spring physics
 * - Morphing hamburger → X for mobile
 * - Full-screen mobile menu with staggered links
 */
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { Umbrella, Play, Menu, X, Shield, Zap, BarChart3, Briefcase, Phone } from "lucide-react";

/* Nav link data with corresponding Lucide icons */
const NAV_LINKS = [
  { label: "Shield", icon: Shield },
  { label: "Amplify", icon: Zap },
  { label: "Insights", icon: BarChart3 },
  { label: "Work", icon: Briefcase },
  { label: "Connect", icon: Phone },
];

/* 2026 spring config: buttery smooth, slight overshoot */
const SPRING = { type: "spring" as const, stiffness: 200, damping: 25, mass: 0.8 };

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Shield");

  /* Scroll detection for navbar background transition */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
        style={{
          height: "clamp(68px, 8vw, 92px)",
          backdropFilter: "blur(40px) saturate(1.5)",
          backgroundColor: scrolled ? "rgba(10,47,42,0.92)" : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(52,211,153,0.15)"
            : "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* Holographic bottom glow line — appears on scroll */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(52,211,153,0.3), transparent)",
          }}
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        <div className="container mx-auto h-full flex items-center justify-between px-5 lg:px-8">
          {/* === Logo === */}
          <LogoBlock />

          {/* === Desktop Nav Links (center) === */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                label={link.label}
                isActive={activeLink === link.label}
                onClick={() => setActiveLink(link.label)}
              />
            ))}
          </nav>

          {/* === Right: CTA + Mobile Toggle === */}
          <div className="flex items-center gap-4">
            <MagneticButton />
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={SPRING}>
                    <X className="text-emerald-400" size={24} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={SPRING}>
                    <Menu className="text-foreground" size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* === Mobile Menu Overlay === */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ backgroundColor: "rgba(10,47,42,0.97)", backdropFilter: "blur(30px)" }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <nav className="flex flex-col items-center gap-6 mt-20">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.label}
                  className="text-3xl font-semibold text-foreground tracking-tight hover:text-emerald-400 transition-colors flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, ...SPRING }}
                  onClick={() => { setActiveLink(link.label); setMobileOpen(false); }}
                >
                  <link.icon size={20} className="text-emerald-400 opacity-50" />
                  {link.label}
                </motion.button>
              ))}
            </nav>

            {/* Umbrella motif divider */}
            <motion.div
              className="mt-10 flex items-center gap-3 opacity-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-12 h-px bg-emerald-400" />
              <Umbrella size={16} className="text-emerald-400" />
              <div className="w-12 h-px bg-emerald-400" />
            </motion.div>

            {/* Trust bar */}
            <motion.p
              className="mt-8 text-sm text-muted-foreground text-center px-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Trusted by 62 visionary brands across Ethiopia
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* === Logo with hover animation === */
function LogoBlock() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="flex items-center gap-1.5 cursor-pointer select-none"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ rotateY: 8, scale: 1.03 }}
      transition={SPRING}
      style={{ perspective: 600 }}
    >
      <motion.div
        animate={{ rotate: hovered ? 15 : 0, scale: hovered ? 1.15 : 1 }}
        transition={SPRING}
      >
        <Umbrella className="text-emerald-400" size={28} strokeWidth={2.5} />
      </motion.div>
      <span className="text-emerald-400 font-black text-2xl lg:text-3xl tracking-[-2px]">Tila</span>
      <span className="text-foreground font-black text-2xl lg:text-3xl tracking-[-2px]">Digitals</span>
    </motion.div>
  );
}

/* === Individual nav link with holographic underline === */
function NavLink({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative px-4 py-2 text-lg font-medium tracking-[0.5px] transition-colors duration-300 hover:text-emerald-400 group"
      style={{ color: isActive ? "#34d399" : "rgba(255,255,255,0.9)" }}
    >
      {label}
      {/* Holographic underline */}
      <motion.span
        className="absolute bottom-0 left-1/2 h-[2px] rounded-full"
        style={{ background: "linear-gradient(90deg, transparent, #34d399, transparent)", x: "-50%" }}
        initial={false}
        animate={{ width: isActive ? "60%" : "0%", opacity: isActive ? 1 : 0 }}
        whileHover={{ width: "60%", opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      />
      {/* Active dot indicator */}
      {isActive && (
        <motion.span
          className="absolute -bottom-2.5 left-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400"
          style={{ x: "-50%" }}
          layoutId="active-dot"
          transition={SPRING}
        />
      )}
    </button>
  );
}

/* === Magnetic CTA Button with spring physics === */
function MagneticButton() {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    /* Magnetic pull: button follows cursor at 25% intensity */
    x.set((e.clientX - centerX) * 0.25);
    y.set((e.clientY - centerY) * 0.25);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.button
      ref={ref}
      className="hidden lg:flex items-center gap-2 bg-emerald-600 text-foreground px-7 xl:px-9 py-3 xl:py-4 rounded-3xl font-semibold text-sm xl:text-base relative overflow-hidden group"
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={SPRING}
    >
      {/* Inner holographic ring */}
      <span className="absolute inset-[2px] rounded-3xl border border-emerald-300/20 pointer-events-none" />
      Book 2026 Strategy Call
    </motion.button>
  );
}
