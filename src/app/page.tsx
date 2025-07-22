import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import BuyBlock from "@/components/sections/BuyBlock";

// Dynamic imports for non-critical components to reduce initial bundle
const BodyZonesInteractive = dynamic(() => import("@/components/BodyZonesInteractive"), {
  loading: () => <div className="h-96 bg-gradient-to-b from-white via-cream/50 to-accent/30" />,
});

const BeforeAfterSlider = dynamic(() => import("@/components/BeforeAfterSlider"), {
  loading: () => <div className="h-96 bg-gradient-to-b from-white to-slate-50" />,
});

const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), {
  loading: () => <div className="h-96 bg-gradient-to-b from-accent/30 to-background" />,
});

const FAQ = dynamic(() => import("@/components/sections/FAQ"), {
  loading: () => <div className="h-96 bg-background" />,
});

const Footer = dynamic(() => import("@/components/sections/Footer"), {
  loading: () => <div className="h-64 bg-gray-900" />,
});

const WhatsAppFab = dynamic(() => import("@/components/WhatsAppFab"), {
  loading: () => null,
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <BodyZonesInteractive />
      <BeforeAfterSlider />
      <BuyBlock />
      <Testimonials />
      <FAQ />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
