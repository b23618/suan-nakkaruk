'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ShoppingCart, ArrowRight, BadgeCheck } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'มังคุดสดใหม่',
    nameEn: 'Fresh Mangosteen',
    tag: 'ขายดี',
    tagColor: '#D4AF37',
    price: 450,
    unit: 'กก.',
    photo: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=600&h=420&q=85&auto=format&fit=crop',
    description: 'มังคุดสดใหม่เก็บเกี่ยวทุกวัน หวานอร่อย เนื้อนุ่ม ส่งตรงจากสวน',
    rating: 4.8,
    reviews: 128,
    highlight: 'เก็บสดทุกวัน',
  },
  {
    id: 2,
    name: 'ทุเรียนพรีเมียม',
    nameEn: 'Premium Durian',
    tag: 'แนะนำ',
    tagColor: '#2D5A27',
    price: 890,
    unit: 'กก.',
    photo: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&h=420&q=85&auto=format&fit=crop',
    description: 'ทุเรียนคุณภาพสูงสุด เนื้อเหลืองสด หอมหวาน มาตรฐานส่งออก',
    rating: 4.9,
    reviews: 256,
    highlight: 'เกรด A+',
  },
  {
    id: 3,
    name: 'ทุเรียนทอดกรอบ',
    nameEn: 'Crispy Fried Durian',
    tag: 'ใหม่',
    tagColor: '#C0392B',
    price: 320,
    unit: '200g',
    photo: 'https://images.unsplash.com/photo-1563252722-6434563a985d?w=600&h=420&q=85&auto=format&fit=crop',
    description: 'ทุเรียนทอดกรอบนอกนุ่มใน ไม่ใช้น้ำมันปาล์ม รสชาติเข้มข้น',
    rating: 4.7,
    reviews: 189,
    highlight: 'ไม่มีสารกันเสีย',
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < Math.floor(rating) ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-gray-200 fill-gray-200'}
        />
      ))}
    </div>
  );
}

export default function FeaturedProducts() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="products" className="py-32 bg-[#FFF8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#D4AF37] font-semibold text-sm tracking-widest uppercase mb-3"
            >
              Our Products
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-4xl sm:text-5xl font-bold text-[#2D5A27] leading-tight"
            >
              สินค้าแนะนำ
              <br />
              <span className="text-[#6B8E23] text-3xl sm:text-4xl font-semibold">จากสวนของเรา</span>
            </motion.h2>
          </div>
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-[#2D5A27] font-semibold text-sm hover:gap-3 transition-all group shrink-0"
          >
            ดูสินค้าทั้งหมด
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Products Grid — max 3 per row */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              {/* Image area */}
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <img
                  src={product.photo}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Subtle dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-500" />
                {/* Tag */}
                <span
                  className="absolute top-4 left-4 px-3 py-1 text-white text-xs font-bold rounded-full z-10 shadow-lg"
                  style={{ background: product.tagColor }}
                >
                  {product.tag}
                </span>
                {/* Hover cart */}
                <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-white text-[#2D5A27] font-semibold rounded-full shadow-xl text-sm hover:bg-[#2D5A27] hover:text-white transition-all"
                  >
                    <ShoppingCart size={16} />
                    เพิ่มลงตะกร้า
                  </motion.button>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                {/* Highlight badge */}
                <div className="flex items-center gap-1.5 mb-3">
                  <BadgeCheck size={14} className="text-[#2D5A27]" />
                  <span className="text-xs text-[#2D5A27] font-semibold">{product.highlight}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-xs text-gray-400 tracking-widest uppercase mb-3">{product.nameEn}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{product.description}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-5">
                  <Stars rating={product.rating} />
                  <span className="text-xs text-gray-500 font-medium">{product.rating}</span>
                  <span className="text-xs text-gray-400">({product.reviews} รีวิว)</span>
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-2xl font-bold text-[#2D5A27]">฿{product.price.toLocaleString()}</span>
                    <span className="text-xs text-gray-400 ml-1">/ {product.unit}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2.5 bg-[#2D5A27] text-white text-sm font-semibold rounded-xl hover:bg-[#1A3A14] hover:shadow-lg transition-all"
                  >
                    สั่งซื้อ
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#2D5A27] text-white font-semibold rounded-xl hover:bg-[#1A3A14] hover:shadow-xl transition-all text-base group"
          >
            ดูสินค้าทั้งหมด
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
