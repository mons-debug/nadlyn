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
      className={`inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] hover:bg-[#1ebe59] text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl min-h-[48px] focus:ring-4 focus:ring-green-300 ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      aria-label="Contacter par WhatsApp pour commander SkinPetra IPL"
    >
      {showIcon && <FaWhatsapp className="w-5 h-5" />}
      {children}
    </motion.a>
  );
} 