'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Globe, ArrowRight } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: 'โทรสั่งซื้อ',
    value: '081-234-5678',
    link: 'tel:0812345678',
    description: 'ทุกวัน 08:00-18:00 น.',
    color: '#2D5A27',
  },
  {
    icon: MessageCircle,
    title: 'Line OA',
    value: '@suannakkaruk',
    link: 'https://line.me/R/ti/p/@suannakkaruk',
    description: 'แชทได้ตลอด 24 ชั่วโมง',
    color: '#06C755',
  },
  {
    icon: Globe,
    title: 'Facebook',
    value: 'สวนนาครักษ์',
    link: 'https://facebook.com/suannakkaruk',
    description: 'ติดตามโปรโมชั่นล่าสุด',
    color: '#1877F2',
  },
  {
    icon: MapPin,
    title: 'Google Maps',
    value: 'นครราชสีมา',
    link: 'https://maps.google.com',
    description: 'เยี่ยมชมสวนของเรา',
    color: '#D4AF37',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#1A3A14]">

      {/* BIG CTA BANNER */}
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#D4AF37] font-semibold text-sm tracking-widest uppercase mb-4"
          >
            Ready to Order?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            พร้อมรับผลไม้คุณภาพ
            <br />
            <span className="text-[#D4AF37]">จากสวนแล้วหรือยัง?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            สั่งซื้อตรงจากสวนนาครักษ์ ได้ผลไม้สดใหม่คุณภาพสูง ส่งถึงมือคุณทั่วประเทศ
            ไม่ผ่านพ่อค้าคนกลาง ราคาเป็นธรรม บริการจริงใจ
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://line.me/R/ti/p/@suannakkaruk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#1A3A14] font-bold rounded-xl hover:bg-[#E8C54A] hover:shadow-2xl transition-all text-base"
            >
              <MessageCircle size={20} />
              สั่งผ่าน Line OA
            </a>
            <a
              href="tel:0812345678"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-white hover:bg-white/10 transition-all text-base"
            >
              <Phone size={20} />
              โทร 081-234-5678
            </a>
          </motion.div>
        </div>
      </div>

      {/* CONTACT METHODS */}
      <div className="border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {contactMethods.map((method, i) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={i}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ background: `${method.color}30` }}
                  >
                    <Icon size={22} style={{ color: method.color }} />
                  </div>
                  <p className="text-white font-semibold text-sm mb-1">{method.title}</p>
                  <p className="text-[#D4AF37] font-bold text-sm mb-2">{method.value}</p>
                  <p className="text-white/40 text-xs leading-relaxed">{method.description}</p>
                  <div className="flex items-center gap-1 mt-3 text-white/40 text-xs group-hover:text-[#D4AF37] transition-colors">
                    <span>ติดต่อ</span>
                    <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
