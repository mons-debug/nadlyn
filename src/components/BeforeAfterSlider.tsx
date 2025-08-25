"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const comparisons = [
  {
    before: "/befor.webp_.jpg",
    after: "/after.webp2.jpg",
    title: "Jambes - 8 semaines"
  },
  {
    before: "/befor2.jpg", 
    after: "/after2.jpg",
    title: "Aisselles - 6 semaines"
  }
];

export default function BeforeAfterSlider() {
  return (
    <section className="py-12 lg:py-24 bg-gradient-to-b from-white to-slate-50" aria-labelledby="results-heading">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="results-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 heading">
            Des résultats <span className="text-primary">spectaculaires</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
            Découvrez les transformations réelles de nos clientes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Mobile View: Swiper */}
          <div className="block lg:hidden">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              grabCursor={true}
              watchOverflow={true}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{
                clickable: true,
                bulletActiveClass: '!bg-primary opacity-100',
                bulletClass: 'swiper-pagination-bullet !bg-gray-400 !opacity-70 inline-block w-2.5 h-2.5 rounded-full mx-1.5 transition-all duration-300 cursor-pointer',
              }}
              className="!pb-16"
              role="region"
              aria-label="Galerie d'images avant/après"
            >
              {comparisons.map((comparison, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <ComparisonSlide comparison={comparison} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Mobile Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button 
                className="swiper-button-prev-custom w-10 h-10 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-primary hover:bg-neutral-50 focus:outline-none focus:ring-4 focus:ring-primary/30"
                aria-label="Image précédente"
                type="button"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                className="swiper-button-next-custom w-10 h-10 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-primary hover:bg-neutral-50 focus:outline-none focus:ring-4 focus:ring-primary/30"
                aria-label="Image suivante"
                type="button"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop View: Side by Side */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8">
            {comparisons.map((comparison, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ComparisonSlide comparison={comparison} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Separator line */}
        <div className="h-px w-full bg-slate-200 my-6 lg:my-8"></div>
      </div>
    </section>
  );
}

function ComparisonSlide({ comparison }: { comparison: typeof comparisons[0] }) {
  return (
    <motion.div
      className="h-full w-full max-w-xl mx-auto px-2 sm:px-4"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 p-1.5 sm:p-2" role="img" aria-label={`Comparaison avant/après - ${comparison.title}`}>
          {/* Before Image */}
          <div className="relative aspect-[4/3]">
            <div className="absolute top-3 left-3 z-10 bg-black/80 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
              AVANT
            </div>
            <Image
              src={comparison.before}
              alt={`Avant traitement Lumesilk - ${comparison.title}`}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>

          {/* After Image */}
          <div className="relative aspect-[4/3]">
            <div className="absolute top-3 right-3 z-10 bg-black/80 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
              APRÈS
            </div>
            <Image
              src={comparison.after}
              alt={`Après traitement Lumesilk - ${comparison.title}`}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-lg lg:text-xl font-bold text-gray-900 text-center">
            {comparison.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
} 