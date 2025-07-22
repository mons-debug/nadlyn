"use client";

import { Zap, ShieldCheck, Clock, Heart, Users, Award, Sparkles } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import { motion } from "framer-motion";
import { benefits } from "@/lib/skinpetra-content";

export default function BenefitsGrid() {
  const iconMap = {
    "zap": Zap,
    "shield-check": ShieldCheck,
    "clock": Clock,
  };

  const extraBenefits = [
    {
      icon: Heart,
      title: "Sans douleur",
      description: "Technologie douce et confortable pour tous",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Pour tous",
      description: "Convient à tous les types et tons de peau",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Award,
      title: "Qualité premium",
      description: "Matériaux haut de gamme et finition soignée",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const allBenefits = [
    ...benefits.map((benefit, index) => ({
      ...benefit,
      icon: iconMap[benefit.icon as keyof typeof iconMap],
      color: ["from-emerald-500 to-teal-500", "from-blue-500 to-indigo-500", "from-violet-500 to-purple-500"][index]
    })),
    ...extraBenefits
  ];

  return (
    <section id="benefits" className="py-12 lg:py-32 bg-gradient-to-b from-background via-cream/50 to-accent/30 relative overflow-hidden" aria-labelledby="benefits-heading">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-br from-primary/3 to-rose-gold/3 blur-3xl hidden lg:block"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12 lg:mb-20">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full text-sm font-medium text-primary border border-primary/20 mb-4 lg:mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles size={16} className="text-gold" />
              <span>Avantages exclusifs</span>
            </motion.div>
            
            <h2 id="benefits-heading" className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 heading">
              Pourquoi choisir <span className="text-gradient">SkinPetra</span> ?
            </h2>
            <p className="text-base sm:text-lg lg:text-2xl text-secondary max-w-3xl mx-auto leading-relaxed font-light">
              Découvrez tous les avantages de notre technologie IPL révolutionnaire
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {allBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="group p-6 lg:p-10 rounded-2xl lg:rounded-3xl glass-effect border border-primary/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl lg:rounded-3xl`} />
                  
                  {/* Icon */}
                  <div className="relative mb-4 lg:mb-6">
                    <motion.div
                      className={`w-12 h-12 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200 shadow-lg`}
                      whileHover={{ rotate: 2, transition: { duration: 0.15 } }}
                    >
                      <Icon size={24} className="text-white lg:w-8 lg:h-8" />
                    </motion.div>
                    <motion.div
                      className={`absolute -inset-2 rounded-xl lg:rounded-2xl bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                      layoutId={`glow-${index}`}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-lg lg:text-2xl font-bold mb-2 lg:mb-3 text-foreground group-hover:text-primary transition-colors duration-300 heading">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-secondary text-sm lg:text-base leading-relaxed font-light">
                      {'text' in benefit ? benefit.text : benefit.description}
                    </p>

                    {/* Hover arrow - desktop only */}
                    <motion.div
                      className="mt-4 inline-flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:flex"
                      initial={{ x: -5 }}
                      whileHover={{ x: 0, transition: { duration: 0.2 } }}
                    >
                      <span className="text-sm">En savoir plus</span>
                      <motion.span 
                        className="ml-2"
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Corner decoration - desktop only */}
                  <motion.div
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-2 h-2 bg-gold rounded-full absolute top-1 left-1" />
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.8}>
          <motion.div
            className="text-center mt-12 lg:mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 lg:px-6 py-3 lg:py-4 glass-effect rounded-2xl border border-primary/20">
              <div className="flex -space-x-1">
                {[1,2,3,4,5].map((i) => (
                  <motion.div 
                    key={i} 
                    className="w-6 h-6 lg:w-8 lg:h-8 rounded-full premium-gradient ring-2 ring-white"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                  />
                ))}
              </div>
              <div className="text-left">
                <p className="font-semibold text-primary text-sm lg:text-base">+10,000 femmes satisfaites</p>
                <p className="text-xs lg:text-sm text-secondary">dans plus de 50 pays</p>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
} 