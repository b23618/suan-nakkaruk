'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'th' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  th: {
    'nav.home': 'หน้าแรก',
    'nav.products': 'สินค้า',
    'nav.story': 'เรื่องราวของเรา',
    'nav.gallery': 'แกลเลอรี่',
    'nav.reviews': 'รีวิว',
    'nav.contact': 'ติดต่อ',
    'nav.order': 'สั่งซื้อสินค้า',
    'nav.call': 'โทรสั่งซื้อ',
    'hero.subtitle': 'ผลไม้พรีเมียมจากสวนนาครักษ์',
    'hero.description': 'เก็บสดทุกวัน ส่งตรงจากสวน ไม่ผ่านพ่อค้าคนกลาง',
    'hero.cta': 'สั่งซื้อเลย',
    'why.title': 'ทำไมต้องเลือกเรา',
    'why.badge': 'Certified & Trusted',
    'products.title': 'สินค้าแนะนำ',
    'products.view': 'ดูทั้งหมด',
    'story.title': 'เรื่องราวของสวนนาครักษ์',
    'gallery.title': 'ชีวิตในสวนของเรา',
    'reviews.title': 'รีวิวจากลูกค้า',
    'articles.title': 'บทความล่าสุด',
    'contact.title': 'พร้อมรับผลไม้คุณภาพจากสวนแล้วหรือยัง?',
    'contact.cta1': 'สั่งผ่าน Line OA',
    'contact.cta2': 'โทร 081-234-5678',
  },
  en: {
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.story': 'Our Story',
    'nav.gallery': 'Gallery',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',
    'nav.order': 'Order Now',
    'nav.call': 'Call to Order',
    'hero.subtitle': 'Premium Fruits from Suan Nakkaruk',
    'hero.description': 'Fresh daily, direct from farm, no middleman',
    'hero.cta': 'Order Now',
    'why.title': 'Why Choose Us',
    'why.badge': 'Certified & Trusted',
    'products.title': 'Featured Products',
    'products.view': 'View All',
    'story.title': 'The Story of Suan Nakkaruk',
    'gallery.title': 'Life on the Farm',
    'reviews.title': 'Customer Reviews',
    'articles.title': 'Latest Articles',
    'contact.title': 'Ready to order premium fruits from our farm?',
    'contact.cta1': 'Order via Line OA',
    'contact.cta2': 'Call 081-234-5678',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('th');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
