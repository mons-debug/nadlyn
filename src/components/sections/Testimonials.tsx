"use client";

import { Star } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/skinpetra-content";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

const testimonialsWithAvatars = [
  {
    ...testimonials[0],
    avatar: "/avatars/leila.webp",
    color: "from-rose-400 to-pink-500"
  },
  {
    ...testimonials[1], 
    avatar: "/avatars/fati.webp",
    color: "from-purple-400 to-indigo-500"
  },
  {
    ...testimonials[2],
    avatar: "/avatars/karima.webp", 
    color: "from-emerald-400 to-teal-500"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 lg:py-24 bg-gradient-to-b from-muted/50 to-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-neutral-900">
              Ce que disent nos <span className="text-primary">clientes</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-700 max-w-2xl mx-auto">
              Des témoignages authentiques de femmes qui ont transformé leur routine beauté.
            </p>
          </div>
        </AnimatedSection>

        {/* Mobile: Horizontal Swiper */}
        <div className="block lg:hidden">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={16}
            slidesPerView={1.1}
            freeMode={true}
            breakpoints={{
              640: {
                slidesPerView: 1.3,
                spaceBetween: 20,
              }
            }}
          >
            {testimonialsWithAvatars.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={testimonial} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: Responsive Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {testimonialsWithAvatars.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <TestimonialCard testimonial={testimonial} index={index} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialAvatar({ testimonial }: { testimonial: typeof testimonialsWithAvatars[0] }) {
  const [imageError, setImageError] = useState(false);
  
  if (imageError) {
    // Fallback to gradient initials
    const initials = testimonial.name.charAt(0).toUpperCase();
    return (
      <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br ${testimonial.color} ring-2 ring-primary/20 flex items-center justify-center shadow-lg`}>
        <span className="text-white font-bold text-sm lg:text-base">
          {initials}
        </span>
      </div>
    );
  }

  return (
    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden ring-2 ring-primary/20 shadow-lg">
      <Image
        src={testimonial.avatar}
        alt={testimonial.name}
        width={48}
        height={48}
        className="w-full h-full object-cover"
        onError={() => setImageError(true)}
      />
    </div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonialsWithAvatars[0]; index: number }) {
  return (
    <motion.div
      className="bg-[#f8f5f2] text-neutral-900 rounded-lg shadow-md p-5 lg:p-6 h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      {/* Stars */}
      <div className="flex mb-4 lg:mb-6 justify-center">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
          >
            <Star
              size={16}
              className={`${i < testimonial.stars ? 'text-[#E6B800] fill-current' : 'text-gray-300'} lg:w-5 lg:h-5`}
            />
          </motion.div>
        ))}
      </div>

      {/* Testimonial text */}
      <motion.blockquote
        className="text-neutral-700 text-center mb-4 lg:mb-6 italic leading-relaxed text-sm lg:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 + index * 0.1 }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </motion.blockquote>

      {/* Customer info with avatar */}
      <motion.div
        className="flex items-center justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 + index * 0.1 }}
      >
        <TestimonialAvatar testimonial={testimonial} />
        <div className="text-center">
          <div className="font-semibold text-neutral-900 text-sm lg:text-base">
            {testimonial.name}
          </div>
          <div className="text-xs lg:text-sm text-neutral-600">
            {testimonial.city}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
} 