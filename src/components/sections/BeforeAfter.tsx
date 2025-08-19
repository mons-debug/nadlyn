"use client";

import Image from "next/image";
import AnimatedSection from "../AnimatedSection";
import { motion } from "framer-motion";
import { beforeAfter } from "@/lib/skinpetra-content";

export default function BeforeAfter() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Des résultats <span className="text-gradient">visibles</span>
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Découvrez les transformations réelles de nos clientes avec Lumesilk IPL.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <motion.div 
                className="relative group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src={beforeAfter.before.src}
                    alt={beforeAfter.before.alt}
                    width={500}
                    height={500}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    AVANT
                  </div>
                </div>
              </motion.div>

              {/* After */}
              <motion.div 
                className="relative group"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src={beforeAfter.after.src}
                    alt={beforeAfter.after.alt}
                    width={500}
                    height={500}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    APRÈS
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="text-center mt-8">
              <p className="text-sm text-secondary">
                Résultats après 8 semaines d&apos;utilisation régulière
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
} 