// src/components/common/LanguageToggle.tsx
import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "am" : "en");
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2.5 px-4 py-2 border border-white/10 hover:border-emerald-500/40 hover:bg-white/5 transition-all duration-200 rounded-none"
      aria-label="Toggle language"
    >
      <Languages size={17} className="text-white/70" />
      <span
        className="text-sm font-medium tracking-widest text-white/90"
        style={{
          fontFamily:
            language === "en" ? "'Nokia', system-ui, sans-serif" : "inherit",
        }}
      >
        {language === "en" ? "አማ" : "EN"}
      </span>
    </motion.button>
  );
}
