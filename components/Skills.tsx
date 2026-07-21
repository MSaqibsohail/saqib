'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Smartphone, Code, Server, BrainCircuit, HelpCircle } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // 0 to 100
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('flutter');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const categories: SkillCategory[] = [
    {
      id: 'flutter',
      title: 'Flutter & Languages',
      icon: <Smartphone className="w-5 h-5" />,
      skills: [
        { name: 'Dart', level: 90 },
        { name: 'Flutter Widgets', level: 85 },
        { name: 'State Management (Provider/Bloc)', level: 80 },
        { name: 'SharedPreferences', level: 80 },
        { name: 'Responsive UI Design', level: 85 },
        { name: 'Forms & Validation', level: 85 },
        { name: 'REST API Integration (Learning)', level: 60 },
      ],
    },
    {
      id: 'programming',
      title: 'Languages',
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: 'Python', level: 80 },
        { name: 'C#', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'C++', level: 65 },
        { name: 'SQL', level: 80 },
        { name: 'JavaScript', level: 70 },
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend & Web',
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: 'HTML5 & CSS3', level: 85 },
        { name: 'Bootstrap', level: 80 },
        { name: 'JavaScript (ES6+)', level: 70 },
        { name: 'jQuery', level: 65 },
        { name: 'Git & GitHub', level: 80 },
      ],
    },
    {
      id: 'backend',
      title: 'Backend & DB',
      icon: <Server className="w-5 h-5" />,
      skills: [
        { name: 'Flask (Python)', level: 75 },
        { name: '.NET MVC', level: 70 },
        { name: 'Entity Framework Core', level: 70 },
        { name: 'SQLite', level: 85 },
        { name: 'SQL Server', level: 75 },
        { name: 'Azure SQL Database', level: 75 },
      ],
    },
    {
      id: 'ml-cloud',
      title: 'ML & Cloud',
      icon: <BrainCircuit className="w-5 h-5" />,
      skills: [
        { name: 'Microsoft Azure Cloud', level: 70 },
        { name: 'Azure App Service', level: 75 },
        { name: 'Scikit-learn', level: 70 },
        { name: 'Pandas & NumPy', level: 75 },
        { name: 'Random Forest Classifier', level: 75 },
        { name: 'Data Preprocessing', level: 80 },
        { name: 'Model Evaluation', level: 70 },
      ],
    },
    {
      id: 'tools',
      title: 'Dev Tools',
      icon: <HelpCircle className="w-5 h-5" />,
      skills: [
        { name: 'VS Code & VS Studio', level: 85 },
        { name: 'Android Studio', level: 80 },
        { name: 'Jupyter Notebook', level: 80 },
        { name: 'SQL Server Management Studio (SSMS)', level: 75 },
      ],
    },
  ];

  // Circular progress specs
  const strokeWidth = 8;
  const radius = 36;
  const circumference = 2 * Math.PI * radius;

  // Selected Category item
  const selectedCat = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-dark-bg relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] rounded-full bg-flutter-secondary/5 filter blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-flutter-blue/5 filter blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Skills & Expertise
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-flutter-blue to-flutter-secondary rounded-full mt-3" />
        </div>

        {/* Dashboard Grid */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tabs Menu List - Column 4 */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 flex items-center gap-3 px-5 py-4 text-sm font-semibold rounded-2xl border text-left transition-all duration-300 w-auto lg:w-full select-none cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-flutter-blue to-flutter-secondary text-white border-transparent shadow-md shadow-flutter-blue/15'
                    : 'bg-slate-50 dark:bg-[#0F172A]/40 border-slate-200/50 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-flutter-secondary/35 dark:hover:border-flutter-blue/30'
                }`}
              >
                <div className={`p-2 rounded-xl transition-all ${
                  activeCategory === cat.id ? 'bg-white/20' : 'bg-slate-100 dark:bg-slate-800'
                }`}>
                  {cat.icon}
                </div>
                <span>{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Interactive Skills Progress Panels - Column 8 */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#0F172A]/40 backdrop-blur-md min-h-[400px]">
              
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-200/50 dark:border-white/5">
                <span className="text-flutter-secondary">{selectedCat.icon}</span>
                <h3 className="font-display text-xl font-bold text-slate-800 dark:text-slate-100">
                  {selectedCat.title}
                </h3>
              </div>

              {/* Skills Visual Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {selectedCat.skills.map((skill, index) => {
                  const strokeDashoffset = circumference - (skill.level / 100) * circumference;
                  
                  // Render top key skills in circular style, others in bar style
                  const useCircular = index < 2;

                  if (useCircular) {
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="p-5 rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white/40 dark:bg-dark-bg/30 flex items-center justify-between shadow-sm group hover:border-flutter-secondary/30"
                      >
                        <div className="text-left max-w-[60%]">
                          <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">{skill.name}</h4>
                          <span className="text-xs text-slate-500 dark:text-slate-400">Core Competency</span>
                        </div>

                        {/* Animated SVG Circle */}
                        <div className="relative w-20 h-20 flex items-center justify-center">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle
                              cx="40"
                              cy="40"
                              r={radius}
                              className="stroke-slate-200 dark:stroke-slate-800"
                              strokeWidth={strokeWidth - 2}
                              fill="transparent"
                            />
                            <motion.circle
                              cx="40"
                              cy="40"
                              r={radius}
                              className="stroke-flutter-secondary circular-progress"
                              strokeWidth={strokeWidth}
                              fill="transparent"
                              strokeDasharray={circumference}
                              initial={{ strokeDashoffset: circumference }}
                              animate={isInView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
                              transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.1 }}
                              strokeLinecap="round"
                            />
                          </svg>
                          <span className="absolute text-sm font-extrabold text-slate-700 dark:text-slate-200">
                            {skill.level}%
                          </span>
                        </div>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="p-5 rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white/40 dark:bg-dark-bg/30 flex flex-col shadow-sm group hover:border-flutter-blue/30"
                    >
                      <div className="flex justify-between items-center mb-2.5">
                        <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">{skill.name}</span>
                        <span className="text-xs font-bold text-flutter-secondary">{skill.level}%</span>
                      </div>
                      
                      {/* Bar tracker */}
                      <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-flutter-blue to-flutter-secondary rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, ease: 'easeOut', delay: index * 0.05 }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
