'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sun, FlaskConical, Award, Sprout, ShieldCheck, Leaf, Truck, Star } from 'lucide-react';

const trustBadges = [
  { icon: ShieldCheck, label: 'GAP Certified', sub: 'เกษตรดีที่เหมาะสม' },
  { icon: Leaf, label: 'Fresh Daily', sub: 'คัดสดทุกเช้า' },
  { icon: Truck, label: 'Direct From Farm', sub: 'ส่งตรงจากสวน' },
  { icon: Star, label: 'Premium Grade', sub: 'เกรด A คัดพิเศษ' },
];

const reasons = [
  {
    icon: Sun,
    label: '01',
    title: 'เก็บสดทุกวัน',
    titleEn: 'Fresh Daily',
    description: 'เก็บเกี่ยวจากสวนโดยตรงทุกเช้า เพื่อให้คุณได้รับผลไม้ที่สดที่สุด ไม่ผ่านการเก็บสต็อกนาน',
    accent: '#D4AF37',
  },
  {
    icon: FlaskConical,
    label: '02',
    title: 'ปลอดสารเคมี',
    titleEn: 'Chemical Free',
    description: 'ปลูกด้วยหลักธรรมชาติ ไม่ใช้สารเคมีอันตราย ผ่านการรับรองมาตรฐานการเกษตรปลอดภัย',
    accent: '#2D5A27',
  },
  {
    icon: Award,
    label: '03',
    title: 'คุณภาพพรีเมียม',
    titleEn: 'Premium Grade',
    description: 'คัดสรรเฉพาะผลไม้เกรด A ตรวจสอบทุกผลก่อนจัดส่ง มาตรฐานระดับส่งออก',
    accent: '#D4AF37',
  },
  {
    icon: Sprout,
    label: '04',
    title: 'ส่งตรงจากสวน',
    titleEn: 'Direct From Farm',
    description: 'ตัดผ่านพ่อค้าคนกลาง ส่งตรงจากสวนนาครักษ์ถึงมือคุณ ราคาดี คุณภาพเต็ม',
    accent: '#6B8E23',
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-32 bg-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#D4AF37] font-semibold text-sm tracking-widest uppercase mb-3"
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl sm:text-5xl font-bold text-[#2D5A27] mb-4 leading-tight"
          >
            ทำไมต้องเลือก
            <br />สวนนาครักษ์
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="text-gray-500 text-base leading-relaxed"
          >
            เรามุ่งมั่นส่งมอบประสบการณ์ผลไม้พรีเมียมจากสวนสู่มือคุณ
            ด้วยมาตรฐานคุณภาพที่ไม่เคยประนีประนอม
          </motion.p>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{ background: r.accent }}
                />
                {/* Label */}
                <p className="text-gray-200 font-bold text-5xl absolute top-4 right-6 select-none group-hover:text-gray-100 transition-colors">
                  {r.label}
                </p>
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${r.accent}18` }}
                >
                  <Icon size={26} style={{ color: r.accent }} />
                </div>
                {/* Text */}
                <h3 className="text-lg font-bold text-gray-900 mb-1">{r.title}</h3>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-4 font-medium">{r.titleEn}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{r.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust certification badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-16 pt-10 border-t border-gray-100"
        >
          <p className="text-center text-[11px] text-gray-400 uppercase tracking-[0.2em] font-medium mb-8">
            Certified &amp; Trusted
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
            {trustBadges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                  className="flex flex-col items-center gap-2.5 text-center"
                >
                  <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37]/30 bg-[#D4AF37]/5 flex items-center justify-center">
                    <Icon size={20} className="text-[#D4AF37]" />
                  </div>
                  <p className="text-gray-800 font-bold text-xs">{badge.label}</p>
                  <p className="text-gray-400 text-[10px] tracking-wide">{badge.sub}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
