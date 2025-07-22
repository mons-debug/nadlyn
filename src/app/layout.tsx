import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="preload" href="/cropped-Nadlyn-Logo-01-tightest-cream-300x70.png" as="image" />
        <link rel="preload" href="/ChatGPT Image Jul 21, 2025, 11_42_19 PM.png" as="image" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
