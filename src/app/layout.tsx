import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#E1218F',
};

export const metadata: Metadata = {
  title: "SkinPetra IPL - Épilation Définitive à Domicile | Nadlyn",
  description: "Découvrez SkinPetra IPL, l'appareil d'épilation permanente révolutionnaire. Résultats visibles en 8 semaines, sans douleur, pour tous types de peau. Garantie satisfait ou remboursé 30 jours.",
  keywords: "épilation IPL, épilation permanente, épilation maison, SkinPetra, Nadlyn, épilation laser",
  authors: [{ name: "Nadlyn" }],
  creator: "Nadlyn",
  publisher: "Nadlyn",
  robots: "index, follow",
  openGraph: {
    title: "SkinPetra IPL - Épilation Définitive à Domicile",
    description: "La révolution de l'épilation permanente à domicile. Sans douleur, résultats en 8 semaines.",
    type: "website",
    locale: "fr_FR",
    siteName: "Nadlyn",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkinPetra IPL - Épilation Définitive à Domicile",
    description: "La révolution de l'épilation permanente à domicile. Sans douleur, résultats en 8 semaines.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
