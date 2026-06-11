'use client';

import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'หน้าแรก', href: '#home' },
    { label: 'สินค้า', href: '#products' },
    { label: 'เรื่องราวของเรา', href: '#story' },
    { label: 'รีวิว', href: '#reviews' },
    { label: 'ติดต่อเรา', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2D5A27] to-[#6B8E23] flex items-center justify-center">
              <span className="text-white font-bold text-lg">🥭</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-[#2D5A27]">SUANNAKKARUK</h1>
              <p className="text-xs text-[#6B8E23]">Premium Fruits</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-[#2D5A27] font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-700 hover:text-[#2D5A27] transition-colors">
              <ShoppingCart size={24} />
              <span className="absolute top-1 right-1 w-5 h-5 bg-[#D4AF37] text-white text-xs rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-[#2D5A27]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:bg-[#FFF8E8] hover:text-[#2D5A27] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
