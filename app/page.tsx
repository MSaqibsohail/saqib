import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import CloudTimeline from '@/components/CloudTimeline';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative bg-[#FAF9F6] dark:bg-[#0F172A] min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CloudTimeline />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
