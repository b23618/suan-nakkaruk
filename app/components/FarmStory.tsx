'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const timeline = [
  { year: '1995', title: 'เริ่มต้นสวน', desc: 'ก่อตั้งสวนนาครักษ์ด้วยความรักในการเกษตร เริ่มปลูกมังคุดและทุเรียนบนพื้นที่ 20 ไร่' },
  { year: '2010', title: 'ขยายพื้นที่ปลูก', desc: 'ขยายพื้นที่เป็น 100 ไร่ พัฒนาระบบน้ำและการดูแลต้นไม้แบบออร์แกนิก' },
  { year: '2020', title: 'ส่งผลไม้ทั่วประเทศ', desc: 'เริ่มระบบจัดส่งทั่วประเทศ มีลูกค้าประจำมากกว่า 3,000 ครัวเรือน' },
  { year: '2026', title: 'แบรนด์สวนนาครักษ์', desc: 'สร้างแบรนด์ระดับพรีเมียม พร้อมส่งออกต่างประเทศ มาตรฐานระดับโลก' },
];

export default function FarmStory() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="story" className="bg-[#1A3A14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 min-h-[600px]">

          {/* LEFT — Cinematic visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center py-20 lg:py-0"
          >
            {/* Big decorative orchard visual */}
            <div className="relative">
              {/* Main circle */}
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#2D5A27]/60 border border-white/10 flex items-center justify-center">
                <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-[#2D5A27]/80 flex items-center justify-center">
                  <div className="text-center select-none">
                    <div className="text-8xl sm:text-9xl mb-2">🌳</div>
                    <p className="text-white/80 text-sm tracking-widest uppercase font-medium">Organic Orchard</p>
                    <p className="text-[#D4AF37] font-bold text-lg">Since 1995</p>
                  </div>
                </div>
              </div>
              {/* Orbiting fruit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-2xl">🌰</div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-2xl">🍇</div>
              </motion.div>
              {/* Stat badges */}
              <div className="absolute -right-8 top-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-center">
                <p className="text-[#D4AF37] font-bold text-2xl">30+</p>
                <p className="text-white/70 text-xs">ปีประสบการณ์</p>
              </div>
              <div className="absolute -left-8 bottom-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-center">
                <p className="text-[#D4AF37] font-bold text-2xl">100%</p>
                <p className="text-white/70 text-xs">ออร์แกนิก</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Story content */}
          <div ref={ref} className="py-20 lg:pl-16">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[#D4AF37] font-semibold text-sm tracking-widest uppercase mb-4"
            >
              Our Story
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight"
            >
              จากสวนสู่มือคุณ
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="origin-left h-0.5 w-12 bg-[#D4AF37] mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="text-white/60 text-base leading-relaxed mb-12 max-w-md"
            >
              สวนนาครักษ์เป็นธุรกิจครอบครัวที่ก่อตั้งขึ้นด้วยความรักในการเกษตรแบบธรรมชาติ
              เรามุ่งมั่นส่งมอบผลไม้คุณภาพสูงสุดตรงจากสวนถึงมือคุณ
            </motion.p>

            {/* Timeline */}
            <div className="space-y-0 relative">
              {/* Vertical line */}
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-white/10" />

              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex gap-6 pb-8 last:pb-0 relative"
                >
                  {/* Dot */}
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#2D5A27] border-2 border-[#D4AF37]/50 flex items-center justify-center z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
                  </div>
                  {/* Content */}
                  <div>
                    <p className="text-[#D4AF37] font-bold text-lg leading-none mb-1">{item.year}</p>
                    <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="inline-flex items-center gap-2 mt-10 text-[#D4AF37] font-semibold text-sm hover:gap-4 transition-all group"
            >
              ติดต่อเราเพื่อเยี่ยมชมสวน
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
