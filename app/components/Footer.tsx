'use client';

import { Leaf, Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111F0E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#2D5A27] flex items-center justify-center shadow-md">
                <Leaf size={18} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-sm leading-none">สวนนาครักษ์</p>
                <p className="text-white/40 text-[10px] tracking-widest uppercase">SUANNAKKARUK</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              ผลไม้สดพรีเมียมจากสวนนาครักษ์ ปลูกด้วยความรัก ส่งตรงถึงมือคุณทุกวัน
            </p>
            <div className="flex gap-2">
              <a href="tel:0812345678" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#D4AF37] hover:text-[#1A3A14] flex items-center justify-center transition-all text-white">
                <Phone size={15} />
              </a>
              <a href="https://line.me/R/ti/p/@suannakkaruk" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#D4AF37] hover:text-[#1A3A14] flex items-center justify-center transition-all text-white">
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white font-semibold text-sm mb-5">เมนูหลัก</p>
            <ul className="space-y-3">
              {['หน้าแรก|#home', 'สินค้า|#products', 'เรื่องราวของเรา|#story', 'แกลเลอรี่|#gallery', 'รีวิว|#reviews', 'บทความ|#'].map((item) => {
                const [label, href] = item.split('|');
                return (
                  <li key={label}>
                    <a href={href} className="text-white/50 hover:text-[#D4AF37] text-sm transition-colors">{label}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Products */}
          <div>
            <p className="text-white font-semibold text-sm mb-5">สินค้าของเรา</p>
            <ul className="space-y-3">
              {['มังคุดสดใหม่', 'ทุเรียนพรีเมียม', 'ทุเรียนทอดกรอบ', 'ชุดของขวัญผลไม้'].map((p) => (
                <li key={p}>
                  <a href="#products" className="text-white/50 hover:text-[#D4AF37] text-sm transition-colors">{p}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-white font-semibold text-sm mb-5">ข้อมูลติดต่อ</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm">จังหวัดนครราชสีมา ประเทศไทย</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm">081-234-5678</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm">จันทร์-อาทิตย์ 08:00-18:00 น.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {currentYear} สวนนาครักษ์ (SUANNAKKARUK). สงวนลิขสิทธิ์ทั้งหมด
          </p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <p className="text-white/30 text-xs">Premium Organic Fruit · Since 1995</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
