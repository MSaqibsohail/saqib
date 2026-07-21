'use client';

import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
  ];

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/MSaqibsohail', icon: <Github className="w-4 h-4" /> },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-saqib-sohail-', icon: <Linkedin className="w-4 h-4" /> },
    { label: 'Email', href: 'mailto:saqibsohail1395@gmail.com', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <footer className="py-12 border-t border-slate-200/50 dark:border-white/5 bg-slate-50 dark:bg-[#0b111e] relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand/Initials */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <button
            onClick={() => handleNavClick('home')}
            className="font-display font-extrabold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-flutter-blue to-flutter-secondary hover:opacity-85 transition-opacity"
          >
            MS
          </button>
          <p className="text-[10px] font-semibold text-slate-400 dark:text-slate-400 mt-1 uppercase tracking-widest">
            Flutter Developer & CS Student
          </p>
        </div>

        {/* Navigation list */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-flutter-secondary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Social channels and copyright */}
        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
          <div className="flex items-center gap-4">
            {socialLinks.map((soc) => (
              <a
                key={soc.label}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-slate-200/50 dark:border-slate-800 bg-white dark:bg-[#0F172A] text-slate-500 hover:text-flutter-secondary dark:text-slate-400 dark:hover:text-white transition-all shadow-sm"
                aria-label={soc.label}
              >
                {soc.icon}
              </a>
            ))}
          </div>
          
          <p className="text-[10px] text-slate-400 dark:text-slate-400">
            &copy; {new Date().getFullYear()} Muhammad Saqib Sohail. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
