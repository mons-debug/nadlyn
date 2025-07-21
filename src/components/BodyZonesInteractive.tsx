"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

const zones = [
  {
    key: 'bras',
    label: 'Bras', 
    img: '/brasznimage.png',
    desc: 'Épilation douce des bras'
  },
  {
    key: 'visage',
    label: 'Visage',
    img: '/f2d1b64d-1aae-4a0b-a472-d8586e256383.png', 
    desc: 'Traitement sûr pour le visage'
  },
  {
    key: 'aisselles', 
    label: 'Aisselles',
    img: '/0248b845-9be9-4417-a330-96f0c8eb2915.png',
    desc: 'Zone sensible traitée en douceur'
  },
  {
    key: 'jambes',
    label: 'Jambes',
    img: '/14f7e623-62e7-45f9-bbeb-4ecc840a4d51.png',
    desc: 'Épilation complète des jambes'
  },
  {
    key: 'dos',
    label: 'Dos', 
    img: '/ba2b7af6-1290-433a-9ba3-525fd065e1dd.png',
    desc: 'Traitement du dos en toute sécurité'
  },
  {
    key: 'maillot',
    label: 'Maillot',
    img: '/25c85e56-0f06-45ee-a8fa-8bc81b2ac28c.png',
    desc: 'Zone intime traitée avec précaution'
  }
];

interface ZoneCardProps {
  zone: typeof zones[0];
  isActive: boolean;
  onClick: () => void;
}

function ZoneCard({ zone, isActive, onClick }: ZoneCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 lg:gap-3 p-2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={`w-20 h-20 lg:w-24 lg:h-24 rounded-full ring-2 shadow cursor-pointer transition-all duration-300 overflow-hidden ${
          isActive 
            ? 'ring-primary/60 shadow-lg -translate-y-1' 
            : 'ring-primary/30 hover:-translate-y-1 hover:shadow-md'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
      >
        <div className="relative w-full h-full">
          <Image
            src={zone.img}
            alt={zone.label}
            fill
            sizes="(max-width: 768px) 80px, 96px"
            className="object-cover object-center"
            style={{
              objectPosition: zone.key === 'visage' ? 'center 15%' : 'center'
            }}
          />
        </div>
      </motion.div>
      <span className="text-xs lg:text-sm font-medium text-neutral-700 text-center">{zone.label}</span>
    </motion.div>
  );
}

export default function BodyZonesInteractive() {
  const [activeZone, setActiveZone] = useState<string | null>(null);

  const handleZoneClick = (zoneKey: string) => {
    setActiveZone(activeZone === zoneKey ? null : zoneKey);
  };

  const activeZoneData = zones.find(zone => zone.key === activeZone);

  return (
    <section className="max-w-7xl mx-auto py-12 lg:py-24 px-4">
      <div className="grid gap-6 lg:gap-10 lg:grid-cols-12 items-start">
        {/* Left column - Header */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-neutral-900 text-center lg:text-left">
              Zones de <span className="text-primary">traitement</span>
            </h2>
            <p className="text-lg lg:text-xl text-neutral-700 leading-relaxed text-center lg:text-left">
              SkinPetra IPL s&apos;adapte à toutes les zones de votre corps pour une épilation 
              complète et confortable.
            </p>
          </motion.div>
        </div>

        {/* Right column - Zones */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Mobile: 3x2 Grid Layout */}
            <div className="block lg:hidden mb-6">
              <div className="grid grid-cols-3 gap-4 justify-items-center">
                {zones.map((zone) => (
                  <ZoneCard
                    key={zone.key}
                    zone={zone}
                    isActive={activeZone === zone.key}
                    onClick={() => handleZoneClick(zone.key)}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: Swiper Layout */}
            <div className="hidden lg:block">
              <Swiper
                modules={[FreeMode]}
                spaceBetween={32}
                slidesPerView="auto"
                freeMode={{
                  enabled: true,
                  sticky: true
                }}
                className="mb-8"
              >
                {zones.map((zone) => (
                  <SwiperSlide key={zone.key} style={{ width: 'auto' }}>
                    <ZoneCard
                      zone={zone}
                      isActive={activeZone === zone.key}
                      onClick={() => handleZoneClick(zone.key)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Expandable Panel */}
            <AnimatePresence>
              {activeZoneData && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="bg-white rounded-xl p-4 lg:p-6 border border-neutral-200 shadow-sm">
                    <div className="flex items-center gap-3 lg:gap-4">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden ring-2 ring-primary/30">
                        <Image
                          src={activeZoneData.img}
                          alt={activeZoneData.label}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg lg:text-xl font-semibold text-neutral-900 mb-1">
                          {activeZoneData.label}
                        </h3>
                        <p className="text-sm lg:text-base text-neutral-600">{activeZoneData.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 