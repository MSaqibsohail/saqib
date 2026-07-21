'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Sparkles } from 'lucide-react';
import FloatingParticles from './FloatingParticles';
import TechIcon from './TechIcon';

const ROLES = [
  'Flutter Developer',
  'Computer Science Student',
  'Mobile App Developer',
  'Cross-Platform App Developer'
];

const FLOATING_TECHS = [
  { name: 'flutter', top: '10%', left: '15%', speed: 'animate-float-slow' },
  { name: 'dart', top: '12%', right: '15%', speed: 'animate-float-medium' },
  { name: 'python', bottom: '15%', left: '20%', speed: 'animate-float-fast' },
  { name: 'azure', bottom: '25%', right: '12%', speed: 'animate-float-slow' },
  { name: 'sql server', top: '45%', left: '8%', speed: 'animate-float-medium' },
  { name: 'sqlite', bottom: '38%', left: '10%', speed: 'animate-float-fast' },
  { name: 'git', top: '35%', right: '6%', speed: 'animate-float-slow' },
  { name: 'github', bottom: '10%', right: '25%', speed: 'animate-float-medium' },
  { name: 'firebase', top: '55%', right: '10%', speed: 'animate-float-fast' },
  { name: '.net', top: '28%', left: '18%', speed: 'animate-float-slow' },
  { name: 'machine learning', bottom: '48%', right: '18%', speed: 'animate-float-medium' },
];

const resumeUrl = process.env.NODE_ENV === 'production' ? '/saqib/saqib_cv.pdf' : '/saqib_cv.pdf';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const fullText = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && currentText === fullText) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting ? prev.slice(0, -1) : fullText.slice(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetPosition = Math.max(0, el.offsetTop - 80);
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern dark:bg-grid-pattern bg-white/20 dark:bg-dark-bg"
    >
      {/* Decorative Blur Blobs */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-flutter-blue/15 filter blur-[100px] animate-blob pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-flutter-secondary/15 filter blur-[120px] animate-blob animation-delay-2000 pointer-events-none" />
      
      {/* Canvas ambient background particles */}
      <FloatingParticles />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Col - Introduction */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md text-xs font-semibold text-flutter-secondary mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open for Junior Roles & Internships</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4"
          >
            Hi, I am <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-flutter-blue via-flutter-secondary to-flutter-accent text-glow">
              Muhammad Saqib Sohail
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-10 md:h-12 flex items-center mb-6"
          >
            <p className="text-xl md:text-2xl font-bold font-display text-slate-700 dark:text-slate-200 flex items-center">
              <span className="border-r-2 border-flutter-secondary pr-1.5 py-1 animate-pulse">
                {currentText || '\u00A0'}
              </span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mb-10 leading-relaxed"
          >
            I am a passionate Flutter Developer and Computer Science student who enjoys building responsive mobile applications, modern web applications, and AI-powered solutions. I love creating clean user interfaces, solving real-world problems, and continuously learning new technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollToSection('projects')}
              className="px-8 py-4 font-semibold rounded-xl bg-gradient-to-r from-flutter-blue via-flutter-secondary to-flutter-accent text-white hover:shadow-lg hover:shadow-flutter-secondary/35 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer border border-white/10"
            >
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Saqib_Sohail_CV.pdf"
              className="px-8 py-4 font-semibold rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white/40 dark:bg-dark-bg/40 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:border-slate-300 dark:hover:border-flutter-blue/30 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Download Resume</span>
              <ExternalLink className="w-4 h-4 opacity-70" />
            </a>
          </motion.div>
        </div>

        {/* Right Col - Vector Illustration Dashboard & Orbiting Techs */}
        <div className="lg:col-span-5 relative w-full aspect-square flex items-center justify-center">
          {/* Main Visual panel (Terminal Dashboard Mockup) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-[80%] aspect-square glassmorphic rounded-3xl border border-slate-200/60 dark:border-slate-800/80 bg-white/30 dark:bg-[#0F172A]/40 shadow-2xl relative overflow-hidden flex flex-col"
          >
            {/* Header window control buttons */}
            <div className="flex items-center gap-1.5 px-6 py-4 border-b border-slate-200/50 dark:border-white/5 bg-slate-100/50 dark:bg-slate-900/30">
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="w-3 h-3 rounded-full bg-green-400/80" />
              <span className="text-[10px] font-mono text-slate-400 ml-4">saqib.dart</span>
            </div>

            {/* Content Mockup Code lines */}
            <div className="p-6 font-mono text-xs text-left leading-relaxed flex-1 flex flex-col justify-center select-none overflow-hidden">
              <span className="text-slate-400">// Flutter developer instance</span>
              <span className="text-blue-400 mt-2">class <span className="text-flutter-accent">SaqibSohail</span> extends <span className="text-teal-400">Developer</span> &#123;</span>
              <span className="pl-4 text-purple-400 mt-1">final <span className="text-slate-200">skills</span> = [</span>
              <span className="pl-8 text-emerald-400">&apos;Flutter&apos;, &apos;Dart&apos;, &apos;ML&apos;, &apos;Azure&apos;</span>
              <span className="pl-4 text-purple-400">&#93;;</span>
              <span className="pl-4 text-blue-400 mt-1">@override</span>
              <span className="pl-4 text-purple-400">Widget <span className="text-blue-400">build</span>(BuildContext context) &#123;</span>
              <span className="pl-8 text-pink-400">return <span className="text-flutter-accent">PortfolioWebsite</span>(</span>
              <span className="pl-12 text-slate-200">responsive: <span className="text-yellow-400">true</span>,</span>
              <span className="pl-12 text-slate-200">beautifulAnimations: <span className="text-yellow-400">true</span>,</span>
              <span className="pl-8 text-pink-400">);</span>
              <span className="pl-4 text-purple-400">&#125;</span>
              <span className="text-blue-400">&#125;</span>
            </div>

            {/* Glowing HUD accent */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-flutter-blue/20 filter blur-xl pointer-events-none" />
          </motion.div>

          {/* Orbiting Tech Icons */}
          {FLOATING_TECHS.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + idx * 0.05 }}
              style={{
                position: 'absolute',
                top: tech.top,
                bottom: tech.bottom,
                left: tech.left,
                right: tech.right,
              }}
              className={`z-20 p-3 rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white/70 dark:bg-[#0F172A]/70 backdrop-blur-md shadow-md ${tech.speed} cursor-pointer hover:border-flutter-secondary/50 hover:scale-110 transition-all`}
              title={tech.name.toUpperCase()}
            >
              <TechIcon name={tech.name} size={28} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
