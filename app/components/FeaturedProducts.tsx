'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Eye } from 'lucide-react';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'มังคุดสดใหม่',
    nameEn: 'Fresh Mangosteen',
    price: 450,
    image: 'linear-gradient(135deg, #D4AF37 0%, #FFF8E8 100%)',
    description: 'มังคุดสดใหม่เก็บเกี่ยวทุกวัน หวานอร่อย เนื้อนุ่ม',
    rating: 4.8,
    reviews: 128,
  },
  {
    id: 2,
    name: 'ทุเรียนพรีเมี่ยม',
    nameEn: 'Premium Durian',
    price: 890,
    image: 'linear-gradient(135deg, #6B8E23 0%, #FFF8E8 100%)',
    description: 'ทุเรียนคุณภาพสูง เนื้อเหลืองสด หอมหวาน',
    rating: 4.9,
    reviews: 256,
  },
  {
    id: 3,
    name: 'ทุเรียนทอด',
    nameEn: 'Fried Durian',
    price: 650,
    image: 'linear-gradient(135deg, #2D5A27 0%, #FFF8E8 100%)',
    description: 'ทุเรียนทอดกรอบนอก นุ่มใน รสชาติเข้มข้น',
    rating: 4.7,
    reviews: 189,
  },
  {
    id: 4,
    name: 'ชุดของขวัญผลไม้',
    nameEn: 'Fruit Gift Set',
    price: 1290,
    image: 'linear-gradient(135deg, #D4AF37 0%, #6B8E23 100%)',
    description: 'ชุดของขวัญผลไม้พรีเมี่ยม สำหรับผู้รักษาสุขภาพ',
    rating: 4.9,
    reviews: 342,
  },
];

export default function FeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section id="products" className="py-20 bg-[#FFF8E8]">
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
            สินค้าเด่น
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ผลไม้คุณภาพสูงสุดจากสวนของเรา พร้อมส่งถึงมือคุณ
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
                {/* Product Image */}
                <div
                  className="relative h-64 overflow-hidden bg-gradient-to-br"
                  style={{ background: product.image }}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all" />

                  {/* Quick Actions */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredProduct === product.id ? 1 : 0,
                      y: hoveredProduct === product.id ? 0 : 10,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center gap-4"
                  >
                    <button className="p-3 bg-white rounded-full hover:bg-[#D4AF37] text-[#2D5A27] transition-all transform hover:scale-110 shadow-lg">
                      <Eye size={24} />
                    </button>
                    <button className="p-3 bg-[#D4AF37] rounded-full hover:bg-[#2D5A27] text-white transition-all transform hover:scale-110 shadow-lg">
                      <ShoppingCart size={24} />
                    </button>
                  </motion.div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2D5A27] mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{product.nameEn}</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${
                            i < Math.floor(product.rating)
                              ? 'text-[#D4AF37]'
                              : 'text-gray-300'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#2D5A27]">
                      ฿{product.price}
                    </span>
                    <button className="px-4 py-2 bg-[#2D5A27] text-white rounded-lg hover:bg-[#6B8E23] transition-all text-sm font-semibold">
                      เพิ่มลงตะกร้า
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-[#2D5A27] text-white font-bold rounded-lg hover:bg-[#6B8E23] transition-all transform hover:scale-105 shadow-lg">
            ดูสินค้าทั้งหมด
          </button>
        </motion.div>
      </div>
    </section>
  );
}
