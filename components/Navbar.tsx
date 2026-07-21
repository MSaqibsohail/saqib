'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const activeObservers: { observer: IntersectionObserver; el: HTMLElement }[] = [];

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(item.id);
            }
          });
        },
        { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' }
      );
      observer.observe(el);
      activeObservers.push({ observer, el });
    });

    return () => {
      activeObservers.forEach((obs) => {
        obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-[#FAF9F6]/80 dark:bg-[#0F172A]/85 backdrop-blur-md shadow-md border-b border-slate-200/50 dark:border-white/5'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="font-display font-extrabold text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-flutter-blue via-flutter-secondary to-flutter-accent hover:opacity-85 transition-opacity"
        >
          MS
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-slate-100/60 dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/5 backdrop-blur-sm">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-white'
                  : 'text-slate-600 dark:text-slate-300 hover:text-flutter-secondary'
              }`}
            >
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-flutter-blue to-flutter-secondary rounded-full -z-10 shadow-sm"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          
          <a
            href="saqib_cv.docx"
            download
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-flutter-blue to-flutter-secondary text-white hover:shadow-lg hover:shadow-flutter-secondary/25 hover:-translate-y-0.5 transition-all duration-300 border border-white/10"
          >
            <FileText className="w-4 h-4" />
            Resume
          </a>
        </div>

        {/* Mobile menu trigger button */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white/60 dark:bg-dark-bg/60 text-slate-800 dark:text-slate-200"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[73px] left-0 right-0 lg:hidden border-b border-slate-200/80 dark:border-slate-800 bg-[#FAF9F6] dark:bg-[#0F172A] shadow-xl z-30"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-3 text-sm font-bold uppercase tracking-widest rounded-xl transition-all ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-flutter-blue/15 to-flutter-secondary/15 text-flutter-secondary border-l-4 border-flutter-secondary'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/30'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="saqib_cv.docx"
                download
                className="mt-2 flex items-center justify-center gap-2 w-full py-3.5 text-center text-sm font-bold uppercase tracking-widest rounded-xl bg-gradient-to-r from-flutter-blue to-flutter-secondary text-white hover:opacity-90"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
