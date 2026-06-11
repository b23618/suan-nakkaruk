'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: 'โทรศัพท์',
    value: '081-234-5678',
    link: 'tel:0812345678',
    description: 'เรียกเราได้ทุกวัน 08:00-18:00',
  },
  {
    icon: MessageCircle,
    title: 'Line OA',
    value: '@suannakkaruk',
    link: 'https://line.me/R/ti/p/@suannakkaruk',
    description: 'แชทกับเราได้ 24/7',
  },
  {
    icon: Mail,
    title: 'Facebook',
    value: 'สวนนาครักษ์',
    link: 'https://facebook.com/suannakkaruk',
    description: 'ติดตามข้อมูลล่าสุด',
  },
  {
    icon: MapPin,
    title: 'ที่อยู่',
    value: 'จังหวัรนครราชสีมา',
    link: 'https://maps.google.com',
    description: 'เยี่ยมชมสวนของเรา',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#FFF8E8]">
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
            ติดต่อเรา
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            มีคำถามหรือต้องการสั่งซื้อ? ติดต่อเราได้ผ่านช่องทางต่างๆ
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-[#FFF8E8] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37] transition-colors">
                    <Icon size={32} className="text-[#2D5A27]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D5A27] mb-2">
                    {method.title}
                  </h3>
                  <p className="text-[#6B8E23] font-semibold mb-2">
                    {method.value}
                  </p>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-[#2D5A27] mb-4">
              ติดตามข้อมูลล่าสุด
            </h3>
            <p className="text-gray-600 mb-8">
              ลงทะเบียนเพื่อรับข้อมูลสินค้าใหม่ โปรโมชั่น และข้อมูลเกี่ยวกับสวนของเรา
            </p>

            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="กรุณาใส่อีเมลของคุณ"
                className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#2D5A27] transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#2D5A27] text-white font-bold rounded-lg hover:bg-[#6B8E23] transition-all transform hover:scale-105 whitespace-nowrap"
              >
                ลงทะเบียน
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              เราจะไม่แชร์อีเมลของคุณกับบุคคลที่สาม
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
