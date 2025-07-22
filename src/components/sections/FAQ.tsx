"use client";

import { ChevronDown, HelpCircle, Search } from "lucide-react";
import ChatWhatsAppButton from "../ChatWhatsAppButton";
import AnimatedSection from "../AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { faq } from "@/lib/skinpetra-content";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function AccordionItem({ question, answer, isOpen, onToggle, index }: AccordionItemProps) {
  return (
    <AnimatedSection delay={index * 0.05}>
      <motion.div
        className="group h-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
      >
        <motion.div
          className="glass-effect rounded-2xl lg:rounded-3xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md"
          whileHover={{ scale: 1.01 }}
        >
          <motion.button
            className="w-full px-5 py-4 lg:px-8 lg:py-6 text-left flex justify-between items-center hover:bg-primary/5 transition-all duration-300 group min-h-[60px]"
            onClick={onToggle}
            whileTap={{ scale: 0.99 }}
            aria-expanded={isOpen}
            aria-controls={`faq-content-${index}`}
            id={`faq-button-${index}`}
          >
            <span className="font-semibold text-base lg:text-lg text-foreground pr-4 heading group-hover:text-primary transition-colors">
              {question}
            </span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors"
            >
              <ChevronDown size={18} className="text-primary lg:w-5 lg:h-5" />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
                id={`faq-content-${index}`}
                role="region"
                aria-labelledby={`faq-button-${index}`}
              >
                <motion.div
                  className="px-5 pb-4 lg:px-8 lg:pb-6 text-gray-700 leading-relaxed border-t border-primary/10 pt-4 lg:pt-6 font-light text-sm lg:text-base"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {answer}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQ = faq.filter(item => 
    item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-12 lg:py-32 bg-gradient-to-b from-cream/50 via-background to-accent/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-gradient-to-br from-primary/5 to-rose-gold/5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-10 lg:mb-20">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full text-sm font-medium text-primary border border-primary/20 mb-4 lg:mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <HelpCircle size={16} className="text-gold" />
              <span>Questions fréquentes</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 heading">
              Toutes vos <span className="text-gradient">questions</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-2xl text-secondary max-w-3xl mx-auto leading-relaxed font-light">
              Tout ce que vous devez savoir sur SkinPetra IPL avant votre achat
            </p>
          </div>
        </AnimatedSection>

        {/* Search Bar - Hide on mobile to save space */}
        <AnimatedSection delay={0.2}>
          <motion.div
            className="hidden lg:block max-w-md mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" />
              <input
                type="text"
                placeholder="Rechercher une question..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 glass-effect rounded-2xl border border-primary/20 focus:border-primary focus:outline-none transition-all duration-300 font-medium"
              />
            </div>
          </motion.div>
        </AnimatedSection>

        <div className="max-w-3xl lg:max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredFAQ.length > 0 ? (
              <motion.div
                key="faq-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-2 gap-4 lg:gap-6"
              >
                {filteredFAQ.map((item, index) => (
                  <AccordionItem
                    key={index}
                    question={item.q}
                    answer={item.a}
                    isOpen={openIndex === index}
                    onToggle={() => toggleFAQ(index)}
                    index={index}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                className="text-center py-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Search size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Aucun résultat trouvé</h3>
                <p className="text-secondary">Essayez des mots-clés différents ou parcourez toutes les questions</p>
                <motion.button
                  onClick={() => setSearchTerm("")}
                  className="mt-4 px-6 py-2 premium-gradient text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir toutes les questions
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom CTA - make more compact on mobile */}
        <AnimatedSection delay={0.5}>
          <motion.div
            className="text-center mt-12 lg:mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-center gap-4 p-6 lg:p-8 max-w-2xl mx-auto text-center">
              <h3 className="text-xl lg:text-2xl font-bold heading">Vous avez encore des questions ?</h3>
              <p className="text-secondary text-base lg:text-lg">Notre équipe d&apos;experts est là pour vous aider</p>
              <ChatWhatsAppButton />
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
} 