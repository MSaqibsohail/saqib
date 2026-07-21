'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cloud, Database, HardDrive, Globe, BookOpen } from 'lucide-react';
import TechIcon from './TechIcon';

interface TimelineItem {
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ReactNode;
}

export default function CloudTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const timelineItems: TimelineItem[] = [
    {
      title: 'Azure App Service',
      subtitle: 'PaaS Hosting for Web & AI APIs',
      desc: 'Deploying trained Machine Learning models integrated with Flask Python codebases directly to Azure App Services. Configured environment variables, resource sizes, and HTTPS configurations.',
      icon: <Cloud className="w-5 h-5" />,
    },
    {
      title: 'Azure SQL Database',
      subtitle: 'Managed Relational Cloud Storage',
      desc: 'Architecting relational schemas inside Azure SQL. Bound databases with .NET MVC projects using Entity Framework Core, ensuring optimal querying speeds and connection security.',
      icon: <Database className="w-5 h-5" />,
    },
    {
      title: 'Cloud Deployment Pipelines',
      subtitle: 'Git & Deployment Management',
      desc: 'Setting up Git-linked deployments to push changes from local VS Code files straight to live staging servers, optimizing code build durations and tracking runtime container metrics.',
      icon: <HardDrive className="w-5 h-5" />,
    },
    {
      title: 'Global Web Hosting',
      subtitle: 'Performance & SSL Configuration',
      desc: 'Acquiring domain interfaces, binding records, and ensuring secure HTTPS network overlays on Blood Bank Network and HemaPredict platforms.',
      icon: <Globe className="w-5 h-5" />,
    },
    {
      title: 'Continuous Cloud Learning',
      subtitle: 'Serverless, Docker, & IAM Triggers',
      desc: 'Exploring Azure Function triggers, Docker microservice hosting, virtual network settings, and role-based user directory integrations to strengthen backend security architectures.',
      icon: <BookOpen className="w-5 h-5" />,
    },
  ];

  return (
    <section id="cloud" className="py-24 bg-white dark:bg-dark-bg relative overflow-hidden">
      {/* Background ambient blobs */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-flutter-blue/5 filter blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-3 justify-center mb-4">
            <TechIcon name="azure" size={40} className="animate-float-medium" />
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Azure Cloud Timeline
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl">
            A chronological mapping of cloud engineering checkpoints achieved during development and deployment operations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0078D4] to-flutter-secondary rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

          {/* Timeline Items */}
          <div ref={ref} className="relative space-y-12 md:space-y-0">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.title}
                  className={`relative w-full md:w-1/2 ${
                    isEven ? 'md:pr-12 md:mr-auto md:pl-0 md:pb-12' : 'md:pl-12 md:ml-auto md:pb-12'
                  } pl-8`}
                >
                  {/* Timeline circle point */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`absolute top-[36px] -translate-y-1/2 w-4 h-4 rounded-full bg-white dark:bg-dark-bg border-[3px] border-[#0078D4] z-20 ${
                      isEven 
                        ? 'left-[8px] md:left-auto md:right-[-9px]' 
                        : 'left-[8px] md:left-[-9px]'
                    }`}
                  />

                  {/* Arrow indicator on desktop */}
                  <div
                    className={`hidden md:block absolute top-[36px] -translate-y-1/2 w-3 h-3 bg-slate-50 dark:bg-[#0F172A]/50 border-t border-r border-slate-200/50 dark:border-white/5 rotate-45 transform ${
                      isEven ? 'right-[42px]' : 'left-[42px] rotate-[225deg]'
                    }`}
                  />

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -40 : 40 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.15 }}
                    className="p-6 rounded-3xl border border-slate-200/50 dark:border-white/5 bg-slate-50/50 dark:bg-[#0F172A]/45 backdrop-blur-md shadow-sm hover:border-[#0078D4]/40 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3.5 mb-3.5">
                      <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 text-[#0078D4] shadow-sm flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white">
                          {item.title}
                        </h3>
                        <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
