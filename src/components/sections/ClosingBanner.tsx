"use client";

import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import { closing } from "@/lib/skinpetra-content";
import { waLink } from "@/lib/wa";
import { Sparkles } from "lucide-react";

export default function ClosingBanner() {
  return (
    <section className="py-20 luxury-gradient text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gold/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              className="inline-flex items-center gap-2 mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles size={32} className="text-gold" />
              <h2 className="text-3xl lg:text-4xl font-bold">
                Une Nouvelle Vie Vous Attend
              </h2>
              <Sparkles size={32} className="text-gold" />
            </motion.div>

            <motion.p
              className="text-xl mb-8 opacity-90 leading-relaxed font-normal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {closing.replaceAll('Skinpetra', 'Lumesilk').replaceAll('SkinPetra', 'Lumesilk')}
            </motion.p>

            <motion.a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-gold/90 text-charcoal font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Commencer Ma Transformation
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
} 