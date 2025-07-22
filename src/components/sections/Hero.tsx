"use client";

import { Shield, Clock, Star } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "../AnimatedSection";
import { motion, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { hero } from "@/lib/skinpetra-content";
import WhatsAppButton from "../WhatsAppButton";
import { useState, useEffect, useCallback, useMemo, memo } from "react";

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const benefits = [
    { icon: Star, text: "Résultats visibles en 3-4 séances" },
    { icon: Shield, text: "Technologie sûre et certifiée" },
    { icon: Clock, text: "Séances de 10 minutes seulement" }
  ];

  const productImages = useMemo(() => [
    { src: "/ChatGPT Image Jul 21, 2025, 11_42_19 PM.png", alt: "SkinPetra IPL Lifestyle" },
    { src: "/ChatGPT Image Jul 21, 2025, 11_44_21 PM.png", alt: "SkinPetra IPL Product" },
    { src: hero.img, alt: hero.imgAlt }
  ], []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % productImages.length);
    }, 5000); // Increased to 5000ms for even smoother experience
    return () => clearInterval(timer);
  }, [productImages.length]);

  const calculateCardStyle = useCallback((index: number) => {
    const diff = (index - currentIndex + productImages.length) % productImages.length;
    const isActive = diff === 0;
    
    return {
      zIndex: isActive ? 10 : 1,
      transform: isActive ? "scale(1)" : "scale(0.98)", // Less dramatic scaling
      opacity: isActive ? 1 : 0.4, // Less dramatic opacity change
      willChange: 'transform, opacity',
    };
  }, [currentIndex, productImages.length]);

  const handleCardClick = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return (
    <section className="min-h-screen flex flex-col bg-beige py-6 lg:py-20">
      <div className="container mx-auto px-4 flex-1 flex flex-col">
        {/* Desktop Logo - visible only on desktop */}
        <div className="hidden lg:block mb-8">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/49a6897f-b2d8-42e4-8b6f-c6275acf9291.png"
              alt="Nadlyn Logo"
              width={250}
              height={58}
              className="h-12 w-auto"
              priority
            />
          </motion.div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-16 items-center flex-1">
          {/* Content */}
          <div className="flex-1 space-y-8 lg:space-y-10 text-center lg:text-left">
            <AnimatedSection>
              <motion.h1 
                className="font-bold leading-[1.1] text-neutral-900"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ willChange: 'transform, opacity' }}
              >
                <span className="block text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-extrabold bg-gradient-to-r from-primary via-rose-gold to-gold bg-clip-text text-transparent leading-tight">
                  SkinPetra IPL
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-light text-charcoal mt-2 lg:mt-4 tracking-wide">
                  Révolutionnaire
                </span>
              </motion.h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <motion.p 
                className="text-lg sm:text-xl lg:text-2xl text-neutral-600 leading-relaxed max-w-3xl mx-auto lg:mx-0 font-light"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                style={{ willChange: 'transform, opacity' }}
              >
                <span className="font-medium text-neutral-800">Adieu aux poils indésirables</span>
                <br className="hidden sm:block" />
                <span className="text-primary font-semibold"> pour toujours !</span>
              </motion.p>
            </AnimatedSection>

            {/* Enhanced Features Preview */}
            <AnimatedSection delay={0.15}>
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 text-sm sm:text-base"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
              >
                {["✨ Résultats en 8 semaines", "🏠 Confort de votre maison", "🛡️ Sans douleur"].map((feature, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-primary/10 to-rose-gold/10 rounded-full text-neutral-700 font-medium border border-primary/20"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(212, 175, 55, 0.1)" }}
                  >
                    {feature}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatedSection>

            {/* CTA Button - with enhanced spacing */}
            <AnimatedSection delay={0.2}>
              <motion.div
                className="pt-4 lg:pt-6 flex justify-center lg:justify-start"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <WhatsAppButton className="w-full sm:w-auto text-lg font-bold">
                  Commander maintenant
                </WhatsAppButton>
              </motion.div>
            </AnimatedSection>

            {/* Benefits - show on desktop only with improved styling */}
            <AnimatedSection delay={0.3}>
              <motion.div
                className="hidden lg:grid lg:grid-cols-3 gap-4 pt-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/70 border border-neutral-200/50 shadow-sm hover:shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-rose-gold flex items-center justify-center shadow-lg">
                      <benefit.icon size={20} className="text-white" />
                    </div>
                    <span className="text-sm font-medium text-neutral-800">{benefit.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatedSection>

            {/* Mobile benefits - compact version with enhanced styling */}
            <AnimatedSection delay={0.3}>
              <motion.div
                className="grid grid-cols-2 gap-3 pt-4 lg:hidden max-w-sm mx-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                {benefits.slice(0, 2).map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-xl bg-white/70 border border-neutral-200/50 shadow-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-rose-gold flex items-center justify-center shadow-sm">
                      <benefit.icon size={14} className="text-white" />
                    </div>
                    <span className="text-xs font-semibold text-neutral-800">{benefit.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatedSection>

            {/* Trust indicators - mobile optimized with enhanced styling */}
            <AnimatedSection delay={0.4}>
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6 pt-6 lg:pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} size={16} className="text-[#E6B800] fill-current drop-shadow-sm" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-neutral-700">4.9/5</span>
                </div>
                <div className="h-4 w-px bg-neutral-300 hidden sm:block"></div>
                <span className="text-sm font-medium text-neutral-600">+10,000 clients satisfaits</span>
                <div className="h-4 w-px bg-neutral-300 hidden sm:block"></div>
                <span className="text-sm font-medium text-primary">✅ Garantie 30 jours</span>
              </motion.div>
            </AnimatedSection>
          </div>

          {/* Product Image Slideshow */}
          <div className="flex-1 lg:flex-shrink-0 w-full">
            {/* Mobile Logo - visible only on mobile */}
            <div className="block lg:hidden mb-6">
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <Image
                  src="/49a6897f-b2d8-42e4-8b6f-c6275acf9291.png"
                  alt="Nadlyn Logo"
                  width={200}
                  height={47}
                  className="h-10 w-auto"
                  priority
                />
              </motion.div>
            </div>
            
            <AnimatedSection>
              <motion.div
                className="relative w-full max-w-xs sm:max-w-sm mx-auto lg:max-w-md h-[300px] sm:h-[400px] lg:h-[500px]"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
              >
                <div className="relative w-full h-full">
                  <AnimatePresence>
                    {productImages.map((image, index) => (
                      <motion.div
                        key={image.src}
                        className="absolute inset-0 cursor-pointer"
                        style={{
                          ...calculateCardStyle(index),
                          transition: "all 0.2s ease-out", // Further reduced to 0.2s
                        }}
                        onClick={() => handleCardClick(index)}
                        whileHover={{ 
                          scale: index === currentIndex ? 1.005 : 1, // Minimal hover effect
                          transition: { duration: 0.15 } // Very fast hover transition
                        }}
                      >
                        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl bg-white">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 480px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 450px"
                            priority={index === 0} // Only prioritize first image
                            loading={index === 0 ? "eager" : "lazy"} // Optimize loading
                            quality={index === 0 ? 85 : 70} // Optimized quality for performance
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                            fetchPriority={index === 0 ? "high" : "low"}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Navigation Dots */}
                <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 touch-none ${
                        index === currentIndex ? "bg-primary w-5 sm:w-6" : "bg-primary/50"
                      }`}
                      onClick={() => handleCardClick(index)}
                      aria-label={`Voir l'image ${index + 1} du produit`}
                      role="tab"
                      aria-selected={index === currentIndex}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Hero); 