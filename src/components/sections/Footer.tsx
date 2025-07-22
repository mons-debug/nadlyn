"use client";

import { Instagram, Facebook, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { waLink } from "@/lib/wa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-luxury-dark via-charcoal to-black text-white py-20 relative overflow-hidden">
      {/* Luxury background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjU5ZTBiIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
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
              <span className="text-xl font-light text-luxury-gold">×</span>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-luxury-gold to-yellow-400 bg-clip-text text-transparent">
                SkinPetra IPL
              </h3>
            </motion.div>
            
            <p className="text-gray-300 mb-8 leading-relaxed max-w-md text-lg font-light">
              La révolution de l&apos;épilation à domicile. Une technologie professionnelle 
              pour des résultats durables, dans le confort de votre foyer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-luxury-gold to-yellow-500 hover:from-yellow-500 hover:to-luxury-gold text-black rounded-full transition-all duration-300 font-semibold text-lg shadow-2xl border border-luxury-gold/20"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                <FaWhatsapp size={20} />
                Contacter sur WhatsApp
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
                { text: "Conditions d'utilisation", href: "#" },
                { text: "Politique de confidentialité", href: "#" },
                { text: "Service client", href: waLink() }
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 4 }}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                    {...(link.href.startsWith('http') && { 
                      target: "_blank", 
                      rel: "noopener noreferrer" 
                    })}
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