import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions d\'utilisation | Nadlyn',
  description: 'Conditions d\'utilisation des produits et services Nadlyn.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-beige py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8 heading text-center">
          Conditions d'utilisation
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 heading">1. Acceptation des conditions</h2>
            <p className="mb-4">
              En accédant à ce site web et en utilisant nos services, vous acceptez d'être lié par ces conditions d'utilisation. 
              Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 heading">2. Description des services</h2>
            <p className="mb-4">
              Nadlyn propose des appareils d'épilation IPL de haute qualité, notamment le Lumesilk IPL, 
              conçus pour une utilisation à domicile sûre et efficace.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 heading">3. Commandes et paiements</h2>
            <p className="mb-4">
              Toutes les commandes sont soumises à acceptation et disponibilité. Les prix sont indiqués en dirhams marocains (MAD) 
              et incluent la TVA applicable. Le paiement doit être effectué au moment de la commande.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 heading">4. Livraison</h2>
            <p className="mb-4">
              Nous nous efforçons de livrer dans les délais indiqués (24-48h). Les délais de livraison sont donnés à titre indicatif 
              et peuvent varier selon la disponibilité des produits et la zone de livraison.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 heading">5. Garantie et retours</h2>
            <p className="mb-4">
              Nous offrons une garantie de 30 jours satisfait ou remboursé sur tous nos produits. 
              Les retours doivent être effectués dans leur emballage d'origine et en parfait état.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 heading">6. Limitation de responsabilité</h2>
            <p className="mb-4">
              Nadlyn ne saurait être tenu responsable des dommages indirects, accessoires ou consécutifs 
              résultant de l'utilisation de nos produits ou services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 heading">7. Contact</h2>
            <p className="mb-4">
              Pour toute question concernant ces conditions d'utilisation, contactez-nous via WhatsApp au +212 641 526 218 
              ou par email à contact@nadlyn.com.
            </p>
          </section>

          <p className="text-sm text-gray-600 mt-8">
            Dernière mise à jour : Janvier 2025
          </p>
        </div>
      </div>
    </div>
  );
}
