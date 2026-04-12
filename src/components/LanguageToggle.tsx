import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "am" : "en");
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative flex items-center gap-1.5 px-2.5 py-1.5 border border-white/10 hover:border-emerald-500/30 hover:bg-white/5 transition-all duration-200"
      style={{ borderRadius: 0 }}
      whileHover={{ opacity: 0.9 }}
      whileTap={{ scale: 0.96 }}
      aria-label="Toggle language"
    >
      <Languages size={14} className="text-white/60" />
      <span
        className="text-xs font-medium tracking-wide text-white/80"
        style={{
          fontFamily: language === "en" ? "'Nokia', sans-serif" : "inherit",
          fontWeight: "400",
        }}
      >
        {language === "en" ? "አማ" : "EN"}
      </span>
    </motion.button>
  );
}
