'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Standard loading delay to showcase beautiful intro animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -100,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0F172A]"
        >
          {/* Animated Background blobs for extra visual flavor */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-flutter-blue filter blur-[80px] animate-pulse" />
            <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-flutter-secondary filter blur-[80px] animate-pulse" />
          </div>

          <div className="relative flex items-center justify-center">
            {/* Pulsing outer visual halo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-36 h-36 rounded-full bg-gradient-to-r from-flutter-blue/20 to-flutter-secondary/20 filter blur-md"
            />

            {/* Spinning gradient outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
              className="w-28 h-28 rounded-full border-t-[3px] border-r-[3px] border-transparent border-t-flutter-secondary border-r-flutter-accent"
            />

            {/* Inner static Flutter shape logo */}
            <div className="absolute flex items-center justify-center">
              <motion.svg
                width="44"
                height="54"
                viewBox="0 0 39 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 0, scale: 0.4, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.34, 1.56, 0.64, 1],
                  delay: 0.3 
                }}
              >
                <path
                  d="M23.6395 0L0 23.6395L7.20239 30.8419L38.0442 0H23.6395ZM23.6395 14.3982L9.23964 28.7981L16.442 36.0005L38.0442 14.3982H23.6395ZM23.6395 28.7964L16.4385 36L23.6395 43.2018H38.0442L30.8419 36L38.0442 28.7964H23.6395Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="0"
                    y1="0"
                    x2="38"
                    y2="44"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#54C5F8" />
                    <stop offset="0.5" stopColor="#13B9FD" />
                    <stop offset="1" stopColor="#02569B" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </div>
          </div>
          
          {/* Animated Text Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-center"
          >
            <h1 className="font-display text-3xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-flutter-secondary via-flutter-accent to-white">
              MS
            </h1>
            <p className="text-xs tracking-[0.25em] text-slate-400 mt-2 uppercase font-medium">
              Flutter Developer & CS Student
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
