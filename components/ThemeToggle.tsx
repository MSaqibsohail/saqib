'use client';

import React from 'react';
import { useTheme } from './ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white/60 dark:bg-dark-bg/60 backdrop-blur-md hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:border-slate-300 dark:hover:border-flutter-blue/30 text-slate-800 dark:text-slate-100 transition-all duration-300 flex items-center justify-center shadow-sm"
      aria-label="Toggle theme mode"
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === 'dark' ? 360 : 0,
          scale: [0.8, 1.1, 1] 
        }}
        transition={{ 
          type: 'spring', 
          stiffness: 200, 
          damping: 12,
          scale: { duration: 0.3 }
        }}
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-flutter-accent filter drop-shadow-[0_0_8px_rgba(84,197,248,0.4)]" />
        ) : (
          <Moon className="w-5 h-5 text-flutter-blue" />
        )}
      </motion.div>
    </button>
  );
}
