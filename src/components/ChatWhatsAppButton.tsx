"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { waLink } from "@/lib/wa";

export default function ChatWhatsAppButton() {
  return (
    <motion.a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#1ebe59] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl w-full"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <FaWhatsapp className="w-5 h-5" />
      <span>Contacter sur WhatsApp</span>
    </motion.a>
  );
} 