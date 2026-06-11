'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const reviews = [
  {
    id: 1,
    name: 'สมชาย ใจดี',
    role: 'ลูกค้าประจำ',
    content:
      'ผลไม้สดใหม่มากๆ รสชาติอร่อยเหลือเชื่อ ส่งเร็ว บรรจุหุ่นดี ขอแนะนำให้เพื่อนๆ ทุกคนได้เลย',
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    id: 2,
    name: 'นางสาวจิรา สวัสดี',
    role: 'ผู้ประกอบการ',
    content:
      'ใช้ซื้อมังคุดมาให้แขกเยอะๆ ทุกคนชื่นชม คุณภาพดี ราคาเหมาะสม บริการดีมากค่ะ',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    id: 3,
    name: 'นายวิทยา ผลดี',
    role: 'พนักงานบริษัท',
    content:
      'ทุเรียนทอดอร่อยมากๆ กรอบนอก นุ่มใน ราคาเป็นธรรม ซื้อซ้ำแล้วซ้ำเล่า',
    rating: 5,
    avatar: '👨‍💻',
  },
  {
    id: 4,
    name: 'นางสาวมาลี สุขสันต์',
    role: 'แม่บ้าน',
    content:
      'ผลไม้ปลอดสารเคมี ใจเย็นให้ลูกกิน ส่งถึงบ้านสะดวก ราคาสมควรกับคุณภาพ',
    rating: 5,
    avatar: '👩‍🍳',
  },
];

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-20 bg-[#FFF8E8]">
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
            รีวิวจากลูกค้า
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ความพึงพอใจของลูกค้าคือความสำเร็จของเรา
          </p>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: Math.abs(index - currentIndex) <= 1 ? 1 : 0.3,
                  scale: Math.abs(index - currentIndex) <= 1 ? 1 : 0.9,
                }}
                transition={{ duration: 0.4 }}
                className={`${
                  Math.abs(index - currentIndex) > 1 ? 'hidden lg:block' : ''
                }`}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-2xl text-[#D4AF37]">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                    "{review.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#FFF8E8] rounded-full flex items-center justify-center text-3xl">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2D5A27]">{review.name}</h4>
                      <p className="text-sm text-gray-600">{review.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prevReview}
              className="p-3 bg-[#2D5A27] text-white rounded-full hover:bg-[#6B8E23] transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextReview}
              className="p-3 bg-[#2D5A27] text-white rounded-full hover:bg-[#6B8E23] transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[#2D5A27] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
