import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Nadlyn',
  description: 'Notre politique de confidentialité et protection des données personnelles.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-beige py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8 heading text-center">
          Politique de confidentialité
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 heading">1. Collecte des informations</h2>
            <p className="mb-4">
              Nous collectons les informations que vous nous fournissez directement, telles que votre nom, 
              adresse de livraison, numéro de téléphone et adresse email lors de vos commandes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 heading">2. Utilisation des données</h2>
            <p className="mb-4">
              Vos données personnelles sont utilisées pour :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Traiter et expédier vos commandes</li>
              <li>Vous contacter concernant votre commande</li>
              <li>Améliorer nos services et produits</li>
              <li>Vous envoyer des informations marketing (avec votre consentement)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 heading">3. Protection des données</h2>
            <p className="mb-4">
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles 
              contre l'accès, la modification, la divulgation ou la destruction non autorisés.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 heading">4. Partage des informations</h2>
            <p className="mb-4">
              Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. 
              Nous pouvons partager vos informations avec nos partenaires de livraison uniquement pour l'exécution de vos commandes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 heading">5. Cookies</h2>
            <p className="mb-4">
              Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser l'utilisation du site. 
              Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 heading">6. Vos droits</h2>
            <p className="mb-4">
              Conformément à la loi marocaine sur la protection des données, vous avez le droit d'accéder, 
              de rectifier, de supprimer ou de vous opposer au traitement de vos données personnelles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 heading">7. Contact</h2>
            <p className="mb-4">
              Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
              contactez-nous via WhatsApp au +212 641 526 218 ou par email à privacy@nadlyn.com.
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
