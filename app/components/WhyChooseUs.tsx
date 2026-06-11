'use client';

import { motion } from 'framer-motion';
import { Leaf, Droplets, Award, Heart } from 'lucide-react';

const reasons = [
  {
    icon: Leaf,
    title: 'เก็บเกี่ยวสดใหม่',
    description: 'เก็บเกี่ยวจากสวนของเราทุกวัน เพื่อให้คุณได้ผลไม้สดใหม่ที่สุด',
  },
  {
    icon: Droplets,
    title: 'ปลอดสารเคมี',
    description: 'ปลูกแบบธรรมชาติ ไม่ใช้สารเคมีอันตราย ปลอดภัยสำหรับครอบครัว',
  },
  {
    icon: Award,
    title: 'คุณภาพพรีเมี่ยม',
    description: 'คัดสรรเฉพาะผลไม้ที่มีคุณภาพสูงสุด ตรวจสอบอย่างเข้มงวด',
  },
  {
    icon: Heart,
    title: 'ปลูกด้วยรัก',
    description: 'ธุรกิจครอบครัวที่ดูแลสวนด้วยความรักและความเอาใจใส่',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2D5A27] mb-4">
            ทำไมต้องเลือกเรา
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            เรามุ่งมั่นที่จะให้คุณได้ผลไม้คุณภาพสูงสุด ที่เก็บเกี่ยวด้วยความรักและความเอาใจใส่
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-[#FFF8E8] rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2D5A27] to-[#6B8E23] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D5A27] mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
