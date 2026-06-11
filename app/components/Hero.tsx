'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    title: 'สวนนาครักษ์',
    subtitle: 'ผลไม้สดใหม่พรีเมี่ยม',
    description: 'เก็บเกี่ยวทุกวัน ปลอดสารเคมี คุณภาพสูงสุด',
    image: 'linear-gradient(135deg, #2D5A27 0%, #6B8E23 100%)',
    cta1: 'สั่งซื้อสินค้า',
    cta2: 'ดูสินค้า',
  },
  {
    id: 2,
    title: 'มังคุดสดใหม่',
    subtitle: 'Premium Mangosteen',
    description: 'เก็บเกี่ยวจากสวนของเราทุกวัน',
    image: 'linear-gradient(135deg, #D4AF37 0%, #6B8E23 100%)',
    cta1: 'สั่งซื้อเลย',
    cta2: 'ดูรายละเอียด',
  },
  {
    id: 3,
    title: 'ทุเรียนพรีเมี่ยม',
    subtitle: 'Premium Durian',
    description: 'ทุเรียนคุณภาพสูง เนื้อเหลืองสด',
    image: 'linear-gradient(135deg, #6B8E23 0%, #2D5A27 100%)',
    cta1: 'สั่งซื้อเลย',
    cta2: 'ดูรายละเอียด',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const slide = heroSlides[currentSlide];

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden pt-20">
      {/* Slides */}
      {heroSlides.map((s, index) => (
        <motion.div
          key={s.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
          style={{ background: s.image }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          key={`content-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
          >
            {slide.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/90 mb-2"
          >
            {slide.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-white/80 mb-8"
          >
            {slide.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-[#D4AF37] text-[#2D5A27] font-bold rounded-lg hover:bg-white transition-all transform hover:scale-105 shadow-lg">
              {slide.cta1}
            </button>
            <button className="px-8 py-4 bg-white/20 text-white font-bold rounded-lg hover:bg-white/30 transition-all border border-white/50 backdrop-blur-sm">
              {slide.cta2}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all backdrop-blur-sm"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all backdrop-blur-sm"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-[#D4AF37] w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
