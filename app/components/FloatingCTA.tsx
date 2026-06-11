'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 3, duration: 0.4, type: 'spring', bounce: 0.5 }}
      className="fixed bottom-8 right-6 z-50 group"
    >
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-[#2D5A27] text-xs font-bold rounded-xl px-3 py-2 shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
        สั่งผ่าน Line OA
        <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-0 h-0 border-l-[5px] border-l-white border-y-4 border-y-transparent" />
      </div>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#06C755] animate-ping opacity-25" />

      {/* Button */}
      <a
        href="https://line.me/R/ti/p/@suannakkaruk"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ติดต่อผ่าน Line OA"
        className="relative w-14 h-14 rounded-full bg-[#06C755] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
      >
        <MessageCircle size={26} />
      </a>
    </motion.div>
  );
}
