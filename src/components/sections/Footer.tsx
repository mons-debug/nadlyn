"use client";

import { Instagram, Facebook, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { waLink } from "@/lib/wa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex items-center gap-3 mb-8"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/cropped-Nadlyn-Logo-01-tightest-cream-300x70.png"
                alt="Nadlyn Logo"
                width={150}
                height={35}
                className="h-10 w-auto filter brightness-0 invert"
              />
            </motion.div>
            
            <p className="text-gray-300 mb-8 leading-relaxed max-w-md text-lg font-normal">
              La révolution de l&apos;épilation à domicile. Une technologie professionnelle 
              pour des résultats durables, dans le confort de votre foyer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 w-full sm:w-auto block text-center py-4 px-6 sm:px-8 premium-gradient text-white font-bold text-base sm:text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden min-h-[48px] focus:ring-4 focus:ring-primary/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FaWhatsapp size={20} />
                  Contacter sur WhatsApp
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </span>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {[
                { text: "Bénéfices", href: "#benefits" },
                { text: "Témoignages", href: "#testimonials" },
                { text: "FAQ", href: "#faq" },
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 4 }}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal & Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {[
                { text: "Conditions d'utilisation", href: "/conditions" },
                { text: "Politique de confidentialité", href: "/confidentialite" },
                { text: "Service client", href: "/support" }
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 4 }}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                    {...(link.href.startsWith('http') && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social & Copyright */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <p className="text-gray-400 text-sm">
                © 2025 Nadlyn. Tous droits réservés.
              </p>
              <div className="flex gap-1 text-xs text-gray-500">
                <span>Fait avec</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ❤️
                </motion.span>
                <span>au Maroc</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Suivez-nous:</span>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Mail, href: "#", label: "Email" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon size={14} className="text-gray-300 group-hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 