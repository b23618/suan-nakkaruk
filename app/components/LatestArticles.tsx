'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'ประโยชน์ของมังคุดต่อสุขภาพ',
    excerpt:
      'มังคุดมีสารต้านอนุมูลอิสระสูง ช่วยลดการอักเสบ และดีต่อระบบภูมิคุ้มกัน',
    date: '15 มกราคม 2024',
    category: 'สุขภาพ',
    image: 'linear-gradient(135deg, #D4AF37 0%, #FFF8E8 100%)',
  },
  {
    id: 2,
    title: 'วิธีเลือกทุเรียนที่ดี',
    excerpt:
      'เรียนรู้วิธีเลือกทุเรียนที่สุกพอดี หอมหวาน และมีคุณภาพสูงสุด',
    date: '10 มกราคม 2024',
    category: 'เคล็ดลับ',
    image: 'linear-gradient(135deg, #6B8E23 0%, #FFF8E8 100%)',
  },
  {
    id: 3,
    title: 'การเก็บรักษาผลไม้สดใหม่',
    excerpt:
      'วิธีเก็บรักษาผลไม้ให้สดใหม่นานขึ้น และคงความอร่อยไว้ได้นานที่สุด',
    date: '5 มกราคม 2024',
    category: 'เคล็ดลับ',
    image: 'linear-gradient(135deg, #2D5A27 0%, #FFF8E8 100%)',
  },
];

export default function LatestArticles() {
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
            บทความล่าสุด
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            เรียนรู้เคล็ดลับและข้อมูลเกี่ยวกับผลไม้คุณภาพสูง
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                {/* Article Image */}
                <div
                  className="relative h-48 overflow-hidden bg-linear-to-br"
                  style={{ background: article.image }}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-[#D4AF37] text-[#2D5A27] text-sm font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <Calendar size={16} />
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#2D5A27] mb-3 group-hover:text-[#6B8E23] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <button className="inline-flex items-center gap-2 text-[#2D5A27] font-semibold hover:text-[#6B8E23] transition-colors group/btn">
                    อ่านต่อ
                    <ArrowRight
                      size={18}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-[#2D5A27] text-white font-bold rounded-lg hover:bg-[#6B8E23] transition-all transform hover:scale-105 shadow-lg">
            ดูบทความทั้งหมด
          </button>
        </motion.div>
      </div>
    </section>
  );
}
