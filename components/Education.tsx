'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';

export default function Education() {
  const courses = [
    'Object-Oriented Programming',
    'Database Systems',
    'Software Engineering',
    'Machine Learning',
    'Design & Analysis of Algorithms',
    'Mobile Application Development'
  ];

  return (
    <section id="education" className="py-24 bg-white dark:bg-dark-bg relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-flutter-blue/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-flutter-blue to-flutter-secondary rounded-full mt-3" />
        </div>

        {/* Education Timeline Row */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 pl-8 ml-4 sm:ml-6">
          
          {/* Timeline node */}
          <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-dark-bg border-[3px] border-flutter-secondary z-20" />

          {/* Academic card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#0F172A]/45 backdrop-blur-md shadow-sm hover:border-flutter-blue/40 transition-all duration-300"
          >
            {/* Degree and icon header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 text-flutter-secondary shadow-sm">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white">
                    Bachelor of Science in Computer Science (BSCS)
                  </h3>
                  <span className="text-sm font-semibold text-flutter-blue dark:text-flutter-accent mt-0.5 block">
                    Iqra University
                  </span>
                </div>
              </div>
            </div>

            {/* Sub-meta details (Location & Calendar) */}
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 opacity-75" />
                <span>Karachi, Pakistan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 opacity-75" />
                <span>2023 - Present</span>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Studying core computational theories, relational and cloud databases, cross-platform app design frameworks, and statistical machine learning architectures. Combining theoretical models with practical coding applications, creating semester projects under Complex Computing Problem (CCP) criteria.
            </p>

            {/* Coursework mapping */}
            <div>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-4 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                Core Coursework
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {courses.map((course) => (
                  <div
                    key={course}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/50 dark:bg-dark-bg/25 text-xs text-slate-700 dark:text-slate-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-flutter-secondary" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
