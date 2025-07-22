"use client";

import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import { useState } from "react";
import { price } from "@/lib/skinpetra-content";
import { waLink } from "@/lib/wa";
import { Package, Truck, Shield, Star, Check, Zap, Gift } from "lucide-react";
import Image from "next/image";

export default function BuyBlock() {
  const [selectedColor, setSelectedColor] = useState("noir");
  const [quantity, setQuantity] = useState(1);

  const colors = [
    { name: "noir", hex: "#1a1a1a", label: "Noir Élégant", border: "#333", image: "/3f723df2-54dd-47f1-91f0-6692a9a42daf.png" },
    { name: "rose", hex: "#f8bbd9", label: "Rose Doré", border: "#e91e63", image: "/4a566c53-572d-4866-9a6c-38a86faa7c1c.png" },
    { name: "blanc", hex: "#ffffff", label: "Blanc Nacré", border: "#e5e7eb", image: "/f38f25be-8765-424b-a071-f3aae9c13eb8.png" },
  ];

  const features = [
    { icon: Zap, text: "Résultats visibles en 3-4 séances", highlight: true },
    { icon: Shield, text: "Technologie sûre et certifiée", highlight: false },
    { icon: Package, text: "Livraison gratuite", highlight: false },
    { icon: Gift, text: "Garantie 30 jours", highlight: true },
  ];

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <section className="py-8 lg:py-16 bg-gradient-to-br from-cream via-warm-beige/30 to-accent relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-primary/5 to-gold/5 blur-3xl hidden lg:block"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 360]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="max-w-5xl mx-auto">


            <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
              {/* Compact Features List */}
              <motion.div
                className="order-2 lg:order-1 lg:col-span-2 space-y-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-lg font-bold heading mb-3">Avantages clés :</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                        feature.highlight 
                          ? 'glass-effect border border-primary/20' 
                          : 'bg-white/40'
                      }`}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.02, duration: 0.3 }}
                      whileHover={{ scale: 1.01, transition: { duration: 0.15 } }}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        feature.highlight ? 'premium-gradient' : 'bg-primary/10'
                      }`}>
                        <feature.icon size={16} className={feature.highlight ? 'text-white' : 'text-primary'} />
                      </div>
                      <span className="text-sm font-medium text-foreground">{feature.text}</span>
                      {feature.highlight && (
                        <Star size={12} className="text-gold fill-gold ml-auto" />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Compact Trust Badges */}
                <motion.div
                  className="flex flex-wrap items-center gap-3 p-3 glass-effect rounded-xl border border-primary/20 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <div className="flex items-center gap-1.5">
                    <Shield size={14} className="text-success" />
                    <span className="text-xs font-medium">Sécurisé</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Truck size={14} className="text-primary" />
                    <span className="text-xs font-medium">24-48h</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Package size={14} className="text-gold" />
                    <span className="text-xs font-medium">Premium</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Compact Order Form */}
              <motion.div
                className="order-1 lg:order-2 lg:col-span-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="glass-effect p-4 sm:p-6 rounded-2xl border border-primary/20 backdrop-blur-xl">
                  {/* Compact Product Header */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold heading mb-1">SkinPetra IPL</h3>
                    <p className="text-xs text-secondary">Épilation définitive à domicile</p>
                  </div>

                  {/* Clean Price Display */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <span className="text-xl sm:text-2xl text-gray-500 line-through font-medium">{price.old}</span>
                      <span className="text-3xl sm:text-4xl font-bold text-primary">
                        {price.current}
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-success/10 text-success rounded-full text-sm font-medium mb-2">
                      <Check size={14} />
                      <span>Économisez 500 Dh</span>
                    </div>
                    <p className="text-sm text-secondary font-medium">{price.shipping}</p>
                  </div>

                  {/* Compact Product Image */}
                  <motion.div
                    className="relative mb-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <div className="relative aspect-[5/3] bg-gradient-to-br from-white/20 to-white/10 rounded-xl p-2 sm:p-3 overflow-hidden">
                                              <motion.div
                        key={selectedColor}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={colors.find(c => c.name === selectedColor)?.image || colors[0].image}
                          alt={`SkinPetra IPL ${colors.find(c => c.name === selectedColor)?.label || colors[0].label}`}
                          fill
                          className="object-contain"
                          priority
                        />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Compact Color Selection */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Choisissez votre couleur :</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {colors.map((color) => (
                        <motion.button
                          key={color.name}
                          onClick={() => setSelectedColor(color.name)}
                          className={`p-2 sm:p-3 rounded-xl border-2 transition-all duration-300 ${
                            selectedColor === color.name
                              ? 'border-primary bg-primary/10'
                              : 'border-gray-200 hover:border-primary/50'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div
                            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full mx-auto mb-1 border-2"
                            style={{ 
                              backgroundColor: color.hex,
                              borderColor: color.border
                            }}
                          />
                          <span className="text-xs font-medium block">{color.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Compact Quantity & CTA Row */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
                    {/* Quantity Selection */}
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">Qté:</span>
                      <div className="flex items-center gap-2">
                        <motion.button
                          onClick={() => handleQuantityChange(-1)}
                          className="w-8 h-8 rounded-lg border-2 border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 flex items-center justify-center font-bold text-sm"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          -
                        </motion.button>
                        <span className="text-lg font-bold w-8 text-center">{quantity}</span>
                        <motion.button
                          onClick={() => handleQuantityChange(1)}
                          className="w-8 h-8 rounded-lg border-2 border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 flex items-center justify-center font-bold text-sm"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          +
                        </motion.button>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href={waLink(selectedColor, quantity)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex-1 w-full sm:w-auto block text-center py-3 px-4 sm:px-6 premium-gradient text-white font-bold text-sm sm:text-base rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Commander maintenant
                        <motion.span
                          animate={{ x: [0, 2, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-sm"
                        >
                          →
                        </motion.span>
                      </span>
                      
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                        style={{ backgroundSize: '200% 100%' }}
                      />
                    </motion.a>
                  </div>

                  {/* Security note */}
                  <p className="text-xs text-secondary text-center mt-3">
                    🔒 Commande sécurisée • Support client 24/7
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
} 