import Hero from "@/components/sections/Hero";
import BodyZonesInteractive from "@/components/BodyZonesInteractive";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import BuyBlock from "@/components/sections/BuyBlock";
import Footer from "@/components/sections/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

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
