'use client';

import { motion } from 'framer-motion';
import { Leaf, Users, Zap } from 'lucide-react';

export default function FarmStory() {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 bg-linear-to-br from-[#2D5A27] to-[#6B8E23] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🌳</div>
                  <p className="text-white text-xl font-semibold">สวนนาครักษ์</p>
                  <p className="text-white/80">ตั้งแต่ปี 1995</p>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-[#FFF8E8] rounded-2xl p-6 text-center"
              >
                <p className="text-3xl font-bold text-[#D4AF37]">30+</p>
                <p className="text-gray-600 text-sm mt-2">ปีประสบการณ์</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[#FFF8E8] rounded-2xl p-6 text-center"
              >
                <p className="text-3xl font-bold text-[#D4AF37]">5000+</p>
                <p className="text-gray-600 text-sm mt-2">ลูกค้าพอใจ</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2D5A27] mb-6">
              เรื่องราวของเรา
            </h2>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              สวนนาครักษ์เป็นธุรกิจครอบครัวที่ก่อตั้งขึ้นด้วยความรักและความมุ่งมั่นในการปลูกผลไม้คุณภาพสูง เรามีประสบการณ์กว่า 30 ปีในการเพาะปลูกมังคุด ทุเรียน และผลไม้อื่นๆ
            </p>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              เราเชื่อว่าผลไม้ที่ดีมาจากการดูแลด้วยความรัก ไม่ใช้สารเคมีอันตราย และเก็บเกี่ยวในเวลาที่เหมาะสม ทุกผลไม้ที่ออกจากสวนของเราล้วนผ่านการคัดสรรอย่างเข้มงวด
            </p>

            {/* Features */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className="w-12 h-12 bg-[#FFF8E8] rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="text-[#2D5A27]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#2D5A27] mb-1">ความยั่งยืน</h3>
                  <p className="text-gray-600">
                    ปลูกแบบธรรมชาติ รักษาสิ่งแวดล้อม เพื่ออนุชนรุ่นต่อไป
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className="w-12 h-12 bg-[#FFF8E8] rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="text-[#2D5A27]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#2D5A27] mb-1">ธุรกิจครอบครัว</h3>
                  <p className="text-gray-600">
                    สืบทอดความรักและความเอาใจใส่จากรุ่นสู่รุ่น
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className="w-12 h-12 bg-[#FFF8E8] rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="text-[#2D5A27]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#2D5A27] mb-1">นวัตกรรม</h3>
                  <p className="text-gray-600">
                    ใช้เทคโนโลยีสมัยใหม่ เพื่อให้ผลไม้มีคุณภาพดีที่สุด
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
