'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import FloatingParticles from '@/components/FloatingParticles';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A] relative overflow-hidden px-6">
      
      {/* Decorative backdrop blobs */}
      <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] rounded-full bg-flutter-blue/15 filter blur-[100px]" />
      <div className="absolute bottom-[20%] right-[20%] w-[300px] h-[300px] rounded-full bg-flutter-secondary/15 filter blur-[100px]" />

      <FloatingParticles />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full p-8 rounded-3xl border border-slate-800 bg-dark-bg/50 backdrop-blur-md text-center shadow-2xl relative z-10"
      >
        <div className="w-16 h-16 rounded-2xl bg-flutter-blue/15 border border-flutter-blue/30 flex items-center justify-center mx-auto mb-6 text-flutter-secondary animate-pulse-glow">
          <HelpCircle className="w-8 h-8" />
        </div>

        <h1 className="font-display text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-flutter-blue via-flutter-secondary to-flutter-accent tracking-tighter mb-4 text-glow">
          404
        </h1>

        <h2 className="font-display text-xl font-bold text-white mb-2">
          Page Not Found
        </h2>

        <p className="text-sm text-slate-400 mb-8 leading-relaxed">
          The page you are looking for does not exist or has been relocated. Let&apos;s get you back to the project board.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-flutter-blue to-flutter-secondary text-white font-semibold text-sm hover:shadow-lg hover:shadow-flutter-secondary/25 hover:-translate-y-0.5 active:scale-95 transition-all border border-white/10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </motion.div>
    </div>
  );
}
