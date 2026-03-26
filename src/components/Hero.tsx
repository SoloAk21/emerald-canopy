import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import {
  Instagram,
  Twitter,
  Music2,
  Play,
  Star,
  Youtube,
  Send,
  MessageCircle,
} from "lucide-react";

const SPRING = {
  type: "spring" as const,
  stiffness: 200,
  damping: 25,
  mass: 0.8,
};

/* Social media links – replaces the metric orbs */
const SOCIAL_LINKS = [
  {
    name: "Telegram",
    url: "https://t.me/yourhandle",
    icon: Send,
    label: "Telegram",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/1234567890",
    icon: MessageCircle,
    label: "WhatsApp",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@yourchannel",
    icon: Youtube,
    label: "YouTube",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/yourhandle",
    icon: Instagram,
    label: "Instagram",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourhandle",
    icon: Twitter,
    label: "Twitter",
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@yourhandle",
    icon: Music2,
    label: "TikTok",
  },
];

/* Trust items – unchanged */
const TRUST_ITEMS = [
  "Trusted by 62 brands",
  "5.0 rating",
  "Addis 2026 Tech Report",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true, amount: 0.2 });

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 150]);
  const springBgY = useSpring(bgY, { stiffness: 50, damping: 20 });
  const panelY = useTransform(scrollY, [0, 400], [0, -30]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: springBgY }}>
        <img
          src="/hero-bg.png"
          alt="Person under emerald umbrella holding glowing smartphone — Tila Digitals brand imagery"
          className="w-full h-[120%] object-cover object-center"
          width={1920}
          height={1080}
        />
      </motion.div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-emerald-950/40 via-emerald-950/20 to-emerald-950/60" />

      {/* Digital rain particles (no shadow) */}
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

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={contentRef}
          className="p-6 sm:p-8 md:p-10 lg:p-12 w-full max-w-7xl mx-auto"
          style={{ y: panelY }}
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[82px] 2xl:text-[96px] font-black leading-[1.05] sm:leading-[0.98] tracking-[-2px] sm:tracking-[-3px] lg:tracking-[-4px] xl:tracking-[-5px] text-foreground mb-3 sm:mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, ...SPRING }}
            >
              Umbrella.
            </motion.span>
            <motion.span
              className="block text-gradient-holo leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, ...SPRING }}
            >
              Your Digital Storm.
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-snug sm:leading-[1.3] max-w-2xl mb-6 sm:mb-8 text-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, ...SPRING }}
          >
            Shield your brand from chaos. Amplify every scroll.
          </motion.p>

          {/* Social Media Row – replaces the metric orbs */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-5 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, ...SPRING }}
          >
            {SOCIAL_LINKS.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/70 hover:text-emerald-400 transition-colors px-3 py-2 rounded-full backdrop-blur-sm"
                style={{
                  background: "rgba(52,211,153,0.05)",
                  border: "1px solid rgba(52,211,153,0.2)",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={SPRING}
                aria-label={social.label}
              >
                <social.icon size={18} />
                <span className="text-xs sm:text-sm font-medium hidden sm:inline">
                  {social.name}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Row */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-5 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, ...SPRING }}
          >
            <motion.button
              className="relative flex items-center justify-center gap-2 bg-emerald-600 text-foreground px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-2xl sm:rounded-3xl font-semibold text-base sm:text-lg lg:text-xl w-full sm:w-auto overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={SPRING}
            >
              <span className="absolute inset-[2px] rounded-2xl sm:rounded-3xl border border-emerald-300/20 pointer-events-none" />
              Activate Shield
            </motion.button>

            <motion.button
              className="flex items-center justify-center gap-2 px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-2xl sm:rounded-3xl font-semibold text-base sm:text-lg lg:text-xl border-2 border-emerald-400/40 text-emerald-300 hover:border-emerald-400 transition-colors w-full sm:w-auto group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={SPRING}
            >
              <Play
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
              See Demo
            </motion.button>
          </motion.div>

          {/* Trust Line */}
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
                {i === 1 && (
                  <Star
                    size={10}
                    className="text-emerald-400 fill-emerald-400"
                  />
                )}
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
