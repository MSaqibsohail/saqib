'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Globe, Search, Database, Layers, ArrowRight, ShieldCheck, Smartphone } from 'lucide-react';
import TechIcon from './TechIcon';

interface Project {
  id: string;
  title: string;
  category: 'ml' | 'web' | 'flutter';
  isFeatured: boolean;
  desc: string;
  techs: string[];
  features?: string[];
  github: string;
  demo?: string;
  accentColor: string;
}

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    // Featured Projects
    {
      id: 'hemapredict',
      title: 'HemaPredict',
      category: 'ml',
      isFeatured: true,
      desc: 'HemaPredict is an AI-powered Blood Donor Eligibility Prediction System developed as a semester-end Machine Learning project under the Complex Computing Problem (CCP) guidelines. It predicts whether a person is eligible to donate blood by analyzing key physiological markers and historical donation metrics.',
      techs: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'NumPy', 'SQLite', 'HTML', 'CSS', 'JavaScript', 'Azure', 'Machine Learning'],
      features: [
        'Random Forest Classifier (~95% Accuracy)',
        'Real-time Eligibility Prediction (Age, Weight, Hemoglobin)',
        'SQLite database for local prediction history',
        'User authentication panel',
        'Responsive analytics dashboard',
        'Microsoft Azure deployment hosting'
      ],
      github: 'https://github.com/MSaqibsohail/blood-donor-eligibility-predictor',
      demo: 'https://hemapredict.azurewebsites.net',
      accentColor: 'from-[#02569B] to-[#13B9FD]'
    },
    {
      id: 'bloodbank',
      title: 'Blood Bank Network',
      category: 'web',
      isFeatured: true,
      desc: 'Blood Bank Network is a cloud-based Blood Bank Management System developed using .NET MVC and Azure SQL Database. The application centralizes blood bank operations, donor management, patient blood requests, and inventory tracking, securing operations with role-based accessibility.',
      techs: ['.NET MVC', 'C#', 'Entity Framework Core', 'Azure SQL Database', 'Bootstrap', 'HTML', 'CSS', 'JavaScript', 'Azure'],
      features: [
        'Role-based User Authentication (Admin/Hospital/Donor)',
        'Live blood bag inventory tracking & stock levels',
        'Automated donor database management',
        'Real-time blood request tracking and status updates',
        'Microsoft Azure cloud hosting with Azure SQL integration'
      ],
      github: 'https://github.com/MSaqibsohail/Blood-Bank-Network',
      demo: 'https://web-project.azurewebsites.net/',
      accentColor: 'from-[#512BD4] to-[#13B9FD]'
    },
    // Practice Flutter Projects
    {
      id: 'calc',
      title: 'Calculator App',
      category: 'flutter',
      isFeatured: false,
      desc: 'A responsive mathematical calculator supporting basic and advanced arithmetic functions, featuring custom light/dark layouts.',
      techs: ['Flutter', 'Dart', 'Widgets'],
      github: 'https://github.com/MSaqibsohail/flutter-calculator',
      accentColor: 'from-flutter-blue to-flutter-secondary'
    },
    {
      id: 'todo',
      title: 'Todo App',
      category: 'flutter',
      isFeatured: false,
      desc: 'A task list manager with item addition, categorization, deletion, and local persistence for managing daily activities.',
      techs: ['Flutter', 'Dart', 'SharedPreferences'],
      github: 'https://github.com/MSaqibsohail/flutter-todo',
      accentColor: 'from-flutter-blue to-flutter-accent'
    },
    {
      id: 'weather',
      title: 'Weather UI',
      category: 'flutter',
      isFeatured: false,
      desc: 'A premium weather forecaster concept displaying current conditions, hourly logs, and custom dynamic meteorological icons.',
      techs: ['Flutter', 'Dart', 'Responsive UI'],
      github: 'https://github.com/MSaqibsohail/flutter-weather-ui',
      accentColor: 'from-flutter-secondary to-flutter-accent'
    },
    {
      id: 'login',
      title: 'Login UI',
      category: 'flutter',
      isFeatured: false,
      desc: 'A modern login screen demo containing field validation, password visibility triggers, and visual asset integrations.',
      techs: ['Flutter', 'Dart', 'Forms'],
      github: 'https://github.com/MSaqibsohail/flutter-login-ui',
      accentColor: 'from-flutter-blue to-[#00B4AB]'
    },
    {
      id: 'expense',
      title: 'Expense Tracker',
      category: 'flutter',
      isFeatured: false,
      desc: 'An expense ledger keeping track of expenditures categorized by departments, utilizing responsive chart graphs.',
      techs: ['Flutter', 'Dart', 'Navigation'],
      github: 'https://github.com/MSaqibsohail/flutter-expense-tracker',
      accentColor: 'from-[#02569B] to-[#7354F8]'
    },
    {
      id: 'notes',
      title: 'Notes App',
      category: 'flutter',
      isFeatured: false,
      desc: 'A simple notes manager allowing users to draft and delete quick notes using SharedPreferences state tracking.',
      techs: ['Flutter', 'Dart', 'SharedPreferences'],
      github: 'https://github.com/MSaqibsohail/flutter-notes',
      accentColor: 'from-flutter-secondary to-emerald-400'
    },
    {
      id: 'sharedpref',
      title: 'SharedPreferences Demo',
      category: 'flutter',
      isFeatured: false,
      desc: 'A structural prototype demonstrating user session persistence, settings saving, and local disk key-value storage.',
      techs: ['Flutter', 'Dart', 'SharedPreferences'],
      github: 'https://github.com/MSaqibsohail/flutter-shared-preferences',
      accentColor: 'from-[#02569B] to-[#FFC24C]'
    },
    {
      id: 'counter',
      title: 'Counter App',
      category: 'flutter',
      isFeatured: false,
      desc: 'Standard Flutter start application demonstrating core widget tree state refreshes and reactive counter increments.',
      techs: ['Flutter', 'Dart', 'Widgets'],
      github: 'https://github.com/MSaqibsohail/flutter-counter',
      accentColor: 'from-flutter-blue to-teal-400'
    },
    {
      id: 'bmi',
      title: 'BMI Calculator',
      category: 'flutter',
      isFeatured: false,
      desc: 'Physiological wellness index calculator converting height and weight parameters into body mass index ratings.',
      techs: ['Flutter', 'Dart', 'Navigation'],
      github: 'https://github.com/MSaqibsohail/flutter-bmi-calc',
      accentColor: 'from-flutter-secondary to-pink-400'
    },
    {
      id: 'validation',
      title: 'Form Validation App',
      category: 'flutter',
      isFeatured: false,
      desc: 'Advanced structural validator inspecting emails, passwords, and username lengths before submit states.',
      techs: ['Flutter', 'Dart', 'Forms'],
      github: 'https://github.com/MSaqibsohail/flutter-form-validation',
      accentColor: 'from-flutter-accent to-[#512BD4]'
    }
  ];

  // Filtering + Searching combined
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techs.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    if (activeFilter === 'all') return matchesSearch;
    if (activeFilter === 'featured') return project.isFeatured && matchesSearch;
    return project.category === activeFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-[#0b111e] border-y border-slate-200/50 dark:border-white/5 relative overflow-hidden">

      {/* Visual glowing points */}
      <div className="absolute top-[30%] left-[5%] w-[400px] h-[400px] rounded-full bg-flutter-blue/5 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[350px] h-[350px] rounded-full bg-flutter-secondary/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Projects & Work
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-flutter-blue to-flutter-secondary rounded-full mt-3" />
        </div>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-16 pb-6 border-b border-slate-200/50 dark:border-white/5">

          {/* Categories Tab selector */}
          <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'featured', label: 'Featured' },
              { id: 'flutter', label: 'Flutter Apps' },
              { id: 'ml', label: 'Machine Learning' },
              { id: 'web', label: 'Web Dev' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all select-none cursor-pointer ${activeFilter === filter.id
                  ? 'bg-gradient-to-r from-flutter-blue to-flutter-secondary text-white shadow-sm'
                  : 'bg-white dark:bg-[#0F172A]/40 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-flutter-secondary/35 dark:hover:border-flutter-blue/30'
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by title, tag, or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F172A]/50 backdrop-blur-md text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-flutter-secondary transition-all"
            />
          </div>
        </div>

        {/* Featured Projects Sub-Section */}
        {activeFilter !== 'flutter' && (
          <div className="mb-20">
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
              <Layers className="w-5 h-5 text-flutter-secondary" />
              Featured Applications
            </h3>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {filteredProjects.filter(p => p.isFeatured).map((proj) => (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-3xl border border-slate-200/60 dark:border-slate-800/80 bg-white/50 dark:bg-[#0F172A]/45 backdrop-blur-md shadow-lg overflow-hidden flex flex-col justify-between group hover:border-flutter-secondary/40 transition-all hover:shadow-2xl"
                >
                  <div className="p-6 sm:p-8">
                    {/* Header: Title and Category badge */}
                    <div className="flex justify-between items-start gap-4 mb-4">
                      <div>
                        <span className="text-xs font-bold text-flutter-secondary uppercase tracking-widest">
                          {proj.category === 'ml' ? 'Machine Learning + Python + Azure' : '.NET MVC + Azure SQL'}
                        </span>
                        <h4 className="font-display text-2xl font-bold text-slate-900 dark:text-white mt-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-flutter-blue group-hover:to-flutter-secondary transition-colors duration-300">
                          {proj.title}
                        </h4>
                      </div>
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${proj.accentColor} flex items-center justify-center text-white shadow-sm`}>
                        {proj.category === 'ml' ? <ShieldCheck className="w-5 h-5" /> : <Database className="w-5 h-5" />}
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {proj.desc}
                    </p>

                    {/* Highlights Features Checklist */}
                    {proj.features && (
                      <div className="mb-6">
                        <span className="text-xs font-bold text-slate-400 dark:text-slate-400 uppercase tracking-widest block mb-3">Key Integrations</span>
                        <div className="grid grid-cols-1 gap-2.5">
                          {proj.features.map((feat) => (
                            <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-flutter-secondary mt-1.5 flex-shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech tag list */}
                    <div className="flex flex-wrap gap-1.5">
                      {proj.techs.map((t) => (
                        <div
                          key={t}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/5 bg-slate-100/50 dark:bg-white/5 text-xs font-semibold text-slate-600 dark:text-slate-300"
                        >
                          <TechIcon name={t} size={13} className="opacity-80" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions Panel */}
                  <div className="px-6 py-5 border-t border-slate-200/50 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/10 flex items-center justify-between">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>

                    {proj.demo && (
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-flutter-blue to-flutter-secondary text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 shadow-md shadow-flutter-blue/10 group-hover:translate-x-0.5 transition-all"
                      >
                        Live Demo
                        <Globe className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Practice/Standard Projects Sub-Grid */}
        <div>
          <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-flutter-accent" />
            Flutter Practice Portfolio
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 max-w-xl">
            These are interactive practice mobile applications built to strengthen core cross-platform Flutter framework fundamentals, state machines, and local cache controls.
          </p>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.filter(p => !p.isFeatured).map((proj) => (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white/40 dark:bg-[#0F172A]/40 backdrop-blur-md shadow-sm overflow-hidden flex flex-col justify-between group hover:border-flutter-blue/30 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="p-6">
                    {/* Header icon mapping */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-flutter-accent">Flutter Core</span>
                      <TechIcon name="flutter" size={20} className="text-flutter-secondary animate-pulse-glow" />
                    </div>

                    <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-flutter-secondary transition-colors">
                      {proj.title}
                    </h4>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-2.5 mb-5 h-12 overflow-hidden">
                      {proj.desc}
                    </p>

                    {/* Stacks tags */}
                    <div className="flex flex-wrap gap-1">
                      {proj.techs.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-[10px] font-bold uppercase rounded bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="px-6 py-4 border-t border-slate-200/50 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/10 flex items-center justify-between">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-slate-500 hover:text-flutter-secondary dark:text-slate-400 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>

                    <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 flex items-center gap-0.5">
                      Practice App
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
