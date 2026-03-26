/**
 * Tila Digitals — 2026 Hero Section
 * 
 * Full h-screen with:
 * - Fixed background image with parallax + overlay
 * - Asymmetric split layout (58/42)
 * - Glassmorphic content panel
 * - Holographic metric orbs
 * - Magnetic CTA buttons
 * - Animated scroll indicator
 */
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Instagram, Twitter, Music2, ArrowDown, Play, Umbrella, Star } from "lucide-react";

const SPRING = { type: "spring" as const, stiffness: 200, damping: 25, mass: 0.8 };

/* Metric orbs data */
const METRICS = [
  { icon: Instagram, platform: "Instagram", stat: "+312K reach", delay: 0.3 },
  { icon: Twitter, platform: "X", stat: "+89K impressions", delay: 0.5 },
  { icon: Music2, platform: "TikTok", stat: "+1.2M views", delay: 0.7 },
];

/* Trust items for sequential fade-in */
const TRUST_ITEMS = [
  "Trusted by 62 visionary brands",
  "5.0 in 2026 reviews",
  "Featured in Addis 2026 Tech Report",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true, amount: 0.2 });

  /* Parallax: background moves slower than scroll */
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 150]);
  const springBgY = useSpring(bgY, { stiffness: 50, damping: 20 });

  /* Content panel lift on scroll */
  const panelY = useTransform(scrollY, [0, 400], [0, -30]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* === Background Image with Parallax === */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: springBgY }}
      >
        <img
          src="/hero-bg.jpg"
          alt="Person under emerald umbrella holding glowing smartphone — Tila Digitals brand imagery"
          className="w-full h-[120%] object-cover object-center"
          width={1920}
          height={1080}
        />
      </motion.div>

      {/* === Overlay: gradient + holographic bloom === */}
      <div className="absolute inset-0 z-[1]" style={{
        background: `
          linear-gradient(to right, transparent 30%, rgba(10,47,42,0.85) 70%),
          linear-gradient(to bottom, transparent, rgba(10,47,42,0.4)),
          radial-gradient(ellipse at 35% 50%, rgba(52,211,153,0.08) 0%, transparent 50%)
        `,
      }} />

      {/* === Digital rain particles (CSS animated) === */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden opacity-[0.06]">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-emerald-400"
            style={{
              left: `${5 + i * 4.8}%`,
              height: `${60 + Math.random() * 80}px`,
              top: `-${Math.random() * 20}%`,
              animation: `digital-rain ${3 + Math.random() * 4}s linear ${Math.random() * 3}s infinite`,
            }}
          />
        ))}
      </div>

      {/* === Main Content (right 42%) === */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="ml-auto w-full lg:w-[42%]">
            <motion.div
              ref={contentRef}
              className="glass-panel rounded-3xl p-8 lg:p-12 max-w-xl relative"
              style={{ y: panelY }}
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Inner glow border */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none glow-border opacity-20" />

              {/* === Pill Badge === */}
              <motion.div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-3xl text-sm font-medium mb-8 animate-float"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(110,231,183,0.25)",
                  backdropFilter: "blur(30px)",
                  color: "#34d399",
                }}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, ...SPRING }}
              >
                <Umbrella size={14} />
                Ethiopia&apos;s 2026 Social Umbrella
              </motion.div>

              {/* === Headline === */}
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[82px] xl:text-[96px] font-black leading-[0.98] tracking-[-4px] lg:tracking-[-5px] text-foreground mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {["Umbrella.", "Your."].map((word, i) => (
                  <motion.span
                    key={word}
                    className="block"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.12, ...SPRING }}
                  >
                    {word}
                  </motion.span>
                ))}
                <motion.span
                  className="block text-gradient-holo"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.64, ...SPRING }}
                >
                  Digital Storm.
                </motion.span>
              </motion.h1>

              {/* === Subheadline === */}
              <motion.p
                className="text-lg sm:text-xl lg:text-2xl font-medium leading-[1.3] max-w-lg mb-8 text-foreground/90"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, ...SPRING }}
              >
                Social media management engineered for 2026. We shield your brand from chaos, amplify every scroll, and turn algorithms into your greatest ally.
              </motion.p>

              {/* === Metric Orbs === */}
              <motion.div
                className="flex flex-wrap gap-3 mb-8"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                {METRICS.map((m) => (
                  <motion.div
                    key={m.platform}
                    className="flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium"
                    style={{
                      background: "rgba(52,211,153,0.08)",
                      border: "1px solid rgba(52,211,153,0.15)",
                      color: "#34d399",
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: m.delay, ...SPRING }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(52,211,153,0.2)" }}
                  >
                    <m.icon size={14} />
                    <span className="text-foreground/80">{m.platform}</span>
                    <span className="font-bold">{m.stat}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* === CTA Row === */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, ...SPRING }}
              >
                {/* Primary CTA */}
                <motion.button
                  className="relative flex items-center justify-center gap-2 bg-emerald-600 text-foreground px-8 sm:px-10 lg:px-14 py-5 lg:py-6 rounded-3xl font-semibold text-lg lg:text-xl overflow-hidden group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={SPRING}
                >
                  <span className="absolute inset-[2px] rounded-3xl border border-emerald-300/20 pointer-events-none" />
                  Activate Your Shield
                </motion.button>

                {/* Secondary CTA */}
                <motion.button
                  className="flex items-center justify-center gap-2 px-8 sm:px-10 lg:px-12 py-5 lg:py-6 rounded-3xl font-semibold text-base lg:text-lg border-2 border-emerald-400/40 text-emerald-300 hover:border-emerald-400 transition-colors group"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(52,211,153,0.15)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={SPRING}
                >
                  <Play size={18} className="group-hover:scale-110 transition-transform" />
                  See the Storm
                </motion.button>
              </motion.div>

              {/* === Trust Line === */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-muted-foreground">
                {TRUST_ITEMS.map((item, i) => (
                  <motion.span
                    key={item}
                    className="flex items-center gap-1"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.1 + i * 0.15 }}
                  >
                    {i > 0 && <span className="text-emerald-400/40 mr-1">•</span>}
                    {i === 1 && <Star size={10} className="text-emerald-400 fill-emerald-400" />}
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* === Scroll Indicator (bottom right) === */}
      <motion.div
        className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">Dive into the feed</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} className="text-emerald-400" />
        </motion.div>
        {/* Umbrella rib line */}
        <svg width="2" height="40" className="text-emerald-400/30">
          <line x1="1" y1="0" x2="1" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" values="8;0" dur="1.5s" repeatCount="indefinite" />
          </line>
        </svg>
      </motion.div>

      {/* === Connection Nodes (decorative dots + lines) === */}
      <div className="absolute inset-0 z-[3] pointer-events-none hidden lg:block">
        {[
          { x: "72%", y: "20%", delay: 1.2 },
          { x: "85%", y: "35%", delay: 1.4 },
          { x: "78%", y: "75%", delay: 1.6 },
        ].map((node, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400/40"
            style={{ left: node.x, top: node.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: node.delay, ...SPRING }}
          >
            <span className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping" style={{ animationDuration: "3s" }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
