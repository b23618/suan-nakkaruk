'use client';

import { motion } from 'framer-motion';

const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=85&auto=format&fit=crop',
    label: 'สวนนาครักษ์',
    sub: 'Our Orchard',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=600&q=85&auto=format&fit=crop',
    label: 'ผลไม้พรีเมียม',
    sub: 'Premium Fruits',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=85&auto=format&fit=crop',
    label: 'ทุ่งเกษตร',
    sub: 'Farm Landscape',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1519996409144-56c88c36e5c8?w=600&q=85&auto=format&fit=crop',
    label: 'ผลไม้สดใหม่',
    sub: 'Fresh Harvest',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=85&auto=format&fit=crop',
    label: 'สวนเขียวชอุ่ม',
    sub: 'Lush Garden',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=700&q=85&auto=format&fit=crop',
    label: 'คัดสรรคุณภาพ',
    sub: 'Quality Selection',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-white">
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
            Life on the Farm
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl sm:text-5xl font-bold text-[#2D5A27] mb-4"
          >
            ชีวิตในสวนของเรา
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-400 text-base max-w-lg mx-auto"
          >
            ทุกภาพบอกเล่าเรื่องราวของความทุ่มเทและความรักในการปลูกผลไม้คุณภาพสูง
          </motion.p>
        </div>

        {/* True CSS masonry using columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group break-inside-avoid mb-4 relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#1A3A14]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end">
                <div className="p-5">
                  <p className="text-white font-bold text-sm">{photo.label}</p>
                  <p className="text-white/60 text-xs tracking-wide">{photo.sub}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
