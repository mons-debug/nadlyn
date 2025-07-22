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
      className={`inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#25D366] via-[#20b358] to-[#1ca04a] hover:from-[#1ca04a] hover:via-[#20b358] hover:to-[#25D366] text-white font-semibold rounded-full transition-all duration-500 shadow-2xl hover:shadow-[0_20px_40px_rgba(37,211,102,0.4)] min-h-[52px] focus:ring-4 focus:ring-[#25D366]/30 border border-[#25D366]/20 backdrop-blur-sm ${className}`}
      whileHover={{ 
        scale: 1.05, 
        y: -2,
        boxShadow: "0 25px 50px rgba(37, 211, 102, 0.5)"
      }}
      whileTap={{ scale: 0.98 }}
      aria-label="Contacter par WhatsApp pour commander SkinPetra IPL"
    >
      {showIcon && <FaWhatsapp className="w-6 h-6" />}
      <span className="font-semibold text-lg tracking-wide">{children}</span>
      
      {/* Luxury shine effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
    </motion.a>
  );
} 