import { Metadata } from 'next';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Contact | Nadlyn',
  description: 'Contactez-nous pour toute question sur nos produits Lumesilk IPL.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-beige py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8 heading text-center">
          Contactez-nous
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6 heading">Nos coordonnées</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--whats)] rounded-full flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                  <p className="text-gray-700">+212 641 526 218</p>
                  <p className="text-sm text-gray-600">Disponible 7j/7 de 9h à 21h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-gray-700">contact@nadlyn.com</p>
                  <p className="text-sm text-gray-600">Réponse sous 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Adresse</h3>
                  <p className="text-gray-700">Casablanca, Maroc</p>
                  <p className="text-sm text-gray-600">Livraison dans tout le Maroc</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Horaires</h3>
                  <p className="text-gray-700">Lundi - Dimanche</p>
                  <p className="text-gray-700">9h00 - 21h00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action */}
          <div>
            <h2 className="text-2xl font-bold mb-6 heading">Contact rapide</h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Besoin d'aide ?</h3>
              <p className="text-gray-700 mb-6">
                Notre équipe est disponible pour répondre à toutes vos questions sur nos produits Lumesilk IPL.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.me/212641526218?text=Bonjour, j'ai une question sur Lumesilk IPL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[var(--whats)] hover:bg-[color-mix(in_oklab,var(--whats),black_10%)] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <FaWhatsapp className="text-xl" />
                  Contacter sur WhatsApp
                </a>
                
                <a 
                  href="mailto:contact@nadlyn.com"
                  className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <FaEnvelope className="text-xl" />
                  Envoyer un email
                </a>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-primary/10 to-rose-gold/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-3">Questions fréquentes</h3>
              <ul className="space-y-2 text-sm">
                <li>• Délai de livraison : 24-48h</li>
                <li>• Garantie : 30 jours satisfait ou remboursé</li>
                <li>• Paiement : à la livraison</li>
                <li>• Support technique inclus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
