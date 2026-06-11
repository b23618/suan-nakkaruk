'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: '30+', label: 'ปีประสบการณ์', sub: 'Years of Experience' },
  { value: '5,000+', label: 'ลูกค้าที่ไว้วางใจ', sub: 'Happy Customers' },
  { value: '20,000+', label: 'ผลไม้ที่จัดส่งแล้ว', sub: 'Fruits Delivered' },
  { value: '100%', label: 'คัดเกรดพรีเมียม', sub: 'Premium Grade Only' },
];

export default function TrustStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-[#2D5A27] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="text-center"
            >
              {/* Value */}
              <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D4AF37] leading-none mb-2">
                {stat.value}
              </p>
              {/* Divider */}
              <div className="w-8 h-0.5 bg-[#D4AF37]/40 mx-auto mb-3" />
              {/* Label */}
              <p className="text-white font-semibold text-sm sm:text-base leading-tight">
                {stat.label}
              </p>
              <p className="text-white/50 text-xs mt-1 tracking-wide">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
