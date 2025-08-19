"use client";

import { motion } from "framer-motion";
import { waLink } from "@/lib/wa";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  children: React.ReactNode;
  color?: string;
  quantity?: number;
  className?: string;
  showIcon?: boolean;
}

export default function WhatsAppButton({ 
  children, 
  color = "noir", 
  quantity = 1, 
  className = "",
  showIcon = true
}: WhatsAppButtonProps) {
  return (
    <motion.a
      href={waLink(color, quantity)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex-1 w-full sm:w-auto block text-center py-4 px-6 sm:px-8 premium-gradient text-white font-bold text-base sm:text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden min-h-[48px] focus:ring-4 focus:ring-primary/30 ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label="Contacter par WhatsApp pour commander Lumesilk IPL"
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {showIcon && <FaWhatsapp className="w-5 h-5" />}
        <span className="font-bold">{children}</span>
        <motion.span
          className="inline-block"
          animate={{ x: [0, 2, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          →
        </motion.span>
      </span>
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
    </motion.a>
  );
} 