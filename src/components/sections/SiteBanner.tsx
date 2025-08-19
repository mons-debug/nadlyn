"use client";

import { motion } from "framer-motion";
import { Megaphone } from "lucide-react";

export default function SiteBanner() {
  return (
    <motion.div
      className="bg-gradient-to-r from-charcoal via-mocha to-black text-white py-3 px-4 text-center"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm md:text-base">
        <Megaphone size={18} className="flex-shrink-0 text-gold" />
        <p className="font-medium">
          🎉 Offre limitée : <strong className="text-gold">-30%</strong> sur Lumesilk IPL + Livraison gratuite !
        </p>
      </div>
    </motion.div>
  );
} 