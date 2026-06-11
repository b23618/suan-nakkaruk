'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D5A27] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center">
                <span className="text-lg font-bold">🥭</span>
              </div>
              <h3 className="text-xl font-bold">SUANNAKKARUK</h3>
            </div>
            <p className="text-white/80 text-sm">
              ผลไม้สดใหม่พรีเมี่ยมจากสวนของเรา ปลูกด้วยความรักและความเอาใจใส่
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6">ลิงก์ด่วน</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  หน้าแรก
                </a>
              </li>
              <li>
                <a href="#products" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  สินค้า
                </a>
              </li>
              <li>
                <a href="#story" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  เรื่องราวของเรา
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  ติดต่อเรา
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6">สินค้า</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  มังคุดสดใหม่
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  ทุเรียนพรีเมี่ยม
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  ทุเรียนทอด
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  ชุดของขวัญ
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6">ติดตามเรา</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/suannakkaruk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#D4AF37] text-white hover:text-[#2D5A27] transition-all"
              >
                <span className="text-2xl">f</span>
              </a>
              <a
                href="https://line.me/R/ti/p/@suannakkaruk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#D4AF37] text-white hover:text-[#2D5A27] transition-all"
              >
                <MessageCircle size={24} />
              </a>
              <a
                href="tel:0812345678"
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#D4AF37] text-white hover:text-[#2D5A27] transition-all"
              >
                <Phone size={24} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          {/* Bottom Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h5 className="font-semibold mb-2">ที่อยู่</h5>
              <p className="text-white/80 text-sm">
                จังหวัดนครราชสีมา ประเทศไทย
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h5 className="font-semibold mb-2">เวลาทำการ</h5>
              <p className="text-white/80 text-sm">
                จันทร์-อาทิตย์ 08:00-18:00 น.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h5 className="font-semibold mb-2">โทรศัพท์</h5>
              <p className="text-white/80 text-sm">
                081-234-5678
              </p>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center pt-8 border-t border-white/20"
          >
            <p className="text-white/80 text-sm">
              © {currentYear} สวนนาครักษ์ (SUANNAKKARUK). สงวนลิขสิทธิ์ทั้งหมด
            </p>
            <p className="text-white/60 text-xs mt-2">
              ออกแบบและพัฒนาด้วย ❤️ เพื่อให้คุณได้ผลไม้คุณภาพสูง
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
