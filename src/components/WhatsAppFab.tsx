"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { waLink } from "@/lib/wa";
import { useState, useEffect } from "react";

export default function WhatsAppFab() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-4 sm:bottom-8 sm:right-6 z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2 
          }}
        >
          <div className="relative group">
            {/* Luxury Tooltip */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  className="absolute right-full mr-6 top-1/2 -translate-y-1/2 px-4 py-3 bg-gradient-to-r from-luxury-dark to-charcoal text-white text-sm rounded-xl whitespace-nowrap shadow-2xl border border-luxury-gold/20 backdrop-blur-sm"
                  initial={{ opacity: 0, x: 10, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="font-semibold text-luxury-gold">Commander via WhatsApp</span>
                  <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-luxury-dark"></div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Luxury FAB */}
            <motion.a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-[#25D366] via-[#20b358] to-[#1ca04a] hover:from-[#1ca04a] hover:via-[#20b358] hover:to-[#25D366] text-white rounded-full shadow-2xl hover:shadow-[0_25px_50px_rgba(37,211,102,0.5)] transition-all duration-500 overflow-hidden group border-2 border-[#25D366]/30 backdrop-blur-sm"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              whileHover={{ 
                scale: 1.15, 
                y: -3,
                boxShadow: "0 30px 60px rgba(37, 211, 102, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Luxury glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#25D366]/60 to-[#1ca04a]/60 rounded-full blur-xl scale-150"
                animate={{ 
                  scale: [1.5, 1.7, 1.5],
                  opacity: [0.6, 0.8, 0.6]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full -skew-x-12"
                animate={{
                  x: ["-200%", "200%"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 3
                }}
              />

              {/* Icon */}
              <motion.div
                className="relative z-10"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <FaWhatsapp size={28} className="sm:text-3xl drop-shadow-lg" />
              </motion.div>

              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/50"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 