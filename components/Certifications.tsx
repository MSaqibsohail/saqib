'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles, BookOpen } from 'lucide-react';
import TechIcon from './TechIcon';

interface Cert {
  title: string;
  provider: string;
  tech: string;
  status: 'Completed' | 'Coming Soon' | 'In Progress';
  icon: React.ReactNode;
}

export default function Certifications() {
  const certifications: Cert[] = [
    {
      title: 'Microsoft Learn Career Path',
      provider: 'Microsoft',
      tech: 'azure',
      status: 'In Progress',
      icon: <TechIcon name="azure" size={24} />,
    },
    {
      title: 'Flutter Application Development',
      provider: 'Academic / Independent',
      tech: 'flutter',
      status: 'Completed',
      icon: <TechIcon name="flutter" size={24} />,
    },
    {
      title: 'Azure Cloud Fundamentals',
      provider: 'Microsoft',
      tech: 'azure',
      status: 'Coming Soon',
      icon: <Award className="w-6 h-6 text-flutter-secondary" />,
    },
    {
      title: 'Machine Learning Classifiers',
      provider: 'Coursera / Stanford',
      tech: 'machine learning',
      status: 'Coming Soon',
      icon: <BookOpen className="w-6 h-6 text-flutter-accent" />,
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-slate-50 dark:bg-[#0b111e] border-y border-slate-200/50 dark:border-white/5 relative overflow-hidden">
      
      {/* Background glow overlay */}
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-flutter-secondary/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Certifications & Learning
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-flutter-blue to-flutter-secondary rounded-full mt-3" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 bg-white/50 dark:bg-[#0F172A]/45 backdrop-blur-md shadow-sm flex flex-col justify-between items-start min-h-[220px] group hover:border-flutter-blue/40 hover:shadow-md transition-all duration-300"
            >
              <div className="w-full">
                {/* Header Icon & Status Capsule */}
                <div className="flex items-center justify-between w-full mb-5">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  
                  <span className={`px-2.5 py-1 text-[9px] font-bold uppercase rounded-md tracking-wider flex items-center gap-1 ${
                    cert.status === 'Completed'
                      ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                      : cert.status === 'In Progress'
                      ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                      : 'bg-slate-500/10 text-slate-500 border border-slate-500/20'
                  }`}>
                    {cert.status === 'Coming Soon' && <Sparkles className="w-2.5 h-2.5" />}
                    {cert.status}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white mb-1.5 leading-snug group-hover:text-flutter-secondary transition-colors">
                  {cert.title}
                </h3>
              </div>

              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-4">
                Provider: {cert.provider}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
