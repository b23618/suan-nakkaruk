'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'ประโยชน์ของมังคุดต่อสุขภาพที่คุณควรรู้',
    excerpt: 'มังคุดอุดมด้วยสารแซนโธน ต้านอนุมูลอิสระสูง ช่วยลดการอักเสบและเสริมระบบภูมิคุ้มกัน',
    date: '15 มกราคม 2024',
    readTime: '3 นาที',
    category: 'สุขภาพ',
    categoryColor: '#2D5A27',
    emoji: '🍇',
    bg: 'from-[#2D5A27] to-[#4A7C3F]',
  },
  {
    id: 2,
    title: '5 วิธีเลือกทุเรียนสุกพอดีเหมือนชาวสวน',
    excerpt: 'เรียนรู้เทคนิคลับจากเจ้าของสวนทุเรียนกว่า 30 ปี วิธีดมกลิ่น เขย่าเมล็ด และดูสีก้าน',
    date: '10 มกราคม 2024',
    readTime: '5 นาที',
    category: 'เคล็ดลับ',
    categoryColor: '#D4AF37',
    emoji: '🌰',
    bg: 'from-[#6B8E23] to-[#8AAF2A]',
  },
  {
    id: 3,
    title: 'วิธีเก็บผลไม้ให้สดนานขึ้นโดยไม่ใช้สารเคมี',
    excerpt: 'เทคนิคธรรมชาติในการถนอมผลไม้สดให้อยู่ได้นานขึ้น รักษาคุณค่าทางโภชนาการไว้ครบถ้วน',
    date: '5 มกราคม 2024',
    readTime: '4 นาที',
    category: 'ออร์แกนิก',
    categoryColor: '#6B8E23',
    emoji: '🌿',
    bg: 'from-[#1A3A14] to-[#2D5A27]',
  },
];

export default function LatestArticles() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#D4AF37] font-semibold text-sm tracking-widest uppercase mb-3"
            >
              Blog & Tips
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-4xl sm:text-5xl font-bold text-[#2D5A27] leading-tight"
            >
              บทความล่าสุด
            </motion.h2>
          </div>
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-[#2D5A27] font-semibold text-sm group shrink-0"
          >
            ดูทั้งหมด
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {articles.map((a, i) => (
            <motion.article
              key={a.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Cover */}
              <div className={`relative h-44 bg-linear-to-br ${a.bg} overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center text-6xl select-none">
                  <span className="group-hover:scale-110 transition-transform duration-300 drop-shadow-xl">{a.emoji}</span>
                </div>
                <span
                  className="absolute top-4 left-4 px-3 py-1 text-white text-xs font-bold rounded-full"
                  style={{ background: a.categoryColor }}
                >
                  {a.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {a.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {a.readTime}
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-[#2D5A27] transition-colors line-clamp-2">
                  {a.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                  {a.excerpt}
                </p>

                <span className="inline-flex items-center gap-1.5 text-[#2D5A27] text-sm font-semibold group-hover:gap-3 transition-all">
                  อ่านต่อ
                  <ArrowRight size={14} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
