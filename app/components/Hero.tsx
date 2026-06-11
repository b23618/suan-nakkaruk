'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, Truck, Leaf, Award, ChevronDown, Shield } from 'lucide-react';

const floatingBadges = [
  {
    id: 1,
    icon: Truck,
    title: 'ส่งฟรีทั่วไทย',
    sub: 'Free Nationwide Shipping',
    bg: 'bg-white',
    iconBg: 'bg-[#2D5A27]',
    pos: 'top-16 -left-6 lg:-left-12',
  },
  {
    id: 2,
    icon: Leaf,
    title: 'คัดสดทุกวัน',
    sub: 'Daily Fresh Harvest',
    bg: 'bg-white',
    iconBg: 'bg-[#D4AF37]',
    pos: '-right-6 lg:-right-12 top-1/3',
  },
  {
    id: 3,
    icon: Award,
    title: 'คุณภาพพรีเมียม',
    sub: 'Premium Grade Export',
    bg: 'bg-[#2D5A27]',
    iconBg: 'bg-white/20',
    pos: 'bottom-16 -left-6 lg:-left-12',
    dark: true,
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-[#FFF8E8] flex items-center overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#2D5A27]/5" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-[#D4AF37]/10" />
        <div className="absolute top-1/2 left-1/4 w-3 h-3 rounded-full bg-[#D4AF37]/40" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-[#2D5A27]/30" />
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 rounded-full bg-[#6B8E23]/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — Content */}
          <div className="order-2 lg:order-1">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#2D5A27]/10 border border-[#2D5A27]/20 text-[#2D5A27] px-4 py-2 rounded-full text-sm font-semibold mb-8"
            >
              <Leaf size={13} />
              <span>สวนนาครักษ์ • Premium Orchard Since 1995</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#2D5A27] leading-[1.1] mb-6"
            >
              ทุเรียน มังคุด<br />
              <span className="text-[#D4AF37]">คุณภาพพรีเมียม</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#6B8E23]">ส่งตรงจากสวน</span>
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="origin-left h-0.5 w-16 bg-[#D4AF37] mb-6"
            />

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed"
            >
              คัดเฉพาะผลไม้คุณภาพ ส่งตรงจากสวนนาครักษ์ ถึงมือคุณ
              <br />ปลอดสารเคมี เก็บสดทุกวัน มาตรฐานส่งออก
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.a
                href="#products"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2D5A27] text-white font-semibold rounded-xl hover:bg-[#1A3A14] hover:shadow-2xl transition-all text-base"
              >
                สั่งซื้อสินค้า
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#products"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-[#2D5A27] font-semibold rounded-xl border-2 border-[#2D5A27] hover:bg-[#2D5A27] hover:text-white transition-all text-base"
              >
                ดูโปรโมชั่น
              </motion.a>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
                <span className="font-bold text-[#2D5A27] text-sm">4.9</span>
                <span className="text-gray-500 text-xs">จาก 5,000+ รีวิว</span>
              </div>
              <div className="w-px h-5 bg-gray-300 hidden sm:block" />
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <Shield size={13} className="text-[#2D5A27]" />
                <span>รับประกันคืนเงิน 100%</span>
              </div>
              <div className="w-px h-5 bg-gray-300 hidden sm:block" />
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <Truck size={13} className="text-[#2D5A27]" />
                <span>ส่งฟรีทั่วไทย</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            {/* Main visual card */}
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-full">
              {/* Premium photography panel */}
              <div className="relative aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=700&h=900&q=85&auto=format&fit=crop"
                  alt="ผลไม้พรีเมียมจากสวนนาครักษ์"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Cinematic gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#1A3A14]/80 via-[#1A3A14]/10 to-transparent" />
                {/* Gold frame accent */}
                <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-[#D4AF37]/40 pointer-events-none" />
                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-white/50 text-[11px] tracking-[0.22em] uppercase font-medium mb-1.5">Premium Quality · Since 1995</p>
                  <p className="text-white text-xl font-bold leading-tight">ทุเรียน & มังคุด</p>
                  <p className="text-[#D4AF37] text-sm font-medium mt-1">คัดเกรด A ส่งตรงจากสวน</p>
                </div>
              </div>

              {/* Floating badges */}
              {floatingBadges.map((badge, i) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={badge.id}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.2, duration: 0.5, type: 'spring' }}
                    className={`absolute ${badge.pos} ${badge.bg} rounded-2xl shadow-xl p-3 flex items-center gap-3 z-10 min-w-[160px]`}
                  >
                    <div className={`w-9 h-9 ${badge.iconBg} rounded-xl flex items-center justify-center shrink-0`}>
                      <Icon size={17} className={badge.dark ? 'text-white' : 'text-white'} />
                    </div>
                    <div>
                      <p className={`font-bold text-xs leading-tight ${badge.dark ? 'text-white' : 'text-[#2D5A27]'}`}>
                        {badge.title}
                      </p>
                      <p className={`text-[10px] leading-tight ${badge.dark ? 'text-white/70' : 'text-gray-400'}`}>
                        {badge.sub}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#2D5A27]/50 hidden lg:block"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
