import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'
import BuyBlock from '@/components/sections/BuyBlock'

// Dynamic imports for better performance - defer non-critical components
const BenefitsGrid = dynamic(() => import('@/components/sections/BenefitsGrid'), {
  loading: () => <div className="min-h-[400px] bg-gradient-to-b from-background to-accent/30" />,
  ssr: true
})

const FAQ = dynamic(() => import('@/components/sections/FAQ'), {
  loading: () => <div className="min-h-[300px] bg-background" />,
  ssr: true
})

const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  loading: () => <div className="min-h-[400px] bg-gradient-to-b from-accent/30 to-background" />,
  ssr: true
})

const Footer = dynamic(() => import('@/components/sections/Footer'), {
  loading: () => <div className="min-h-[200px] bg-gray-900" />,
  ssr: true
})

const WhatsAppFab = dynamic(() => import('@/components/WhatsAppFab'), {
  loading: () => null,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Critical above-the-fold content loaded immediately */}
      <Hero />
      <BuyBlock />
      
      {/* Non-critical content loaded dynamically */}
      <BenefitsGrid />
      <Testimonials />
      <FAQ />
      <Footer />
      <WhatsAppFab />
    </main>
  )
}
