'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'สมชาย ใจดี',
    role: 'ลูกค้าประจำ',
    location: 'กรุงเทพฯ',
    initials: 'สช',
    color: '#2D5A27',
    content: 'ผลไม้สดใหม่มากๆ รสชาติอร่อยเหลือเชื่อ ส่งเร็ว บรรจุหีบห่อดี ขอแนะนำให้เพื่อนๆ ทุกคนได้เลย คุ้มค่ามากๆ',
    rating: 5,
    product: 'มังคุดสดใหม่',
  },
  {
    id: 2,
    name: 'จิรา สวัสดี',
    role: 'ผู้ประกอบการร้านอาหาร',
    location: 'เชียงใหม่',
    initials: 'จร',
    color: '#D4AF37',
    content: 'ใช้ซื้อมังคุดมาให้แขกโรงแรมทุกคนชื่นชม คุณภาพดีมากค่ะ ราคาเหมาะสม บริการดีเยี่ยม ประทับใจมากๆ',
    rating: 5,
    product: 'ชุดของขวัญผลไม้',
  },
  {
    id: 3,
    name: 'วิทยา ผลดี',
    role: 'พนักงานบริษัท IT',
    location: 'นนทบุรี',
    initials: 'วท',
    color: '#6B8E23',
    content: 'ทุเรียนทอดอร่อยมากๆ กรอบนอกนุ่มใน ราคาเป็นธรรม ซื้อซ้ำแล้วซ้ำเล่า แนะนำให้ลองสักครั้งครับ',
    rating: 5,
    product: 'ทุเรียนทอดกรอบ',
  },
  {
    id: 4,
    name: 'มาลี สุขสันต์',
    role: 'แม่บ้าน',
    location: 'ปทุมธานี',
    initials: 'มล',
    color: '#2D5A27',
    content: 'ผลไม้ปลอดสารเคมี ให้ลูกๆ กินได้อย่างอุ่นใจ ส่งถึงบ้านสะดวกมาก ราคาสมควรกับคุณภาพที่ได้รับ',
    rating: 5,
    product: 'ทุเรียนพรีเมียม',
  },
];

export default function CustomerReviews() {
  return (
    <section id="reviews" className="py-32 bg-[#FFF8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#D4AF37] font-semibold text-sm tracking-widest uppercase mb-3"
          >
            Customer Reviews
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl sm:text-5xl font-bold text-[#2D5A27] mb-4"
          >
            เสียงจากลูกค้าของเรา
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-500 max-w-xl mx-auto text-base"
          >
            ความพึงพอใจของลูกค้าทุกท่านคือแรงบันดาลใจให้เราพัฒนาคุณภาพไม่หยุดหย่อน
          </motion.p>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Large quote icon */}
              <Quote size={48} className="absolute top-4 right-6 text-gray-50 fill-gray-50" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 text-base leading-relaxed mb-6 relative">
                &ldquo;{r.content}&rdquo;
              </p>

              {/* Product tag */}
              <span className="inline-block px-3 py-1 bg-[#FFF8E8] text-[#2D5A27] text-xs font-semibold rounded-full mb-5">
                สินค้า: {r.product}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                  style={{ background: r.color }}
                >
                  {r.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.role} · {r.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
