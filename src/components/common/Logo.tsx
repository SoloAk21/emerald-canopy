// src/components/common/Logo.tsx
import { motion } from "framer-motion";
import { Umbrella } from "lucide-react";

interface LogoProps {
  onClick?: () => void;
}

export function Logo({ onClick }: LogoProps) {
  return (
    <motion.div
      className="flex items-center gap-2 cursor-pointer"
      whileHover={{ opacity: 0.85 }}
      onClick={onClick}
    >
      <Umbrella className="text-emerald-400" size={26} strokeWidth={1.6} />
      <span className="text-white font-medium text-xl tracking-tight">
        Tila<span className="text-emerald-400">Digitals</span>
      </span>
    </motion.div>
  );
}
