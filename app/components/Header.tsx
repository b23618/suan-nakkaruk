'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Phone, Leaf } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const navItems = [
  { label: 'หน้าแรก', href: '#home' },
  { label: 'สินค้า', href: '#products' },
  { label: 'เรื่องราวของเรา', href: '#story' },
  { label: 'แกลเลอรี', href: '#gallery' },
  { label: 'รีวิว', href: '#reviews' },
  { label: 'ติดต่อเรา', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-md shadow-md border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#2D5A27] flex items-center justify-center shadow-md group-hover:shadow-lg transition-all group-hover:scale-105">
              <Leaf size={18} className="text-white" />
            </div>
            <div>
              <p className={`text-base font-bold leading-none tracking-wide transition-colors ${scrolled ? 'text-[#2D5A27]' : 'text-white'}`}>
                สวนนาครักษ์
              </p>
              <p className={`text-[10px] font-medium tracking-widest uppercase transition-colors ${scrolled ? 'text-[#6B8E23]' : 'text-white/80'}`}>
                SUANNAKKARUK
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#D4AF37] ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+66800000000"
              className={`hidden md:flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#D4AF37] ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              <Phone size={14} />
              <span>โทรสั่งซื้อ</span>
            </a>
            <a
              href="#products"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] text-white text-sm font-semibold rounded-full hover:bg-[#C49B2A] hover:shadow-lg transition-all"
            >
              สั่งซื้อสินค้า
            </a>
            <button className={`relative p-2 transition-colors hover:text-[#D4AF37] ${scrolled ? 'text-gray-700' : 'text-white'}`}>
              <ShoppingCart size={20} />
              <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#D4AF37] text-white text-[9px] rounded-full flex items-center justify-center font-bold">0</span>
            </button>
            {/* Language switcher - only render after mount to avoid hydration mismatch */}
            {mounted && (
              <div className="flex items-center gap-1 border-l border-gray-300/20 pl-3 ml-1">
                <button
                  onClick={() => setLanguage('th')}
                  className={`px-2 py-1 text-xs font-bold rounded transition-all ${
                    language === 'th'
                      ? 'bg-[#D4AF37] text-white'
                      : scrolled
                      ? 'text-gray-700 hover:text-[#D4AF37]'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  ไทย
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 text-xs font-bold rounded transition-all ${
                    language === 'en'
                      ? 'bg-[#D4AF37] text-white'
                      : scrolled
                      ? 'text-gray-700 hover:text-[#D4AF37]'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>
            )}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-gray-700 hover:bg-[#FFF8E8] hover:text-[#2D5A27] rounded-lg font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#products"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 px-4 py-3 bg-[#2D5A27] text-white rounded-lg font-semibold text-center"
            >
              สั่งซื้อสินค้า
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
