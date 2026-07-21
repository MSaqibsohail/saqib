'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight, Terminal, Award } from 'lucide-react';
import TechIcon from './TechIcon';

interface ExpCard {
  role: string;
  company: string;
  duration: string;
  icon: React.ReactNode;
  bullets: string[];
  skills: string[];
}

export default function Experience() {
  const experiences: ExpCard[] = [
    {
      role: 'Flutter Developer',
      company: 'Self-Directed & Projects',
      duration: 'Ongoing',
      icon: <TechIcon name="flutter" size={20} />,
      bullets: [
        'Designed and constructed 10+ Flutter mobile applications, emphasizing responsive layout designs, state tracking, and local disk key caching.',
        'Structured complex form validations, dynamic theme shifts, and shared preference credentials checks.',
        'Iterating on asynchronous REST API connections to feed cloud data into UI interfaces dynamically.'
      ],
      skills: ['Flutter', 'Dart', 'Provider', 'Responsive UI', 'Git'],
    },
    {
      role: 'Machine Learning Project Developer',
      company: 'Academic & Independent Research',
      duration: 'Ongoing',
      icon: <Terminal className="w-5 h-5 text-flutter-secondary" />,
      bullets: [
        'Developed HemaPredict system, training Random Forest Classifiers on medical datasets to achieve prediction accuracy ratings of ~95%.',
        'Built Flask microservice APIs in Python to bridge ML mathematical models with front-end forms.',
        'Executed preprocessing tasks (null handles, feature drops, standard scaling) to normalize data shapes.'
      ],
      skills: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'NumPy', 'Azure'],
    },
    {
      role: 'Computer Science Student',
      company: 'Iqra University',
      duration: 'Present',
      icon: <Award className="w-5 h-5 text-flutter-blue" />,
      bullets: [
        'Executing semester projects based on Complex Computing Problems (CCP) guidelines.',
        'Developing blood bank management platforms utilizing ASP.NET MVC architectures and Entity Framework schemas.',
        'Studying database engineering patterns (relational mapping, query optimizations, triggers) in SQL Server.'
      ],
      skills: ['.NET MVC', 'C#', 'SQL Server', 'Azure SQL', 'Database Design'],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-[#0b111e] border-y border-slate-200/50 dark:border-white/5 relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] rounded-full bg-flutter-blue/5 filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[30%] left-[10%] w-[300px] h-[300px] rounded-full bg-flutter-secondary/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Experience & Roles
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-flutter-blue to-flutter-secondary rounded-full mt-3" />
        </div>

        {/* Experience Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-6 sm:p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 bg-white/50 dark:bg-[#0F172A]/45 backdrop-blur-md shadow-sm hover:border-flutter-secondary/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header card info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 group-hover:scale-110 transition-transform">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {exp.company}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Calendar duration capsule */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-flutter-blue/10 text-flutter-secondary text-[10px] font-bold uppercase tracking-wider mb-6">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.duration}</span>
                </div>

                {/* Bullets List */}
                <div className="space-y-3.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-flutter-accent flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill Badges footer */}
              <div className="flex flex-wrap gap-1 border-t border-slate-200/50 dark:border-white/5 pt-4">
                {exp.skills.map((sk) => (
                  <span
                    key={sk}
                    className="px-2 py-1 text-[10px] font-bold uppercase rounded bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-white/5"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
