'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, Award, Briefcase, FileCode2, Cloud, Code2, GitFork } from 'lucide-react';

const INTERESTS = [
  'Flutter Development',
  'Cross-platform Mobile Apps',
  'Machine Learning',
  'Azure Cloud',
  'REST APIs',
  'UI/UX Design',
  'Database Design',
  'Software Engineering'
];

interface StatItem {
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
}

// Rolling Counter Component
function AnimatedCounter({ value, suffix, isTriggered }: { value: number; suffix: string; isTriggered: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isTriggered) return;
    
    let start = 0;
    const end = value;
    const duration = 1.5; // seconds
    const stepTime = Math.max(Math.floor((duration * 1000) / end), 20);
    
    let timer: any = setInterval(() => {
      start += Math.ceil(end / 50); // increment steps
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, isTriggered]);

  return (
    <span className="font-display font-extrabold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-flutter-blue to-flutter-secondary">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stats: StatItem[] = [
    { label: 'Projects Completed', value: 15, suffix: '+', icon: <Award className="w-5 h-5 text-flutter-secondary" /> },
    { label: 'Flutter Projects', value: 10, suffix: '+', icon: <Briefcase className="w-5 h-5 text-flutter-accent" /> },
    { label: 'Web Applications', value: 5, suffix: '+', icon: <Code2 className="w-5 h-5 text-flutter-blue" /> },
    { label: 'Technologies Learned', value: 14, suffix: '+', icon: <FileCode2 className="w-5 h-5 text-teal-400" /> },
    { label: 'Azure Deployments', value: 4, suffix: '+', icon: <Cloud className="w-5 h-5 text-sky-400" /> },
    { label: 'GitHub Repositories', value: 20, suffix: '+', icon: <GitFork className="w-5 h-5 text-pink-400" /> },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-[#0b111e] border-y border-slate-200/50 dark:border-white/5 relative overflow-hidden">
      {/* Glow highlight behind graphic */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-flutter-blue/10 filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-flutter-blue to-flutter-secondary rounded-full mt-3" />
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Graphic Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            {/* Custom Premium Vector SVG Placeholder */}
            <div className="relative w-72 sm:w-80 aspect-square rounded-3xl overflow-hidden bg-gradient-to-tr from-flutter-blue/10 to-flutter-secondary/20 border border-slate-200 dark:border-white/10 flex items-center justify-center p-6 glassmorphic shadow-lg">
              <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-flutter-secondary/80">
                {/* Floating gears & lines inside design */}
                <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" className="animate-spin-slow" />
                <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" className="opacity-40" />
                
                {/* Code braces */}
                <path d="M70 75C60 85 60 95 60 100C60 105 60 115 70 125" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M130 75C140 85 140 95 140 100C140 105 140 115 130 125" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                
                {/* Flutter styled lines */}
                <path d="M85 85L100 100L115 85" stroke="#13B9FD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M85 115L100 100L115 115" stroke="#02569B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                
                {/* Glowing dots */}
                <circle cx="100" cy="50" r="4" fill="#54C5F8" />
                <circle cx="100" cy="150" r="4" fill="#13B9FD" />
                <circle cx="50" cy="100" r="4" fill="#02569B" />
                <circle cx="150" cy="100" r="4" fill="#54C5F8" />
              </svg>

              {/* Holographic frame details */}
              <div className="absolute top-4 left-4 text-[10px] font-mono text-slate-400">STATUS: DEV_ACTIVE</div>
              <div className="absolute bottom-4 right-4 text-[10px] font-mono text-slate-400">LOC: IQRA_UNIV</div>
            </div>
          </motion.div>

          {/* Description & Checkmarks Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left flex flex-col justify-center"
          >
            <h3 className="font-display text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Building intuitive mobile apps and cloud systems
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              I am a Computer Science student with a strong passion for Flutter application development, Machine Learning, and Cloud Computing. I enjoy transforming ideas into real-world applications by combining intuitive user experiences with scalable backend technologies.
            </p>

            <h4 className="font-display font-bold text-slate-700 dark:text-slate-300 mb-4">My interests include:</h4>
            
            {/* Interests Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {INTERESTS.map((interest) => (
                <div key={interest} className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-flutter-secondary flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">{interest}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Rolling Statistics Section */}
        <div ref={ref} className="mt-20 grid grid-cols-2 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-5 rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white/40 dark:bg-[#0F172A]/40 backdrop-blur-md shadow-sm hover:border-flutter-blue/30 transition-all text-center flex flex-col items-center justify-between group"
            >
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 mb-3 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isTriggered={isInView} />
              </div>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
